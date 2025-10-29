// Rota API simples usando Astro

let lastReset = new Date().toISOString(); // valor inicial (servidor em memória)

export async function GET() {
  return new Response(JSON.stringify({ lastReset }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST() {
  lastReset = new Date().toISOString();
  return new Response(JSON.stringify({ success: true, lastReset }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
