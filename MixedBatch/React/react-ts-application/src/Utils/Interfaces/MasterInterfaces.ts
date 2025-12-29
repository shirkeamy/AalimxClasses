export interface IGender {
  genderId: number
  gender: string
}

export interface ICountry {
  countryId: number
  country: string
}

export interface IState {
  stateId: number
  state: string
  countryId: number
}

export interface ICity {
  cityId: number
  city: string
  stateId: number
}
