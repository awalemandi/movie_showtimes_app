import Home from '../Home/Home';
import { MovieProvider } from '../../context/MovieContext';
import { TheaterProvider } from '../../context/TheaterContext';
import { CurrentMoviesProvider } from '../../context/CurrentMoviesContext';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( theme => ( {
  app: {
    margin: 0,
    height: '100vh',
    width: '100%',
  },
} ) );

function App () {
  const classes = useStyles();
  return (
    <TheaterProvider>
      <MovieProvider>
        <CurrentMoviesProvider>
          <div className={ classes.app }>
            <Home />
          </div>
        </CurrentMoviesProvider>
      </MovieProvider>
    </TheaterProvider>
  );
}

export default App;
