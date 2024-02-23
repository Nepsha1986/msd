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

const statsByGender = z.object({
  femaleCases: z.array(RateSchema),
  maleCases: z.array(RateSchema),
});

const StatsScheme = createStatsSchema(statsByGender.array().length(1));
export type StatsResponse = z.infer<typeof StatsScheme>;

const Structure = z.record(z.string(), CovidDataScheme);
type ResStructure = z.infer<typeof Structure>;

export const casesByGenderRouter = router({
  get: procedure
    .input(
      z.object({
        filters: FiltersScheme,
      }),
    )
    .query(async ({ input }) => {
      const filters = input.filters;

      const reqStructure: ResStructure = {
        femaleCases: 'femaleCases',
        maleCases: 'maleCases',
      };

      try {
        const { data } = await axios.get<StatsResponse>(API, {
          params: {
            filters: stringifyFilters(filters),
            structure: stringifyStructure(reqStructure),
          },
        });

        return StatsScheme.parse(data);
      } catch (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'An unexpected error occurred, please try again later.',
        });
      }
    }),
});
