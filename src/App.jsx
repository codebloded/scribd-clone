import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing'
import Section from './components/Section'

function App() {
  return (
    <div className="App">
    {/* Navbar */}
      <Navbar/>
      <Landing/>
      <Section/>
      
    </div>
  );
}

export default App;
