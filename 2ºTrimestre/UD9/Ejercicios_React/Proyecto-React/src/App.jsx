import { useState } from 'react';
import './App.css';
import Ejercicio1 from './Components/Ejercicio1';
import Ejercicio2 from './Components/Ejercicio2';
import Ejercicio3 from './Components/Ejercicio3';
import Ejercicio4 from './Components/Ejercicio4';
import Ejercicio5 from './Components/Ejercicio5';
import Ejercicio6 from './Components/Ejercicio6';
import Ejercicio7 from './Components/Ejercicio7';

function App() {
  const [selectedExercise, setSelectedExercise] = useState('Home');

  const renderExercise = () => {
    switch (selectedExercise) {
      case 'Home':
        return <div>Bienvenido a la página principal</div>;
      case 'Ejercicio1':
        return <Ejercicio1 />;
      case 'Ejercicio2':
        return <Ejercicio2 />;
      case 'Ejercicio3':
        return <Ejercicio3 />;
      case 'Ejercicio4':
        return <Ejercicio4 />;
      case 'Ejercicio5':
        return <Ejercicio5 />;
      case 'Ejercicio6':
        return <Ejercicio6 />;
      case 'Ejercicio7':
        return <Ejercicio7 />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="menu">
        <button onClick={() => setSelectedExercise('Home')}>Home</button>
        <button onClick={() => setSelectedExercise('Ejercicio1')}>Ejercicio 1</button>
        <button onClick={() => setSelectedExercise('Ejercicio2')}>Ejercicio 2</button>
        <button onClick={() => setSelectedExercise('Ejercicio3')}>Ejercicio 3</button>
        <button onClick={() => setSelectedExercise('Ejercicio4')}>Ejercicio 4</button>
        <button onClick={() => setSelectedExercise('Ejercicio5')}>Ejercicio 5</button>
        <button onClick={() => setSelectedExercise('Ejercicio6')}>Ejercicio 6</button>
        <button onClick={() => setSelectedExercise('Ejercicio7')}>Ejercicio 7</button>
      </div>

      <div className="content">
        {renderExercise()}
      </div>
    </>
  );
}

export default App;