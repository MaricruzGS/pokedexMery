import React from 'react'
import FormHome from '../components/FormHome'
import "./styles/Home.css"

const Home = () => {
  return (
    <main className='main__home'>
        <img className='home__img' src="/image/pokedex.png" alt="" />
        <h2 className='home__title'>Hi, trainer!</h2>
        <p className='home__subtitle'>Give me your name to start!</p>
        <FormHome/>
    </main>
  )
}

export default Home