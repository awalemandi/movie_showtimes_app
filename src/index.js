import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { TheaterProvider } from '../src/context/TheaterContext';
import { MovieProvider } from '../src/context/MovieContext';
import { CurrentMoviesProvider } from '../src/context/CurrentMoviesContext';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../src/theme';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import { SearchProvider } from './context/SearchContext';

ReactDOM.render(
  <React.StrictMode>
    <TheaterProvider>
      <MovieProvider>
        <SearchProvider>
          <CurrentMoviesProvider>
            <ThemeProvider theme={ theme }><App /></ThemeProvider>
          </CurrentMoviesProvider>
        </SearchProvider>
      </MovieProvider>
    </TheaterProvider>
  </React.StrictMode>,
  document.getElementById( 'root' )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
