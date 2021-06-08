import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import GamesList from './components/GamesList';
import GameForm from './components/GameForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/games'>
            <GamesList />
          </Route>
          <Route path='/new-game'>
            <GameForm />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
