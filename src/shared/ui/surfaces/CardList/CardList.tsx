import { Card } from "../Card/Card";

/**
 * Render a list of cards within a grid layout.
 */
export function CardList() {
  return (
    <div className="grid auto-rows-[0] grid-cols-[repeat(auto-fit,minmax(min(175px,100%),1fr))] grid-rows-[auto] gap-x-spacing-looser overflow-hidden">
      <Card />
      <Card roundedPicture />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
