import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import Chart from './Chart';
import Sidebar from './sidebar';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    endYear: '',
    topic: '',
    sector: '',
    region: '',
    pestle: '',
    source: '',
    country: ''
  });

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(setData);
  }, []);

  const getUniqueValues = (key) => {
    return [...new Set(data.map(item => item[key]).filter(item => item))];
  };

  const filteredData = data.filter(item => {
    return (
      (filters.endYear === '' || item.end_year === filters.endYear) &&
      (filters.topic === '' || item.topic === filters.topic) &&
      (filters.sector === '' || item.sector === filters.sector) &&
      (filters.region === '' || item.region === filters.region) &&
      (filters.pestle === '' || item.pestle === filters.pestle) &&
      (filters.source === '' || item.source === filters.source) &&
      (filters.country === '' || item.country === filters.country)
    );
  });

  const resetFilters = () => {
    setFilters({
      endYear: '',
      topic: '',
      sector: '',
      region: '',
      pestle: '',
      source: '',
      country: ''
    });
  };

  return (
    <Box display="flex">
      <Sidebar
        filters={filters}
        setFilters={setFilters}
        resetFilters={resetFilters}
        getUniqueValues={getUniqueValues}
      />
      <Box flex={1} p={2}>
        <Chart data={filteredData} />
      </Box>
    </Box>
  );
};

export default Dashboard;
