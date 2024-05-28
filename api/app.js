
//la url de mi api 
const apiUrl = 'http://localhost:3001/api/posts';

//Obtener mis publicaciones de mi api
async function fetchBlogPosts() {
  try {
    const response = await fetch(apiUrl);
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('ERROR AL OBTENER LA PUBLICACION DE LA API:', error);
    return [];
  }
}

// renderizar la publicacion en html
function renderBlogPosts(posts) {
  const postsContainer = document.getElementById('posts-container');
  postsContainer.innerHTML = ''; // limpio mi contenedor antes de renderizar

  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
    `;
    postsContainer.appendChild(postElement);
  });
}

// aqui obtengo mi publicacion y la rendereizo
async function main() {
  const posts = await fetchBlogPosts();
  renderBlogPosts(posts);
}

// llamo la funcion 
window.addEventListener('load', main);