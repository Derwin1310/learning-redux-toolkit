import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon/thunks"

export const PokemonApp = () => {
  const { pokemons, isLoading, page } = useSelector(state => state.pokemons)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />

      <h2>{isLoading ? 'Loading' : 'Data succesfully charged'}</h2>

      <ul>
        {pokemons.map(({ name }) => <li key={name}>{name}</li>)}
      </ul>

      <button
        disabled={isLoading || page === 1}
        onClick={() => dispatch(getPokemons(page - 2))}
      >
        Back
      </button>

      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page))}
      >
        Next
      </button>
    </>
  )
}
