import React from 'react';
import './LandingPageSearch.css';
const Search = () => (
    <div className="backgroundd">
      <div className="searchcs">
        <div className="booking-header">
          <button className="btnsty"><img src="src/Components/LandingPage/images/plane 1.png" alt="Flights" className="icon" /> Flights</button>
          <button className="btnsty"><img src="src/Components/LandingPage/images/Vector.png" alt="Login" className="icon" /> Log In</button>
        </div>
        <div className="search-container">
          {/* Search form content */}
          <form className="search-form">
            <div className="formimg"><img src="src/Components/LandingPage/images/Polygon 1.png" /></div>
            <div className="trip-type">
              <input type="radio" id="one-way" name="trip-type" />
              <label htmlFor="one-way">One Way</label>
              <input type="radio" id="round-trip" name="trip-type" checked />
              <label htmlFor="round-trip">Round Trip</label>
            </div>
            <div className="form-row">
              <div className="input-groupp">
                <label htmlFor="from">From:</label>
                <input type="text" id="from" placeholder="Departure" />
              </div>
              <div className="input-groupp">
                <label htmlFor="to">To:</label>
                <input type="text" id="to" placeholder="Destination" />
              </div>
            </div>
            <div className="form-row">
              <div className="input-groupp">
                <label htmlFor="departure">Departure Date</label>
                <input type="date" id="departure" />
              </div>
              <div className="input-groupp">
                <label htmlFor="return">Arrival Date</label>
                <input type="date" id="return" />
              </div>
            </div>
            <div className="form-row">
              <div className="input-group">
                <label htmlFor="child">Child</label>
                <select id="child">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="adult">Adult</label>
                <select id="adult">
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="infant">Infant</label>
                <select id="infant">
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>
            </div>
            <button className="search-button">Search Flights</button>
          </form>
        </div>
      </div>
    </div>
  );
export default Search;  