import axios from 'axios';
import { z } from 'zod';
import { TRPCError } from '@trpc/server';

import { router, procedure } from '@/server/trpc';
import { CORONAVIRUS_API as API } from '@/server/utils/api';
import { CovidDataScheme, FiltersScheme } from '@/server/schemas';
import { stringifyFilters } from '@/server/utils/stringifyFilters';
import { stringifyStructure } from '@/server/utils/stringifyStructure';
import { createStatsSchema } from '@/server/utils/createStatsSchema';

const RateSchema = z.object({
  age: z.string(),
  rate: z.number(),
  value: z.number(),
});

const admissionByAge = z.object({
  admission: z.array(RateSchema),
});

const AdmissionStatsSchema = createStatsSchema(
  admissionByAge.array().length(1),
);
export type AdmissionStatsResponse = z.infer<typeof AdmissionStatsSchema>;

const Structure = z.record(z.string(), CovidDataScheme);
type ReqStructure = z.infer<typeof Structure>;

export const admissionRatesByAgeRouter = router({
  get: procedure
    .input(
      z.object({
        filters: FiltersScheme,
      }),
    )
    .query(async ({ input }) => {
      const filters = input.filters;

      const reqStructure: ReqStructure = {
        admission: 'cumAdmissionsByAge',
      };

      try {
        const { data } = await axios.get<AdmissionStatsResponse>(API, {
          params: {
            filters: stringifyFilters(filters),
            structure: stringifyStructure(reqStructure),

            // TODO: Review - not described in docs, bit still works....
            latestBy: 'cumAdmissionsByAge',
          },
        });

        return AdmissionStatsSchema.parse(data);
      } catch (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'An unexpected error occurred, please try again later.',
        });
      }
    }),
});
