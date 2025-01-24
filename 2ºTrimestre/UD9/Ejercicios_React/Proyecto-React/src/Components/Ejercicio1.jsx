const Ejercicio1 = () => {
    const styles = {
        container: {
            backgroundColor: 'yellow',
            width: '200px',
            height: '200px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '18px',
            color: 'black',
            border: '1px solid black',
        },
    };

    return (
        <div style={styles.container}>
            Hello, World!
        </div>
    );
};

export default Ejercicio1;
