import axios from 'axios';
import { z, ZodError } from 'zod';
import { TRPCError } from '@trpc/server';

import { CORONAVIRUS_API as API } from '@/server/utils/api';
import { router, procedure } from '../trpc';
import { formatFilters } from '@/server/utils/formatFilters';

const areaType = z.enum([
  'overview',
  'nation',
  'region',
  'nhsRegion',
  'utla',
  'ltla',
]);

const filters = z
  .object({
    areaType,
    areaName: z.string().optional(),
    areaCode: z.string().optional(),
    date: z.string().optional(),
  })
  .optional();

// TODO: Make more type specific
const structure = z.string();

const statsItem = z.object({
  date: z.string(),
  areaName: z.string(),
  areaCode: z.string(),
  confirmedRate: z.number(),
  latestBy: z.number(),
  confirmed: z.number(),
  deathNew: z.number(),
  death: z.number(),
  deathRate: z.number(),
});

const statsRes = z.object({
  length: z.number(),
  maxPageLimit: z.number(),
  totalRecords: z.number(),
  data: z.array(statsItem),
});

export const statsRouter = router({
  getStats: procedure
    .input(
      z.object({
        filters,
        structure,
      }),
    )
    .query(async ({ input }) => {
      const filters = formatFilters(input.filters as Record<string, string>);
      const structure = input.structure;

      try {
        const { data } = await axios.get(API, {
          params: {
            filters,
            structure,
          },
        });

        return data;
      } catch (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'An unexpected error occurred, please try again later.',
        });
      }
    }),
});
