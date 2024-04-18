import { observer } from "mobx-react-lite";
import { HiPause } from "react-icons/hi2";

import { IPlayer } from "@/player/entities/player";
import { IconButton } from "@/shared/ui/inputs";

interface PauseButtonProps {
  player: IPlayer;
}

export const PauseButton = observer(function PauseButton({
  player,
}: PauseButtonProps) {
  return (
    <IconButton
      tooltip="Pause"
      size="small"
      variant="inverted-light"
      onClick={() => player.pause()}
    >
      <HiPause />
    </IconButton>
  );
});
