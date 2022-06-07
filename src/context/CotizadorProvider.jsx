import { useState, createContext } from 'react'
import {obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero} from '../helpers'

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => { //CotizadorProvider es donde salen los datos

    const [datos, setDatos] = useState({
        marca:'',
        year:'',
        plan:''
    })

    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)

    const handleChangeDatos = e => {
        setDatos({
            ...datos, //toma una copia de los datos actuales
            [e.target.name] : e.target.value //reescribe el valor del input
        })
    }

    const cotizarSeguro = () => {
            //una base
            let resultado = 2000

            //obtener diferencia de años
            const diferencia = obtenerDiferenciaYear(datos.year)

            //restar 3% por cada año para la base del valor del auto
            resultado -= ((diferencia * 3) * resultado) / 100 

            //europeo 30%
            //americano 15%            
            //asiatico 5%
            resultado *= calcularMarca(datos.marca)

            //plan básico 20%
            //plan completo 50%
            resultado *= calcularPlan(datos.plan)
            
            //formatear Dinero
            resultado = formatearDinero(resultado)
            
            setCargando(true)
            setTimeout(() => {
                setResultado(resultado)
                setCargando(false)
            },3000);
            
    }
    
    return(
        //va a rodear todo el contenido de la app por eso el children va dentro
        <CotizadorContext.Provider
        value={{ //todo que se agrega aquí se hace disponible para todos los componentes de la app que estén dentro del provider           
            datos,
            handleChangeDatos, 
            error,
            setError, 
            cotizarSeguro,
            resultado,
            cargando
        }}
        > 
            {children}
        </CotizadorContext.Provider>
    )
}


export {
    CotizadorProvider
}

export default CotizadorContext