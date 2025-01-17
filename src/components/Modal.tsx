import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Chip,
  useMediaQuery,
  Theme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { PokemonCard as PokemonCardType } from "../types/pokemon";
import { PokeBolaIcon } from "../assets/icons/PokeBolaIcon";

interface ModalProps {
  pokemon: PokemonCardType | null;
  open: boolean;
  onClose: () => void;
}

export default function Modal({ pokemon, open, onClose }: ModalProps) {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  if (!pokemon) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{
          color: "#7A7D80",
          background: "#D0D0D066",
          textAlign: "center",
          padding: isMobile ? "16px" : "24px",
        }}
      >
        <Typography
          component="span"
          sx={{
            fontSize: isMobile ? "18px" : "21px",
            fontWeight: 600,
            fontFamily: "Montserrat",
          }}
        >
          {pokemon.name}
        </Typography>

        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ padding: isMobile ? "16px" : "24px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            marginTop: isMobile ? 2 : 4,
          }}
        >
          <img
            src={pokemon.images.small}
            alt={pokemon.name}
            style={{
              width: isMobile ? "150px" : "195.59px",
              height: isMobile ? "150px" : "195.59px",
              objectFit: "contain",
            }}
          />

          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            {pokemon.types.map((type: string) => (
              <Chip
                key={type}
                label={type}
                sx={{
                  color: "white",
                  background: "#AFB1B6",
                  p: "2px 6px",
                  fontWeight: "700",
                  fontFamily: "Poppins",
                  fontSize: isMobile ? "10px" : "12px",
                }}
              />
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: isMobile ? 2 : 4,
              width: "100%",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                borderRight: "2px solid  #D4D7DE",
                pr: "30px",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  mb: 1,
                  justifyContent: isMobile ? "center" : "flex-start",
                }}
              >
                <PokeBolaIcon />
                <Typography
                  sx={{
                    color: "#1D1D1D",
                    fontSize: isMobile ? "11px" : "13px",
                    fontFamily: "Poppins",
                  }}
                  variant="body2"
                >
                  HP
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "10px",
                  textAlign: "center",
                  fontFamily: "Poppins",
                }}
                variant="body2"
              >
                {pokemon.hp}
              </Typography>
            </Box>
            <Box
              sx={{
                textAlign: "center",
                borderRight: "2px solid  #D4D7DE",
                pr: "30px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  mb: 1,
                  justifyContent: isMobile ? "center" : "flex-start",
                }}
              >
                <PokeBolaIcon />
                <Typography
                  sx={{
                    color: "#1D1D1D",
                    fontSize: isMobile ? "11px" : "13px",
                    fontFamily: "Poppins",
                  }}
                  variant="body2"
                >
                  Tipo
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "10px",
                  fontFamily: "Poppins",
                }}
                variant="body2"
              >
                {pokemon.types.join(", ")}
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  mb: 1,
                  justifyContent: isMobile ? "center" : "flex-start",
                }}
              >
                <PokeBolaIcon />
                <Typography
                  sx={{
                    color: "#1D1D1D",
                    fontSize: isMobile ? "11px" : "13px",
                    fontFamily: "Poppins",
                  }}
                  variant="body2"
                >
                  Raridade
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "10px",
                  fontFamily: "Poppins",
                }}
                variant="body2"
              >
                {pokemon.rarity}
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="body1"
            sx={{
              mt: 2,
              fontSize: isMobile ? "10px" : "12px",
              textAlign: "center",
            }}
          >
            {pokemon.flavorText || "Sem descrição disponível."}
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
