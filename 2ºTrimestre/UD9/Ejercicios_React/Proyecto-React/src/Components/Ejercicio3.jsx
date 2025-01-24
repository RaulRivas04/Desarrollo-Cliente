import Button from './Button';

const Ejercicio3 = () => {
    const handleClick = (buttonName) => {
        alert(`Hiciste clic en ${buttonName}`);
    };

    return (
        <div>
            <Button onClick={() => handleClick("Button 1")}>Button 1</Button>
            <Button onClick={() => handleClick("Button 2")}>Button 2</Button>
            <Button onClick={() => handleClick("Button 3")}>Button 3</Button>
        </div>
    );
};

export default Ejercicio3;
