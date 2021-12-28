export const useCurrentYear = () => {
  const date = new Date();
  return date.getFullYear();
};
