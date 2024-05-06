export interface IPlayer {
  currentTime: number;
  duration: number | undefined;
  isPlaying: boolean;
  progression: number;
  pause(): void;
  play(src: string): void;
  seek(seekPosition: number): void;
}
