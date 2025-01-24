import ListItem from './ListItem';

const Ejercicio6 = () => {
    // Lista de elementos
    const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

    // Objeto que asocia cada animal con su emoji
    const animalEmojis = {
        dog: '🐶',
        cat: '🐱',
        chicken: '🐔',
        cow: '🐮',
        sheep: '🐑',
        horse: '🐴'
    };

    return (
        <div>
            <h3>Lista de Animales (con componente personalizado):</h3>
            <div>
                {}
                {animals.map((animal, index) => (
                    <ListItem key={index} item={`${animalEmojis[animal]} ${animal}`} />
                ))}
            </div>
        </div>
    );
};

export default Ejercicio6;
