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

/**
 * 任意の日付を「YYYY年M月D日（曜）」形式で返す関数
 */
export function formatJapaneseDate(d: Date | null | undefined): string {
  if (!d || isNaN(d.getTime())) return '';
  const year = d.getFullYear();
  const month = d.getMonth() + 1; // 月は0始まり
  const day = d.getDate();
  const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
  const weekday = weekdays[d.getDay()];
  return `${year}年${month}月${day}日（${weekday}）`;
}

/**
 * 日付を "YYYY-MM-DD HH:mm:ss" に整形する
 * 不正な値なら空文字を返す
 */
export function formatDateTimeYYYYMMDDHHmmss(
  d: Date | null | undefined,
): string {
  if (!d || isNaN(d.getTime())) return '';
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
