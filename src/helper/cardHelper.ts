export const truncateDescription = (description: string): string => {
  const words = description.split(' ');
  let truncated = '';
  let charCount = 0;

  for (const word of words) {
    if (charCount + word.length > 100) {
      truncated += '...';
      break;
    }
    truncated += (truncated ? ' ' : '') + word;
    charCount += word.length + 1;
  }

  return truncated;
};