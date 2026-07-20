import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Loading from "./loading";

describe("route loading", () => {
  it("uses a branded visual status without visible loading copy", () => {
    const { container } = render(<Loading />);

    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(container.querySelector(".route-loading__progress")).toBeTruthy();
    expect(container.querySelector(".route-loading__skeleton")).toBeTruthy();
    expect(screen.getByText("页面加载中")).toHaveClass(
      "route-loading__sr-only",
    );
  });
});
