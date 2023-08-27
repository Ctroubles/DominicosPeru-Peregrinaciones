import style from './peregrinacacion.module.css'
// peregrionaciones dominicanas
const Peregrinacion = () => {
  return (
        <div id={style.Peregrinacion}>
            <div id={style.container}>
                <div id={style.title}>
                    <h1>Tras los pasos de Jesús</h1>
                    <span>Febrero - marzo, 2024</span>
                </div>
                <div className={style.boxes}>
                    <div>
                        <label className={style.dayTitle} style={{ padding: '20px 0 0 0' }}>
                            <strong>
                                Día 1:
                            </strong>
                            Aeropuerto. Vuelvo a Madrid IB... Legada a las ... <span>Vuelos y horarios para confirmar.</span>
                        </label>
                    </div>
                    <div>
                        <label className={style.dayTitle}>
                            <strong>
                                Día 2:
                            </strong>
                            Salida de Madrid a Tel Aviv... Trámites migratorios y traslado a Nazaret (entrega de auriculares e indetifiaciones), llegada a la 4:00, instalación en el Hoter. <span>Vuelos, horarios y hoteles para confirmar.</span>
                        </label>
                        <div className={style.dayContent}>
                            <div className={style.imgAndDescription}>
                                <h4>NAZARET</h4>
                                <div className={style.floatContainer}>
                                    <img src="https://res.cloudinary.com/dmwdwipoo/image/upload/v1688965743/logares-600x400/nazareth_jdbayr.png" alt="" />
                                    <div>
                                        <p>

                                            “La Palabra de Dios se hizo hombre y habitó entre nosotros” (Jn 1,14)
                                            <br />
                                            TEXTOS BÍBLICOS PARA LA PEREGRINACIÓN
                                            Lucas 1-2 y 4; Mateo 2 y 4; Jn 1.
                                            <br />
                                            ESPACIO CENTRAL
                                            <br />
                                            La Gruta de la Anunciación, ubicada en el interior de la gran Basílica que contiene dos iglesias: inferior y superior. La primera está concebida en dos planos para resaltar la Sagrada Gruta, que es el espacio más sagrado. Es un espacio muy sobrio para favorecer el recogimiento y la contemplación del gran Misterio de la Encarnación del Hijo de Dios.

                                        </p>
                                        <p>
                                            Los recuerdos encontrados en esta ciudad hacen de Nazaret uno de los lugares más sagrados del mundo y, sin embargo, no son las únicas cosas memorables que se presentan ante los ojos o la mente del peregrino en estos lugares. Prácticamente no hay rincón que no recuerde algo de Jesús, el que vivió aquí.
                                            Su infancia y juventud, su vida en la pobreza, en la alegría y en la custodia de la familia, y aquí aprendió, trabajó, oró.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className={style.dayTitle}>
                            <strong>
                                Día 3:
                            </strong>
                            Inicia la peregrinación en Nazareth
                        </label>
                        <div className={style.dayContent}>
                            <p className={style.underLine}>Visitas: Fuente de María, Basílica de la Anunciación y San José, Misa...</p>
                            <div className={style.imgAndDescription} style={{ margin: '0 0 0 auto' }}>
                                <h4>
                                    La fuente de la Virgen y la iglesia de San Gabriel
                                </h4>
                                <div className={style.floatContainer}>
                                    <img src="https://res.cloudinary.com/dmwdwipoo/image/upload/v1688965763/logares-600x400/la_fuente_de_la_Virgen_y_la_iglesia_de_San_Gabriel_lpelzv.png" alt="" />
                                    <div>
                                        <p>
                                            LA FUENTE DE MARÍA. O “Manantial de la Virgen”. Fundados en tradiciones apócrifas algunos indican aquí la aparición del Ángel a la virgen María y la Anunciación.
                                        </p>
                                        <p>
                                            En la calle que sube al norte, hacia Canaán, se cruza "la fuente de la Virgen", muy querida por los nazarenos, que por siglos han visto a las mujeres del pueblo, llevando jarras, recoger el agua, como la tradición decía que María también lo hacía.
                                        </p>
                                     </div>
                                </div>
                            </div>
                            <div className={style.imgAndDescription}>
                                <h4>
                                    Basílica de la Anunciación
                                </h4>
                                <div className={style.floatContainer}>
                                    <img src="https://res.cloudinary.com/dmwdwipoo/image/upload/v1688965763/logares-600x400/basilica_de_la_anunciacion_vsd734.png" alt="" />
                                    <div>
                                        <p>
                                            En el emplazamiento de la basílica actual hay vestigios de una iglesia Bizantina de tiempos de Constantino en el siglo IV. El año 614 fue víctima de la invasión persa. El año 670 el peregrino Arculfo encuentra dos iglesias. No tenemos noticias del periodo árabe musulmán.
                                            <br />
                                            Durante el tiempo de las Cruzadas, el Reino latino reconstruye el templo destruido y se convierte en sede episcopal.
                                            <br />
                                            El año 1260 el Sultán Baibars demuele el templo de la Anunciación y del Tabor. En el siglo XIV llegan los franciscanos, pero serán expulsados.
                                            <br />
                                            El año 1620 los franciscanos reactiva culto en la Anunciación y en el Tabor, llegan a Nazaret maronitas y melquitas.
                                            <br />
                                            El año 1730 se edifica una pequeña iglesia, en 1877 se agranda.
                                            <br />
                                            La gran basílica actual inicia su construcción en 1959, se inaugura en 1969 y es obra del Arquitecto italiano Giovanni Muzio.
                                        </p>
                                        <p>
                                            La Gruta de la Anunciación está rodeada de un barrera de hierro forjado y solapada por un pabellón suspendido, decorado con relieves en cobre dorado, que ilustra la escena de la Anunciación. La Gruta de la Anunciación se abre como un pequeño santuario, lugar del Anuncio del Ángel Gabriel a María.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.imgAndDescription} style={{ margin: '0 0 0 auto' }} >
                                <h4>Iglesia de San José</h4>
                                <div className={style.floatContainer}>
                                    <img src="https://res.cloudinary.com/dmwdwipoo/image/upload/v1688965764/logares-600x400/iglesia_san_Jos%C3%A9_ysffcs.png" alt="" />
                                    <div>
                                        <p>
                                            LA igleasia de San José o también Iglesia de la Sagrada Familia. La actual es de 1914. Un espacio muy particular es también su cripta con importantes vestigios arqueológicos.
                                        </p>
                                        <p>
                                            Santuario dedicado a la conmemoración de San José, esposo de María y padre putativo de Jesús. La tradición antigua une a esta Basílica el recuerdo de la casa del carpintero de Nazaret. Entre los testimonios más antiguos se indica la del peregrino Arculfo (siglo VII), que habla de la existencia de un Santuario llamado de la Nutrición. Aquí Jesús es criado y educado por sus padres. La otra tradición une el lugar a la “tienda de José”, memoria que los franciscanos recuperaron a su llegada a Nazaret en el siglo XVII.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={style.imgAndDescription}>
                                <h4>
                                    TABOR
                                </h4>
                                <div>
                                    <p className={style.underLine}>Visitas: Monte Tabor y Caná de Galilea, renovación matrimonial.</p>
                                </div>
                                <div className={style.floatContainer}>
                                    <img src={'https://res.cloudinary.com/dmwdwipoo/image/upload/v1688965743/logares-600x400/monte_trabor_g3bpb4.png'} alt="" />
                                    <div className={style.textSection}>

                                        <p>
                                        “Éste es mi Hijo amado escúchenle” (Mc 9,7)
                                        <br />
                                        TEXTOS BÍBLICOS:
                                        <br />
                                        Mateo 17,1-14; Marcos 9; Lucas 9; 2 Pedro 1,16-19; Mateo 28,16-20.
                                        <br />
                                        Otros textos:
                                        <br />
                                        Jos 19:12.22; 4,6.12.14; 8,18; 1S 10,3; 1Cr 6,77; Sal 89,12; Jer 46; Os 5,1.
                                        <br />
                                        ESPACIO CENTRAL:
                                        <br />
                                        Al final del interior de la hermosa actual basílica construida en 1924, bajando unas escalinatas hay un espacio oportuno para contemplar el misterio de la Transfiguración, con la ayuda de diversos modos como Jesús está hoy transfigurado, y para escuchar e interiorizar el mandato del Padre.
                                        <br />
                                        <br />
                                        LO QUE TIENES QUE SABER:
                                        <br />
                                        En la Sagrada Escritura los Montes son lugares especiales para el encuentro con Dios y donde el Señor se revela a sus hijos. Aquí la importancia de los montes: Sinaí, Carmelo, Tabor, Sión, Olivos, Bienaventuranzas, etc.
                                        El monte Tabor está ubicado, como un ombligo, en medio del valle Esdrelón, a 588 m.s.n.m. Su planicie es de unos 1200 m. x 400m. Y a 400 m. sobre el valle.
                                        En la Biblia hay muchas referencias al lugar. Fue sagrado para los cananeos. Estuvo en el límite del territorio de las tribus Isacar, Zabulón, Neftalí y Manasés (cf. Jos 19,22); aquí fue la victoria de Barak (cf. Jue 4-5). Ver Gedeón 8,18-19. Es mnecionado por el profeta Jr 46,18; el Sal 89,13 y Os 5,1-2 condena el culto idolátrico.
                                        La Biblia no menciona que aquí se haya dado la Transfiguración. Es la tradición arraigada en el Apócrifo de los 12 Apóstoles (s. I), Orígenes (185-285), Eusebio de Cesarea, san Cirilo de Jerusalén, y san Jerónimo. El Concilio de Constantinopla del año 533 erigió aquí una sede episcopal.
                                        Los Bizantinos construyeron aquí iglesias y monasterios. El caudillo cruzado Tancredo confió el lugar a los monjes benedictinos que se quedaron hasta la llegada de Saladino.
                                        Fue una fortaleza de defensa para los cruzados. El Papa Inocencio IV en 1253 encomendó el lugar a los Hospitalarios de San Juan y en 1263 el Sultán Bibars lo destruye.
                                        El año 1631 se establecen aquí los franciscanos. La basílica actual basílica es de 1924, de estilo romano-siríaco.
                                        <br />
                                        <br />
                                        OTROS LUGARES:
                                        <br />
                                        Desde la cima del Monte Tabor se puede contemplar un hermoso panorama, si tenemos la suerte de contar con un buen clima, desde allí podermos observar: el Monte Hermón (2800 m.s.n.m), el Lago de Tiberíades, Nazaret, el valle Esdrelón, Gelboé, Ein Dor, Naín y Sulán (cf. 1R 1,3-15; 2R 4).
                                        <br />
                                        ADEMÁS. Restos del monasterio cruzado, el convento y la hospedería Franciscana, la capilla Descendentibus, la Iglesia de san Elías, griego-ortodoxo. Al pie del Monte Daburie, cf. Mc 9,14-29.
                                        <br />
                                        <br />

                                        CANÁ
                                        <br />
                                        “Hagan lo que Él les diga” (Jn 2,5)
                                        <br />
                                        TEXTOS BÍBLICOS
                                        Juan 1, 47-51; 2; 4,43-54.
                                        <br />
                                        LUGAR CENTRAL:
                                        <br />
                                        Detrás del presbiterio del pequeño santuario hay un lienzo en el que está representado el primero de los siete signos del Evangelio de San Juan: la transformación del agua en el mejor vino. El lugar es propicio escuchar la voz de la Madre y guardar en el corazón lo que Ella pidió a los servidores de la boda.
                                        <br />
                                        LO QUE TIENES QUE SABER
                                        Aquí Jesús realizó su primer signo. A petición de su madre, convirtió el agua en vino. Así manifestó su gloria divina y suscitó la fe de sus discípulos. De aquí también fue el apóstol Bartolomé (Natanael), del quién dijo Jesús: “un israelita de verdad…” (Jn 1,47).
                                        <br />
                                        Después de rescatar el lugar los franciscanos construyeron una pequeña iglesia en 1880, y en 1885 construyeron el actual santuario, a 100 mts. de capilla de San Bartolomé.
                                        <br />
                                        La ubicación exacta de Caná es discutida. Hoy lo más común es identificarla con el pueblo árabe-israelí Kafar Kanna, a 10 km de Nazaret. En época bizantina y cruzada parece que los peregrinos lo identificaban con Khirbet Qana, más al norte. Otros la han propuesto hasta en el Líbano.
                                        <br />
                                        OTROS LUGARES CERCANOS:
                                        <br />
                                        SÉFORIS. Antigua ciudad de Galilea. Probablemente, establecimiento militar asirio del s. VII a. C., continuó con los babilonios, persas y seleúcidas. Ocupada por los macabeos el 104 a. C. Antígono III de Macedonia estableció una guarnición para hacer frente a Herodes I, y la ocupó el 37 a. C. Incendiada a principios de la era cristiana, restaurada por Herodes Antipas, que le dio el estatus de ciudad independiente, con el nombre de Autocratis. En tiempos de Nerón se estableció en ella la residencia de los reyes judíos.
                                        <br />
                                        Es probable que los padres de la Virgen María, fueron nativos de Séforis. Estructuras notables: teatro romano y dos iglesias cristianas primitivas. No se unió a la primera guerra judeo-romana en el 66, por lo que la llamaron Eirenopolis (ciudad de la paz). Cambió de nombre el 125, Diocesarea. Fue refugio judío tras la revuelta de Bar Kochbá el 132. Después protagonizó la rebelión de Diocesarea (351-352). El 635 ocupada por los árabes, durante la expansión del islam. Se incorporó al Estado de Israel en 1948.
                                        <br />
                                        </p>
                                        <p>
                                            Tabor era un lugar importante en los tiempos bíblicos, en parte debido a su ubicación en la principal carretera internacional (la Vía Marris) que iba de Egipto a Damasco y Mesopotamia. También estaba en una importante ruta Norte-Sur en Israel. Dado que la montaña se puede ver desde lejos, actuó como un importante punto de referencia para la navegación de los viajeros.
                                            <br />
                                            La única forma de llegar a la cima es conduciendo por una carretera través de un hermoso bosque mediterráneo lleno de árboles de pistacho, robles comunes y algarrobos.
                                        </p>
                                </div>
                                </div>
                            </div>

                        </div>
                    </div>
                        <div>
                            <label className={style.dayTitle}>
                                <strong>
                                    Día 4:
                                </strong>
                                Vida pública de Jesús
                            </label>
                            <div className={style.dayContent}>
                                <div>
                                    <p className={style.underLine}>
                                        Visitas: Mar de Galilea: travesía del Lago, Monte de las Bienaventuranzas, Misa...
                                    </p>
                                </div>
                                <div className={style.imgAndDescription}>
                                    <h4>
                                        Mar de Galilea
                                    </h4>
                                    <div className={style.floatContainer}>
                                        <img src="https://res.cloudinary.com/dmwdwipoo/image/upload/v1688965742/logares-600x400/lago_de_galilea_tjslps.png" alt="" />
                                        <div>
                                            <p>
                                                “Jesús dejó Nazaret y fue a residir a Cafarnaún, junto al mar, en el territorio de Zabulón y Neftalí,…” (Mt 4,12).
                                                <br />
                                                TEXTOS BÍBLICOS:
                                                <br />
                                                Mt 4,15-22; 8,24-27; Mc 3; 4,35; Lc 5; Jn 6.
                                            </p>
                                            <p>
                                                El mar de Galilea, también llamado mar o lago de Tiberíades, lago de Genesaret y lago de Kineret, es un lago de agua dulce de Asia occidental, situado en la región del Próximo Oriente, y perteneciente a Israel, incluida una estrecha franja costera de 10 metros de anchura en su costa nororiental.
                                            </p>
                                            <p>
                                                 En la orilla oeste se sitúa la ciudad de Tiberíades, construida por Herodes Antipas en honor al emperador romano Tiberio.
                                             </p>
                                            <p>
                                                Este lago es importante para los cristianos, ya que los Evangelios presentan a Jesús desarrollando buena parte de su actividad pública en torno a él, fijando su residencia en la ciudad ribereña de Cafarnaúm, en su parte Norte. El lago se menciona en la Biblia desde la época de los reyes de Israel
                                            </p>
                                            <p>
                                                <br />
                                                LUGAR CENTRAL:
                                                <br />
                                                A orillas de este lago había muchas poblaciones, que fueron el escenario de la predicación y la acción de Jesús. El mismo mar fue escenario de sus milagros y enseñanzas.
                                                <br />
                                                LO QUE TIENES QUE SABER:
                                                <br />
                                                La Biblia menciona tres mares: el de Galilea, el mar de la Sal y el mar Grande. El más mencionado es el mar de Galilea, llamado también de Genesaret (Kineret, cf. Jos 19,35) o de Tiberíades. En realidad, es un pequeño lago de en torno a 12 x 21 Km, con una profundidad de 45/50 m, una costa de unos 53 km, y a 210 m.b.n.m. El río Jordán ingresa por el norte y sale por el sur hasta desembocar en el mar muerto. A 100 km en línea recta, al nor este está la ciudad de Damasco.
                                                <br />
                                                Es un lugar muy rico para la fe, y por tanto para la oración y la contemplación, pues, en torno a este lago Jesús realizó la mayor parte de sus enseñanzas y sus milagros.  En sus orillas están: el poblado de Magdala, Tabga de la Multiplicación de los panes y peces, en especial Cafarnaún, el pueblo de su residencia, etc.
                                                <br />
                                                MAGDALA:
                                                <br />Estudios arqueológicos recientes descubrieron restos de lo que abría sido el pueblo de Magdala, de los siglos I - IX d. C., en la llanura fértil del lago. De aquí fue oriunda María Magdalena, librada por Jesús de 7 demonios, cf. Lc 8,1, su primera discípula, cf. Jn 20. El poblado actual de Migdal es de 1909.
                                                <br />
                                                TABGA:
                                                <br />
                                                Heptagenon, siete fuentes. Es el lugar de la multiplicación de los panes y los peces, cf. Jn 6,1-15. La peregrina Egeria testimonia el lugar, por el 381. En el año 1922 se descubrió el mosaico, de la célebre canasta, en el pavimento de una Iglesia del s. V, destruida 614. Fue adquirida por sociedad católica alemana en 1888, la Iglesia actual fue consagrada en 1984, construida sobre plano del s. V.
                                                <br />
                                                IGLESIA DEL PRIMADO:
                                                <br />
                                                Es un pequeño santuario, edificado sobre una la Roca sacra de la Mensa Christi, donde se presume, el Señor esperó a sus discípulos, según Jn 21. En este espacio se han encontrado restos de una iglesia bizantina de los ss. IV-V, lo testifica Egeria. Los franciscanos adquirieron el lugar, en 1889, construyeron la iglesia en 1933 y la restauraron en 1968. También se le llama “Iglesia de los 12 tronos”, por las 12 piedras en forma de corazón que hay en la orilla del lago.
                                                <br />
                                                SANTUARIO DE LAS BIENAVENTURANZAS:
                                                <br />
                                                 Obra del arquitecto Barluzzi en 1937, en forma octogonal, por las ocho bienaventuranzas y de estilo bizantino. La peregrina Egeria menciona un santuario en el lugar, a unos metros debajo del actual. El Santuario es custodiado por una comunidad de Franciscanas. En este espacio Jesús habría enseñado el primero de sus cinco grandes sermones, según el Evangelio de san Mateo. Allí el Señor manifiesta su voluntad para la vida de sus discípulos. Ver Mt 5-7.
                                                <br />
                                                CAFARNAÚN:
                                                <br />
                                                Jesús, “al poco de llegar a Cafarnaún, entró el sábado en la sinagoga y se puso a enseñar.” (Mc 1,22).
                                                <br />
                                                TEXTOS BÍBLICOS:
                                                <br />
                                                Mateo 4,13ss; 8,1ss; 9,1-8; 9,9-13. 18-26; 11,20-24; Marcos 1,21-39.
                                                <br />
                                                ESPACIO CENTRAL:
                                                <br />
                                                Cafarnaún fue elegido por Jesús como su residencia central. Seguramente el espacio más importante es el santuario edificado sobre vestigios de una iglesia bizantina, que a su vez se construyó sobre la que habría sido la Casa de Pedro. Así mismo, es de gran importancia la sinagoga.
                                                <br />
                                                LO QUE TIENES QUE SABER:
                                                <br />
                                                Cafarnaún o Kefar Nahum, villa de Nahum. Su ubicación es como un nudo de una red de itinerarios, estratégica para la difusión de la Buena Nueva de Jesús. Aquí vino Jesús a establecerse en la casa de Pedro, que después será la Domus eclesiae. Parece que había comunidad judía importante, por los vestigios de la sinagoga.
                                                <br />
                                                En el s. V se edificó una Iglesia bizantina octogonal, lo menciona Egeria. En la época árabe decae la ciudad y en el s. XIII desaparece. En el año 1894 los franciscanos compran la propiedad a una comunidad beduina. Excavaciones arqueológicas de 1968 y 1969 descubrieron una sinagoga s. IV, sobre otra del s. I. En 1990 se edificó el santuario nave, como memorial de la casa de san Pedro.
                                                <br />
                                                ADEMÁS:
                                                <br />
                                                 Muy cerca está una Iglesia ortodoxo griega Santos Apóstoles. También a 3 km al norte se encuentra Corazaín y también Betsaida, o casa de la pesca.
                                            </p>
                                        </div>
                                    </div>
                                    <div >
                                    </div>
                                </div>
                                <div className={style.imgAndDescription} style={{ margin: '0 0 0 auto' }}>
                                    <h4>
                                        Mensa Christi
                                    </h4>
                                    <div className={style.floatContainer}>
                                        <img src="https://res.cloudinary.com/dmwdwipoo/image/upload/v1688965742/logares-600x400/mensa_christi_me9hw8.png" alt="" />
                                        <div>
                                            <p>
                                                Según una tradición local, Jesús habría comido con sus discípulos, después de la resurrección de los muertos, en una mesa de piedra en Nazaret. La Iglesia de la "Mensa Christi", que en 1781 los franciscanos compraron en ruinas a los musulmanes, conserva dentro de la piedra atribuida a los hechos descritos por Marco: "Al final se apareció a los once, mientras estaban en la mesa, y los reprendió por su incredulidad y dureza de corazón, porque no habían creído a los que lo habían visto resucitar "(Mc 16, 14).
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className={style.dayTitle}>
                            <strong>Día 5:</strong>08/IV MONTE CARMELO, YAFFA, EMAÚS Y BELÉN.
                            </label>
                            <div className={style.dayContent}>
                                <div>
                                    <p className={style.underLine}>
                                        Visitas: (Temprano con maletas) Haifa, Monte Carmelo, Stella Maris, Tel Aviv y Jaffa.
                                    </p>
                                </div>
                                <div className={style.imgAndDescription}>
                                    <div className={style.imgAndDescription}>
                                        <h4>
                                            Monte Carmelo
                                        </h4>
                                        <div className={style.floatContainer}>
                                            <img src="https://res.cloudinary.com/dmwdwipoo/image/upload/v1688965743/logares-600x400/monte_carmelo_k12dbs.png" alt="" />
                                            <div>
                                                <p>
                                                “Ardo en celo por el Señor, Dios Sebaot, porque los israelitas han abandonado tu alianza, han derribado tus altares y han pasado a espada a tus profetas; quedo yo solo y buscan mi vida para quitármela.” (1 Re 19,14).
                                                <br />
                                                <br />
                                                TEXTOS BÍBLICOS:
                                                <br />
                                                1 Reyes 18-19; 2 Re 2,25; 4,25; Is 35,1-2; Jer 46,18; Amós 1,2; Cantares 7,5; Nah 1,4.
                                                <br />
                                                <br />
                                                ESPACIO CENTRAL:
                                                <br />
                                                En el interior del Santuario de la Virgen del Carmen, en el Monte Carmelo, Bajo el altar, se encuentra la gruta que recuerda al profeta Elías. Según una tradición el profeta moró en ella un tiempo en este lugar. Sobre la gruta, preside el Santuario la bella Imagen de la Virgen del Carmen de Stella Maris, con el Niño Jesús en su regazo y entregando su escapulario. Es una imagen muy venerada por los cristianos locales. El lugar es oportuno para renovar nuestro compromiso de fidelidad al Señor, tomando como ejemplo a la Virgen María.
                                                <br />
                                                <br />
                                                LO QUE TIENES QUE SABER:
                                                <br />
                                                Carmelo, viene del heb. Ha’ Karmel, jardín, viñedos de Dios. Se ubica entre la llanura del Esdrelón y Samaria. Es una cadena de montañas de 26 x 7 km, a 550 m.s.n.m. Aquí se han hallado cuevas con restos prehistóricos del hombre del carmelo de 100,000 a. C. Así mismo, vestigios de Culto a baal.
                                                <br />
                                                En el reparto de la Tierra Prometido, el Carmelo tocó a la Tribu de Isacar, cf. Jos 12,22. En el s. IX fue escenario de los profetas Elías y Eliseo. En época bizantina se establecieron, en sus faldas, eremitas. En el s. XII cristianos cruzados y monjes se inspiran en los profetas y cultivan la devoción a María. Hermanos de S. María del Carmelo.
                                                <br />
                                                En el año 1245, San Alberto de Jerusalén y el Papa Inocencio IV fundan la Orden del Carmen. En 1251 San Simón Stock recibe el escapulario de la Virgen como hábito. En el año 1291 son expulsados por los musulmanes.
                                                <br />
                                                En 1631 vuelven los Carmelitas y construyen un pequeño convento. El Santuario y el convento actual son del s. XX. Sobre las pilastras, en el interior hay cuatro bajorelieves que recuerdan los santos carmelitas más representativos: Teresa de Ávila, Juan de la Cruz, Edith Stein y Mariam Bouardy.
                                                <br />
                                                Delante de la entrada a la Basílica hay una pirámide que se erigió en recuerdo de los soldados franceses caidos después de la retirada de Napoleón (1799). Se lee: “¡Cómo han muerto los héroes en la batalla!” (2 Sam 1,25). En el lugar, delante del faro, se sitúa la columna con la estatua de la Inmaculada Concepción, erigido en 1894 por iniciativa del pueblo chileno, que quiso honrar de este modo su patrona.
                                                <br />
                                                <br />
                                                ADEMÁS:
                                                <br />
                                                HAIFA (Costa bella). Esta moderna ciudad se ubica en las faltas del Monte Carmelo. En la historia es menos importante que la ciudad de Acre, pero hoy, es la tercera ciudad de Israel y la primera industrial, y es uno de los puertos más importantes del Mediterráneo desde el mandato británico. Son muy interesantes su museo municipal y el museo de la marina. Su atractivo paisajístico que más llama la atención son los Jardines de Bahai.

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div>
                        <label className={style.dayTitle}>
                            <strong>
                                Día 6:
                            </strong>
                            EL DESIERTO - JERICÓ Y EL MAR MUERTO.
                        </label>
                        <div className={style.dayContent}>
                            <p className={style.underLine}>
                                Visitas: Betania, Desierto, Kaser El Yahud Bautismo, Sicomoro, Jericó, Misa …, Tentaciones, cremas. Almuerzo.
                            </p>
                            <p className={style.underLine}>
                                Visitas: Mar Muerto y vuelta a Belén.
                            </p>

                            <div className={style.imgAndDescription} >
                                <h4>
                                    Jaffa
                                </h4>
                                <div className={style.floatContainer}>
                                    <img src="https://res.cloudinary.com/dmwdwipoo/image/upload/v1692495180/logares-600x400/jaffa_yurhiw.jpg" alt="Jaffa" />
                                    <div>
                                        <p>
                                        “Verdaderamente comprendo que Dios no hace acepción de personas, sino que le es grata cualquier persona que le teme y practica la justicia, sea de la nación que sea”. (Hch 10,34-35).
                                        <br />
                                        <br />
                                        TEXTOS BÍBLICOS:
                                        <br />
                                        Jonás 1,3; 2 Crónicas 2,15; Esdras 3,7-13; 1 Macabeos 10,75; Hechos 9,32-43; 10.
                                        <br />
                                        <br />
                                        ESPACIO MÁS IMPORTANTE:
                                        <br />
                                        En la Iglesia de San Pedro, además de sus hermosos vitrales y el púlpito de madera, se puede apreciar el cuadro sobre el altar mayor que representa la visión de San Pedro, un hecho decisivo para en la historia de la difusión de fe cristiana en sus inicios.
                                        <br />
                                        <br />
                                        LO QUE TIENES QUE SABER.
                                        <br />
                                        JAFFA. La bella, gr. Jope. Ubicada en una Bahía de la costa de Israel, es uno de los mejores puertos antiguos de la región. Durante la repartición de la tierra prometida, el territorio le correspondió a la tribu de Dan, cf. Jos 19,46. Posteriormente se convirtió en ciudad filistea, cf. 2 Cr 2,15, hasta la reconquista del rey David. Hasta hoy conserva vestigios filisteos y egipcios. El convento y la Iglesia franciscana son de 1650.
                                        <br />
                                        <br />
                                        ADEMÁS:
                                        <br />
                                        TEL AVIV. Colina de la primavera. La ciudad moderna más importante de Israel, la más cara de medio oriente y 14 en el mundo. Fue fundada en 1909, junto a Jaffa, desde 1950 es una sola ciudad y Jaffa quedó como un suburbio. En 1917 los turcos expulsaron a los judíos. Pero, desde 1923 fue la puerta para su regreso, pues el mandato británico permitió tierra en Palestina para los judíos. Se ha convertido en puente Europa-Asia-África.
                                        <br />
                                        <br />
                                        EMAÚS:
                                        <br />
                                        “Sentado a la mesa con ellos, tomó el pan, pronuncio la bendición, lo partió y se lo iba dando. Entonces se les abrieron los ojos y lo reconocieron, pero él desapareció de su vista”. (Lc 24,30-31).
                                        <br />
                                        <br />
                                        TEXTOS BÍBLICOS:
                                        <br />
                                        Josué 10,12-13; 2 Macabeos 7; Lucas 24.
                                        <br />
                                        <br />
                                        ESPACIO CENTRAL:
                                        <br />
                                        Entre el conjunto de las ruinas arqueológicas, se encuentran restos de la Basílica bizantina del s. VI-VII, reconstruida más pequeña por los Cruzados en el s. XII. Este lugar santo es propicio para meditar el encuentro de Jesús con los discípulos de Emaús, quienes, gracias a su hospitalidad, le reconocieron al partir el pan.
                                        <br />
                                        <br />
                                        LO QUE TIENES QUE SABER:
                                        <br />
                                        Emaús Nicópolis, Ciudad de la victoria. Se ubica entre Jerusalén y Tel Aviv, en la Sefela fértil de Israel, el valle de Ayalón. Lugar de la victoria de Judas Macabeo el 165 a.C. En el s. IV-V hubo iglesia episcopal, destruida el s. VII y levantada el s. XII por los cruzados. El conjunto arqueológico y su museo, ofrecen hoy una visión de la historia de Israel a través de búsquedas arqueológicas y de pasajes bíblicos. Custodia el lugar santo la Comunidad religiosa de las Bienaventuranzas, en Israel desde 1975, y aquí desde 1993.

                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={style.imgAndDescription} >
                                <h4>
                                    Betania
                                </h4>
                                <div className={style.floatContainer}>
                                    <img src="https://res.cloudinary.com/dmwdwipoo/image/upload/v1692495422/logares-600x400/betania_dapz9t.png" alt="Betania" />
                                    <div>
                                        <p>
                                            “Yo soy la Resurrección. El que cree en mí, aunque muera vivirá; y todo el que vive y cree en mí no morirá Jamás. ¿Crees esto?”. (Jn 11,25-26).
                                            <br />
                                            TEXTOS BÍBLICOS:
                                            <br />
                                            Mateo 26,6-13; Marcos 11,1-11; 14,2-9; Lucas 10,38-42; Juan 11-12.
                                            <br />
                                            <br />
                                            ESPACIO CENTRAL:
                                            <br />
                                            La celebridad de Betania proviene especialmente de la hospitalidad de la familia de Marta, María y Lázaro para con Jesús y del impresionante séptimo signo que allí realizó el Señor, según san Juan: la resurrección de Lázaro. Estos hechos pueden meditarse en el interior del hermoso santuario.
                                            <br />
                                            LO QUE TIENES QUE SABER:
                                            <br />
                                            BETANIA. Al - Zariya, aldea de Lázaro. Se ubica a la espalda del Monte de los Olivos, a 3 km de Jerusalén. Es el pueblo de la amistad y la hospitalidad. Peregrinos del s. VI como Egeria y el de Burdeos testifican la existencia de una Iglesia bizantina, que los cruzados la reformaron en el s. XII. Excavaciones de 1949 a 1953 encontraron tres iglesias sobrepuestas, la actual es de 1954 del arquitecto italiano Antonio Barluzi.
                                            <br />
                                            DESIERTO:
                                            <br />
                                            “Por eso voy a seducirla: voy a llevarla al desierto y le hablaré al corazón”. (Os 2,16).
                                            <br />
                                            TEXTOS BÍBLICOS:
                                            <br />
                                            Éxodo 3,18; 4,27; 5,1; 13,18ss; 15,22; 19,1; Números 1,1; 10,12.31; Deuteronomio 1,1.19ss; Josué 5,5s; Cantar 8,5; Isaías 40,3; 42,18; Oseas 2,5.16; Amós 2,10; Mateo 3,1-12; 4,1-11; Juan 1,23; 3,14; 6,31; Apocalipsis 12,6ss.
                                            <br />
                                            <br />
                                            ESPACIO CENTRAL:
                                            <br />
                                            En algún punto, en el descenso de Jerusalén a Jericó, haremos un alto para contemplar el desierto de Judea que nos evoca experiencias fundamentales del Pueblo de Dios y de grandes hombres y mujeres de fe, tanto de la Sagrada Escritura, como de la bimilenaria Historia de la Iglesia.
                                            <br />
                                            LO QUE TIENES QUE SABER:
                                            <br />
                                            DESIERTO DE JUDEA. Es un área de entorno a 50 x 50 km cuadrados entre Jerusalén, Berseba, Jericó y el Mar Muerto. Es el ámbito geográfico del Precursor del Mesías. En los ss. IV-VII muchos monjes anacoretas buscaron allí imitar a Jesús, según el modelo de san Antonio y San Pacomio. Aún hoy podemos encontrar monasterios allí como el Monasterio de san Sabas (s. V); el Monasterio de san Jorge Koshiba (s. V) y el Monasterio de la Tentación (s. VI), entre otros.
                                            <br />
                                            QASER AL-YAHUD
                                            <br />
                                            “Y una voz que salía de los cielos decía: Este es mi Hijo amado, en quien me complazco”. (Mt 3,16).
                                            <br />
                                            TEXTOS BÍBLICOS:
                                            <br />
                                            Josué 2-4; 2 Reyes; 2; 5; Mateo 3,13-17; Marcos 1,5.9-11; Jn 1,19-51.
                                            <br />
                                            ESPACIO CENTRAL:
                                            <br />
                                            El espacio preciso donde Jesús recibió el Bautismo de manos de Jua, no es posible determinarlo, pero visitamos Qaser Al-Yahud, a orilla occidental del río Jordán, cerca de Jericó, aquí recordamos ese hecho tan importante de la vida del Señor. Además de meditar en las palabras del Padre Dios, renovamos las promesas de nuestro propio Bautismo.
                                            <br />
                                            LO QUE TIENES QUE SABER:
                                            <br />
                                            QASER AL-YAHUD.  Es el lugar que indica el Bautismo de Cristo. El nombre árabe traducido significa Fortaleza de los judíos, tal vez en recuerdo del paso del río por los israelitas cuando llegaron a la Tierra Prometida (cf. Jos 3,14-17). Muy cerca de aquí, en territorio jordano, se encuentran vestigios del s. IV que conmemoran el Bautismo de Jesús. Toda esta región está llena de iglesia y monasterios de diversas confesiones.
                                            <br />
                                            EL RÍO JORDÁN. El que baja. Tiene una longitud de 360 km, nace en el Monte Hermón a 2814 m (104 km en línea recta) y Banías. Entra al lago Galilea y desagua en Degania, hace de frontera entre Israel y Palestina. Desde el s. V cristianos renuevan aquí su Bautismo.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={style.imgAndDescription} >
                                <h4>
                                    Jericó
                                </h4>
                                <div className={style.floatContainer}>
                                    <img src="https://res.cloudinary.com/dmwdwipoo/image/upload/v1688965743/logares-600x400/jeric%C3%B3_tsyayc.png" alt="Jericó" />
                                    <div>
                                        <p>
                                        “Y cuando salía de Jericó acompañado de sus discípulos y de una gran muchedumbre, el hijo de Timeo (Bartimeo), un mendigo ciego, estaba sentado junto al camino” (Marcos 10,46).
                                        <br />
                                        TEXTOS BÍBLICOS:
                                        <br />
                                        Números 22,1; 26,3; 33,50; Deuteronomio 32,49; 34,1s; Josué 2ss; Marcos 10,46; Lucas 10,30; 18,35; 19,1-10.
                                        <br />
                                        <br />
                                        LO QUE TIENES QUE SABER:
                                        <br />
                                        JERICÓ. Perfume o jardín; Ciudad de las palmeras. Es la ciudad más antigua del mundo, en torno a 11,000 años antes de Cristo, y es también la ciudad más baja, a unos 350 m.b.n.m. Fue la primera población cananea conquistada por los israelitas salidos de Egipto, después de atravesar el Jordán. Los evangelios nos dan a conocer muchas escenas de la vida de Jesús, especialmente en su paso de Galilea a Jerusalén. En el s. IV d. C., hubo aquí sede episcopal. En el s. VII hubo el palacio invernal de los califas. Desde 1924 hay una iglesia franciscana, y desde 1954 una parroquia.
                                        <br />
                                        <br />
                                        ADEMÁS:
                                        <br />
                                        EL QARANTAL. Monasterio que conmemora las tentaciones de Jesús en el desierto, se encuentra aquí en Jericó, en el acantilado, saliendo del oasis hacia el desierto. Ya en el s. V se construyó un pequeño monasterio, en el s. VI se agrandó. En 1874 fue comprado por los ortodoxos a los musulmanes que se habían apropiado. En 1985 se construyó el monasterio actual alrededor de la antigua capilla.
                                        <br />
                                        MAR MUERTO. Mar de la sal / Lot, o del asfalto. Muy cerca de Jericó a 435 m.b.n.m, de unos 67 x 18 km, con una profundidad media de 118 m., y máxima de 378 m. Agua rica en calcio, magnecio, potacio y bromo. Contiene un promedio de 36% de salinidad.
                                        <br />
                                        QUMRAM. Ruinas del “monasterio esenio”. Fue hallado fortuitamente en 1947, la mayor riqueza fue los 800 manuscritos antiguos, que contienen los libros del A.T, escritos apócrifos y abundante literatura intertestamentaria. El arsenal documentario llegó a la ciudad de Belén para ser vendido en USA, pero fue recuperado por el Estado de Israel.
                                        <br />
                                        MASADA. Fortaleza judía, a 450 m.s.n.m. Muerto y a 63 m.s.n.m. Yacimiento arqueológico, en la cumbre de la meseta (645 m x 315 m), de una montaña al oriente del desierto de Judea y al sur occidente del mar Muerto. Importante en la guerra judía de los años 66 - 70. Los romanos la asediaron, y ante la derrota inminente, cerca de 1,000 judíos prefirieron el suicidio el año 73. En el s. V se construyó allí un Monasterio con una iglesia. En el periodo árabe todo fue reducido a ruinas. Desde 1983 es un Parque nacional de Israel. En el año 2001 fue declarado Patrimonio de la humanidad.

                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <label className={style.dayTitle}>
                            <strong>
                                Día 7:
                            </strong>
                            BELÉN – AIN KAREM
                        </label>
                        <div className={style.dayContent}>
                            <p className={style.underLine}>
                            Visitas: Belén, Natividad Misa …, Gruta de la leche, Campo de los Pastores. Almuerzo.
                            </p>
                            <p className={style.underLine}>
                            Visitas: (Con maletas) Ain Karem: Visitación de la Virgen y Juan Bautista...
                            </p>
                            <div className={style.imgAndDescription}>
                                <h4>
                                    Belén
                                </h4>
                                <div className={style.floatContainer}>
                                    <img src="https://res.cloudinary.com/dmwdwipoo/image/upload/v1688861266/square_image_400/bel%C3%A9n_basilica_de_la_natividad_pdzyxl.png" alt="Belén" />
                                    <div >
                                        <p>

                                            “Jesús nació en Belén de Judea, en tiempo del rey Herodes”. (Mt 2,1).
                                            <br />
                                            TEXTOS BÍBLICOS:
                                            <br />
                                            Gén 35,19; 48,7; Jos 15,59; Jue 12,8; Rut; 1 Sam 16,1ss; 1Cró 2,51; Miq 5,1-3; Mt 2,1-16; Lc 2; Jn 7,42.
                                            <br />
                                            <br />
                                            LO QUE TIENES QUE SABER
                                            <br />
                                            BELÉN. Heb. Betlegem, Casa del Pan. Ciudad muy antigua, aparece ya en el libro del Génesis. Allí está la tumba de Raquel, cf. Gn 35,19s, fue el hogar de Rut, del rey David y del Mesías, cf. Jn 7,42. Se ubica 9 km al sur de Jerusalén, a unos 770 m.s.n.m., entre dos colinas que separan el mar Muerto del Mediterráneo. Allí el rey Herodes contruyó, entre el 22 – 15 a. C., el Herodión, su palacio fortaleza.
                                            <br />
                                            Aquí, el NT ubica el nacimiento de Jesús, cf. Mt 2,1; Lc 2,7, los cristianos veneraron el lugar desde muy temprano. El Emperador Adriano, para borrar las huellas cristianas, contruyó un tamplo a Adonis-Tamuz. Testimonio de Orígenes de Alejandría (248): En Belén se muestra la cueva en la que nació,... el pesebre donde fue reclinado,... todo esto es conforme con la narrado por el Evangelio.
                                            <br />
                                            LA BASÍLICA DE LA NATIVIADAD: Inició su construcción Constantino el año 326. San Jerónimo con Santa Paula y Eustoquia, fundaron cerca dos monasterios en el siglo IV. El 529 fue destruida por los samaritanos. El emperador Justiniano, el 540, la reconstruyó y los peras el 614 la respetaron por la representación de los magos en estilo persa. También los árabes la respetan el 638, los cruzados la embellecieron. Balduino se coronó aquí como el primer rey de Jerusalén en 1100. En la dominación musulmana es reducida a una villa en 1600, pero rocobró su esplendor en el s. XX gracias al predominio cristiano, que hoy es minoría.
                                            <br />
                                            LA GRUTA: Se encuentra debajo del coro-iconostasio de la Basílica. La inscripción: Hic de Virgine Maria Jesus Christus natus est, en torno a una estrella de plata, señala el espacio preciso del nacimiento de Jesús. Además, hay otras grutas, adyacentes, como: la Gruta del pesebre, el altar de los Reyes Magos (cf. Is 9,2), la Gruta de José, de los Santos Inocentes; la tumba de Santa Paula y Eustoquio; y la Gruta de san Jerónimo.
                                            <br />
                                            BASÍLICA DE SANTA CATALINA DE ALEJANDRÍA: Santuario moderno, funge como templo Parroquial de Belén. Aquí preside la misa de Nochebuena el Patriarca de Jerusalén.
                                            <br />
                                            GRUTA LECHE: Depende de una la tradición que viene desde el s. IV. En tiempos cruzados hubo un monasterio y una Iglesia. Los franciscanos están aquí desde 1494. El 2007 fue restaurada. Es un lugar, ante todo, de oración para las mujeres para pedir toda gracia en relación a la maternidad.
                                            <br />
                                            BETT SAHUR: Casa de los vigilantes, a 3 km de Belén,acampos de Booz. Hay vestigios de un Monasterio bizantino. Aquí se conmemora el primer anuncio del nacimiento de Jesús a los pastores. El Santuario Gloria in excelsis fue construido entre 1953 - 1954, como una tienda pastores y es del arquitecto Barlucci.

                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={style.imgAndDescription}>
                                <h4>
                                    Ain Karem
                                </h4>
                                <div className={style.floatContainer}>
                                    <img src="https://res.cloudinary.com/dmwdwipoo/image/upload/v1688965743/logares-600x400/ein_karem_hqtanm.png" alt="Ain Karem" />
                                    <div >
                                        <p>
                                        ¿Cómo así viene a visitarme la madre de mi Señor? (Lc 1,43).
                                        <br />
                                        TEXTOS BÍBLICOS:
                                        <br />
                                        Jos 15,59; Lc 1,5-25. 39-80.
                                        <br />
                                        LO QUE TIENES QUE SABER:
                                        <br />
                                        AIN KAREM. O ‘En Kerem, fuente del viñedo. Fuente santificada por las manos de la Virgen María. Lugar de gozos incontenibles donde visitó María a su prima Isabel. Se ubica al oeste de Jerusalén, a 8 km de la ciudad antigua. Los cruzados separaron en dos lugares la Visitación y el Nacimiento de Juan Bautista en dos santuarios.
                                        <br />
                                        SANTUARIO DE LA VISITACIÓN: Templo de estilo bizantino, su capilla inferior conmemora el retiro de Isabel en el tiempo de su embarazo, cf. Lc 1,24. En el año 1679 los franciscanos restituyen la cripta al culto, en 1939 lo mandan restaurar. La Iglesia superior es obra del arquitecto Barluzzi; su interior está decorado por frescos que aluden a la glorificación de la Virgen María en la historia.
                                        <br />
                                        SANTUARIO DE SAN JUAN BAUTISTA: Sobre lo que tradicionalmente se ha venerado como la casa de Zacarías, fue un lugar de reunión de primitiva comunidad. Hay vestigios de una capilla del s. VI, posteriormente restaurada por los cruzados. En 1674 los franciscanos lo rescatan de los musulmanes. En el interior, entrando a la izquierda se encuentra la Gruta en la roca del nacimiento del Precursor del Señor.

                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <label className={style.dayTitle}>
                            <strong>Día 8:</strong>
                            JERUSALEN
                        </label>
                        <div className={style.dayContent}>
                            <p className={style.underLine}>Visitas: Monte de los Olivos: Ascensión, Padrenuestro, Dominus Flevit, Getsemaní (Misa …). Almuerzo.</p>
                            <p className={style.underLine}>Visitas: Muro oeste del Templo, Monte Sión, Cenáculo, Dormición, San Pedro in Gallicantu.</p>

                            <div className={style.imgAndDescription}>
                                <h4>
                                    Monte de los Olivos
                                </h4>
                                <div className={style.floatContainer}>
                                    <img src="https://res.cloudinary.com/dmwdwipoo/image/upload/v1692496198/logares-600x400/monte_olivos_cqblp6.png" alt="Monte de los Olivos" />
                                    <div >
                                        <p>
                                            “Salió (Jesús) y, como de costumbre, fue al monte de los Olivos, y los discípulos le siguieron” (Lc 22,39).
                                            <br />
                                            TEXTOS BÍBLICOS:
                                            <br />
                                            2 Sam 15,30; 2 Re 23,13; Zac 14,4; Mt 21,1; 24,3; 26,30; Mc 13,3; 14,26; Lc 19,37; 22,39; Jn 8,1.
                                            <br />
                                            <br />
                                            LO QUE TIENES QUE SABER:
                                            <br />
                                            MONTE DE LOS OLIVOS, se ubica al este de Jerusalén, del otro lado del valle del Cedrón. Jesús en sus visitas a Jerusalén, con frecuencia pasaba la noche aquí, tal vez en Betania, cf. Lc 21,37; 22,39. En este lugar comenzó su entrada triunfal, cf. 19,37s, aquí su sermón escatológico, cf. Mt 24,3. El sufrimiento de su pasión comenzó en un huerto en la falda del Monte, cf. 26,30s, y también su Ascensión, cf. Lc 24,50s; Hech 1,9-12.
                                            <br />
                                            En realidad, al este de Jerusalén hay un cordón montañoso de norte a sur, con tres cumbres: el “monte Scopus” (834 m), el “de los Olivos” (808 m), y el “monte de la Ofensa”, donde Salomón construyó altares a los dioses de sus mujeres. Sobre el Scopus, el 70 d.C., Tito estableció su campamento para el asalto final a Jerusalén. Desde el monte de los Olivos se obtiene una vista excelente de la Ciudad Santa.
                                            <br />
                                            De acuerdo con la tradición medieval, en la cumbre del monte de los Olivos sucedió la Ascensión. A pocos pasos, se encuentra, en ruinas, la Basílica del Pater noster, restaurada por los cruzados, una de las tres edificadas por Constantino y Santa Elena. Desde 1875 aquí hay un monasterio de Carmelitas descalzas de Francia.
                                            <br />
                                            Bajando hacia el Torrente Cendrón a la mitad se encuentra el santuario “Dominus flevit”, donde según la tradición, Jesús lloró contemplando la ciudad Santa, Lc 13,31-35; 19,41-44.
                                            <br />
                                            En el torrente Cedrón se encuentra Getsemaní, molino de aceite, lugar de la traición, la agonía, y el arresto, cf. Lc 22,39; Mt 26,36; Mc 14,43. Entre 1919 y 1924 se construyó la Basílica de las naciones, a cargo del Arq. Barluzi.
                                            <br />
                                            Muy cerca nos encontramos con la Tumba de María, lugar de su tránsito, venerado desde el s. II, y la primera iglesia es del s. IV, actualmente está en poder de la iglesia greco - ortodoxa y armena.
                                            <br />
                                            El valle Cedrón o también valle de Josafat, según Jl 4,2.12, será el lugar del juicio universal.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={style.imgAndDescription}>
                                <h4>
                                    Monte Sión
                                </h4>
                                <div className={style.floatContainer}>
                                    <img src="https://res.cloudinary.com/dmwdwipoo/image/upload/v1692496467/logares-600x400/monte_sion_spywy9.png" alt="Monte Sión" />
                                    <div >
                                        <p>
                                        “Pues de Sión saldrá la Ley, de Jerusalén la Palabra del Señor” (Is 2,3).
                                        <br />
                                        TEXTOS BÍBLICOS:
                                        <br />
                                        Ex 15,17; 1 Re 8,1-2; 2 Cró 5,2; 2 Sam 5,7; Sal 2,6; 24,3; 47,7; 76,1; 122; Is 2,3; 10,27; Jer 31,6.23; Am 1,2; Abd 1,17; Zac 8,3; Lc 22,7-20; Jn 13-17; 20; Hech 1,12-14; 2.
                                        <br />
                                        <br />
                                        MONTE SIÓN. Sión es término para referirse a la Ciudad de David (2 Sam 5,7; 1 Cró 11:5, 1 Re 8,1, 2 Cró 5,2). Después se usó para el monte del Templo. Hoy se usa para la colina sur occidental de Jerusalén antigua, fuera de la muralla. En un sentido amplio se refiere a todo Israel. Aquí los cristianos veneran los siguientes acontecimientos:
                                        <br />
                                        <br />
                                        EL CENÁCULO. Piso superior, espacio venerado como tal desde el s. IV, hoy propiedad del estado de Israel. Aquí se conmemora la Última Cena de Jesús con sus discípulos, las Apariciones del Resucitado a los Apóstoles y Pentecostés. Muy cerca se encuentra el convento franciscano Cenáculo, de 1936.
                                        <br />
                                        <br />
                                        BASÍLICA DE LA DORMICIÓN. Iglesia de estilo románico, dedicada a la Hagia Sión, construida entre 1900-1910, para venerar su Asunción.
                                        <br />
                                        <br />
                                        SAN PEDRO IN GALLICANTU. Descendiendo de Sión, como hacia el torrente de Siloé, se encuentra este santuario que conmemora los primeros momentos de la Pasión de Jesús, después de su captura, el juicio ante Caifás, las negaciones y la primera prisión. Excavaciones de los años 1888-909 y 1992-2002 descubrieron restos del s. I.

                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <label className={style.dayTitle}>
                            <strong>
                                Día 9:
                            </strong>
                            JERUSALÉN ANTIGUA
                        </label>
                        <div className={style.dayContent}>
                            <div>
                                <p className={style.underLine}>
                                Visitas: (Temprano) Betesda, Vía Dolorosa, Santo Sepulcro: Calvario, Tumba vacía. Misa ....
                                </p>
                            </div>
                            <div className={style.imgAndDescription}>
                                <h4>
                                    Vía Dolorosa
                                </h4>
                                <div className={style.floatContainer}>
                                    <img src="https://res.cloudinary.com/dmwdwipoo/image/upload/v1692496787/logares-600x400/via_dolorosa_ld3hfq.png" alt="Vía Dolorosa" />
                                    <div className={style.textSection}>

                                        <p>
                                            “Tomaron pues a Jesús, que cargando con su cruz, salió hacia el lugar llamado Calvario” (Jn 19,16-17).
                                            <br />
                                            TEXTOS BÍBLICOS:
                                            <br />
                                            Mt 27,11-31; Mc 15,1-22; Lc 23,2-32; Jn 19,16-17.
                                            <br />
                                            <br />
                                            LO QUE TIENES QUE SABER:
                                            <br />
                                            La Vía Dolorosa es una calle de Jerusalén Antigua, tradicionalmente, parte tradicional del itinerario de Cristo con la Cruz, camino al Calvario. Tiene marcadas nueve de las 14 estaciones del Viacrucis, las últimas están dentro de la Iglesia del Santo Sepulcro.
                                            <br />
                                            El itinerario empieza dentro de la Puerta de los Leones, pasando la Iglesia de Santa Ana y la piscina de Betesda, cerca de la Fortaleza Antonia. Se basa en la procesión organizada por los Franciscanos en el siglo xiv. En la fortaleza se encontraba el pretorio, donde Jesús fue procesado y condenado ante Pilato.
                                            <br />
                                            A lo largo de todo el recorrido nos encontraremos con una serie de pequeños santuarios como: la Iglesia de la Flagelación y la Iglesia de la Condención, junto al convento franciscano; el Convento de Nuestra Señora de Sión, con la Basílica del Ecce Homo; la Capilla de la Primera caída; la Iglesia del encuentro de Jesús con su Madre; las capillas del Cireneo, de la Verónica, de la Segunda caída y; el convento Copto en la novena caída.
                                            <br />
                                            <br />
                                            SANTO SEPULCRO:
                                            <br />
                                            “En el lugar donde había sido crucificado había un huerto, y en el huerto un sepulcro nuevo,… Allí, pues pusieron a Jesús, porque era el día de la preparación de los judíos y el sepulcro estaba cerca”. (Jn 19,41-42)
                                            <br />
                                            TEXTOS BÍBLICOS:
                                            <br />
                                            Mt 27,60; 27,61.64.66; 28,1-8; Mc 15,46; 16,2-8; Lc 23,53-55; 24,1-24; Jn 19,41-20,11; Hech 13,29.
                                            <br />
                                            <br />
                                            LO QUE TIENES QUE SABER:
                                            <br />
                                            LA BASÍLICA DEL SANTO SEPULCRO. También, Iglesia de la Resurrección o de la Anástasis. Se ubica en el corazón de la Jerusalén antigua. Es el lugar más sagrado del cristianismo y el centro de la peregrinación cristiana desde el s. IV. Según la tradición, contiene el lugar donde Jesús fue crucificado, el Calvario o Gólgota (calavera), y la tumba vacía de Jesús, donde fue enterrado y resucitó. La tumba está cubierta por un Edículo, pequeño santuario del s. XIX. Está custodiada por diversas comunidades cristianas (ortodoxa, católica, armenia y copta).
                                            <br />
                                            Los primeros momentos. En tiempos de Jesús el lugar estaba apenas fuera de la ciudad. Fue venerado desde el primer momento, era la costumbre hebrea respecto a sus personajes. Con la muralla construida en los 41-44, el calvario y el sepulcro quedaron dentro. El año 135 judíos, samaritanos y cristianos fueron expulsados y prohibidos de ingresar en Jerusalén. Además, el emperador Adriano edificó un templo pagano. La pequeña comunidad cristiana conservará la memoria del lugar hasta el s. IV. El obispo Macario de Jerusalén, presente en Nicea el año 325, pidió al emperador destruir el templo pagano y construir la Basílica de la Resurrección. Aquí arr
                                        </p>

                                        <p>
                                            <br />
                                            Almuerzo en Notre Dame. Visitas: barrios de la ciudad antigua, murallas y otros. Hotel por confirmar.
                                        </p>
                                        <p>
                                        la Ciudad Vieja de Jerusalén y, en particular, a los Santos Lugares, comenzando por la Iglesia de la Flagelación, desde la que comienza el Vía Crucis, a lo largo de la Vía Dolorosa con sus XIV estaciones. Señalamos la importancia de alguna de ellas: en la III estación, Jesús cae por primera vez; en la IV se encuentra con María; en la VI, la Verónica enjuga su rostro; en la VII estación, donde Jesús cae por segunda vez, se pueden ver los restos de la columna de la flagelación. La última  estación del Vía Crucis coincide con el Santo Sepulcro o Basílica de la Resurrección. Este es, quizá, el lugar más sagrado y querido por toda la cristiandad. En tiempos de Jesús era un lugar que se encontraba fuera de los muros de la ciudad, reservado probablemente para las sepulturas.
                                        <br />
                                        La Basílica encierra en sí el Calvario (el término latino de Gólgota), la Piedra de la Unción -sobre la que se depositó y fue ungido el cuerpo de Jesús, según la tradición judía- y la Tumba vacía.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className={style.dayTitle}>
                            <strong>
                                Día 10:
                            </strong>
                            DÍA LIBRE EN JERUSALÉN.
                        </label>
                        <div className={style.dayContent}>
                            <p>
                            Visita personal del peregrino, a su ritmo propio, a la Ciudad Antigua y al Santo Sepulcro. Se puede optar por visitar importantes museos de la ciudad. Este día el almuerzo es a cuenta personal.
                            </p>
                        </div>
                    </div>
                    <div>
                        <label className={style.dayTitle}>
                            <strong>
                                Día 11:
                            </strong>
                            RETORNO
                        </label>
                        <div className={style.costSection}>
                            <div>
                                <h4>COSTO: USD 3,200</h4>
                                <p>
                                Incluye: todo, excepto bebidas en los restaurants y gastos personales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.boxes}>
                    <div>
                        <div className={style.subTitles}>
                            <h2>
                            EXTENCIÓN A JORDANIA
                            </h2>
                        </div>
                        <div>
                            <label className={style.dayTitle} style={{ padding: '25px 0 0 0' }}>
                                <strong>
                                    Día 10:
                                </strong>
                                Allenby Bridge, Salida de Israel y entrada en Jordania (trámites migratorios), Monte Nebo, Madaba, Amman, Cena y noche. Hotel por confirmar.
                            </label>
                        </div>
                        <div>
                            <label className={style.dayTitle}>
                                <strong>Día 11.</strong>
                                Amman, Petra, Amman, cena y noche.
                            </label>
                        </div>
                        <div>
                            <label className={style.dayTitle}>
                                <strong>
                                    Día 12:
                                </strong>
                                City tour o retorno a Israel. Tarde Libre en Jerusalén. Almuerzo por cuenta propia.
                            </label>
                        </div>
                        <div>
                            <label className={style.dayTitle}>
                                <strong>
                                    Día 13:
                                </strong>
                                RETORNO.
                            </label>
                        </div>
                        <div className={style.costSection}>
                            <div>
                                <h4>COSTO: + USD 500</h4>
                                <p>Incluye: todo, excepto bebidas en los restaurants y gastos personales.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.boxes}>
                        <div>
                            <div className={style.subTitles}>
                                <h2>
                                    EXTENSIÓN A EGIPTO
                                </h2>
                            </div>
                            <div>
                                <label className={style.dayTitle} style={{ padding: '25px 0 0 0' }}>
                                    <strong>
                                        Día 13:
                                    </strong>
                                    Vuelo Ammán El Cairo. Vuelo por confirmar.
                                </label>
                                <div className={style.dayContent}>
                                    <p>
                                    Bienvenido a Egipto!!! Llegada al aeropuerto internacional de El Cairo, Nuestro representante de Egipto Tours lo recibirá en el aeropuerto recepción y asistencia para conseguir la visa, pasar el control de pasaporte, y traslado al hotel seleccionado.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <label className={style.dayTitle}>
                                    <strong>
                                        Día 14:
                                    </strong>
                                    El Cairo (Tour las Piramides de Gizeh y El barrio Copto )
                                </label>
                                <div className={style.dayContent}>
                                    <p>
                                    Desayuno, durante este día visitar las pirámides de Giza, complejo funerario formado por las pirámides de Keops, una de las siete maravillas del Mundo, Kefrén, Micerinos, la Esfinge de Kefrén y el Templo del Valle para después El barrio Copto donde se encuentra la Iglesia de la Sagrada Familia. Ahí conocerá la "Iglesia colgante"  Alojamiento.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <label className={style.dayTitle}>
                                    <strong>
                                        Día 15:
                                    </strong>
                                    El cairo / Luxor (Templos de Luxor y karnak). Vuelo por confirmar.
                                </label>
                                <div className={style.dayContent}>
                                    <div>
                                        <p>
                                        Desayuno. Por la mañana  traslado al aeropuerto para tomar el vuelo con destino a Luxor  Llegada y traslado al Hotel. Check in y por la tarde
                                        Visita al lado Este de Luxor: Templo de Luxor. Templo de Karnak.
                                        Alojamiento.
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <label className={style.dayTitle}>
                                    <strong>
                                        Día 16:
                                    </strong>
                                    Luxor (Valle de los Reyes, Valle de las Reinas, Templo de Hatshepsut, Colosos de Memnón). Desayuno, Visita al lado Oeste de Luxor: Valle de los Reyes; Valle de las Reinas; Templo de la Reina Hatshepsut; Coloso de Memnon. Alojamiento.
                                </label>
                            </div>
                            <div>
                                <label className={style.dayTitle}>
                                    <strong>
                                    Día 17:
                                    </strong>
                                    Luxor / El cairo. Vuelo por confirmar.
                                </label>
                                <div className={style.dayContent}>
                                    <p>
                                    Desayuno  Por la Mañana  traslado al aeropuerto de Luxor para coger el avión con destino El cairo. Llegada y traslado al Hotel . Check in y por la noche cena en crucero. Alojamiento.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <label className={style.dayTitle}>
                                    <strong>
                                        Día 18:
                                    </strong>
                                    Salida de Cairo a Estambul - Turquía. Vuelo por confirmar.
                                </label>
                                <div className={style.dayContent}>
                                    <p>Desayuno. A la hora convenida traslado al aeropuert. Fin del viaje y de nuestros servicios.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.boxes}>
                        <div className={style.subTitles}>
                            <h2>EXTENSIÓN A TURQUÍA</h2>
                        </div>
                        <div>
                            <label className={style.dayTitle} style={{ padding: '20px 0 0 0' }}>
                                <strong>
                                    Día 18.
                                </strong>
                                Estambul. Llegada. encuentro con el guía e instalación en el Konak Hotel (aquí en toda nuestra visita). Cena y noche.
                            </label>
                        </div>
                        <div>
                            <label className={style.dayTitle}>
                                <strong>
                                Día 19:
                                </strong>
                                Estambul – City Tour
                            </label>
                            <div className={style.dayContent}>
                                <p>
                                Estas son las visitas, pero como explicaron los guías habrá cambio de orden por la fiesta central del Islam el día de mañana. Así como la Pascua o la Navidad cristiana.
                                Desayuno turco visita a los lugares más importantes de la ciudad. Hipódromo bizantino, Mezquita Sultán Ahmet, o Mezquita azul del siglo XVII, con seis minarets. Visita a la gran Santa Sofía y el Palacio otomano Topkapi. Gran Bazaar. Almuerzo y cena.
                                </p>
                            </div>
                        </div>
                        <div>
                            <label className={style.dayTitle}>
                                <strong>
                                Día 20:
                                </strong>
                                Estambul, Esmirna, Éfeso y Estambul. Vuelos por confirmar
                            </label>
                            <div className={style.dayContent}>
                                <p>
                                Después del desayuno transporte al aeropuerto para volar a Esmirna. Visita a la “Casa de la Virgen María” y otros lugares arqueológicos de gran importancia en Éfeso, ambiente de los Apóstoles Pablo y Juan. Regreso a Estambul, cena y noche.
                                </p>
                            </div>
                        </div>
                        <div>
                            <label className={style.dayTitle}>
                                <strong>
                                    Día 21:
                                </strong>
                                Turismo en Estambul.
                            </label>
                            <div className={style.dayContent}>
                                <p>
                                Luego del desayuno visita a la Plaza de Taksim; la Av. Istiklal; la más grande del comercio, Distrito Gálata; Torre Gálata para gozar de una espléndida vista de Constaninopla; el Cuerno de oro y el histórico barrio judío en el perido bizantino y otomano; la Antorcha llena de mansions de madera, Iglesias y sinagogas otomano bizantinas. Liturgia Ortodoxa en la catedrael de San Jorge. Regreso al Hotel.
                                </p>
                            </div>
                        </div>
                        <div>
                            <label className={style.dayTitle}>
                                <strong>
                                    Día 22:
                                </strong>
                                Estambul Turismo y and transfer al Aeropuerto. (B, L)
                            </label>
                            <div className={style.dayContent}>
                                <p>
                                Bazar de especias del siglo XVII. Embarque en un crucero del Bósforo, canal que separa Europa de Asia y conecta con el Mar Negro con el Mar de Marmara. Palacios otomanos, antiguas fortalezas. Tiempo libre.
                                </p>
                            </div>
                        </div>
                        <div>
                            <label className={style.dayTitle}>
                                <strong>
                                    Día 23:
                                </strong>
                                Día libre en Estambul. Retorno a Lima. Vuelo por confirmar.
                            </label>
                            <div className={style.costSection}>
                                <div>
                                    <h4>
                                        COSTO: + USD 2,900
                                    </h4>
                                    <p>
                                        Incluye: todo, excepto bebidas en los restaurants y gastos personales.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.boxes} style={{ marginBottom: 0 }}>
                        <div id={style.totalCost}>
                            <div>
                                <h3>
                                COSTO DEL ITINERARIO COMPLETO: ISRAEL, PALESTINA, EGIPTO Y ESTAMBUL:
                                </h3>
                                <p>
                                <strong>Incluye:</strong> prácticamente el todo absoluto: vuelos (14), seguro médico, pensión completa, Hotel 4* (por lo general), transportes en las visitas, entradas, guías en español, propinas, etc.
                                <br />
                                <strong>No incluye:</strong> comidas en aeropuertos, visa en Egipto (USD 25), bebidas en Restaurants y gastos personales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Peregrinacion
