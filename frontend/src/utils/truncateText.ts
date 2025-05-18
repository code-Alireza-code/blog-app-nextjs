export default function truncateText(str: string, maxlength: number) {
  if (str.length < maxlength) return str;
  return str.slice(0, maxlength) + "...";
}
