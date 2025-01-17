import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PokemonList from './components/List';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  palette: {
    background: {
      default: '#ffffff'
    },
    text: {
      primary: '#2F3133',
      secondary: '#7A7D80'
    }
  }
});

const queryClient = new QueryClient();

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBy, setFilterBy] = useState('');

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Header />
          <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <SearchBar 
              onSearch={setSearchQuery}
              onFilter={setFilterBy}
            />
            <PokemonList
              searchQuery={searchQuery}
              filterBy={filterBy}
            />
          </main>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;