import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing'
import Section from './components/Section';
import BooksCase from './components/BooksCase';

function App() {
  return (
    <div className="App">
    {/* Navbar */}
      <Navbar/>
      <Landing/>
      <Section/>
      <BooksCase/>
      
    </div>
  );
}

export default App;
