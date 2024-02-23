import { z } from 'zod';

function createStatsSchema<T extends z.ZodTypeAny>(itemSchema: T) {
  return z.object({
    length: z.number(),
    maxPageLimit: z.number(),
    totalRecords: z.number(),
    data: itemSchema,
  });
}

export { createStatsSchema };
