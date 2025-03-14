import './App.css';
import FoodForm from './components/FoodForm';
import Map from './components/Map';

function App() {
  return (
    <div className="App">
      <FoodForm />
      <h1>附近的餐廳</h1>
      <Map />
    </div>
  );
}

export default App;
