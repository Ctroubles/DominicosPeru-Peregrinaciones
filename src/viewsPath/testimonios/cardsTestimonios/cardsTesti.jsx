import style from './cardsTesti.module.css'
import user from '../../../assets/temporal/user1.svg'
import { useState, useRef, useEffect } from 'react'



const CardsTesti = ({ name, message, score, date, dimensions }) => {
  const parrafoRef = useRef(null)
  const [height, setHeight] = useState(false)
  const [open, setOpen] = useState(false)
  const [ellipsis, setEllipsis] = useState(false)

  useEffect(() => {
    parrafoRef.current.style.webkitLineClamp = null
    parrafoRef.current.style.height = 'auto'
    if (open) {
      setHeight(parrafoRef.current.scrollHeight)
    } else {
      setHeight(80)
      setTimeout(() => {
        parrafoRef.current.style.webkitLineClamp = 3
      }, 300)
    }
  }, [open])

  useEffect(() => {
    if (parrafoRef.current) {
      const maxHeight = 75
      parrafoRef.current.style.webkitLineClamp = null
      parrafoRef.current.style.height = 'auto'
      if (parrafoRef.current.clientHeight > maxHeight) {
        setEllipsis(true)
        if (!open) {
          parrafoRef.current.style.webkitLineClamp = 3
        }
      } else {
        setEllipsis(false)
        parrafoRef.current.style.webkitLineClamp = null
      }
    }
  }, [dimensions])

  return (
        <div id={style.Card}>
            <div className={ellipsis ? style.extendedBottom : null}>
                <div id={style.container}>
                    <div id={style.rightSection}>
                        <div id={style.imgContainer}>
                            <img src={user} alt="" />
                        </div>
                        <div>
                            <div>
                                <div id={style.starsContainer}>
                                    {

                                        [...Array(5)].map((_, i) => <span className={i > score - 1 ? style.deactivated : undefined} key={i}></span>)
                                    }
                                </div>
                            </div>
                            <div className={style.dataMessage}>
                                <div>
                                    <span>
                                        hace {date} meses
                                    </span>
                                </div>
                                <div>
                                    <label>
                                        {name}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id={style.leftSection}>
                        <div id={style.sign}>
                        </div>
                        <div style={{ position: 'relative', paddingTop: '5px' }}>
                            <div style={{ overflow: 'hidden', transition: 'height 0.3s ease', height: `${height}px` }}>
                                <p ref={parrafoRef}>
                                    {message}
                                </p>
                            </div>
                            {
                                ellipsis
                                  ? (
                                    <div id={style.verHandlerButton}>
                                        {
                                            !open
                                              ? (
                                                <button onClick={() => setOpen(true)}>Leer más</button>
                                                )
                                              : (
                                                <button onClick={() => setOpen(false)}>Leer menos</button>
                                                )
                                        }
                                    </div>
                                    )
                                  : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CardsTesti
