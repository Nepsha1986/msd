import { z } from 'zod';

const areaType = z.enum([
  'overview',
  'nation',
  'region',
  'nhsRegion',
  'utla',
  'ltla',
]);

/**
 * Not complete; please refer to these docs: https://coronavirus.data.gov.uk/details/developers-guide/main-api
 */
export const CovidDataScheme = z.enum([
  'areaType',
  'areaName',
  'areaCode',
  'date',
  'alertLevel',
  'capacityPillarFour',
  'capacityPillarOne',
  'capacityPillarOneTwo',
  'femaleCases',
  'maleCases',
]);

export const FiltersScheme = z.object({
  areaType: areaType.default('nation'),
  areaName: z.string().default('england'),
  areaCode: z.string().optional(),
  date: z.string().optional(),
});
