import Card from "./components/cards/cards";

export default function Home() {
  return (
    <main className="bg-veryLightGray_LightModeBG dark:bg-veryDarkBlue_DarkModeBG ">
      {
        Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            flagSrc="https://restcountries.com/data/afg.svg"
            countryName="Afghanistan"
            population={27657145}
            region="Asia"
            capital="Kabul"
          />
        ))
      }
    </main>
  );
}
