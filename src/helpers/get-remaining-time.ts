const getFormattedTime = (time: number) => `${time < 10 ? `0${time}` : time}`;

export function getRemainingTime(remainingSeconds: number) {
  const hours = Math.floor(remainingSeconds / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;
  return `-${hours > 0 ? `${getFormattedTime(hours)}:` : ''}${getFormattedTime(minutes)}:${getFormattedTime(seconds)}`;
}
