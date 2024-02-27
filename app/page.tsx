import Banner from "@/components/banner.client";
import Card from "@/components/card.server";

export default function Home() {
  const coffeeStoreId = 'dark-horse-coffee';
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-14">
      <Banner />
      <Card
        name='Dark horse coffee'
        imgUrl='/static/hero-image.png'
        href={`coffee-store/${coffeeStoreId}`}
      />
    </main>
  );
}
