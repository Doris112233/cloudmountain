import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ProgressiveImage from "./ProgressiveImage";

describe("ProgressiveImage", () => {
  it("keeps the image concealed until load and decode complete", async () => {
    const onStateChange = vi.fn();
    render(
      <ProgressiveImage
        src="https://example.com/gibbon.jpg"
        alt="Gibbon"
        aspectRatio="16 / 9"
        priority
        onStateChange={onStateChange}
      />,
    );

    const image = screen.getByRole("img", { name: "Gibbon" });
    Object.defineProperty(image, "decode", {
      configurable: true,
      value: vi.fn().mockResolvedValue(undefined),
    });

    expect(image).toHaveAttribute("loading", "eager");
    expect(image).toHaveAttribute("fetchpriority", "high");
    expect(image.parentElement).toHaveClass("progressive-media--loading");

    fireEvent.load(image);
    await waitFor(() =>
      expect(image.parentElement).toHaveClass("progressive-media--loaded"),
    );
    expect(onStateChange).toHaveBeenLastCalledWith("loaded");
  });

  it("uses lazy loading and renders a stable error fallback", () => {
    render(
      <ProgressiveImage
        src="https://example.com/missing.jpg"
        alt="Missing image"
        errorFallback="图片暂不可用"
      />,
    );

    const image = screen.getByRole("img", { name: "Missing image" });
    expect(image).toHaveAttribute("loading", "lazy");
    fireEvent.error(image);

    expect(image.parentElement).toHaveClass("progressive-media--error");
    expect(screen.getByText("图片暂不可用")).toBeInTheDocument();
  });
});
