import { Testimonial } from "../models/Testimonial.js";

const guardarTestimonial = async (req, res) => {

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

  if(errores.length > 0){

    // Consultar testimoniales existentes
    const testimoniales = await Testimonial.findAll();

    // Mostar la vista con errores
    res.render('testimoniales', {
      pagina: 'Testimoniales',
      errores,
      nombre,
      correo,
      mensaje,
      testimoniales,
    })

  } else {
    // Almacenar la info en la base de datos
    try {
      await Testimonial.create({
        nombre,
        correo,
        mensaje
      });

      res.redirect('/testimoniales');
    } catch (error) {
      console.log(error);
    }
  }

}

export {
  guardarTestimonial
}