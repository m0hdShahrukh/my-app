import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div className="App">
      <Navbar logo="MOHD"/>
      <div className="container">
      <TextForm heading="Please enter the text to ConvertCASE"/>
      </div>
    </div>
  );
}

export default App;
