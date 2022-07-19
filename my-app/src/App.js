import css from './App.module.css';
import Sidebar from './components/Sidebar';
import StatefulGreeting from './components/StatefulGreeting';
import NavBarSimple from './components/NavBarSimple';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import EventBinding from './components/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import HTTPRequests from './components/HTTPRequests';
import HTTPPost from './components/HTTPPost';
import HTTPHooks from './components/HTTPHooks';

function App() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      {/* <StatefulGreeting greeting="I'm a statefull class component" /> */}
      {/* <NavBarSimple /> */}
      {/* <EventsFunctional /> */}
      {/* <EventsClass /> */}
      {/* <EventBinding /> */}
      {/* <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={true} /> */}
      {/* <NestingComponents /> */}
      {/* <MethodsAsPropsParent /> */}
      {/* <HTTPRequests /> */}
      {/* <HTTPPost /> */}
      <HTTPHooks />
    </div>
  );
}

export default App;