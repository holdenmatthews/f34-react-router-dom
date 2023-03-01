import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate()

  const handleClick = () => {
    console.log(search)
    navigate(`/details/${search}`)
    // axios
    //     .get(`https://pokeapi.co/api/v2/pokemon/${search}`)
    //     .then((res) => {
    //         console.log(res.data)
    //     })
    //     .catch ((err) => console.log(err))
  }

  return (
    <div>
      <h1>Home</h1>
      <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
      <button onClick={handleClick}>Search!</button>
    </div>
  );
};

export default Home;
