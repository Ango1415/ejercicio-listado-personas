console.log('Script App')

const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Karla', 'Lara'),
]

function mostrarPersonas(){
    console.log('Ejecutando método mostrar personas')
    let texto = ''
    for(let persona of personas){
        console.log(persona)
        texto += `<li>${persona.nombre} ${persona.apellido} </li>`
    }
    document.getElementById('personas').innerHTML = texto
}

function agregarPersona(){
    console.log('Ejecutando método agregar personas')

    const formulario = document.getElementById('formulario')
    const campoNombre = formulario['nombre']
    const campoApellido = formulario['apellido']

    if(campoNombre.value === '' || campoApellido.value === ''){
        console.log('Los campos "Nombre" y "Apellido" NO deben estar vacíos')
        alert('Los campos "Nombre" y "Apellido" NO deben estar vacíos')
    } else{
        const persona = new Persona(campoNombre.value, campoApellido.value)
        console.log(persona)
        personas.push(persona)
        mostrarPersonas()
        campoNombre.value = ''
        campoApellido.value = ''
    }
}