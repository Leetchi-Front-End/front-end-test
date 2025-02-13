/**
 * https://swapi.dev/api/
 */
export interface Pokemon {
    name: string
    height: number
    weight: number
    stats: {
        base_stat: number
        effort: number
        stat: {
            name: string
            url: string
        }
    }[]
    sprites: { [k: string]: string | null, }
    types: {
        slot: number, type: { name: string, url: string }
    }[]
}


export interface Paginated<T> {
    count: number
    next: string | null
    previous: string | null
    results: T[]
}
