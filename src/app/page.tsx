"use client"
import CardDesk from "@/components/CardDesk";
import UsedCardDeck from "@/components/UsedCardDeck";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <UsedCardDeck />
      <div className="absolute bottom-10 w-2/3">
      <CardDesk />
      </div>
    </div>
  );
}
