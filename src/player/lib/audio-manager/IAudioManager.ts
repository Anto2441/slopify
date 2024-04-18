export interface IAudioManager {
  isPlaying: boolean;
  pause(): void;
  play(src: string): void;
}
