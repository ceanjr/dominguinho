// src/pages/api/last-reset.js
import { kv } from '@vercel/kv';

export async function GET() {
  const lastReset = await kv.get('lastReset');
  return new Response(JSON.stringify({ lastReset }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export async function POST() {
  await kv.set('lastReset', new Date().toISOString());
  return new Response(JSON.stringify({ message: 'Last reset time updated.' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
