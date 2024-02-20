import React, { SetStateAction, useContext, useState } from 'react'
import Layout from '../../props/layout/layout'
import { Box, InputAdornment, Paper, Typography } from '@mui/material'
import SearchIcon from '../../assets/icons/icon-search.svg'
import MovieTrendList from '../movie-trend-list/movie-trend-list';
import MovieList from '../movie-list/movie-list';
import { MovieDataType } from '../../assets/data';
import { MovieContext } from '../../context/movie-context';





const Home = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;
  console.log(movies);
  const trendingList = movies.filter((item) => item.isTrending === true);
  const recommendList = movies.filter((item) => item.isTrending !== true);


  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    const newList = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchList(newList);
  };

  return (
    <Layout>
        <Box>
          <Paper component="form"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "default",
                  p: 1,
                  backgroundColor: "#10141f",
                  border: "none",
                }}>
              <InputAdornment position="start">
                    <img
                      src={SearchIcon}
                      alt="search icon"
                      width={20}
                      height={20}
                    />
                  </InputAdornment>
          </Paper>
        </Box>

        {/* container to show trending movie  */}
        <Box py={2} px={4}>
            {search === "" ? (
              <Box width="100%">
                <Box width="100%">
                  <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                    Trending
                  </Typography>
                  <MovieTrendList trendingList={trendingList} />
                </Box>
                <Box width="100%">
                  <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                    Recommended For You
                  </Typography>
                  <MovieList recommendList={recommendList} />
                </Box>
              </Box>
            ) : (
              <Box width="100%">
                <Typography>
                  Found {searchList.length} results for "{search}"{""}
                </Typography>
                <MovieList recommendList={searchList} />
              </Box>
            )}
          </Box>
      </Layout>
  );
  
}

export default Home