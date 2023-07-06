import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { CategoryScale, Chart, registerables } from "chart.js";
import Navbar from '../Navbar/Navbar';

Chart.register(CategoryScale);
Chart.register(...registerables);

// Fetches world wide data of cases
const fetchWorldData = async () => {
  const response = await axios.get('https://disease.sh/v3/covid-19/all');
  return response.data;
};

// Fetches country specific data of cases
const fetchCountryData = async () => {
  const response = await axios.get('https://disease.sh/v3/covid-19/countries');
  return response.data;
};

// Fetches graph data for cases with date
const fetchGraphData = async () => {
  const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  return response.data;
}; 

function Dashboard() {
  const worldDataQuery = useQuery('worldData', fetchWorldData);
  const countryDataQuery = useQuery('countryData', fetchCountryData);
  const graphDataQuery = useQuery('graphData', fetchGraphData);

  if (worldDataQuery.isLoading || countryDataQuery.isLoading || graphDataQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (worldDataQuery.isError || countryDataQuery.isError || graphDataQuery.isError) {
    return <div>Error fetching data</div>;
  }

  const worldData = worldDataQuery.data;
  const countryData = countryDataQuery.data;
  const graphData = graphDataQuery.data;

  // Process graph data
  const casesData = graphData?.cases;
  const dates = Object.keys(casesData || {});
  const cases = Object.values(casesData || {});

  // Prepare data for the line graph
  const lineGraphData = {
    labels: dates,
    datasets: [
      {
        label: 'Cases',
        data: cases,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
    <header className="bg-gray-800 py-4">
<div className="container mx-auto px-4">
<h1 className="text-white text-4xl font-bold text-center">Charts And Maps</h1>
</div>
</header>

<div className=" flex flex-row bg-gray-200 p-8 pt-0 pl-0 ">

    <div> <Navbar /></div> 
    <div className="container ml-96 mr-24 mb-12 mt-20 pt-6 pb-12 bg-pink-200 rounded shadow flex flex-col items-center justify-end">
    
    <div>
      <h1 className="pt-8 font-bold  text-gray-600 text-4xl p-10">COVID-19 Dashboard</h1>
      <div className="flex rounded flex-col items-start justify-center border-solid m-2 border-gray-500  min-w-min pt-0 p-4 border-4">
        <h2 className="font-bold text-gray-600 text-2xl p-4">Worldwide Cases</h2>
        <li>Total Cases: {worldData?.cases}</li>
        <li>Total Recovered: {worldData?.recovered}</li>
        <li>Total Deaths: {worldData?.deaths}</li>
      </div>
      <div className="flex rounded flex-col items-start justify-center border-solid m-2 border-gray-500  min-w-min pt-0 p-4 border-4">
        <h2 className="font-bold text-gray-600 text-2xl p-4">Line Graph: Cases Fluctuations</h2>
        <Line data={lineGraphData} />
      </div>
      <div className="flex flex-col  rounded items-start justify-center border-solid m-2 border-gray-500  min-w-min pt-0 p-4 border-4">
        <h2 className="font-bold text-gray-600 text-2xl p-4">Country Specific Cases</h2>
        <MapContainer center={[0, 0]} zoom={2} style={{ height: '400px', width: '800px' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {countryData?.map((country: any) => (
            <Marker key={country.countryInfo._id} position={[country.countryInfo.lat, country.countryInfo.long]}>
              <Popup>
                <div className=" font-bold bg-red-200 p-2 text-gray-600 border-solid border-gray-500 border-2 m-0">
                  <p>Country: {country.country}</p>
                  <p>Total Active Cases: {country.active}</p>
                  <p>Total Recovered: {country.recovered}</p>
                  <p>Total Deaths: {country.deaths}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
    </div>
        </div>
        </div>
  );
}

export default Dashboard;
