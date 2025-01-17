import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Grid,
  Pagination,
  Box,
  Typography,
  useMediaQuery,
  Theme,
} from "@mui/material";
import { getPokemonCards } from "../api/pokemon";

import {
  PokemonCard as PokemonCardType,
  PokemonApiResponse,
} from "../types/pokemon";
import Modal from "./Modal";
import PokemonCard from "./Card";
import PokeBola from "../../public/favicon.png";
import { PokeBolaIcon } from "../assets/icons/PokeBolaIcon";

interface PokemonListProps {
  searchQuery: string;
  filterBy: string;
}

export default function PokemonList({
  searchQuery,
  filterBy,
}: PokemonListProps) {
  const [page, setPage] = useState(1);
  const [selectedPokemon, setSelectedPokemon] =
    useState<PokemonCardType | null>(null);

  const { data, isLoading } = useQuery<PokemonApiResponse>({
    queryKey: ["pokemon", page, searchQuery, filterBy],
    queryFn: () => getPokemonCards({ pageParam: page, searchQuery, filterBy }),
  });

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  if (isLoading) {
    return (
      <>
        <div className="wrapper">
          <img src={PokeBola} alt="Pokemon Logo" width="50" className="pokeball" />
        </div>
      </>
    );
  }

  return (
    <>
      <Typography
        variant="body2"
        sx={{
          mb: 5,
          fontFamily: "Montserrat",
          color: "#4D5053",
          fontWeight: "600",
          fontSize: isMobile ? "16px" : "18px",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <PokeBolaIcon />
        Total: {data?.totalCount ?? 0} Pokémons
      </Typography>

      <Grid container spacing={2} sx={{ mb: 4 }}>
        {data?.data.map((pokemon) => (
          <Grid item xs={12} sm={6} md={3} key={pokemon.id}>
            <PokemonCard
              pokemon={pokemon}
              onClick={() => setSelectedPokemon(pokemon)}
            />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          count={data ? Math.ceil((data.totalCount ?? 0) / 12) : 0}
          page={page}
          onChange={(_, value) => setPage(value)}
          size={isMobile ? "small" : "medium"}
        />
      </Box>

      <Modal
        pokemon={selectedPokemon}
        open={!!selectedPokemon}
        onClose={() => setSelectedPokemon(null)}
      />
    </>
  );
}
