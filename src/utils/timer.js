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

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30); // Aproximado
  const years = Math.floor(days / 365); // Aproximado

  return {
    years: years,
    months: months % 12,
    weeks: Math.floor((days % 365) / 7) % 4,
    days: days % 7,
    hours: hours % 24,
    minutes: minutes % 60,
    seconds: seconds % 60
  };
}