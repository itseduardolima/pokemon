export interface PokemonCard {
    id: string;
    name: string;
    images: {
      small: string;
      large: string;
    };
    types: string[];
    hp?: string;
    rarity?: string;
    flavorText?: string;
  }
  
  export interface PokemonApiResponse {
    data: PokemonCard[];
    page: number;
    pageSize: number;
    count: number;
    totalCount: number;
  }
  
  