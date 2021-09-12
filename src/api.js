export async function fetchStations() {
  const response = await fetch(
    "https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json"
  );
  const stations = await response.json();
  return stations["data"]["stations"];
}

export async function fetchStationStatus() {
  const response = await fetch(
    "https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json"
  );
  const stationStatus = await response.json();
  return stationStatus["data"]["stations"];
}
