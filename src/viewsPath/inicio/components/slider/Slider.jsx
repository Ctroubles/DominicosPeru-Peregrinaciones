import style from './Slider.module.css'
import arrow from '../../../../assets/icons/arrow.svg'
import { useState, useEffect, useLayoutEffect } from 'react'

const SLIDER_DURATTION = 1600

const Slider = ({ DATA }) => {
  const [imagenes] = useState([DATA[DATA.length - 1], ...DATA, DATA[0]])
  const [imagesArr, setIamgesArr] = useState([])
  const [titlesArr, setTitlesArr] = useState([])

  const [cooldown, setCooldown] = useState(false)
  const [reset, setReset] = useState(true)
  const [isPaused, setIsPaused] = useState(true)
  const [position, setPosition] = useState(1)
  const [exactPosition, setExactPosition] = useState(1)
  const [sliderStyle, setSliderStyle] = useState({})

  useLayoutEffect(() => {
    const images = DATA.map(e => e)
    const titles = DATA.map(e => e.title)

    setTitlesArr(titles)
    setIamgesArr(images)
  }, [DATA])

  useEffect(() => {
    if (position >= imagenes.length - 1) {
      setExactPosition(1)
    } else if (position <= 0) {
      setExactPosition(imagesArr.length)
    } else {
      setExactPosition(position)
    }
  }, [position])

  const forwardHandler = () => {
    if (cooldown) return
    setReset(!reset)
    setSliderStyle({
      transition: `transform ${SLIDER_DURATTION}ms ease-in-out`
    })
    setPosition(position + 1)
    setCooldown(true)
    setTimeout(() => {
      setCooldown(false)
    }, SLIDER_DURATTION)
  }

  const backwardHandler = () => {
    if (cooldown) return
    setReset(!reset)
    setSliderStyle({
      transition: `transform ${SLIDER_DURATTION}ms ease-in-out`
    })
    setPosition(position - 1)
    setCooldown(true)
    setTimeout(() => {
      setCooldown(false)
    }, SLIDER_DURATTION)
  }

  const dotsHandler = (pos) => {
    if (cooldown) return
    setReset(!reset)
    setSliderStyle({
      transition: `transform ${SLIDER_DURATTION}ms ease-in-out`
    })
    setPosition(pos)
    setCooldown(true)
    setTimeout(() => {
      setCooldown(false)
    }, SLIDER_DURATTION)
  }

  useEffect(() => {
    let intervalo = null
    if (!isPaused) {
      intervalo = setInterval(() => {
        setSliderStyle({
          transition: `transform ${SLIDER_DURATTION}ms ease-in-out`
        })
        setPosition(position => position + 1)
        setCooldown(true)
        setTimeout(() => {
          setCooldown(false)
        }, SLIDER_DURATTION)
      }, 12000)
    }

    return () => {
      if (intervalo !== null) {
        clearInterval(intervalo)
      }
    }
  }, [cooldown, isPaused])

  function imageLoaded ({ target }) {
    const parent = target.parentElement
    if (parent) {
      parent.classList?.add(style.loaded)
      setIsPaused(false)
    }
  }

  useEffect(() => {
    if (position >= imagenes.length - 1) {
      setTimeout(() => {
        setSliderStyle({
          transition: 'transform 0ms ease'
        })
        setPosition(1)
      }, SLIDER_DURATTION)
    } else if (position <= 0) {
      setTimeout(() => {
        setSliderStyle({
          transition: 'transform 0ms'
        })
        setPosition(imagenes.length - 2)
      }, SLIDER_DURATTION)
    }
  }, [position])

  return (
        <div id={style.Slider}>
            <div id={style.marco}>
                <div id={style.container} style={{ ...sliderStyle, transform: `translateX(calc(-100% * ${position}))` }}>
                    {
                        imagenes.map((e, i) => (
                            <div id={style.imgHeader} key={`${i} - ${e.title}`}>
                                <img title={e.title} src={e.url} alt={e.url} onLoad={(event) => imageLoaded(event)}/>
                            </div>
                        ))
                    }

                </div>
            </div>
            <div className={style.arrows}>
                <div>
                    <img src={arrow} alt="" onClick={() => backwardHandler()}/>
                </div>
            </div>
            <div className={style.arrows} id={style.leftArrow}>
                <div>
                    <img src={arrow} alt="" onClick={() => forwardHandler()}/>
                </div>
            </div>
            <div id={style.sliderDots}>
                <div onClick={() => setIsPaused(!isPaused)}>
                    {
                        isPaused
                          ? (
                            <div className={style.icon_play}>
                                <div className={style.triangle_right}></div>
                            </div>
                            )
                          : (
                            <div className={style.icon_pause}>
                                <div className={style.rectangle}></div>
                                <div className={style.rectangle}></div>
                            </div>
                            )
                    }
                </div>
                {
                    titlesArr.map((e, i) => (
                        <span key={i} id={exactPosition === i + 1 ? style.activeDot : undefined} onClick={() => dotsHandler(i + 1)} title={e}></span>
                    ))
                }
            </div>
        </div>
  )
}

export default Slider
