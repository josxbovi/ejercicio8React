import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Formulario() {
    const [form, setForm] = useState({ nombre: '', apellido: '', dni: '', email: '' });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (Object.values(form).some(x => x === '')) {
            alert('Completar todos los datos');
        } else {
            alert('Datos enviados');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} />
            <input type="text" name="apellido" placeholder="Apellido" onChange={handleChange} />
            <input type="text" name="dni" placeholder="DNI" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Formulario;