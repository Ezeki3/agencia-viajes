
const guardarTestimonial = (req, res) => {

  // Validar...

  const { nombre, correo, mensaje } =  req.body;
  
  const errores = [];

  if (nombre.trim() === '' ) { 
    errores.push({ mensaje: 'El Nombre esta vacío' });
  }
  if (correo.trim() === '' ) { 
    errores.push({ mensaje: 'El Correo esta vacío' });
  }
  if (mensaje.trim() === '' ) { 
    errores.push({ mensaje: 'El Mensaje esta vacío' });
  }

  console.log(errores);
}

export {
  guardarTestimonial
}