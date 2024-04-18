export interface IPlayer {
  isPlaying: boolean;
  pause(): void;
  play(src: string): void;
}
