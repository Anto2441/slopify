export interface IPlayer {
  currentTime: number;
  currentVolume: number;
  duration: number | undefined;
  isPlaying: boolean;
  progression: number;
  pause(): void;
  play(src: string): void;
  seek(seekPosition: number): void;
  volume(volume: number): void;
}
