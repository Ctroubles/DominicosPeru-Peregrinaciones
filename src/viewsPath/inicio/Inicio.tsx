import style from './Inicio.module.css'
import CardDestinos from '../../components/card/Card'
import { useRef } from 'react'
import Slider from './components/slider/Slider'

const sliderData: Array<{ title: string, url: string }> = [
  {
    title: 'Nazareth',
    url: 'https://res.cloudinary.com/dmwdwipoo/image/upload/v1688965743/logares-600x400/nazareth_jdbayr.png'
  },
  {
    title: 'Basílica de la Anunciación',
    url: 'https://res.cloudinary.com/dmwdwipoo/image/upload/v1688965763/logares-600x400/basilica_de_la_anunciacion_vsd734.png'
  },
  {
    title: 'Mar de Galilea',
    url: 'https://res.cloudinary.com/dmwdwipoo/image/upload/v1688965742/logares-600x400/lago_de_galilea_tjslps.png'
  },
  {
    title: 'Monte Carmelo',
    url: 'https://res.cloudinary.com/dmwdwipoo/image/upload/v1688965743/logares-600x400/monte_carmelo_k12dbs.png'
  },
  {
    title: 'Jaffa',
    url: 'https://res.cloudinary.com/dmwdwipoo/image/upload/v1692495180/logares-600x400/jaffa_yurhiw.jpg'
  },
  {
    title: 'Betania',
    url: 'https://res.cloudinary.com/dmwdwipoo/image/upload/v1692495422/logares-600x400/betania_dapz9t.png'
  },
  {
    title: 'Jericó',
    url: 'https://res.cloudinary.com/dmwdwipoo/image/upload/v1688965743/logares-600x400/jeric%C3%B3_tsyayc.png'
  },
  {
    title: 'Belén',
    url: 'https://res.cloudinary.com/dmwdwipoo/image/upload/v1688861266/square_image_400/bel%C3%A9n_basilica_de_la_natividad_pdzyxl.png'
  },
  {
    title: 'Ain Karem',
    url: 'https://res.cloudinary.com/dmwdwipoo/image/upload/v1688861266/square_image_400/ain_karem_qpwtet.png'
  },
  {
    title: 'Monte de los Olivos',
    url: 'https://res.cloudinary.com/dmwdwipoo/image/upload/v1692496198/logares-600x400/monte_olivos_cqblp6.png'
  },
  {
    title: 'Monte Sión',
    url: 'https://res.cloudinary.com/dmwdwipoo/image/upload/v1692496467/logares-600x400/monte_sion_spywy9.png'
  },
  {
    title: 'Vía Dolorosa',
    url: 'https://res.cloudinary.com/dmwdwipoo/image/upload/v1692496787/logares-600x400/via_dolorosa_ld3hfq.png'
  }

]

