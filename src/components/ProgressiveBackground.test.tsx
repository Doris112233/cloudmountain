import { act, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import ProgressiveBackground from "./ProgressiveBackground";

class MockImage {
  static instances: MockImage[] = [];
  onload: null | (() => void) = null;
  onerror: null | (() => void) = null;
  src = "";
  decode = vi.fn().mockResolvedValue(undefined);

  constructor() {
    MockImage.instances.push(this);
  }
}

describe("ProgressiveBackground", () => {
  afterEach(() => {
    MockImage.instances = [];
    vi.unstubAllGlobals();
  });

  it("reveals a decoded background without replacing its content", async () => {
    vi.stubGlobal("Image", MockImage);
    render(
      <ProgressiveBackground src="https://example.com/forest.jpg">
        <h2>Forest</h2>
      </ProgressiveBackground>,
    );

    const container = screen
      .getByText("Forest")
      .closest(".progressive-background");
    expect(container).toHaveClass("progressive-background--loading");

    await act(async () => {
      await MockImage.instances[0].onload?.();
    });
    expect(container).toHaveClass("progressive-background--loaded");
  });
});
