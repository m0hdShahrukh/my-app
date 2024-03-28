import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
      <TextForm heading="Please enter the text to"/>
      </div>
    </div>
  );
}

export default App;
