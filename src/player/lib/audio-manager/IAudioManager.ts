export interface IAudioManager {
  currentTime: number;
  currentVolume: number;
  duration?: number;
  isPlaying: boolean;
  pause(): void;
  play(src: string): void;
  seek(position: number): void;
  volume(volume: number): void;
}
