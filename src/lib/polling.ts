export function polling(
  interval: number,
  fn: () => void,
  startImmediately: boolean
): () => void {
  if (startImmediately) fn();
  const id = setInterval(fn, interval);
  return () => {
    clearInterval(id);
  };
}
