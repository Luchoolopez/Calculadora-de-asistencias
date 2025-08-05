function CalcularPorcentaje() {
    const totalClases = parseFloat(document.getElementById('totalClases').value);
    const inasistencias = parseFloat(document.getElementById('inasistencias').value);

    if (isNaN(totalClases) || isNaN(inasistencias)) {
        alert('Por favor ingresa números válidos');
        return;
    }

    if (totalClases <= 0) {
        alert('El total de clases debe ser mayor que 0');
        return;
    }

    if (inasistencias < 0) {
        alert('Las inasistencias no pueden ser negativas');
        return;
    }

    if (inasistencias > totalClases) {
        alert('Las inasistencias no pueden ser mayores que el total de clases');
        return;
    }

    const asistencias = totalClases - inasistencias;
    const porcentajeAsistencia = (asistencias * 100) / totalClases;

    // Mostrar resultado (con 2 decimales)
    document.getElementById('resultado').innerHTML = 
        `El porcentaje de asistencia del alumno es de: ${porcentajeAsistencia.toFixed(2)}%<br>
        El porcentaje de inasistencias del alumno es de: ${100 - porcentajeAsistencia.toFixed(2)}%`;
}