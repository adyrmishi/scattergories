import './App.css';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import { Categories, Play, ResetGame, TeamAndPointTracker, Timer, SelectRoundWinner } from './components/index'

function App() {
  return (
    <div className="App">
      <EasybaseProvider>
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
        </EasybaseProvider>
    </div>
  );
}

export default App;
