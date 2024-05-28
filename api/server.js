const express = require('express');
const app = express();
const PORT = 3001;

// Datos de muestra para las publicaciones de blog
const posts = [
  {
    id: 1,
    title: 'Mi primer blog',
    content: '¡Hola!, soy Fernanda Lisbeth Vásquez Castillo. Tengo 21 años, estudio Ingeniería en Informática y Sistemas. Estudio en la Universidad Rafael Landivar empece mi año universitario en el 2020, ha sido un reto total al inicio porque, fueron como 3 meses presencial. Después todo empezo de forma virtual, para mi fue un reto ya que nunca había estudiado de esa manera. Mucho menos en mi experencia universitaria ya que era mi primer año, gracias a Dios me pude acomodar a esa experencia, logre obtener esa concentración hacía mis clases para lograr tener un buen rendimiento en mis cursos. Aún recuerdo que mi último día en la universidad fue el 13 de marzo, la noticia del primer caso de covid-19 fue dada mientras yo realizaba mi segundo parcial presencial de matemática 01, en el cuál iba algo preocupada ya que en el primer parcial no me había ido de la mejor manera, y casi toda la zona era solo de parciales. Retomando el areá de la universidad es un campo demasiado extenso y tedioso. Durante el desarrollo de la carrera tuve muchos obstaculos uno de ellos, aprender a trabajar en grupo ya que es una forma de involucrar nuestras habilidades profesionales, gracias a eso descubrí que puedo tener el valor de liderazgo ya que fomento esa responsabilidad y honestidad a mis compañeros. Gracias a eso también, me ayudo a ser muy auto-didacta hacía mi persona, y me ha ayudado mucho en el papel del universitario. Durante mi carrera universitaria, unos años fueron virtuales y ya me había gustado tener esa comidad, después la universidad implemento seguridad para evitar contagios y poder regresar a la universidad. De mis perspectiva al inicio fue un reto otra vez a remotar ir a la universidad y sobre todo a esa limitante de la mascarilla. Gracias a Dios, yo nunca me contagie. Y a base de aprender a ir a la universidad sin depender de esas gestiones, me ha enseñado a no limitarme cuando se que puedo. Durante el desarrollo presencial también se ha tenido varios retos, ya que se necesita mucha más responbilidad para conocer el curso, aprender a realizar las cosas, y sobre todo aprender a retomar el trabajo en equipo de forma presencial ya que es muy distinto a lo virtual. Para mi la universidad, es una oportunidad que me brindan mis padres ya que no todos podemos tener ese lujo y dicha. Gracias a Dios todo este camino ha sido dificil pero no IMPOSIBLE. Todo paso que he dado es a bse de mi esfuerzo y dedicación.  '
  },
  {
    id: 2,
    title: 'Mi segundo blog',
    content: 'Contenido de la publicación de ejemplo 2...'
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