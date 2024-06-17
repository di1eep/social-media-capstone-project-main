import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, Button, Box } from '@mui/material';

const Sidebar = ({
  filters,
  setFilters,
  resetFilters,
  getUniqueValues
}) => {
  return (
    <Box sx={{ p: 2, width: 250 }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>End Year</InputLabel>
        <Select
          value={filters.endYear}
          onChange={(e) => setFilters({ ...filters, endYear: e.target.value })}
        >
          {getUniqueValues('end_year').map(value => (
            <MenuItem key={value} value={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Topic</InputLabel>
        <Select
          value={filters.topic}
          onChange={(e) => setFilters({ ...filters, topic: e.target.value })}
        >
          {getUniqueValues('topic').map(value => (
            <MenuItem key={value} value={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Sector</InputLabel>
        <Select
          value={filters.sector}
          onChange={(e) => setFilters({ ...filters, sector: e.target.value })}
        >
          {getUniqueValues('sector').map(value => (
            <MenuItem key={value} value={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Region</InputLabel>
        <Select
          value={filters.region}
          onChange={(e) => setFilters({ ...filters, region: e.target.value })}
        >
          {getUniqueValues('region').map(value => (
            <MenuItem key={value} value={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>PESTLE</InputLabel>
        <Select
          value={filters.pestle}
          onChange={(e) => setFilters({ ...filters, pestle: e.target.value })}
        >
          {getUniqueValues('pestle').map(value => (
            <MenuItem key={value} value={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Source</InputLabel>
        <Select
          value={filters.source}
          onChange={(e) => setFilters({ ...filters, source: e.target.value })}
        >
          {getUniqueValues('source').map(value => (
            <MenuItem key={value} value={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Country</InputLabel>
        <Select
          value={filters.country}
          onChange={(e) => setFilters({ ...filters, country: e.target.value })}
        >
          {getUniqueValues('country').map(value => (
            <MenuItem key={value} value={value}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={resetFilters} fullWidth>
        Reset
      </Button>
    </Box>
  );
};

export default Sidebar;
