const Ejercicio5 = () => {
    // Lista de elementos
    const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

    return (
        <div>
            <h3>Lista de Animales:</h3>
            <ul>
                {}
                {animals.map((animal, index) => (
                    <li key={index}>{animal}</li>
                ))}
            </ul>
        </div>
    );
};

export default Ejercicio5;
