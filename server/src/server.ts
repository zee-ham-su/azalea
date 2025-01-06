import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import Stripe from 'stripe';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

// Load environment variables
dotenv.config({ path: '../.env' });

const app = express();
const port = process.env.PORT || 3001;

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, email, name } = req.body;

    // Create or retrieve user
    const user = await prisma.user.upsert({
      where: { email },
      update: { name },
      create: { email, name },
    });

    // Create a PaymentIntent with the specified amount
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(parseFloat(amount) * 100), // Convert to cents
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        userId: user.id,
      },
    });

    // Create a pending donation record
    await prisma.donation.create({
      data: {
        amount: parseFloat(amount),
        currency: 'usd',
        status: 'pending',
        stripePaymentId: paymentIntent.id,
        userId: user.id,
      },
    });

    // Send the client secret to the client
    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: 'Failed to create payment intent' });
  }
});

// Get donation history for a user
app.get('/api/donations/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const donations = await prisma.donation.findMany({
      where: {
        user: {
          email,
        },
      },
      include: {
        user: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    res.json(donations);
  } catch (error) {
    console.error('Error fetching donations:', error);
    res.status(500).json({ error: 'Failed to fetch donations' });
  }
});

// Webhook endpoint for handling Stripe events
app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];

  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig || '',
      process.env.STRIPE_WEBHOOK_SECRET || ''
    );

    // Handle different event types
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        // Update donation status to succeeded
        await prisma.donation.update({
          where: { stripePaymentId: paymentIntent.id },
          data: { status: 'succeeded' },
        });
        console.log('Payment succeeded:', paymentIntent.id);
        break;
      
      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object;
        // Update donation status to failed
        await prisma.donation.update({
          where: { stripePaymentId: failedPayment.id },
          data: { status: 'failed' },
        });
        console.log('Payment failed:', failedPayment.id);
        break;
      
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.json({ received: true });
  } catch (err) {
    console.error('Webhook error:', err);
  
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
