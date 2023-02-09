import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';
import Header from './Header'
import { Box } from '@mui/system';
import { CircularProgress } from '@mui/material';
const MovieList = () => {
  const [data, setData] = useState([]);
  const [loading , setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await axios.post('https://hoblist.com/api/movieList', {
          category: "movies",
          language: "kannada",
          genre: "all",
          sort: "voting"
        });
        setData(result.data.result);
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.error(error);
      }
    };
    fetchData();
  }, []);
console.log(data)
  return (
    <div>
     <Header />
     {loading === true ? 
      <Box display="flex" justifyContent="center" mt={40}>
                  <CircularProgress />
                </Box>
     :
      data && data.map(item => (
        <div key={item.id}>
          {/* <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>{item.genre}</p> */}
          <Movie item={item} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
