export const Tabla = ({ info, delData }) => {
    const eliminar = (item) => {
        const confirmar = window.confirm("¿Estás seguro de que quieres eliminar este ítem?");
        
        if (confirmar) {
            delData(info.filter((i) => i.id !== item.id));
        }
    };
    return (
        <>
            <div className="row ">
                {info.map((item, index) => (
                    <div className="col-3 mb-3" key={index}>
                        <div className="card">
                            <div className="card-header text-bg-success">
                                {"ID:" + item.id} 
                            </div>
                            <div className="card-header text-bg-success">
                                <div>{"Run: "+ item.run}</div>
                                <div>{"Nombre: " + item.nombre}</div>
                                <div>{"Apellido: " +item.apellido}</div>
                                <div>{"Telefono: " +item.telefono}</div>
                                <div>{"Email: " + item.correo}</div>
                                <div>{"Fecha: " + item.fecha}</div>
                                <div>{"Habitacion: " + item.habitacion}</div>
                                <div>{"Dias de reserva: " + item.diasreserva}</div>
                                <div>{"Metodo de pago: " + item.metodoPago}</div>
                            </div>
                            <div className="card">
                            <button type="button" className="btn btn-danger "
                                    onClick={() => eliminar(item)}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    )
}