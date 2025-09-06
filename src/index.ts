/**
 * 日付を "YYYY-MM-DD" に整形する
 * 不正な値なら空文字を返す
 */
export function formatDateYYYYMMDD(d: Date | null | undefined): string {
  if (!d || isNaN(d.getTime())) return '';
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * 日付を "YYYY/MM/DD" に整形する
 * 不正な値なら空文字を返す
 */
export function formatDateYYYYslashMMslashDD(
  d: Date | null | undefined,
): string {
  if (!d || isNaN(d.getTime())) return '';
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
}
