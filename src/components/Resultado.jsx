import { useMemo, useRef } from "react" //para evitar la recarga si cambio los datos
import useCotizador from "../hooks/useCotizador"
import {MARCAS, PLANES} from '../constants'

const Resultado = () => {
    const {resultado, datos} = useCotizador()
    const {marca, plan, year} = datos
    const yearRef = useRef(year) //evita el render del año si cambio el dato elegido

    const [nombreMarca] = useMemo(() => MARCAS.filter(m => m.id === Number(marca)), [resultado]) //extraer el nombre de la marca seleccionada
    const [nombrePlan] = useMemo(() =>PLANES.filter(p => p.id === Number(plan)), [resultado]) 

    if(resultado === 0) {
        return null
    }
  return (
    <div className="bg-gray-100 text-center mt-5 0-5 shadow">
            <h2 className="text-gray-600 font-black text-3xl">
                Resumen
            </h2>
            <p className="my-2">
                <span className="font-bold">Marca: </span>
                {nombreMarca.nombre}
            </p>
            <p className="my-2">
                <span className="font-bold">Plan: </span>
                {nombrePlan.nombre}
            </p>
            <p className="my-2">
                <span className="font-bold">Año del Auto: </span>
                {year}
            </p>
            <p className="my-2 text-2xl">
                <span className="font-bold">Total Cotización: </span>
                {resultado}
            </p>
    </div>
  )
}

export default Resultado