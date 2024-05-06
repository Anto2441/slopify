export interface IAudioManager {
  currentTime: number;
  duration: number | undefined;
  isPlaying: boolean;
  pause(): void;
  play(src: string): void;
  seek(position: number): unknown;
}
