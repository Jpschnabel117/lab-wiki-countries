
import { Route, Routes, Link } from 'react-router-dom';
function CountriesList(props) {
  let sortedList = props.cdata.sort((a, b) => {
  if (a.name.common > b.name.common) {
    return 1;
  }
  if (a.name.common < b.name.common) {
    return -1;
  }
  return 0;
});

  return (
    <div className="countrylist">
      {sortedList.map((country) => {
        return (
          <div className="countrySmall">
            <Link to={'/'+ country.alpha3Code}>{country.alpha2Code + ' ' + country.name.common}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
