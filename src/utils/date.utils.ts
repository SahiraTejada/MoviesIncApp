export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};

export const getYearFromDate = (dateString: string): number => {
  const date = new Date(dateString);
  return date.getFullYear();
};
