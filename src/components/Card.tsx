import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  useMediaQuery,
  Theme,
} from "@mui/material";
import { PokemonCard as PokemonCardType } from "../types/pokemon";
import { GrassIcon } from "../assets/icons/GrassIcon";
import { FireIcon } from "../assets/icons/FireIcon";
import { WaterIcon } from "../assets/icons/WaterIcon";
import { PokeBolaIcon } from "../assets/icons/PokeBolaIcon";

interface PokemonCardProps {
  pokemon: PokemonCardType;
  onClick: () => void;
}

export default function PokemonCard({ pokemon, onClick }: PokemonCardProps) {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "grass":
        return <GrassIcon />;
      case "water":
        return <WaterIcon />;
      case "fire":
        return <FireIcon />;
      default:
        return <PokeBolaIcon />;
    }
  };

  return (
    <Card
      onClick={onClick}
      sx={{
        cursor: "pointer",
        "&:hover": { boxShadow: 3 },
        border: "1px solid #E1E9EF",
        borderRadius: 2,
        boxShadow: "0px 1px 4px 0px #89838370",
        pt: 2,
      }}
    >
      <CardMedia
        component="img"
        height={isMobile ? "200" : "304"}
        image={pokemon.images.small}
        alt={pokemon.name}
        sx={{ objectFit: "contain" }}
      />
      <CardContent sx={{ p: isMobile ? "10px 15px" : "15px 20px" }}>
        <Typography
          variant="h6"
          color="text.primary"
          sx={{
            fontSize: isMobile ? "16px" : "18px",
            fontWeight: 600,
            mb: 1,
            fontFamily: "Montserrat",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {pokemon.name} {getTypeIcon(pokemon.types[0])}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: isMobile ? "11px" : "13px",
            }}
          >
            Tipo {pokemon.types[0]}
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
            sx={{ fontSize: isMobile ? "11px" : "13px" }}
          >
            {pokemon.rarity}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
