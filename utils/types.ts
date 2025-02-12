/**
 * https://swapi.dev/api/
 */
export interface SwapiPerson {
    name: string
    mass: string
    height: string
    hair_color: string
    skin_color: string
    eye_color: string
    birth_year: string
    gender: string
    homeworld: string
    /**
     * Array of url
     */
    films: string[]
    species: string[]
    vehicles: string[]
    starships: string[]
    created: string
    edited: string
    url: string
}


export interface SwapiPaginated<T extends any[]> {
    count: number
    next: string | null
    previous: string | null
    results: T
}
