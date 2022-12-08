import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route, Routes, Link } from 'react-router-dom';
//import data from './countries.json';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [countryList, setCountryList] = useState([]);
  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((axiosResponse) => {
        setCountryList(axiosResponse.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CountriesList cdata={countryList} />
        <Routes>
          <Route
            path="/:myParam"
            element={<CountryDetails cdata={countryList} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
