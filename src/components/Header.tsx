import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import Logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        boxShadow: " 0px 4px 4px 0px #00000040",
        padding: "20px 30px",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <img
          src={Logo}
          alt="Pokemon Logo"
          style={{
            height: "40px",
            filter: "grayscale(100%)",
          }}
        />
        <Link
          target="_blank"
          variant="body2"
          color="text.secondary"
          href="https://docs.pokemontcg.io/"
          sx={{ textDecoration: "none" }}
        >
          Documentação
        </Link>
      </Toolbar>
    </AppBar>
  );
}
