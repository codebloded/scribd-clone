import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing'
import Section from './components/Section';
import BooksCase from './components/BooksCase';
import Trending from './components/Trending';

function App() {
  return (
    <div className="App">
    {/* Navbar */}
      <Navbar/>
      <Landing/>
      <Section/>
      <BooksCase/>
      <Trending/>
      
    </div>
  );
}

export default App;
