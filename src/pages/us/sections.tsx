import type { ReactNode } from "react";
import Will from "./will";
import Council from "./council";
import Report from "../report";
import Timeline from "./timeline";
import Partner from "./partner";
import Honor from "./honor";
import Contact from "./contact";

export const aboutBasePath = "/us";
export const aboutOverviewPath = `${aboutBasePath}/overview`;

export interface AboutSection {
  key: string;
  // Short label used in the section list.
  labelId: string;
  // Fuller heading shown above the section, when it differs from the label.
  titleId?: string;
  render: () => ReactNode;
}

// The sections of the About pages, in display order. Each has its own URL.
export const aboutSections: AboutSection[] = [
  { key: "will", labelId: "about.menu.will", render: () => <Will /> },
  {
    key: "council",
    labelId: "about.menu.council",
    titleId: "about.council.title",
    render: () => <Council />,
  },
  {
    key: "report",
    labelId: "about.menu.report",
    render: () => <Report initCurr={0} />,
  },
  {
    key: "timeline",
    labelId: "about.menu.timeline",
    titleId: "timeline.title",
    render: () => <Timeline />,
  },
  {
    key: "partner",
    labelId: "about.menu.partner",
    titleId: "us.partner.title",
    render: () => <Partner />,
  },
  {
    key: "honor",
    labelId: "about.menu.honor",
    titleId: "us.honor.title",
    render: () => <Honor />,
  },
  {
    key: "contact",
    labelId: "about.menu.contact",
    titleId: "us.contact.title",
    render: () => <Contact />,
  },
];

export const aboutSectionPath = (key: string) => `${aboutBasePath}/${key}`;

export const findAboutSection = (key: string | undefined) =>
  aboutSections.find((section) => section.key === key);
