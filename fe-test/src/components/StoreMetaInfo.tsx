import CountryFlag from "./CountryFlag";

type StoreMetaInfoProps = {
  establishmentDate: string;
  website: string;
  countryCode: string;
};

const StoreMetaInfo = ({
  establishmentDate,
  website,
  countryCode,
}: StoreMetaInfoProps) => {
  return (
    <div className="flex-just-btwn">
      <p className="establishment-date">
        {establishmentDate} - <a href={website}>{website}</a>
      </p>
      <CountryFlag countryCode={countryCode} />
    </div>
  );
};

export default StoreMetaInfo;
