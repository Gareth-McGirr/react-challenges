import css from './App.module.css';
import Sidebar from './components/Sidebar';
import StatefulGreeting from './components/StatefulGreeting';
import NavBarSimple from './components/NavBarSimple';

function App() {
  return (
    <div className={css.App}>
      {/* <Sidebar /> */}
      {/* <StatefulGreeting greeting="I'm a statefull class component" /> */}
      <NavBarSimple />
    </div>
  );
}

export default App;