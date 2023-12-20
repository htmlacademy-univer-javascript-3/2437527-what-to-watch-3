const Time = {
  SecondsInMinute: 60,
  SecondsInHour: 3600,
} as const;

const getFormattedTime = (time: number) => `${time < 10 ? `0${time}` : time}`;

export function getRemainingTime(remainingSeconds: number) {
  const hours = Math.floor(remainingSeconds / Time.SecondsInHour);
  const minutes = Math.floor((remainingSeconds % Time.SecondsInHour) / Time.SecondsInMinute);
  const seconds = remainingSeconds % Time.SecondsInMinute;
  return `-${hours > 0 ? `${getFormattedTime(hours)}:` : ''}${getFormattedTime(minutes)}:${getFormattedTime(seconds)}`;
}
