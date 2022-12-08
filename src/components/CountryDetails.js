import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

function CountryDetails(props) {
  let { myParam } = useParams();
  const [country, setCountry] = useState(null);
  //

  useEffect(() => {
    console.log(myParam);
    let fCountry = props.cdata.filter((element) => {
      return element.alpha3Code === myParam;
    });
    console.log(fCountry);
    setCountry(fCountry[0]);
  }, [myParam, props.cdata]);

  console.log('rerender');
  return (
    <>
      {country ? (
        <div className="countrydetails">
          <div
            style={{
              fontSize: '30px',
              padding: '12px',
            }}
          >
            {' '}
            {country.name.common}
          </div>
          <hr />
          <div className="cRow">
            <div>
              <span>Capital</span>
            </div>
            <div>
              <span>{country.capital}</span>
            </div>
          </div>{' '}
          <hr />
          <div className="cRow">
            <div>
              <span>Area</span>
            </div>
            <div>
              <span>{country.area}</span>
            </div>
          </div>
          <hr />
          <div classname="borders">
            <div>Borders</div>
            <div>
              <ul>
                {country.borders.map((bCountry) => {
                  return (
                    <li>
                      <Link to={'/' + bCountry}>{bCountry}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}

export default CountryDetails;
