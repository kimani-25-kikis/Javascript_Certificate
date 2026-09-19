import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function createPaymentIntent(amount, currency, customerId, metadata = {}) {
  try {
    const intent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency,
      customer: customerId,
      metadata,
      automatic_payment_methods: { enabled: true },
    });
    return { success: true, clientSecret: intent.client_secret, id: intent.id };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

async function chargeCustomer(customerId, paymentMethodId, amount, currency = "usd") {
  try {
    const intent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency,
      customer: customerId,
      payment_method: paymentMethodId,
      confirm: true,
      off_session: true,
    });
    return { success: true, status: intent.status, id: intent.id };
  } catch (err) {
    return { success: false, error: err.message, code: err.code };
  }
}

async function createSubscription(customerId, priceId) {
  try {
    const sub = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
      payment_behavior: "default_incomplete",
      expand: ["latest_invoice.payment_intent"],
    });
    return {
      subscriptionId: sub.id,
      clientSecret: sub.latest_invoice.payment_intent.client_secret,
    };
  } catch (err) {
    return { error: err.message };
  }
}

export { createPaymentIntent, chargeCustomer, createSubscription };