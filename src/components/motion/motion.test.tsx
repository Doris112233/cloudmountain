import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Reveal from "./Reveal";
import ParallaxMedia from "./ParallaxMedia";
import { resetRevealObservers } from "./revealObserver";

type ObserverCallback = IntersectionObserverCallback;

class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = [];
  callback: ObserverCallback;
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  root = null;
  rootMargin = "";
  thresholds = [0.12];

  constructor(callback: ObserverCallback) {
    this.callback = callback;
    MockIntersectionObserver.instances.push(this);
  }

  takeRecords() {
    return [];
  }

  reveal(target: Element) {
    this.callback(
      [{ isIntersecting: true, target } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    );
  }
}

describe("motion primitives", () => {
  beforeEach(() => {
    MockIntersectionObserver.instances = [];
    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
  });

  afterEach(() => {
    cleanup();
    resetRevealObservers();
    vi.unstubAllGlobals();
  });

  it("reveals once and stops observing after the first intersection", () => {
    render(<Reveal>森林内容</Reveal>);
    const element = screen.getByText("森林内容");
    const observer = MockIntersectionObserver.instances[0];

    expect(element).not.toHaveClass("is-visible");
    act(() => observer.reveal(element));
    expect(element).toHaveClass("is-visible");
    expect(observer.unobserve).toHaveBeenCalledWith(element);

    act(() => observer.reveal(element));
    expect(observer.unobserve).toHaveBeenCalledTimes(1);
  });

  it("renders immediately when reduced motion is requested", () => {
    Object.defineProperty(window, "matchMedia", {
      configurable: true,
      value: vi.fn(() => ({
        matches: true,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
    });

    render(<Reveal>无动画内容</Reveal>);
    expect(screen.getByText("无动画内容")).toHaveClass("is-visible");
  });

  it("keeps a fixed frame around an overscanned parallax layer", () => {
    render(
      <ParallaxMedia amount={16}>
        <img src="hero.jpg" alt="Hero" />
      </ParallaxMedia>,
    );

    const image = screen.getByRole("img", { name: "Hero" });
    expect(image.parentElement).toHaveClass(
      "parallax-media__layer",
      "parallax-media__layer--y",
    );
    expect(image.parentElement).toHaveStyle("--parallax-overscan: 40px");
    expect(image.parentElement?.parentElement).toHaveClass("parallax-media");
  });
});
