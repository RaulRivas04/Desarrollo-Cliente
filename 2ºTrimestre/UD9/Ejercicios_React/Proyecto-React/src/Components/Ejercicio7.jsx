import { useState } from "react";

const Ejercicio7 = () => {
    // Estados para guardar el nombre y el apellido
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    // Función para manejar el clic del botón
    const handleGreet = () => {
        alert(`¡Hola, ${firstName} ${lastName}!`);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h3>Salúdame:</h3>
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                }}
                onSubmit={(e) => e.preventDefault()}
            >
                {/* Campo de entrada para el nombre */}
                <input
                    type="text"
                    placeholder="Nombre"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    style={{
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        width: "200px",
                    }}
                />
                {}
                <input
                    type="text"
                    placeholder="Apellido"
                    value={lastName}
                    // Actualziar estado con el valor del input
                    onChange={(e) => setLastName(e.target.value)}
                    style={{
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        width: "200px",
                    }}
                />
                {/* Botón para saludar */}
                <button
                    type="button"
                    onClick={handleGreet}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "red",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    SALÚDAME
                </button>
            </form>
        </div>
    );
};

export default Ejercicio7;
