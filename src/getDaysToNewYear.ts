/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  let target = new Date(targetDate);
  if (typeof targetDate === 'string') {
    const parts: string[] = targetDate.split('.');

    if (parts.length !== 3) {
      throw new Error();
    }

    const day: number = parseInt(parts[0], 10);
    const month: number = parseInt(parts[1], 10) - 1;
    const year: number = parseInt(parts[2], 10);

    target = new Date(year, month, day);
  }
  const nextNewYear = new Date(2024, 0, 1);
  const timeDiff = nextNewYear.getTime() - target.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return daysDiff;
};
