import Image from "next/image";
import Button from "@/app/components/buttons/button";
import { getCountryByCode, getCountryNameByCode } from "@/app/actions/data";
import Detail_label from "@/app/components/label/details-label";
import { CountryProps, NameObject } from "@/app/interfaces/country";

const DetailPage = async ({ params }: { params: { slug: string } }) => {
  const countryDataArray: CountryProps[] = await getCountryByCode(params.slug);
  const {
    name,
    population,
    flags,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = countryDataArray[0];

  let nativeName: string | undefined;
  if (name.nativeName !== undefined) {
    const values: NameObject[] = Object.values(name.nativeName);
    nativeName = values[0].common as string;
  }

  const currencySpans = currencies
    ? Object.values(currencies as { cc: { name: string } })
        .map((currency) => currency.name)
        .join(", ")
    : "No Currency";

  const languageSpans = languages
    ? Object.values(languages).join(", ")
    : "No Official Language";

  const borderName = await getCountryNameByCode(borders);
  let borderNames: React.ReactElement[] | string;

  if (!!borderName) {
    borderNames = borderName?.map((borderCountry) => {
      return (
        <Button
          key={borderCountry.cca2}
          name={borderCountry.name.common}
          code={borderCountry.cca2}
        />
      );
    });
  } else {
    borderNames = "No border countries";
  }

  return (
    <div className="px-4 mobile:px-24 pt-10 mobile:pt-20 dark:bg-veryDarkBlue_DarkModeBG h-full">
      <Button backButton name="Back" />
      <div className="grid grid-cols-1 mobile:grid-cols-2">
        <div className="col-span-1 flex flex-col justify-center items-start">
          <Image
            src={flags.svg}
            alt={flags.alt}
            width={600}
            height={400}></Image>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-start px-4 mobile:px-16">
          <h1 className="text-2xl mt-10 mobile:text-4xl font-extrabold mb-10 dark:text-white_DarkModeText_LightModeElements">
            {name.common}
          </h1>
          <div className="flex flex-col mobile:flex-row justify-between items-baseline gap-4 w-full ">
            <div className="">
              {!!nativeName && (
                <Detail_label
                  labelName={"Native Name"}
                  labelText={nativeName}
                />
              )}
              <Detail_label
                labelName={"Population"}
                labelText={population.toLocaleString("en-US")}
              />
              <Detail_label labelName={"Region"} labelText={region} />
              <Detail_label labelName={"Sub Region"} labelText={subregion} />
              <Detail_label
                labelName={"Capital"}
                labelText={capital ? capital[0] : "No Capital"}
              />
            </div>
            <div>
              <Detail_label labelName={"Top Level Domain"} labelText={tld[0]} />
              <Detail_label
                labelName={"Currencies"}
                labelText={currencySpans}
              />
              <Detail_label labelName={"Languages"} labelText={languageSpans} />
            </div>
          </div>
          <div className="mt-10 mobile:mt-16 text-lg font-semibold flex flex-col mobile:flex-row justify-start items-center gap-4 dark:text-white_DarkModeText_LightModeElements">
            <p>Border Countries:</p>
            <p className="flex flex-row gap-2 flex-wrap">{borderNames}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
