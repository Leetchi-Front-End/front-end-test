<template>
	<div class="min-h-screen flex flex-wrap items-center justify-center">

	</div>
</template>

<script setup lang="ts">
const poke: Pokemon = {
	height: 3,
	name: "ditto",
	species: {
		name: "ditto",
		url: "https://pokeapi.co/api/v2/pokemon-species/132/"
	},
	sprites: {
		back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
		back_female: null,
		back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png",
		back_shiny_female: null,
		front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
		front_female: null,
		front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
		front_shiny_female: null,
	},
	stats: [
		{
			base_stat: 48,
			effort: 1,
			stat: {
				name: "hp",
				url: "https://pokeapi.co/api/v2/stat/1/"
			}
		},
		{
			base_stat: 48,
			effort: 0,
			stat: {
				name: "attack",
				url: "https://pokeapi.co/api/v2/stat/2/"
			}
		},
		{
			base_stat: 48,
			effort: 0,
			stat: {
				name: "defense",
				url: "https://pokeapi.co/api/v2/stat/3/"
			}
		},
		{
			base_stat: 48,
			effort: 0,
			stat: {
				name: "special-attack",
				url: "https://pokeapi.co/api/v2/stat/4/"
			}
		},
		{
			base_stat: 48,
			effort: 0,
			stat: {
				name: "special-defense",
				url: "https://pokeapi.co/api/v2/stat/5/"
			}
		},
		{
			base_stat: 48,
			effort: 0,
			stat: {
				name: "speed",
				url: "https://pokeapi.co/api/v2/stat/6/"
			}
		}
	],
	weight: 40,
	types:  [
    {
      "slot": 1,
      "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
      }
    }
  ],
} as Pokemon
</script>