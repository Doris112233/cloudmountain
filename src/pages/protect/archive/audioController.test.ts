import { ArchiveAudioController } from "./audioController";
import { describe, expect, it, vi } from "vitest";

const createMockAudio = () => ({
  currentTime: 12,
  onended: null as (() => void) | null,
  pause: vi.fn(),
  play: vi.fn(() => Promise.resolve()),
});

describe("ArchiveAudioController", () => {
  it("creates audio lazily and resets it when stopped", async () => {
    const audio = createMockAudio();
    const factory = vi.fn(() => audio);
    const onPlayingChange = vi.fn();
    const controller = new ArchiveAudioController(
      ["https://example.com/one.mp3"],
      factory,
      onPlayingChange,
    );

    expect(factory).not.toHaveBeenCalled();
    await controller.toggle(0);
    expect(factory).toHaveBeenCalledTimes(1);
    expect(audio.play).toHaveBeenCalledTimes(1);
    expect(onPlayingChange).toHaveBeenLastCalledWith(true);

    controller.stop();
    expect(audio.pause).toHaveBeenCalledTimes(1);
    expect(audio.currentTime).toBe(0);
    expect(onPlayingChange).toHaveBeenLastCalledWith(false);
  });

  it("stops the current audio before switching tracks", async () => {
    const first = createMockAudio();
    const second = createMockAudio();
    const factory = vi
      .fn()
      .mockReturnValueOnce(first)
      .mockReturnValueOnce(second);
    const controller = new ArchiveAudioController(
      ["one.mp3", "two.mp3"],
      factory,
      vi.fn(),
    );

    await controller.toggle(0);
    await controller.toggle(1);
    expect(first.pause).toHaveBeenCalledTimes(1);
    expect(first.currentTime).toBe(0);
    expect(second.play).toHaveBeenCalledTimes(1);
  });
});
