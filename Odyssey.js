function mensajeususario(){
    alert('Disculpe estimado ususario este botón se encuentra inactivo de momento')
}

window.addEventListener("load", () => {
    let botonesInactivos = document.querySelectorAll(".button-dontfond")
    botonesInactivos.forEach(boton => {
        boton.addEventListener("click", mensajeususario)
    })
})

