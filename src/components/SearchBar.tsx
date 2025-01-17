import {
  Paper,
  InputBase,
  IconButton,
  Box,
  Select,
  MenuItem,
  Typography,
  useMediaQuery,
  Theme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onFilter: (filter: string) => void;
}

export default function SearchBar({ onSearch, onFilter }: SearchBarProps) {
  const [selectedFilter, setSelectedFilter] = useState("");
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? 2 : 10,
        mb: 4,
        mt: isMobile ? 5 : 10,

        alignItems: isMobile ? "stretch" : "center",
      }}
    >
      <Paper
        component="form"
        sx={{
          p: "6px",
          display: "flex",
          alignItems: "center",
          width: isMobile ? "100%" : 403,
          borderRadius: "36px",
          border: "1px solid rgb(208, 211, 212)",
        }}
        elevation={0}
      >
        <InputBase
          sx={{ ml: 2, flex: 1 }}
          placeholder="Pesquisar um pokémon"
          onChange={(e) => onSearch(e.target.value)}
        />
        <IconButton
          type="button"
          sx={{
            p: "8px",
            backgroundColor: "#E1E9EF",
            borderRadius: "50%",
            mr: "4px",
          }}
        >
          <SearchIcon />
        </IconButton>
      </Paper>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          width: isMobile ? "200px" : "auto",
        }}
      >
        <FilterListIcon sx={{ color: "#7A7D80" }} />
        <Typography
          component="span"
          sx={{
            color: "#7A7D80",
            fontSize: "14px",
            fontWeight: 500,
            minWidth: "100px",
          }}
        >
          Filtrar por:
        </Typography>
        <Select
          value={selectedFilter}
          onChange={(e) => {
            const value = e.target.value as string;
            setSelectedFilter(value);
            onFilter(value);
          }}
          sx={{
            minWidth: isMobile ? "100%" : 200,
            border: "none",
            ".MuiSelect-select": {
              py: 0,
              color: "#7A7D80",
              fontSize: "14px",
            },
          }}
          variant="standard"
          disableUnderline
          displayEmpty
        >
          <MenuItem value="" disabled>
            Filtrar por:
          </MenuItem>
          <MenuItem value="">Todos os tipos</MenuItem>
          <MenuItem value="types:Colorless">Tipo Incolor</MenuItem>
          <MenuItem value="types:Darkness">Tipo Escuridão</MenuItem>
          <MenuItem value="types:Dragon">Tipo Dragão</MenuItem>
          <MenuItem value="types:Fairy">Tipo Fada</MenuItem>
          <MenuItem value="types:Fighting">Tipo Lutador</MenuItem>
          <MenuItem value="types:Fire">Tipo Fogo</MenuItem>
          <MenuItem value="types:Grass">Tipo Planta</MenuItem>
          <MenuItem value="types:Lightning">Tipo Elétrico</MenuItem>
          <MenuItem value="types:Metal">Tipo Metal</MenuItem>
          <MenuItem value="types:Psychic">Tipo Psíquico</MenuItem>
          <MenuItem value="types:Water">Tipo Água</MenuItem>
          <MenuItem value="rarity:Common">Comum</MenuItem>
          <MenuItem value="rarity:Uncommon">Incomum</MenuItem>
          <MenuItem value="rarity:Rare">Raro</MenuItem>
        </Select>
      </Box>
    </Box>
  );
}
