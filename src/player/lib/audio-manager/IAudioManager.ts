export interface IAudioManager {
  currentTime: number;
  duration?: number;
  isPlaying: boolean;
  pause(): void;
  play(src: string): void;
  seek(position: number): void;
}
