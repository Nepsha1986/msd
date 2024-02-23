import { router } from '@/server/trpc';

import { casesByGenderRouter } from './casesByGender.router';
import { admissionRatesByAgeRouter } from './admissionRatesByAge.router';

export const statsRouter = router({
  casesByGender: casesByGenderRouter,
  admissionRatesByAge: admissionRatesByAgeRouter,
});
