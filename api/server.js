const express = require('express');
const app = express();
const PORT = 3001;

// Datos de muestra para las publicaciones de blog
const posts = [
  {
    id: 1,
    title: 'Mi primer blog',
    content: '¡Hola!, soy Fernanda Lisbeth Vásquez Castillo. Tengo 21 años, estudio Ingeniería en Informática y Sistemas. Estudio en la Universidad Rafael Landivar empece mi año universitario en el 2020, ha sido un reto total al inicio porque, fueron como 3 meses presencial. Después todo empezo de forma virtual, para mi fue un reto ya que nunca había estudiado de esa manera. Mucho menos en mi experencia universitaria ya que era mi primer año, gracias a Dios me pude acomodar a esa experencia, logre obtener esa concentración hacía mis clases para lograr tener un buen rendimiento en mis cursos. Aún recuerdo que mi último día en la universidad fue el 13 de marzo, la noticia del primer caso de covid-19 fue dada mientras yo realizaba mi segundo parcial presencial de matemática 01, en el cuál iba algo preocupada ya que en el primer parcial no me había ido de la mejor manera, y casi toda la zona era solo de parciales. Retomando el areá de la universidad es un campo demasiado extenso y tedioso. Durante el desarrollo de la carrera tuve muchos obstaculos uno de ellos, aprender a trabajar en grupo ya que es una forma de involucrar nuestras habilidades profesionales, gracias a eso descubrí que puedo tener el valor de liderazgo ya que fomento esa responsabilidad y honestidad a mis compañeros. Gracias a eso también, me ayudo a ser muy auto-didacta hacía mi persona, y me ha ayudado mucho en el papel del universitario. Durante mi carrera universitaria, unos años fueron virtuales y ya me había gustado tener esa comidad, después la universidad implemento seguridad para evitar contagios y poder regresar a la universidad. De mis perspectiva al inicio fue un reto otra vez a remotar ir a la universidad y sobre todo a esa limitante de la mascarilla. Gracias a Dios, yo nunca me contagie. Y a base de aprender a ir a la universidad sin depender de esas gestiones, me ha enseñado a no limitarme cuando se que puedo. Durante el desarrollo presencial también se ha tenido varios retos, ya que se necesita mucha más responbilidad para conocer el curso, aprender a realizar las cosas, y sobre todo aprender a retomar el trabajo en equipo de forma presencial ya que es muy distinto a lo virtual. Para mi la universidad, es una oportunidad que me brindan mis padres ya que no todos podemos tener ese lujo y dicha. Gracias a Dios todo este camino ha sido dificil pero no IMPOSIBLE. Todo paso que he dado es a base de mi esfuerzo y dedicación. Es importante reconocer, que el proceso ha sido complicado ya que algunos cursos son base fundamental para el desarrollo de mi carrera y poner mucho empeño a esos cursos se vuelve el ambiente tedioso. Pero gracias a estos retos, he podido aprender a estimular mi tiempo, y sobre todo poder integrar mi conocimiento a bse de algunos de estos aspectos. Es de suma importancia conocer el esfuerzo que se necesita para llegar a la meta. La universidad para mi ha sido base fundamental para formar mi futuro hacia lo profesional y como persona. Es importante saber que la universidad nos abre puertas cuando uno pone ese empeño con el simple hecho de salir adelante. Mi carrera de Ingeniería en informática y sistemas, es una carrera super linda, llena de muchas OPORTUNIDADES en el cuál uno debe de aprovechar al máximo. Es una carrera, que te ayuda a formar sistemas para tu ayuda personal o como organización. Es una forma de ver la vida diferente y así mismo poder creer ideas a grandes proyectos a base de mucho conocimiento. Todo lo que uno se imagina, todo se puede programar. NO hay ninguna barrera para programar. Para mi, la carrera me ha enseñado muchas cosas en especial, que todo se puede realizar. No existe en si, un no puedo, no se cómo, no hay solución. Es la razón por la cual se llama Ingeniería, la forma de ver ese ingenio y sobre todo que siempre existe una solución. Para mi son 5 años contando el presente, que he aprendido tanto como lo más básico, hacía lo máximo y diferente, conocer a veces algo nuevo se vuelve tedioso ya que nos acostumbrarmos a lo que ya habiamos conocido sin importar la cantidad que pueda ser. Es importante saber que uno durante de la carrera se debe de volver más auto-didacta cómo también asumir el papel de adolecente. Ya que, es una etapa donde aprendemos a ser responsables por nuestra propia cuenta. Y el querer salir adelante siempre depende de NOSOTROS y de NUESTRO esfuerzo. Al inicio se vuelve dificil ya que es algo nuevo para nosotros, pero con el tiempo vamos entendiendo que no siempre es así, sin embargo esto es base de lo que yo quiero lograr y ser hoy en día. Todos estos puntos uno siempre debe de pasar durante la carrera. Lo importante es saber lo que uno esta haciendo. Nunca dejemos que nuestra pereza haga que nos volvamos personas tan acomodadas con lo que sabemos y podemos hacer. Al contrario un ingeniero se diferencia exactamente con el siemple hecho de querer sobre salir y ser una persona super inteligente y tener sus metas para cumplirlas y no dejar que nada pueda estropear sus metas. Durante la carrera, también fui tutora de mate 1 en cuál me nació compartir mis conocimientos con los compañeros de primer año. Para mi enseñar es algo importante ya que me gusta en la forma que yo pueda aportar a la sociedad y sobre todo esa ayuda que brindo. A mi realmente las matemáticas me gustan demasiado, desde pequeña los números siempre ha sido fundamental para mí, siempre participaba en concursos, olimpiadas, también participe en las olimpiadas en la Universida San Carlos, cuando estaba en diversificado. Cuando entre a la universidad las matemáticas cada vez eran más tediosas, fueron un reto para mí, pero gracias a Dios logre ganarlas, aunque sinceramente Ecuaciones Diferenciales, es curso que me encanto, y me gusta demasiado. Podría repetirlo una y mil veces más jaja, no se pero ese curso me encanta. También durante ese tiempo, empece a dar tutorias de mate 2 ya eran tutorias privadas, en el cuál apoye a un compañero. En este caso fue una experencia super buena, ya que voy ayudando a los demás y yo voy desarrollando más mis conocimientos. A mi me gusta mucho enseñar, de pequeña algo que me gustaba mucho era ser maestra, pero el destino es tan imprevisto que hoy en día primero Dios lograré ser una ingeniera, más allá de lo que un día soñaba. Un 2020, super nerviosa con miedo de poder equivocarse en la carrera y de la decisión que había tomado, y hoy en día más que segura con lo que decidi, mis errores me han enseñado que esta bien equivocarse y esta mal para que la próxima sea mejor y con ese desempeño super importante.',
    space: '',
  },
  {
    id: 2,
    title: 'Mi segundo blog: Conoce sobre mi experencia fuera del país...',
    content: '¡HOLAAAAAAAAAAA!, un gusto soy Fernanda Vásquez y te contaré un poco de mi vida. Nací el 03 de enero de 2003, mi nombre completo es Fernanda Lisbeth Vásquez Castillo. Mi color favorito es el color celeste, podría decir que mi animal favorito son los gatos (eso cambio desde que tuve mi primera gatita)... Mis papás, son los que me pagan la universidad y me han dado toda oportunidad estudiantil, a lo largo del tiempo mientras fui creciendo, estudie en una escuelita casi toda mi primaria, no termine sexto primaría, porque mi papá tenía una urgencia de viaje fuera del país, y todos nos teníamos que comodar a esa nueva decisión de mi papá sin importar que teníamos que dejar acá en Guatemala. Bueno, como comentaba no termine sexto primaria, nos fuimos a los Angeles California, E.U. Mi vida cambio por completo porque para mi era un nuevo entorno, una nueva vida, nuevas costumbres, idioma, calidad de vida etc... Para mí fue un reto ya que en ese tiempo yo ni tenía idea que era el idioma ingles, cuando llegue mis papas empezaron a ver los tramites para empezar a estudiar en la escuela. Si les comento estuve en 2 escuelas.. La primera fue porque no había cupo donde estaba mi hermanito, entonces deplano me fui a otra donde estaba más lejos donde vivía. De hecho mis papas me pagaron el bus de la escuela, para que pasará por mi. Recuerdo que mi primera experencia fue, porque el bus pasaba por mi literalmente, y era casi de las últimas en dejar... en ese tiempo ni modo me tenia que acomodar a esa escuela, recuerdo que pasaron como 2 semanas y tuve el traslado a la escuela donde estaba mi hermanito, en Rabbits. Una escuela super linda, yo ame demasiado esa escuela, ya que me enseño muchas cosas, y la importancia para ellos que yo aprendiera ingles En cuanto llegue, tuve que ir a la biblioteca porque tenía que leer libros constantemente, y así mismo realizar test de lo que yo había leído para ir subiendo de nivel, tenía clases privadas de inglés para aprender el idioma. Todas las mañanas hacíamos el juramento de Estados Unidos. Refaccionaba en la escuela, siempre trataban de darnos comidas saludables, omitiendo el dia miercoles porque era miercoles de PIZZAAAAAAAAAAAAAAAAAAAA. Medio me gustaba la pizza esa porque era la que se congela y la metian al horno y listo... Durante todo ese tiempo conoci todo tipo de persona, al darme cuena que tuve compañeros Mexicanos, y esos compañeros se hacian pasar que no sabían español, totalmente ridiculos solo con el simple hecho de demostrar su nacionalidad. Fui a conocer a Disney, Universal Studios etc, etc... tomando en cuenta y que olvide mencionar que mis papas en ese tiempo no vivian con nosotros, yo vivia con mis tias/tios hermanos de mi mamá porque mis papas tenían que viajar aquí en Guatemala, y regresaban a Estados Unidos. Tener esta experencia me enseño que soy una persona capaz de lograr muchas cosas independientes y sobre todo salir adelante. Mis papas siempre fueron motivación durante todo ese tiempo, ya que vivi por 7 meses, en los cuales disfrute mucho, pero a la vez super triste a la costumbre que tenía acá en Guatemala, casi todo el tiempo me la pasaba en el apartamento o fuera del apartamento, pero casi no habían vecinos para jugar, todo el tiempo eran mis primos y yo, aunque siempre me peleaba mucho con un mi primo JAJA no se porque pero nos peleabamos, recuerdo que en la escuela los viernes eran de fotografias para recuerdos, los viernes siempre llegaba linda y super peinada para tener recuerdo de las fotografías que por cierto, cuando regrese a Guatemala me di cuenta que no traje ninguna JAJAJAJA. También fui al dentista en Estados Unidos por el gobierno ya que era esenciales esas caracteristicas. Los fines de semana, iba al parque a jugar o a comer un icecream. Recuerdo que mis papas como regalo de navidad me dieorn un reloj de fronzen porque era el que yo quería JAJAJ. Pero a pesar de estos cambios total, con el tiempo empece aprender ingles y adaptarme a la nueva vida que tenía sin saber durante ese tiempo cuando regresaría a Guatemala. Mis papas siempre eran constantes con nosotros el simple hecho de que era más imporante para ellos que nosotros estuvieramos bien, y ellos también pero la prioridad siempre fuimos mis hermanos y yo. Gracias a los grandiosos padres que tengo,he conocido todo tipo de lugares, experencias y oportunidades. Y me ha enseñado el simple hecho de aprender a valorar todo, saber que es lo bueno y lo malo. Y el esfuerzo más grande que hicieron mis papas por mis hermanos y por mi. Agradezco hoy en día la persona que soy y seguramente por la persona que seré en unos años. Después de 6 meses, mis papas decidieron que nos regresaramos todos a Guatemala. Para mi fue satisfecha esa decisión, pero a la vez fue algo que me había acostado adaptarme pero sin embargo me enseño a ser responsable con mis pendientes. Llego el punto de regresarnos entonces, regresamos a Guatemala a mediados de marzo, tomando en cuenta que ya todo los colegios estaban ya estudiando gracias a Dios el colegio Pino Montano nos acpeto a mi hermano y a mi, a seguir estudiando yo entre a primero básico, tomando en cuenta que tuve la oportunidad no seguirme atrasando ni nada por el estilo. Gracias a eso, terminando básico, me pase al colegio Instituto de Estudios Avanzados IEA Campus Los Altos. Desde segundo básico hasta diversificado. Para mi estudiar en el colegio IEA Campus Los Altos ha sido una experencia totalmente diferente ya que era una rama más fuerte en todos los sentidos, como también conoci muchas personas, incluyendo a CLAUDIA CHUM que hoy en día sigue siendo mi amiga y compañera de carrera. Quiere decir que con Claudia llevamos casi 9 años de conocernos, sin darme cuenta al final se vuelve una verdadera amistad, y sobre todo hemos tenido muchas experencias de estudio, como también de amistades. Es importante y fundamental para mi, involucrarme con personas que sean sinceras y quieran mi bien. En todo eso es base, del crecimiento personal para mejorar como persona. E involucrar mis valores. '
  },
  {
    id: 3,
    title: 'Mi tercer blog: Cómo conoci el mundo de la programación ',
    content: '¿Cómo conocí el mundo de la programación?, el mundo de la programación es super gigante, lleno de muchas características que hacen el reflejo de todo lo que se puede imaginar y crear. Programar para mi al principio, fue algo que llegue a detestar porque al inicio para agarrarle la logica fue muy tedioso para mi. Aprender a programar conocí en el colegio Instituto de Estudios Avanzados IEA Campus Los Altos ahi fue donde entre al mundo de la programación, para mi al inicio fue a base de ejercicios, me quedaba en laboratorios que duraban como 2 horas. En ese tiempo la lógica se me fue desarrollando poco a poco, gracias a los ejercicios también, porque es base fundamental conocer el entorno cuando uno empieza a programar. Esos laboratorios siempre eran una vez a la semana, con el propósito de ir aprendiendo a programar y desarrollar esa habilidad. Gracias a ese esfuerzo que yo hacía día a día y en cada laboratorio fui aprendiendo a programar. Los catedráticos siempre con el objetivo que uno como alumno saliera de su línea de confort y aprendiera nuevas cosas en la programación, así mismo para mi fue un aprendizaje fundamental porque gracias a eso iba decidiéndome a conocer más por programar. En todo ese año aprendí a programar, cuando llegue a 5to Bachillerato, yo estudie Ciencias y Letras con Orientación en Computación. En este año existían los laboratorios de la tarde que eran de 2:00 pm – 5:00pm con el propósito de enseñar a programar o realizar un sistema ya formal, involucrando base de datos. Yo aprendí a realizar software con C# y Access. Nuestro ingeniero nos enseño la forma de poder realizar un formulario, una gestión, un listado, etc. Cómo también tener la capacidad de realizar un punto de venta, ya con los conocimientos previstos par a mí en ese momento saber eso era una manera de que había salido de mi línea de confort. A veces me ponía a llorar que no me salieran las cosas porque soy una persona que le gusta que le salgan las cosas JAJA, pero pues en ese tiempo para mi era fundamental ganar ese curso. Durante todo ese tiempo se fue aprendiendo todos esos aspectos, cómo también realizar una base de datos en él cuál aprendí la importancia de un id, campo, variable, tipo, que tipo de relaciones: uno – uno, uno – muchos, muchos – muchos, muchos-uno.  Todos estos aspectos lo hacen a uno ir formándose para llegar con ese papel de tener la capacidad de ir solucionando y aprendiendo a programar. Cuando realice mis practicas las hice en la biblioteca de la municipalidad, en el cuál tuve que realizar un software para llevar el control de los libros y todo eso. Para mi fue un reto ya que nos unimos con varios compañeros, para poder realizar este software gracias a eso, aprendí mucho y la manera de trabajar en equipo y de cómo son capaces para programar de manera diferente. Asi también conoci muchos aspectos de cómo uno puede formar parte de un equipo y poder lograr realizar un sistema. Yo aprendí mucho con mis compañeros, y la manera que se le puede dar solución a un requisito o a una idea para facilitar mucho a los usuarios. Programar es una rama importante para tener idea de la importancia que es tener un sistema Programar es un proceso que consiste en una secuencia de pasos detallados y ordenados, a estos se le denominan algoritmos y el fichero donde transcribimos estas instrucciones usando un lenguaje de programación (Python, Java, Javascript, etc) para que pueda ser ejecutado por un ordenador, este sería el programa. La programación viene a ser como el arte que ayuda a crear soluciones que requieren de lógica e ingenio. Estas situaciones propician la capacidad en la persona de responder a través de procedimientos estructurados, lógicos y creativos. A través de la programación se pueden crear sitios web, programas y software, pero más allá de esto, se piensa en los resultados que se obtienen a través de ello, ya que ayuda a las personas a tener una vida más sencilla desde el punto de vista de la eficiencia. La programación ha jugado un rol muy importante en los avances tecnológicos que se tienen hoy en día, con la cual se ha desarrollado inventos que facilitan las tareas de la vida de las personas ya sea en el ámbito laboral como en el cotidiano. En el ámbito tecnológico como bien se ha mencionado existen muchas oportunidades de crecimiento y trabajo, sin embargo, aún hay temor de incursionar en esta área, ya sea por un tema de género, en el que se cree que es una carrera solo para hombres. Así también, existe el miedo por aprender algo nuevo y diferente, pero cuando se trata de algo que es beneficioso no solo para quien lo ejerce, sino también, para la vida cotidiana de todos, se deben replantear las dudas y no dejar pasar la oportunidad. ¿Cuáles son las características de programar?, es el desarrollo lógico del programa para resolver un problema en particular, es la escritura de la lógica del programa empleando un lenguaje de programación específico, es la forma de compilar o interpretar del programa hasta convertirlo en lenguaje de máquina y todo esto es a base de prueba y depuración del programa. Cómo todo programa también es importante tener el desarrollo de la documentación. Programar no solo es un sistema y ya, programar se conlleva esos sentimientos de llegar al objetivo, cada esfuerzo, nuevo aprendizaje, nuevos conceptos, nueva forma de programar. Programar también es tener una documentación que se le puede brindar al usuario para que conozca el sistema y así mismo, pueda resolver la forma de su uso, cómo también la implementación de un manual de usuario, ya que es algo que se le debe dar al cliente, tanto cómo una capacitación demostrando cómo se puede usar, cómo funciona, que usos le puede dar, dar a conocer los privilegios que puede tener con solo tener un sistema.'
  },
  {
    id: 4,
    title: 'Mi Cuarto blog',
    content: 'Holi, holi, holi, y holi, este es mi cuarto blog. Intentado pensar que puedo hablar acá. Bueno creó que hablaré de mi jaja, de lo que me gusta o de cosas randoms mías. Soy Fernanda mi color favorito es el celeste, no sé qué tiene el celeste pro yo amo el celeste es mi color favorito, me encanta me encanta. Tengo 21 años, al parecer soy muy joven para llegar a este punto de la carrera jaaj, esto quiere decir que primero Dios cierre cursos de Ingeniería en Informática y Sistemas, en el cuál me tiene super feliz y por eso me he estado esforzando cada día para llegar a la meta, de hecho este semestre voy bien, los únicos cursos que me preocupan es Redes y Telecomunicaciones y Programación Web. Ya que son cursos demasiados fuertes en el sentido que le dan el plus a mi carrera. El curso de redes ha sido un total desastre para mí, ya que es un curso muy distinto demasiado DISTINTOOOO sin exagerar ya que es la forma que se puede implementar un montón de cosas que al cabo ni se termina de ver todo, pero bueno entonces que es una red?, es un conjunto de computadoras conectas entre sí, que son capaces de compartirse información entre si. Para mi conocer este curso, me ha enseñado la importancia de conocer un simple cable puede hacer mucho jaja, sin embargo, me ha costado mucho el aprender ya que es una fuente muy fuerte. ¿Porque es importante conocer el curso? Las telecomunicaciones son esenciales en nuestra comunicación diaria al proporcionar una conectividad instantánea, acceso a la información, permitir el trabajo y la educación a distancia y fomentar la innovación tecnológica. Conoce más al respecto del tema. Las telecomunicaciones se refieren al conjunto de tecnologías y sistemas que permiten la transmisión y recepción de información a distancia, por medio de medios electrónicos, como cables, ondas electromagnéticas, fibras ópticas y satélites.  Las telecomunicaciones abarcan una amplia variedad de servicios y tecnologías, como telefonía fija y móvil, transmisión de datos, acceso a Internet, televisión, radio, videoconferencias y redes de computadoras.  Sin darnos cuenta a veces nosotros mismos estamos utilizando redes y telecomunicaciones, ya que es una manera que se puede representar en todo sentido. Cómo bien yo mencionaba, es un mundo lleno de muchas actividades, y nos damos cuenta que simple hecho que yo haya realizado esta api, también es a través de una dirección ip, y todo con relación a una red. Que yo este conecta a wifi también involucra el curso de redes y telecomunicaciones. Ahora conozcamos un poco más de programación web, para mí es un curso demasiado lindo, lleno de muchas características que como mencionaba mi ingeniero lo que yo vi, no es pero ni el 20 % porciento que lo que puede ser el curso, es demasiado extenso lleno de mucha información en el cuál es importante conocer y saber, cómo también empezar agarrar experiencia en esa rama, ya que involucra frontend y backend, imagínense el simple hecho que uno sepa manejar ambas, lo que uno puede lograr y traer muchas cosas. Pero bueno, todos sabemos que a través de esto, la programación web pueden crear sitios web, programas y software, pero más allá de esto, se piensa en los resultados que se obtienen a través de ello, ya que ayuda a las personas a tener una vida más sencilla desde el punto de vista de la eficiencia. La programación ha jugado un rol muy importante en los avances tecnológicos que se tienen hoy en día, con la cual se ha desarrollado inventos que facilitan las tareas de la vida de las personas ya sea en el ámbito laboral como en el cotidiano. Y para mi es super importante tener el valor de conocer estas ramas para llegar a un objetivo, que sería irme desarrollando más como ingeniero que seré, como bien mencionan todos. No es casarse con un lenguaje, es ir conociendo todo el mundo de la tecnología, porque hoy en día hoy puede ser la web, y mañana la inteligencia artificial. Estudiar en la rama de la tecnología, es irse actualizando por nuestra propia cuenta ya que todo va evolucionando, tanto como lenguajes de programación, la enseñanza y nuestro desarrollo de implementación. Es un mundo gigante, y aunque sea lo más grande, hay que entrar a ese mundo a conocer todo de un poco. Pero bueno, ya hablamos mucho de programación. Ahora hablemos un poco más de mí, me gusta mucho escuchar música creo que es uno de mis pasatiempos, en el cuál jamás me aburriré, me encanta todo tipo de música, menos el rock jaja, el rock uy no, es tedioso y no es para mis vibes. Yo soy todo de un poco pero no en eso jaja. Me encanta LANA DEL REY, soy su fan número uno, no existe otra fan número uno de ella, solo yo y listo JAJA. Aunque me molesta mucho, porque hoy en día casí todos son fan ush no y asi no es, solo porque una su canción se volvió viral de ella?. AHORA TODOS SON FAN Y LA AMAN???. No verdad, pero bueno en fin… me gusta mucho los gatitos, los amo. Mi primera gatita se llamaba Kitty, se perdió y nunca más apareció, estoy 100% segura que se la robaron porque era muy linda, la tuve en el año Febrero 2023 – Diciembre 2024, casi ni el año duro en mi casa, y eso me pone triste porque era la primera vez que mi  mamá me dejaba tener un gato. Pero bueno hoy en día tengo un nuevo gatito es macho, y se llama Coquito, cómo la fruta de coco jaja. Pero amo mucho mi gatito, me genera mucha paz, amor, y armonía. Desde que tuve mi primera gatita, aprendí que los gatitos generán mucha tranquilidad cuando uno no esta bien consigo mismo. También quiero comentar que mi familia es la mejor, mis papás son lo máximo, y estoy segura que ellos estarán satisfechos a cada '
  }
];

// analiza la solicitud de mi api
app.use(express.json());

// configura el encabezado para la solicitud
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// endpoint para obtener la publiacion
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// enpoint para obtener la api por su id
app.get('/api/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: 'Publicación no encontrada' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});