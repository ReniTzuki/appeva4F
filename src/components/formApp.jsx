import { useState } from "react"
export const Formulario = ({ addNew }) => {
    const valoresIniciales = {
        run: '',
        nombre: '',
        apellido: '',
        telefono:'',
        correo:'',
        fecha: '',
        habitacion: '',
        diasreserva: 1,
        metodoPago:''
    }
    const [valores, setValores] = useState(valoresIniciales);
    const [currentId, setCurrentId] = useState(1);
    const { run, nombre, apellido, telefono, correo, fecha, habitacion, diasreserva, metodoPago } = valores
    const cambioInput = (e) => {
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }
    
    const guardar = () => {
        const nuevoValor = {
            ...valores,
            id: currentId
        };
        addNew(nuevoValor)
        setCurrentId(prevId => prevId + 1);
        setValores(valoresIniciales);
    }
    return (
        <>
            <form className="card">
                <div className="card-header text-bg-success ">
                    <h2 className="">Completa El Formulario</h2>
                </div>
                <div className="text-bg-info">
                    <div className="card-body ">
                        <h3>Datos Personales</h3>
                        <div>
                            <label>Run</label>
                            <input
                                type="text"
                                name="run"
                                value={run}
                                onChange={cambioInput}
                                className="form-control" />
                        </div>
                        <div>
                            <label>Nombre</label>
                            <input
                                type="text"
                                name="nombre"
                                value={nombre}
                                onChange={cambioInput}
                                className="form-control" />
                        </div>
                        <div>
                            <label>Apellido</label>
                            <input
                                type="text"
                                name="apellido"
                                value={apellido}
                                onChange={cambioInput}
                                className="form-control" ></input>
                        </div>
                        <div>
                            <label>Telefono</label>
                            <input
                                type="text"
                                name="telefono"
                                value={telefono}
                                onChange={cambioInput}
                                className="form-control" ></input>
                        </div>
                        <div>
                            <label>Email</label>
                            <input
                                type="text"
                                name="correo"
                                value={correo}
                                onChange={cambioInput}
                                className="form-control" ></input>
                        </div>
                        <div> <h3>Datos De Reservacion</h3></div>
                        <div>
                            <label>Fecha De Reservacion</label>
                            <input
                                type="date"
                                name="fecha"
                                value={fecha}
                                onChange={cambioInput}
                                className="form-control"/>
                        </div>
                        <br />
                        <div>
                            <label>Seleccione para cuantas personas quiere su habitacion </label>
                            <select
                            name="habitacion"
                            value={habitacion}
                            onChange={cambioInput}
                            className="form-control"
                            >
                            <option value="">Seleccione la cantidad</option>
                            <option value="Para 1">Para 1</option>
                            <option value="Para 2">Para 2</option>
                            <option value="Para 3">Para 3</option>
                            <option value="Para 4">Para 4</option>
                            <option value="Para 5">Para 5</option>
                            </select>
                        </div>
                        <div>
                            <label>Días de Reserva</label>
                            <input
                            type="number"
                            name="diasreserva"
                            value={diasreserva}
                            onChange={cambioInput}
                            className="form-control"
                            min="1" max="31"
                            />
                        </div>
                        <br />
                        <div>
                            <label>Método de Pago</label>
                            <div>
                                <input
                                    type="radio"
                                    name="metodoPago"
                                    value="efectivo"
                                    checked={metodoPago === 'efectivo'}
                                    onChange={cambioInput}
                                />
                                <label>Efectivo</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="metodoPago"
                                    value="debito"
                                    checked={metodoPago === 'debito'}
                                    onChange={cambioInput}
                                />
                                <label>Débito</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="metodoPago"
                                    value="en_linea"
                                    checked={metodoPago === 'en_linea'}
                                    onChange={cambioInput}
                                />
                                <label>En Línea</label>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
                <div className="card-footer text-end text-bg-info">
                    <input
                        type="button"
                        value="Agregar"
                        onClick={guardar}
                        className="btn btn-success" />
                </div>

            </form>
        </>
    )
}