const Inicio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = (name: string): void => {
    if (containerRef.current != null) {
      Array.from(containerRef.current?.children).forEach((child: Element) => {
        const childDiv = child
        if (childDiv instanceof HTMLDivElement && childDiv.dataset.name !== name) {
          child.classList.add(style.toCover)
        }
      })
    }
  }

  const handleMouseLeave = (): void => {
    if (containerRef.current != null) {
      Array.from(containerRef.current.children).forEach(child => {
        child.classList.remove(style.toCover)
      })
    }
  }

  return (
        <div id={style.Inicio}>
            <div id={style.container}>
                <div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
                        <Slider
                            DATA ={sliderData}
                        />
                    </div>
                    <div id={style.main}>

                        <div className={style.title}>
                            <h1>
                            Descubre y consolida la Fe en los lugares sagrados.
                            </h1>
                        </div>
                        <div id={style.presentation}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sapiente natus cum, rem, error modi, tenetur nostrum labore ullam ea quas illo ad sit ipsam deleniti? Saepe assumenda blanditiis a.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, dignissimos facere. Debitis nihil cum ducimus dicta hic. Quis minima quos veniam id repudiandae, cum similique officiis! Accusantium laborum non animi.
                            </p>
                            <ul>
                                <li>Un viaje transformador hacia la espiritualidad y la conexión con lo divino.</li>
                                <li>Descubre los lugares sagrados más venerados y experimenta una profunda inmersión en la fe.</li>
                                <li>Nuestro compromiso es brindarte una experiencia inolvidable y enriquecedora.</li>
                            </ul>
                        </div>
                        <div>
                            <div className={style.title}>
                                <h1>
                                Peregrinación a Tierra Santa: Israel y Paelstina
                                </h1>
                            </div>
                            <div>
                                <div id={style.cardContainer}>
                                    <div>
                                        <CardDestinos img={'https://res.cloudinary.com/dmwdwipoo/image/upload/v1688861266/square_image_400/nazareth_q8xosa.png'} title={'Nazareth'}
                                            message={'La Gruta de la Anunciación, ubicada en el interior de la gran Basílica que contiene dos iglesias: inferior y superior. La primera está concebida en dos planos para resaltar la Sagrada Gruta, que es el espacio más sagrado. Es un espacio muy sobrio para favorecer el recogimiento y la contemplación del gran Misterio de la Encarnación del Hijo de Dios.'}
                                        />
                                        <CardDestinos img={'https://res.cloudinary.com/dmwdwipoo/image/upload/v1688965763/logares-600x400/basilica_de_la_anunciacion_vsd734.png'} title={'Basílica de la Anunciación'}
                                            message={'En el emplazamiento de la basílica actual hay vestigios de una iglesia Bizantina de tiempos de Constantino en el siglo IV. El año 614 fue víctima de la invasión persa. El año 670 el peregrino Arculfo encuentra dos iglesias. No tenemos noticias del periodo árabe musulmán. '}
                                        />
                                        <CardDestinos img={'https://res.cloudinary.com/dmwdwipoo/image/upload/v1688965742/logares-600x400/lago_de_galilea_tjslps.png'} title={'Mar de Galilea'}
                                            message={'La Biblia menciona tres mares: el de Galilea, el mar de la Sal y el mar Grande. El más mencionado es el mar de Galilea, llamado también de Genesaret (Kineret, cf. Jos 19,35) o de Tiberíades. En realidad, es un pequeño lago de en torno a 12 x 21 Km, con una profundidad de 45/50 m, una costa de unos 53 km, y a 210 m.b.n.m. El río Jordán ingresa por el norte y sale por el sur hasta desembocar en el mar muerto. A 100 km en línea recta, al nor este está la ciudad de Damasco.'}
                                        />
                                        <CardDestinos img={'https://res.cloudinary.com/dmwdwipoo/image/upload/v1688861268/square_image_400/monte_carmelo_agfuht.png'} title={'Monte Carmelo'}
                                            message={'En el interior del Santuario de la Virgen del Carmen, en el Monte Carmelo, Bajo el altar, se encuentra la gruta que recuerda al profeta Elías. Según una tradición el profeta moró en ella un tiempo en este lugar. Sobre la gruta, preside el Santuario la bella Imagen de la Virgen del Carmen de Stella Maris, con el Niño Jesús en su regazo y entregando su escapulario. Es una imagen muy venerada por los cristianos locales. El lugar es oportuno para renovar nuestro compromiso de fidelidad al Señor, tomando como ejemplo a la Virgen María.'}
                                        />
                                        <CardDestinos img={'https://res.cloudinary.com/dmwdwipoo/image/upload/v1692495180/logares-600x400/jaffa_yurhiw.jpg'} title={'Jaffa'}
                                            message={'JAFFA. La bella, gr. Jope. Ubicada en una Bahía de la costa de Israel, es uno de los mejores puertos antiguos de la región. Durante la repartición de la tierra prometida, el territorio le correspondió a la tribu de Dan, cf. Jos 19,46. Posteriormente se convirtió en ciudad filistea, cf. 2 Cr 2,15, hasta la reconquista del rey David. Hasta hoy conserva vestigios filisteos y egipcios. El convento y la Iglesia franciscana son de 1650.'}
                                        />
                                        <CardDestinos img={'https://res.cloudinary.com/dmwdwipoo/image/upload/v1692495422/logares-600x400/betania_dapz9t.png'} title={'Betania'}
                                            message={'La celebridad de Betania proviene especialmente de la hospitalidad de la familia de Marta, María y Lázaro para con Jesús y del impresionante séptimo signo que allí realizó el Señor, según san Juan: la resurrección de Lázaro. Estos hechos pueden meditarse en el interior del hermoso santuario. '}
                                        />
                                        <CardDestinos img={'https://res.cloudinary.com/dmwdwipoo/image/upload/v1688965743/logares-600x400/jeric%C3%B3_tsyayc.png'} title={'Jericó'}
                                            message={'JERICÓ. Perfume o jardín; Ciudad de las palmeras. Es la ciudad más antigua del mundo, en torno a 11,000 años antes de Cristo, y es también la ciudad más baja, a unos 350 m.b.n.m. Fue la primera población cananea conquistada por los israelitas salidos de Egipto, después de atravesar el Jordán. Los evangelios nos dan a conocer muchas escenas de la vida de Jesús, especialmente en su paso de Galilea a Jerusalén. En el s. IV d. C., hubo aquí sede episcopal. En el s. VII hubo el palacio invernal de los califas. Desde 1924 hay una iglesia franciscana, y desde 1954 una parroquia.'}
                                        />
                                        <CardDestinos img={'https://res.cloudinary.com/dmwdwipoo/image/upload/v1688861266/square_image_400/bel%C3%A9n_basilica_de_la_natividad_pdzyxl.png'} title={'Belén'}
                                            message={'BELÉN. Heb. Betlegem, Casa del Pan. Ciudad muy antigua, aparece ya en el libro del Génesis. Allí está la tumba de Raquel, cf. Gn 35,19s, fue el hogar de Rut, del rey David y del Mesías, cf. Jn 7,42. Se ubica 9 km al sur de Jerusalén, a unos 770 m.s.n.m., entre dos colinas que separan el mar Muerto del Mediterráneo. Allí el rey Herodes contruyó, entre el 22 – 15 a. C., el Herodión, su palacio fortaleza.'}
                                        />
                                        <CardDestinos img={'https://res.cloudinary.com/dmwdwipoo/image/upload/v1688861266/square_image_400/ain_karem_qpwtet.png'} title={'Ain Karem'}
                                            message={'AIN KAREM. O ‘En Kerem, fuente del viñedo. Fuente santificada por las manos de la Virgen María. Lugar de gozos incontenibles donde visitó María a su prima Isabel. Se ubica al oeste de Jerusalén, a 8 km de la ciudad antigua. Los cruzados separaron en dos lugares la Visitación y el Nacimiento de Juan Bautista en dos santuarios. '}
                                        />
                                        <CardDestinos img={'https://res.cloudinary.com/dmwdwipoo/image/upload/v1692496198/logares-600x400/monte_olivos_cqblp6.png'} title={'Monte de los Olivos'}
                                            message={'Se ubica al este de Jerusalén, del otro lado del valle del Cedrón. Jesús en sus visitas a Jerusalén, con frecuencia pasaba la noche aquí, tal vez en Betania, cf. Lc 21,37; 22,39. En este lugar comenzó su entrada triunfal, cf. 19,37s, aquí su sermón escatológico, cf. Mt 24,3. El sufrimiento de su pasión comenzó en un huerto en la falda del Monte, cf. 26,30s, y también su Ascensión, cf. Lc 24,50s; Hech 1,9-12.'}
                                        />
                                        <CardDestinos img={'https://res.cloudinary.com/dmwdwipoo/image/upload/v1692496467/logares-600x400/monte_sion_spywy9.png'} title={'Monte Sión'}
                                            message={'Sión es término para referirse a la Ciudad de David (2 Sam 5,7; 1 Cró 11:5, 1 Re 8,1, 2 Cró 5,2). Después se usó para el monte del Templo. Hoy se usa para la colina sur occidental de Jerusalén antigua, fuera de la muralla. En un sentido amplio se refiere a todo Israel.'}
                                        />
                                        <CardDestinos img={'https://res.cloudinary.com/dmwdwipoo/image/upload/v1692496787/logares-600x400/via_dolorosa_ld3hfq.png'} title={'Vía Dolorosa'}
                                            message={'La Vía Dolorosa es una calle de Jerusalén Antigua, tradicionalmente, parte tradicional del itinerario de Cristo con la Cruz, camino al Calvario. Tiene marcadas nueve de las 14 estaciones del Viacrucis, las últimas están dentro de la Iglesia del Santo Sepulcro.'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ margin: '0 0 0px 0' }}>
                            <div className={style.title}>
                                <h1>
                                    Extensiones de la Peregrinación
                                </h1>
                            </div>
                            <div>
                                <div>
                                    <div id={style.row}>
                                        <div ref={containerRef}>
                                            <div className={style.col_row} onMouseEnter={() => { handleMouseEnter('1') }} onMouseLeave={handleMouseLeave} data-name={1}>
                                                <div>
                                                    <img src={'https://res.cloudinary.com/dmwdwipoo/image/upload/v1692678493/countries/egipto-min_l5ihvx.png'} alt="" title="Egipto"/>
                                                </div>
                                            </div>
                                            <div className={style.col_row} onMouseEnter={() => { handleMouseEnter('2') } } onMouseLeave={handleMouseLeave} data-name={2}>
                                                <div>
                                                    <img src={'https://res.cloudinary.com/dmwdwipoo/image/upload/v1692678493/countries/espa%C3%B1a-min_fpjalc.png'} alt="España" />
                                                </div>
                                            </div>
                                            <div className={style.col_row} onMouseEnter={() => { handleMouseEnter('3') } } onMouseLeave={handleMouseLeave} data-name={3}>
                                                <div>
                                                    <img src={'https://res.cloudinary.com/dmwdwipoo/image/upload/v1692678493/countries/italia-min_szm8nj.png'} alt="" />
                                                </div>
                                            </div>
                                            <div className={style.col_row} onMouseEnter={() => { handleMouseEnter('4') } } onMouseLeave={handleMouseLeave} data-name={4}>
                                                <div>
                                                    <img src={'https://res.cloudinary.com/dmwdwipoo/image/upload/v1692678493/countries/francia-min_d02gfu.png'} alt="" />
                                                </div>
                                            </div>
                                            <div className={style.col_row} onMouseEnter={() => { handleMouseEnter('5') } } onMouseLeave={handleMouseLeave} data-name={5}>
                                                <div>
                                                    <img src={'https://res.cloudinary.com/dmwdwipoo/image/upload/v1692678493/countries/jordania-min_eivtap.png'} alt="" />
                                                </div>
                                            </div>
                                            <div className={style.col_row} onMouseEnter={() => { handleMouseEnter('6') } } onMouseLeave={handleMouseLeave} data-name={6}>
                                                <div>
                                                    <img src={'https://res.cloudinary.com/dmwdwipoo/image/upload/v1692678493/countries/medjugore-min_c9hndg.png'} alt="Medjugore" />
                                                </div>
                                            </div>
                                            <div className={style.col_row} onMouseEnter={() => { handleMouseEnter('7') } } onMouseLeave={handleMouseLeave} data-name={7}>
                                                <div>
                                                    <img src={'https://res.cloudinary.com/dmwdwipoo/image/upload/v1692678494/countries/portugal-min_hmgywd.png'} alt="Portugal" />
                                                </div>
                                            </div>
                                            <div className={style.col_row} onMouseEnter={() => { handleMouseEnter('8') }} onMouseLeave={handleMouseLeave} data-name={8}>
                                                <div>
                                                    <img src={'https://res.cloudinary.com/dmwdwipoo/image/upload/v1692678494/countries/turqu%C3%ADa-min_tgbqiz.png'} alt="Turquía" />
                                                </div>
                                            </div>
                                            <div className={style.col_row} onMouseEnter={() => { handleMouseEnter('9') }} onMouseLeave={handleMouseLeave} data-name={9}>
                                                <div>
                                                    <img src={'https://res.cloudinary.com/dmwdwipoo/image/upload/v1692678493/countries/egipto-min_l5ihvx.png'} alt="Egipto" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Inicio
