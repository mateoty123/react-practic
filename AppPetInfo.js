import './App.css';
import PetInfo from './components/PetInfo/PetInfo';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" old={8}/>
      <PetInfo animal="dog" old={10}/>
    </div>
  );
}

export default App;
