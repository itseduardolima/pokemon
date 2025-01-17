import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Header from "./components/Header";

const theme = createTheme({
  palette: {
    background: {
      default: "#ffffff",
    },
  },
});

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Header />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
