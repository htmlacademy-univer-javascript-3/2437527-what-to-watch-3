const Time = {
  SecondsInMinute: 60,
  SecondsInHour: 3600,
} as const;

const getFormattedTime = (time: number) => time.toString().padStart(2, '0');

export function getRemainingTime(remainingSeconds: number) {
  const hours = Math.floor(remainingSeconds / Time.SecondsInHour);
  const minutes = Math.floor((remainingSeconds % Time.SecondsInHour) / Time.SecondsInMinute);
  const seconds = remainingSeconds % Time.SecondsInMinute;
  return `-${hours > 0 ? `${getFormattedTime(hours)}:` : ''}${getFormattedTime(minutes)}:${getFormattedTime(seconds)}`;
}
