import { gql } from '@apollo/client/core/core.cjs'

export const POKEMONS_QUERY = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      nextOffset
      prevOffset
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`

export const POKEMON_QUERY = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      stats {
        base_stat
        effort
        stat {
          id
          name
        }
      }
      base_experience
      height

      is_default
      location_area_encounters
      order
      species {
        id
        url
        name
      }
      weight
      status
      message
    }
  }
`

export const POKEMON_STATS_QUERY = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      stats {
        base_stat
        effort
        stat {
          name
        }
      }
    }
  }
`
