import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightBlue, pink } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';

import Landing from './pages/Landing';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: lightBlue,
    secondary: pink,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className="App">
        <header className="App-container">
          <Landing />
        </header>
      </main>
    </ThemeProvider>
    
  );
}

export default App;
