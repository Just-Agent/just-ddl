import { useState, useEffect } from 'react';

export interface CountdownResult {
  days: number; hours: number; minutes: number; seconds: number;
  total: number; urgency: 'critical' | 'warning' | 'safe' | 'ended';
}

export function useCountdown(targetDate: string): CountdownResult {
  const calc = (): CountdownResult => {
    const total = new Date(targetDate).getTime() - Date.now();
    if (total <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0, urgency: 'ended' };
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / (1000 * 60)) % 60);
    const seconds = Math.floor((total / 1000) % 60);
    return { days, hours, minutes, seconds, total, urgency: days < 3 ? 'critical' : days < 7 ? 'warning' : 'safe' };
  };
  const [v, setV] = useState(calc);
  useEffect(() => { const t = setInterval(() => setV(calc()), 1000); return () => clearInterval(t); }, [targetDate]);
  return v;
}
