type CountryFlagProps = {
  countryCode: string;
};

const CountryFlag = ({ countryCode }: CountryFlagProps) => {
  return (
    <img
      src={`https://flagsapi.com/${countryCode}/shiny/64.png`}
      alt={countryCode}
      className="country-flag"
    />
  );
};

export default CountryFlag;
