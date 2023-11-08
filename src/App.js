import './App.css';
import { Categories, Play, ResetGame, TeamAndPointTracker, Timer, SelectRoundWinner } from './components/index'

function App() {
  return (
    <div className="App">
      <section id='left-screen'>
        <TeamAndPointTracker/>
        <div id='logo-and-timer'>
          <div id='logo'>Scattegories</div>
          <Timer/>
        </div>
      </section>
      <section id='middle-screen'>
        <Categories />
        <SelectRoundWinner />
      </section>
      <section id='right-screen'>
        <ResetGame/>
        <Play/>
        </section>
    </div>
  );
}

export default App;
