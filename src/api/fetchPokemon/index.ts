import Service, { getCallApiFunction } from '../service'
import { TFetchFunc } from '../../types/fetchFunction'

interface SimplePokemon {
  id: number
  name: string
  sprites: {
    front_default: string
  }
  types: Array<{
    type: {
      name: string
    }
  }>
}

interface RequestParams {
  name: string
}

class FetchPokemon extends Service<SimplePokemon> {
  constructor(params: RequestParams) {
    super()
    this.name = 'FetchPokemon'
    this.config = {
      url: `/berry/${params.name}`,
      method: 'get',
    }
  }
}

export const fetchPokemon: TFetchFunc<RequestParams, SimplePokemon> = (params) =>
  getCallApiFunction(new FetchPokemon(params))
