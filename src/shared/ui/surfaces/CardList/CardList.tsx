import { Card } from "../Card/Card";

/**
 * Render a list of cards within a grid layout.
 */
export function CardList() {
  return (
    <div className="grid grid-cols-5">
      <Card />
      <Card roundedPicture />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
