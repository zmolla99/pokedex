import React, { useEffect, useState } from 'react'
import './App.css'
import { Form, PokemonItem } from './components'

function App() {

  const [pokemon, setPokemon] = useState('')
  const [inputText, setInputText] = useState('')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF')

  const getPokemon = async () => {
    const fetchAPI = (`https://pokeapi.co/api/v2/pokemon/${search}`)
    try {
      const result = await fetch(fetchAPI)
      if (result.status === 404) {
        console.log('no pokemon found')
        setPokemon('none')
        setLoading(false)
      } else {
        const data = await result.json()
        setPokemon(data)
        setLoading(false)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (search) {
      getPokemon()
    }
  }, [search])

  useEffect(() => {
    setLoading(true)
  }, [search])

  useEffect(() => {
    const getRandomColor = () => {
      const letters = '0123456789ABCDEF'
      let color = '#'
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    }
    const intervalId = setInterval(() => {
      const newColor = getRandomColor()
      setBackgroundColor(newColor)
    }, 2000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className='page' style={{ backgroundColor: `${backgroundColor}` }}>
      <header>Pokemon Finder</header>
      <PokemonItem pokemon={pokemon} loading={loading} />
      <Form inputText={inputText} setInputText={setInputText} search={search} setSearch={setSearch} />
    </div >
  )
}

export default App
