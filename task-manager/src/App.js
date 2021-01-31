import { Router } from '@reach/router';
import './App.css';
import ShowAll from './components/ShowAll';
import New from './components/New';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <ShowAll path="/" />
      <New path="/Projects/new" />
    </Router>
    </div>
  );
}

export default App;
