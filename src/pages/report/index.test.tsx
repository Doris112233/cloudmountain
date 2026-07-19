import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Report from ".";

vi.mock("@umijs/max", () => ({
  useIntl: () => ({
    locale: "zh-CN",
    formatMessage: ({ id }: { id: string }) => id,
  }),
}));

vi.mock("../../data/reportStructure", () => ({
  default: [
    {
      isAnnual: false,
      year: 2018,
      type: "quarterly",
      period: 2,
      src: "https://example.com/report-cover.jpg",
      href: "https://example.com/report.jpg",
      down: "report.jpg",
      category: [],
    },
  ],
}));

describe("Report", () => {
  it("opens and closes image reports in the Ant Design modal", () => {
    render(<Report initCurr={0} />);

    fireEvent.click(screen.getByRole("img", { name: /2018/ }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Close" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
