import { useState, useEffect } from 'react';
import axios from 'axios';
const useFetch = (endpoint) => {
    const [data, setData ] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const axios = require("axios");

const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  params: {query: 'Python developer in Texas, USA', page: '1', num_pages: '1'},
  headers: {
    'X-RapidAPI-Key': '3bd01297b4msh0f74b37cc850e7dp1e023fjsnf06cbb12424e',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}