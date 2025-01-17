import axios from "axios";
import { PokemonApiResponse } from "../types/pokemon";

const api = axios.create({
  baseURL: "https://api.pokemontcg.io/v2",
  headers: {
    "X-Api-Key": import.meta.env.VITE_APIKEY,
  },
});

interface GetPokemonCardsParams {
  pageParam?: number;
  searchQuery?: string;
  filterBy?: string;
}

export const getPokemonCards = async ({ 
  pageParam = 1, 
  searchQuery = '', 
  filterBy = '' 
}: GetPokemonCardsParams): Promise<PokemonApiResponse> => {
  const query = searchQuery 
  ? `name:*${searchQuery}*${filterBy ? ` ${filterBy}` : ''}`
  : filterBy;

  const response = await api.get<PokemonApiResponse>('/cards', {
    params: {
      page: pageParam,
      pageSize: 12,
      q: query
    }
  });
  return response.data;
};

export const getPokemonCard = async (id: string) => {
  const response = await api.get(`/cards/${id}`);
  return response.data;
};

