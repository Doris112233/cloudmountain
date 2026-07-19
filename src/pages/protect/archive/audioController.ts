type AudioLike = Pick<
  HTMLAudioElement,
  "currentTime" | "onended" | "pause" | "play"
>;

type AudioFactory = (src: string) => AudioLike;

export class ArchiveAudioController {
  private audio: AudioLike | null = null;
  private selectedIndex: number | null = null;

  constructor(
    private readonly urls: string[],
    private readonly createAudio: AudioFactory,
    private readonly onPlayingChange: (isPlaying: boolean) => void,
  ) {}

  async toggle(index: number): Promise<void> {
    if (this.audio && this.selectedIndex === index) {
      this.stop();
      return;
    }

    this.stop();
    const url = this.urls[index];
    if (!url) return;

    const audio = this.createAudio(url);
    this.audio = audio;
    this.selectedIndex = index;
    audio.onended = () => this.stop();

    try {
      await audio.play();
      if (this.audio === audio) this.onPlayingChange(true);
    } catch {
      if (this.audio === audio) this.stop();
    }
  }

  stop(): void {
    if (this.audio) {
      this.audio.onended = null;
      this.audio.pause();
      this.audio.currentTime = 0;
    }
    this.audio = null;
    this.selectedIndex = null;
    this.onPlayingChange(false);
  }

  destroy(): void {
    this.stop();
  }
}
