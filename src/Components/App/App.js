import Home from '../Home/Home';
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
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
