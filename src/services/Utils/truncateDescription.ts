
export function truncateDescription(text: string | undefined) {
  if (!text) {
    return text;
  }
  if (text.length > 300) return text.substring(0, 300) + '...';
  else return text;
}
