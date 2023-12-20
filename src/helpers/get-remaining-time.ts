const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = 3600;

const getFormattedTime = (time: number) => `${time < 10 ? `0${time}` : time}`;

export function getRemainingTime(remainingSeconds: number) {
  const hours = Math.floor(remainingSeconds / SECONDS_IN_HOUR);
  const minutes = Math.floor((remainingSeconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
  const seconds = remainingSeconds % SECONDS_IN_MINUTE;
  return `-${hours > 0 ? `${getFormattedTime(hours)}:` : ''}${getFormattedTime(minutes)}:${getFormattedTime(seconds)}`;
}
