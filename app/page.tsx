import Card from "./components/cards/cards";

export default function Home() {
  return (
    <main className="bg-veryLightGray_LightModeBG dark:bg-veryDarkBlue_DarkModeBG ">
      <section className="grid grid-cols-1 mobile:grid-cols-2 desktop:grid-cols-4 mobile:gap-10 gap-20 py-4 px-2 mobile:px-20">
        {Array.from({ length: 8 }).map((_, index) => (
          <Card
            key={index}
            flagSrc="https://restcountries.com/data/afg.svg"
            countryName="Afghanistan"
            population={27657145}
            region="Asia"
            capital="Kabul"
          />
        ))}
      </section>
    </main>
  );
}
