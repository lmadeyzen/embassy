export const formatDate = (dateString: Date) => {
  const timeFormat: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "2-digit",
    year: "numeric",
    hour12: false,
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", timeFormat);
};
