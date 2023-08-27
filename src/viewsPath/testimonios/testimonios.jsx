import { useEffect, useRef, useState } from 'react'
import CardsTesti from './cardsTestimonios/cardsTesti'
import style from './testimonios.module.css'

const Testimonos = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const refContainer = useRef(null)

  useEffect(() => {
    if ('ResizeObserver' in window) {
      const resizeObserver = new ResizeObserver(entries => {
        for (const entry of entries) {
          // Actualizamos las dimensiones en el estado del componente
          setDimensions({
            width: entry.contentRect.width,
            height: entry.contentRect.height
          })
        }
      })

      // Observamos el elemento de referencia
      resizeObserver.observe(refContainer.current)

      // Limpiamos después de usar
      return () => {
        resizeObserver.disconnect()
      }
    } else {
      // Si ResizeObserver no está disponible, podemos recurrir a los eventos de resize de la ventana
      const handleResize = () => {
        setDimensions({
          width: refContainer.current.offsetWidth,
          height: refContainer.current.offsetHeight
        })
      }
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  useEffect(() => {
    // console.log(dimensions)
  }, [dimensions])

  return (
        <div id={style.Testimonios}>
            <div>
                <div id={style.tittle}>
                    <h2>
                        LO QUE DICE LA GENTE QUE HA FORM<span>ADO PARTE DE NUESTRAS PEREGRINACIONES</span>
                    </h2>
                </div>
            </div>
            <div id={style.contenedor} ref={refContainer}>
                <CardsTesti dimensions={dimensions.width} date={2} score={4} name={'Carla Esmeralda García'} message={'Mi experiencia de peregrinación fue realmente milagrosa. Me trajo paz, alegría y un sentido renovado de propósito en mi vida. Es una experiencia que todos los católicos deberían vivir. Mi experiencia de peregrinación fue realmente milagrosa. Me trajo paz, alegría y un sentido renovado de propósito en mi vida. Es una experiencia que todos los católicos deberían vivir. Mi experiencia de peregrinación fue realmente milagrosa. Me trajo paz, alegría y un sentido renovado de propósito en mi vida. Es una experiencia que todos los católicos deberían vivir. Mi experiencia de peregrinación fue realmente milagrosa. Me trajo paz, alegría y un sentido renovado de propósito en mi vida. Es una experiencia que todos los católicos deberían vivir.'}/>
                <CardsTesti dimensions={dimensions.width} date={3} score={5} name={'Carlos Vargas Vargas Vargas Vargas'} message={'La peregrinación fue una experiencia que cambió mi vida. Nunca había sentido una conexión tan fuerte con mi fe y la comunidad católica.'}/>
                <CardsTesti dimensions={dimensions.width} date={3} score={4} name={'Paula Mendoza'} message={'La peregrinación fue una experiencia espiritual profunda que me permitió fortalecer mi relación con Dios. Lo recomendaría a cualquier persona en busca de una mayor comprensión de su fe. La peregrinación fue una experiencia espiritual profunda que me permitió fortalecer mi relación con Dios. Lo recomendaría a cualquier persona en busca de una mayor comprensión de su fe.'}/>
                <CardsTesti dimensions={dimensions.width} date={4} score={3} name={'Raúl Guzmán'} message={'Fui a la peregrinación en un momento difícil de mi vida y encontré consuelo y guía. Fue una experiencia que me ayudó a sana.'}/>
                <CardsTesti dimensions={dimensions.width} date={6} score={5} name={'Carmen Salazar'} message={'Nunca olvidaré las emociones que sentí durante la peregrinación. Fue un tiempo de renovación espiritual y crecimiento personal.'}/>
                <CardsTesti dimensions={dimensions.width} date={7} score={4} name={'Juan Martínez'} message={'La peregrinación me brindó una nueva perspectiva de mi fe. Fue una oportunidad para meditar, orar y conectarme con otros católicos de todo el mundo.'}/>
                <CardsTesti dimensions={dimensions.width} date={8} score={3} name={'Andrea Peña'} message={'Participar en la peregrinación fue un viaje increíblemente gratificante. La belleza de los lugares sagrados y la sensación de comunidad con otros peregrinos fue muy inspiradora.'}/>
                <CardsTesti dimensions={dimensions.width} date={8} score={5} name={'Sergio Castillo'} message={'Fui a la peregrinación con dudas y miedos, pero volví con un corazón lleno de paz y amor. Realmente fue una experiencia transformadora.'}/>
                <CardsTesti dimensions={dimensions.width} date={9} score={4} name={'Luisa Fernández'} message={'La peregrinación me permitió tener un tiempo para reflexionar y conectar con Dios de una manera que no creí posible. Fue una bendición en mi vida.'}/>
                <CardsTesti dimensions={dimensions.width} date={12} score={5} name={'Pedro Navarro'} message={'Participar en la peregrinación fue uno de los momentos más emocionantes de mi vida. Las ceremonias, los paisajes, la camaradería, todo fue simplemente increíble.'}/>
            </div>
        </div>
  )
}

export default Testimonos
