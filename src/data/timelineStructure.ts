// Timeline data structure mapping dates to locale keys
// Each entry contains the time display (YYYY.M format) and the corresponding translation key

export interface TimelineItem {
  time: string;
  key: string;
}

const timelineStructure: TimelineItem[] = [
  { time: "2015.6", key: "timeline.2015.6" },
  { time: "2015.12", key: "timeline.2015.12.1" },
  { time: "2015.12", key: "timeline.2015.12.2" },
  { time: "2015.12", key: "timeline.2015.12.3" },
  { time: "2016.3", key: "timeline.2016.3" },
  { time: "2016.8", key: "timeline.2016.8" },
  { time: "2016.9", key: "timeline.2016.9" },
  { time: "2016.12", key: "timeline.2016.12" },
  { time: "2017.1", key: "timeline.2017.1.1" },
  { time: "2017.1.12", key: "timeline.2017.1.12" },
  { time: "2017.3", key: "timeline.2017.3" },
  { time: "2017.4-6", key: "timeline.2017.46" },
  { time: "2017.10.24", key: "timeline.2017.10.24" },
  { time: "2017.11", key: "timeline.2017.11" },
  { time: "2018.1", key: "timeline.2018.1" },
  { time: "2018.4", key: "timeline.2018.4" },
  { time: "2018.5", key: "timeline.2018.5" },
  { time: "2018.9", key: "timeline.2018.9" },
  { time: "2019.2", key: "timeline.2019.2" },
  { time: "2019.6", key: "timeline.2019.6" },
  { time: "2019.11", key: "timeline.2019.11" },
  { time: "2019.11-2020.3", key: "timeline.2019.113" },
  { time: "2019.12", key: "timeline.2019.12" },
  { time: "2020.3", key: "timeline.2020.3" },
  { time: "2020.4", key: "timeline.2020.4" },
  { time: "2020.5", key: "timeline.2020.5" },
  { time: "2020.7", key: "timeline.2020.7" },
  { time: "2020.10", key: "timeline.2020.10" },
  { time: "2021.4-6", key: "timeline.2021.46" },
  { time: "2021.9", key: "timeline.2021.9" },
  { time: "2021.10.1", key: "timeline.2021.10.1" },
  { time: "2021.10.2", key: "timeline.2021.10.2" },
  { time: "2021.10.3", key: "timeline.2021.10.3" },
  { time: "2022.1.1", key: "timeline.2022.1.1" },
  { time: "2022.1.2", key: "timeline.2022.1.2" },
  { time: "2022.2", key: "timeline.2022.2" },
  { time: "2022.5", key: "timeline.2022.5" },
  { time: "2022.7", key: "timeline.2022.7" },
  { time: "2022.12", key: "timeline.2022.12" },
  { time: "2023.1", key: "timeline.2023.1" },
  { time: "2023.4", key: "timeline.2023.4" },
  { time: "2023.6", key: "timeline.2023.6" },
  { time: "2023.8", key: "timeline.2023.8" },
  { time: "2024.3", key: "timeline.2024.3" },
  { time: "2024.4-6", key: "timeline.2024.46" },
  { time: "2024.6", key: "timeline.2024.6" },
  { time: "2024.7", key: "timeline.2024.7" },
  { time: "2024.12", key: "timeline.2024.12" },
];

export default timelineStructure;
