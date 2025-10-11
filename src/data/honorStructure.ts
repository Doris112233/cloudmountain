// Honor data structure with locale keys for internationalization

interface HonorItem {
  year: number;
  key: string; // Locale key for the honor description
}

const honorStructure: HonorItem[] = [
  {
    year: 2016,
    key: "honor.2016",
  },
  {
    year: 2017,
    key: "honor.2017",
  },
  {
    year: 2019,
    key: "honor.2019",
  },
  {
    year: 2021,
    key: "honor.2021.cop15",
  },
  {
    year: 2021,
    key: "honor.2021.ford",
  },
  {
    year: 2024,
    key: "honor.2024",
  },
];

export default honorStructure;
export type { HonorItem };
