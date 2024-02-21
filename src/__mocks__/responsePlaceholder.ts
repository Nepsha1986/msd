type NewCasesDto = { date: string; newCases: number };
type TempData2 = { type: string; value: number };

const demoData: NewCasesDto[] = [
  { date: '2020-07-20', newCases: 535 },
  { date: '2020-07-19', newCases: 672 },
  { date: '2020-07-18', newCases: 796 },
  { date: '2020-07-16', newCases: 500 },
  { date: '2020-07-15', newCases: 504 },
  { date: '2020-07-14', newCases: 690 },
  { date: '2020-07-13', newCases: 399 },
  { date: '2020-07-12', newCases: 600 },
  { date: '2020-07-11', newCases: 495 },
  { date: '2020-07-10', newCases: 800 },
  { date: '2020-07-09', newCases: 500 },
  { date: '2020-07-08', newCases: 768 },
  { date: '2020-07-07', newCases: 378 },
  { date: '2020-07-06', newCases: 343 },
  { date: '2020-07-05', newCases: 665 },
  { date: '2020-07-04', newCases: 453 },
  { date: '2020-07-03', newCases: 667 },
  { date: '2020-07-01', newCases: 456 },
  { date: '2020-07-02', newCases: 345 },
];

const tempData2: TempData2[] = [
  {
    type: 'Category 1',
    value: 27,
  },
  {
    type: 'Category 2',
    value: 25,
  },
  {
    type: 'Category 3',
    value: 18,
  },
  {
    type: 'Category 4',
    value: 15,
  },
  {
    type: 'Category 5',
    value: 10,
  },
  {
    type: 'Other',
    value: 5,
  },
];

export { demoData, tempData2 };
