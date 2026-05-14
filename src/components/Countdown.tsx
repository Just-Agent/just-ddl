import { useCountdown } from '@/hooks/useCountdown';
import { useLanguage } from '@/lib/language';

const urgencyStyles: Record<string, { bg: string; text: string }> = {
  critical: { bg: '#F43F5E', text: '#FFFFFF' },
  warning: { bg: '#F97316', text: '#FFFFFF' },
  safe: { bg: '#DCFCE7', text: '#166534' },
  ended: { bg: '#F5F5F4', text: '#A8A29E' },
};

export default function Countdown({ deadline, size = 'md' }: { deadline: string; size?: 'sm' | 'md' | 'lg' }) {
  const { days, hours, minutes, seconds, urgency } = useCountdown(deadline);
  const { copy } = useLanguage();
  const style = urgencyStyles[urgency];
  const isEnded = urgency === 'ended';

  const numClass = size === 'lg' ? 'text-2xl font-bold' : size === 'sm' ? 'text-xs font-medium' : 'text-sm font-semibold';
  const unitClass = size === 'lg' ? 'text-xs' : size === 'sm' ? 'text-[9px]' : 'text-[10px]';

  if (isEnded) return (
    <span className="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ background: style.bg, color: style.text }}>{copy.ddl.ended}</span>
  );

  return (
    <span className="inline-flex items-center gap-0.5 rounded-full px-2.5 py-0.5 font-mono" style={{ background: style.bg, color: style.text }}>
      <span className={numClass}>{days}</span><span className={unitClass}>d</span>
      <span className={numClass}>{hours.toString().padStart(2, '0')}</span><span className={unitClass}>h</span>
      <span className={numClass}>{minutes.toString().padStart(2, '0')}</span><span className={unitClass}>m</span>
      {size !== 'sm' && <><span className={numClass}>{seconds.toString().padStart(2, '0')}</span><span className={unitClass}>s</span></>}
    </span>
  );
}
