import { products } from "@/lib/products";
import { getStripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import Stripe from "stripe";

type Body = {
  items?: Array<{ productId: string; quantity: number }>;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body;
    const items = body.items ?? [];

    if (items.length === 0) {
      return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
    }

    const origin = process.env.NEXT_PUBLIC_SITE_URL ?? new URL(request.url).origin;
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
    for (const item of items) {
      const product = products.find((entry) => entry.id === item.productId);
      if (!product) continue;
      lineItems.push({
        quantity: item.quantity,
        price_data: {
          currency: "gbp",
          product_data: {
            name: product.shortName,
            description: product.description,
            images: [`${origin}${product.image}`],
          },
          unit_amount: Math.round(product.priceGbp * 100),
        },
      });
    }

    if (lineItems.length === 0) {
      return NextResponse.json({ error: "No valid items." }, { status: 400 });
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/canceled`,
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["GB"],
      },
      metadata: {
        source: "marjoki-site",
      },
    });

    if (!session.url) {
      return NextResponse.json({ error: "Checkout URL missing." }, { status: 500 });
    }

    return NextResponse.json({ checkoutUrl: session.url });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unexpected checkout error." },
      { status: 500 },
    );
  }
}
