let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
    strings : ["Programadora","Fernanda", "Ingeniera"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })
/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })
/* -- inicio -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})
/* -- HEADINGS -- */
sr.reveal('.top-header',{})


//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("python");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("c");
        habilidades[3].classList.add("htmlcss");
        habilidades[4].classList.add("nextjs");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("compromiso");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("Liderazgo");
    }
}
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
