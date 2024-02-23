import axios from 'axios';
import { z } from 'zod';
import { TRPCError } from '@trpc/server';

import { router, procedure } from '../trpc';
import { CORONAVIRUS_API as API } from '@/server/utils/api';
import { stringifyFilters } from '@/server/utils/stringifyFilters';
import { CovidDataScheme, FiltersScheme } from '@/server/schemas';
import { stringifyStructure } from '@/server/utils/stringifyStructure';

const statsItem = z.object({
  femaleCases: z.any().array(),
  maleCases: z.any().array(),
});

const StatsScheme = z.object({
  length: z.number(),
  maxPageLimit: z.number(),
  totalRecords: z.number(),
  data: statsItem.array().length(1),
});

export type StatsResponse = z.infer<typeof StatsScheme>;

const Structure = z.record(z.string(), CovidDataScheme);
type ResStructure = z.infer<typeof Structure>;

export const statsRouter = router({
  getStats: procedure
    .input(
      z.object({
        filters: FiltersScheme.pick({
          date: true,
          areaName: true,
          areaType: true,
        }),
      }),
    )
    .query(async ({ input }) => {
      const filters = input.filters;
      const reqStructure: ResStructure = {
        date: 'date',
        name: 'areaName',
        code: 'areaCode',
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
