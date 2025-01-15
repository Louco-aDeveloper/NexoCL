// Inicializar AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
  });
  
  // Inicializar Owl Carousel para Testimonios
  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:5000,
      responsive:{
        0:{ items:1 },
        600:{ items:1 },
        1000:{ items:1 }
      }
    });
  });
  
  // Dark Mode Toggle
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  const darkModeIcon = document.getElementById('darkModeIcon');
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeIcon.classList.toggle('fa-moon');
    darkModeIcon.classList.toggle('fa-sun');
  });
  
  // Back to Top Button
  const backToTopButton = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Portfolio Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(button => button.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      
      portfolioItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
          item.classList.add('show');
        } else {
          item.style.display = 'none';
          item.classList.remove('show');
        }
      });
    });
  });
  
  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');
  
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    
    // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, usando fetch o AJAX.
    
    // Mostrar mensaje de éxito
    successMessage.classList.remove('d-none');
    
    // Resetear el formulario
    contactForm.reset();
    
    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => {
      successMessage.classList.add('d-none');
    }, 5000);
  });
  

  // JavaScript para cambiar el ícono del idioma

// Obtén el contenedor del ícono y los elementos del dropdown
const languageIcon = document.getElementById('languageIcon');
const languageItems = document.querySelectorAll('.dropdown-item');

// Asigna un evento de clic a cada elemento del menú de idiomas
languageItems.forEach(item => {
  item.addEventListener('click', function() {
    const selectedLanguage = item.getAttribute('data-lang'); // Obtén el código de idioma

    // Cambia el texto del ícono por el código de idioma seleccionado
    languageIcon.textContent = selectedLanguage;

    // Opcionalmente, podrías hacer algo con el idioma seleccionado, como cargar el contenido traducido
    // Aquí podrías agregar una función para actualizar el contenido en función del idioma seleccionado
    console.log('Idioma seleccionado: ' + selectedLanguage);
  });
});
const translations = {
    en: {
      about: "About Us",
      description: "At Nexo, we specialize in providing custom digital solutions for your needs...",
      contact: "Contact",
      // Agrega más traducciones aquí
    },
    es: {
      about: "Sobre Nosotros",
      description: "En Nexo, nos especializamos en brindar soluciones digitales a medida para tus necesidades...",
      contact: "Contacto",
      // Agrega más traducciones aquí
    }
  };

  const setLanguage = (lang) => {
    document.querySelectorAll("[data-translate]").forEach((el) => {
      const key = el.getAttribute("data-translate");
      el.textContent = translations[lang][key];
    });
  };

  document.querySelectorAll(".dropdown-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = e.target.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  // Inicializa el idioma por defecto
  setLanguage("es");
  


  
