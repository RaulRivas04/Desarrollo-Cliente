import { useState } from "react";

const Ejercicio4 = () => {
    // Estado para realizar el seguimiento de los clics
    const [count, setCount] = useState(0);

    // Función para manejar el clic
    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Button has been clicked: {count} times</p>
            <button 
                onClick={handleClick} 
                style={{
                    padding: '10px 20px',
                    backgroundColor: 'lightgreen',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Click Me
            </button>
        </div>
    );
};

export default Ejercicio4;
