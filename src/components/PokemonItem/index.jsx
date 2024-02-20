const PokemonItem = ({ pokemon, loading }) => {

    if (pokemon.length === 0) {
        return (
            <>
                <h1>Search For A Pokemon!</h1>
            </>
        )
    }

    else if (loading === true) {
        return (
            <>
                <img src="https://art.pixilart.com/0fd16e26f1b552e.gif" />
                <h1>Loading...</h1>
            </>
        )
    }

    else if (pokemon === 'none') {
        return (
            <>
                <h1>No Pokemon Found</h1>
            </>
        )
    }

    else {
        return (
            <>
                <h1>Name: {pokemon.name}</h1>
                <h3>Height: {pokemon.height}</h3>
                <h3>Weight: {pokemon.weight}</h3>
            </>
        )
    }

}

export default PokemonItem