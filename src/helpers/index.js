//para obtener la diferencia con el año actual
export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year
}

export function calcularMarca(marca) {
    let incremento;

    switch (marca) {
        case'1':
            incremento = 1.30;
            break;
            case'2':
            incremento = 1.15;
            break;
            case'3':
            incremento = 1.05;
            break;
            default:
            break;
    }
    return incremento;
}

export function calcularPlan(plan) {
    return (plan ==='1') ? 1.20 : 1.50
}

export function formatearDinero(cantidad) {
    return cantidad.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
}