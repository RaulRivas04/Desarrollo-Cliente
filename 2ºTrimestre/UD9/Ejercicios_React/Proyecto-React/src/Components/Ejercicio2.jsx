const Ejercicio2 = () => {
    // Función para manejar el clic del botón
    const handleClick = () => {
        alert("Hizo clic");
    };

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

export default Ejercicio2;
