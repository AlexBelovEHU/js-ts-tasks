/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {number}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  //красота субъективна
  let coefficient1: number =
    from == 'm' ? 1000 : from == 'mi' ? 0.621371 : from == 'gr' ? 1000 : from == 'pound' ? 2.20462 : from == 'C' ? 1 : from == 'K' ? 1 : NaN;
  let coefficient2: number =
    to == 'm' ? 1000 : to == 'mi' ? 0.621371 : to == 'gr' ? 1000 : to == 'pound' ? 2.20462 : to == 'C' ? 1 : to == 'K' ? 1 : NaN;
  let additionalConstant1: number = from == 'C' ? 273.15 : from == 'K' ? 0 : 0;
  let additionalConstant2: number = to == 'C' ? 273.15 : to == 'K' ? 0 : 0;

  return Number.parseFloat(((value / coefficient1) * coefficient2 + additionalConstant1 - additionalConstant2).toFixed(2));
};
