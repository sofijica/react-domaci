import { Route, Switch } from 'react-router';
import './App.css';
import Kalkulator from './components/Kalkulator';
import Navbar from './components/Navbar';
import Spisak from './components/Spisak';

function App() {
  return (
    <>
      <Navbar />

      <Switch>

        <Route path='/spisak'>
          <Spisak />
        </Route>
        <Route path='/'>
          <Kalkulator />
        </Route>
      </Switch>
    </>
  );
}

export default App;
