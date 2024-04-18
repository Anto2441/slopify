import { observer } from "mobx-react-lite";
import { HiPlay } from "react-icons/hi2";

import type { IPlayer } from "@/player/entities/player";
import { IconButton } from "@/shared/ui/inputs";

interface PlayButtonProps {
  player: IPlayer;
}

export const PlayButton = observer(function PlayButton({
  player,
}: PlayButtonProps) {
  return (
    <IconButton
      tooltip="Play"
      size="small"
      variant="inverted-light"
      onClick={() =>
        player.play(
          "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        )
      }
    >
      <HiPlay />
    </IconButton>
  );
});
