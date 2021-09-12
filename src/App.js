import React, { useState, useEffect } from "react";
import {
  Container,
  DataContainer,
  Header,
  SearchBarContainer,
  Toggle,
  Availability,
} from "./styles";
import { fetchStations, fetchStationStatus } from "./api";

function App() {
  const [stations, setStations] = useState([]);
  const [stationStatus, setStationStatus] = useState([]);
  const [dataReady, setDataReady] = useState(false);
  const [filteredStations, setFilteredStations] = useState([]);
  const [primaryColor, setPrimaryColor] = useState("#fafafa");
  const [secondaryColor, setSecondaryColor] = useState("#212121");

  useEffect(() => {
    fetchStations().then((stations) => setStations(stations));
    fetchStationStatus().then((stationStatus) =>
      setStationStatus(stationStatus)
    );
  }, []);

  useEffect(() => {
    if (stations.length < 1 || stationStatus.length < 1) return;
    setFilteredStations(stations);
    let allStations = stations;
    let allStatus = stationStatus;
    for (var i = 0; i < allStations.length; i++) {
      allStations[i].num_bikes_available = allStatus[i].num_bikes_available;
      allStations[i].num_docks_available = allStatus[i].num_docks_available;
    }
    setStations(allStations);
    setDataReady(true);
  }, [stations, stationStatus]);

  const stationData = () => {
    return (
      <>
        <DataContainer primary={primaryColor} secondary={secondaryColor}>
          {filteredStations.map((station, index) => (
            <div key={index} className="card">
              <span className="text">Navn: {station.name} </span>
              <br />
              <span>Adresse: {station.address} </span>
              <br />
              <span>Kapasitet: {station.capacity} </span>
              <br />
              <span>Ledige plasser: {station.num_docks_available} </span>
              <br />
              <span>Ledige sykler: {station.num_bikes_available}</span>
            </div>
          ))}
        </DataContainer>
      </>
    );
  };

  const filterData = (searchValue) => {
    let filteredData = [];
    filteredData = stations.filter(
      (el) => el.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
    );
    setFilteredStations(filteredData);
  };

  const toggleDarkMode = () => {
    let temp = primaryColor;
    setPrimaryColor(secondaryColor);
    setSecondaryColor(temp);
  };

  const toggleAvailable = (availability) => {
    let filteredData = [];
    if (availability) {
      filteredData = filteredStations.filter(
        (el) => el.num_bikes_available > 0
      );
      setFilteredStations(filteredData);
    } else {
      filterData(document.getElementById("search").value);
    }
  };

  return (
    <Container primary={primaryColor} secondary={secondaryColor}>
      <Header primary={primaryColor} secondary={secondaryColor}>
        <span className="header-text">Oslo Bysykkel</span>
      </Header>
      <Toggle primary={primaryColor} secondary={secondaryColor}>
        <span className="text">Dark mode</span>
        <label className="switch">
          <input type="checkbox" onChange={() => toggleDarkMode()} />
          <span className="slider round"></span>
        </label>
      </Toggle>
      <Availability>
        <span>Ledige sykler?</span>
        <input
          className="check"
          type="checkbox"
          onChange={(event) => toggleAvailable(event.target.checked)}
        />
      </Availability>
      <SearchBarContainer primary={primaryColor} secondary={secondaryColor}>
        <input
          id="search"
          className="searchbar"
          placeholder="Søk på stasjon..."
          onChange={(event) => filterData(event.target.value)}
        ></input>
      </SearchBarContainer>
      {dataReady ? stationData() : null}
    </Container>
  );
}

export default App;
