// https://punkapi.com/documentation/v2

export const API_URL: string = 'https://api.punkapi.com/v2/beers'

type Temperature = {
  value: number
  unit: 'celsius' | 'fahrenheit'
}

type Volume = {
  value: number
  unit: 'liters'
}

type Weight = {
  value: number
  unit: 'grams' | 'kilograms'
}

type Hop = {
  add: string
  amount: Weight
  name: string
  attribute: string
}

type Malt = {
  amount: Weight
  name: string
}

export type Beer = {
  abv: number
  attenuation_level: number
  boil_volume: Volume
  brewers_tips: string
  contributed_by: string
  description: string
  ebc: number
  first_brewed: string
  food_pairing: string[]
  ibu: number
  id: number
  image_url: string | null
  ingredients: {
    hops: Hop[]
    malt: Malt[]
    yeast: string
  }
  method: {
    fermentation: { temp: Temperature }
    mash_temp: { duration: number; temp: Temperature }[]
    twist: string | null
  }
  name: string
  ph: number
  srm: number
  tagline: string
  target_fg: number
  target_og: number
  volume: Volume
}
