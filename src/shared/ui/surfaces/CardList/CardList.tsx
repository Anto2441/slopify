import { Card } from "../Card/Card";

/**
 * Render a list of cards within a grid layout.
 */
export function CardList() {
  return (
    <div className="@container">
      <div className="grid grid-cols-2 gap-spacing-looser @xs:grid-cols-3 @md:grid-cols-4 @lg:grid-cols-5 @xl:grid-cols-6 @2xl:grid-cols-7 @3xl:grid-cols-8 @4xl:grid-cols-9">
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
    </div>
  );
}
