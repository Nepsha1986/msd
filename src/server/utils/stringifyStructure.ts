/**
 * Formats structure for use in the Coronavirus API.
 *
 * @docs: https://coronavirus.data.gov.uk/details/developers-guide/main-api
 *
 * @example
 * const structure = {
 *   area: 'areaType',
 *   cases: 'femaleCases',
 * };
 *
 * Output: '{"area":"areaType","cases":"femaleCases"}'
 */
export const stringifyStructure = (
  structure: Record<string, string>,
): string => {
  const keys = Object.keys(structure);
  const formatted = keys.map((key) => `"${key}":"${structure[key]}"`).join(',');

  return `{${formatted}}`;
};
