import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
 
const Details = () => {
    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const { search } = useParams()

    useEffect(() => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${search}`)
        .then((res) => {
            console.log(res.data)
            setPokemon(res.data)
            setLoading(false)
        })
        .catch ((err) => {
            console.log(err)
            setError(true)
            setLoading(false)
        })
    }, [])

    if(loading) return <h1>Loading</h1>
    if(error) return <h1>There was a problem :(</h1>

  return (
    <div>
        <h1>Details</h1>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.other['official-artwork'].front_default} />
    </div>
  )
}

export default Details