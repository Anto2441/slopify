export interface IAudioManager {
  currentTime: number;
  currentVolume: number;
  duration?: number;
  isLooping: boolean;
  isPlaying: boolean;
  loop(repeat: boolean): void;
  pause(): void;
  play(src: string): void;
  seek(position: number): void;
  volume(volume: number): void;
}
