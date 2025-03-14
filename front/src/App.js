import './App.css';
import FoodForm from './components/FoodForm';
import Map from './components/Map';

function App() {
  return (
    <div className="App">
      <FoodForm />
      <h3>附近的餐廳</h3>
      <Map />
    </div>
  );
}

export default App;
