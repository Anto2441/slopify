import { Text } from "@/shared/utils";

interface UserFirstLetterProps {
  /** The user's name. */
  username: string;
}

/**
 * A component that displays the first letter of the user's name.
 */
export async function UserFirstLetter({ username }: UserFirstLetterProps) {
  return (
    <span className="inline-flex size-6 items-center justify-center rounded-full bg-[rgb(180,155,200)] text-font-size-smaller font-bold text-black">
      {Text.upperCase(Text.getFirstCharacter(username))}
    </span>
  );
}
