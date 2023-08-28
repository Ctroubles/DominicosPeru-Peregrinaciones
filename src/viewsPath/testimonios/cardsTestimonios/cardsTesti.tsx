import style from './cardsTesti.module.css'
import user from '../../../assets/temporal/user1.svg'
import { useState, useRef, useEffect } from 'react'

interface Props {
  name: string
  message: string
  score: number
  date: string
  dimensionsWidth: number
}

const CardsTesti: React.FC<Props> = ({ name, message, score, date, dimensionsWidth }: Props) => {
  const parrafoRef = useRef<HTMLParagraphElement>(null)

  const [height, setHeight] = useState<number>(80)
  const [open, setOpen] = useState(false)
  const [ellipsis, setEllipsis] = useState(false)

  useEffect(() => {
    if (parrafoRef.current !== null) {
      parrafoRef.current.style.webkitLineClamp = 'initial'
      parrafoRef.current.style.height = 'auto'
      if (open) {
        setHeight(parrafoRef.current.scrollHeight < 80 ? 80 : parrafoRef.current.scrollHeight)
      } else {
        setHeight(80)
        setTimeout(() => {
          if (parrafoRef.current != null) {
            parrafoRef.current.style.webkitLineClamp = '3'
          }
        }, 300)
      }
    }
  }, [open])

  useEffect(() => {
    if (parrafoRef.current != null) {
      const maxHeight = 78
      parrafoRef.current.style.webkitLineClamp = 'initial'
      parrafoRef.current.style.height = 'auto'
      if (parrafoRef.current.scrollHeight > maxHeight) {
        setEllipsis(true)
        if (!open) {
          parrafoRef.current.style.webkitLineClamp = '3'
        }
      } else {
        setEllipsis(false)
        parrafoRef.current.style.webkitLineClamp = 'initial'
      }
    }
  }, [dimensionsWidth])

  return (
        <div id={style.Card}>
            <div className={ellipsis ? style.extendedBottom : undefined}>
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
                                                <button onClick={() => { setOpen(true) }}>Leer más</button>
                                                )
                                              : (
                                                <button onClick={() => { setOpen(false) }}>Leer menos</button>
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
