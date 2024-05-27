export interface IPlayer {
  currentTime: number;
  currentVolume: number;
  duration: number | undefined;
  isLooping: boolean;
  isPlaying: boolean;
  progression: number;
  loop(repeat: boolean): void;
  pause(): void;
  play(src: string): void;
  seek(seekPosition: number): void;
  volume(volume: number): void;
}
