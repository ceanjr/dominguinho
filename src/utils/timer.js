export async function getLastReset() {
  const response = await fetch('/api/last-reset');
  const data = await response.json();
  return data.lastReset;
}

export async function setLastReset() {
  await fetch('/api/last-reset', { method: 'POST' });
}

export function calculateTimeSince(dateString) {
  const lastReset = new Date(dateString);
  const now = new Date();
  const diff = now.getTime() - lastReset.getTime();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}