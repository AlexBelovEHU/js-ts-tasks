/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  const target = new Date(targetDate);
  const nextNewYear = new Date(target.getFullYear() + 1, 0, 1);
  const timeDiff = nextNewYear.getTime() - target.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return daysDiff;
};
