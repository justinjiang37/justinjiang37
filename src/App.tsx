import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects/Projects';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Projects></Projects>
      </header>
      {/* import react-router-dom
      <Route exact path="/" component={Home}/>
      <Route path="/projects" component={Projects}/> */}

    </div>
  );
}
