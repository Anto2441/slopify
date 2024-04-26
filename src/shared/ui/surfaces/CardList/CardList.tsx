import { Card } from "../Card/Card";

/**
 * Render a list of cards within a grid layout.
 */
export function CardList() {
  return (
    <div className="grid auto-rows-[0] grid-cols-[repeat(auto-fit,minmax(min(175px,100%),1fr))] grid-rows-[auto] gap-x-spacing-looser overflow-hidden">
      <Card
        pictureUrl="https://picsum.photos/300/300"
        pictureSize={300}
        title="Todays Top Hits"
        subtitle="Tate McRae is on top of the Hottest 50"
        tooltip="Read: Todays Top Hits"
      />
      <Card
        roundedPicture
        pictureUrl="https://picsum.photos/300/300"
        pictureSize={300}
        title="Todays Top Hits"
        subtitle="Tate McRae is on top of the Hottest 50"
        tooltip="Read: Todays Top Hits"
      />
      <Card
        pictureUrl="https://picsum.photos/300/300"
        pictureSize={300}
        title="Todays Top Hits"
        subtitle="Tate McRae is on top of the Hottest 50"
        tooltip="Read: Todays Top Hits"
      />
      <Card
        pictureUrl="https://picsum.photos/300/300"
        pictureSize={300}
        title="Todays Top Hits"
        subtitle="Tate McRae is on top of the Hottest 50"
        tooltip="Read: Todays Top Hits"
      />
      <Card
        pictureUrl="https://picsum.photos/300/300"
        pictureSize={300}
        title="Todays Top Hits"
        subtitle="Tate McRae is on top of the Hottest 50"
        tooltip="Read: Todays Top Hits"
      />
      <Card
        pictureUrl="https://picsum.photos/300/300"
        pictureSize={300}
        title="Todays Top Hits"
        subtitle="Tate McRae is on top of the Hottest 50"
        tooltip="Read: Todays Top Hits"
      />
      <Card
        pictureUrl="https://picsum.photos/300/300"
        pictureSize={300}
        title="Todays Top Hits"
        subtitle="Tate McRae is on top of the Hottest 50"
        tooltip="Read: Todays Top Hits"
      />
      <Card
        pictureUrl="https://picsum.photos/300/300"
        pictureSize={300}
        title="Todays Top Hits"
        subtitle="Tate McRae is on top of the Hottest 50"
        tooltip="Read: Todays Top Hits"
      />
      <Card
        pictureUrl="https://picsum.photos/300/300"
        pictureSize={300}
        title="Todays Top Hits"
        subtitle="Tate McRae is on top of the Hottest 50"
        tooltip="Read: Todays Top Hits"
      />
      <Card
        pictureUrl="https://picsum.photos/300/300"
        pictureSize={300}
        title="Todays Top Hits"
        subtitle="Tate McRae is on top of the Hottest 50"
        tooltip="Read: Todays Top Hits"
      />
    </div>
  );
}
