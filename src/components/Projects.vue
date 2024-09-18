<template>
  <div class="projects">
    <h1 class="title"> Mis Proyectos </h1>
    <br>
    <div class="project-list">
      <div v-for="project in projects" :key="project.id" class="project">
        <div class="project-box">
         <h1 class="title">{{ project.title }}</h1>
          <br>
          <!-- <h3>{{ project.title }}</h3> -->
          <div class="project-description">
            <p>{{ project.description }}</p>
            <ul class="project-details">
              <li><strong>Tecnologías:</strong> {{ project.technologies }}</li>
              <li><strong>Cliente:</strong> {{ project.client }}</li>
              <li><strong>Año de Desarrollo:</strong> {{ project.year }}</li>
            </ul>
          </div>
          <div class="project-images">
            <img v-for="(image, index) in project.images" :key="index" :src="image" alt="Imagen de Proyecto" class="project-image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Proyecto Sistema de Préstamos v1.0',
          images: [
            new URL('@/assets/Sp1.jpeg', import.meta.url).href,
            new URL('@/assets/Sp2.jpeg', import.meta.url).href,
            new URL('@/assets/Sp3.jpeg', import.meta.url).href
          ],
          description: 'Es una Api Rest Full desarrollada para gestionar eficientemente préstamos financieros. Con tecnologías como Vue.js, Bootstrap y Node.js,Laravel,PHP, base de datos MYSQL entre otras. Este proyecto ofrece una combinación poderosa de robustez y rendimiento. Totalmente responsivo y adaptado para funcionar en dispositivos móviles, este sistema proporciona una gestión integral de préstamos, desde la creación de clientes hasta la generación de reportes detallados en formato PDF. Con una interfaz intuitiva y funcionalidades como seguimiento de pagos y simulación de préstamos, este proyecto representa una herramienta invaluable para instituciones financieras en 2024',
          technologies: 'Vue.js, Bootstrap, Node.js, Laravel, PHP, MySQL',
          client: 'Varios',
          year: 2024
        },
        {
          id: 2,
          title: 'Web Api BIKE ',
          images: [
            new URL('@/assets/webbike.jpeg', import.meta.url).href,
            new URL('@/assets/webbike2.jpeg', import.meta.url).href,
          ],
          description: 'Esta web bike la desarrolle a pedido del cliente, con base de datos para que los clientes y futuros clientes puedan registrarse en la misma publicar, tambien sume la funcion de poder localizar por Gogle Maps la ubicacion de las bicicleterias cercanas Actualmente contiamos con el desarrollo de la misma implementando mas funciones con finalidad Ecomerce ',
          technologies: 'Vue.js, Bootstrap, Node.js, Laravel, PHP, MySQL, Google Maps',
          client: 'Anonimo',
          year: 2024
        },
        {
          id: 3,
          title: 'Estetica web api ',
          images: [
            new URL('@/assets/estetica.JPG', import.meta.url).href,
            new URL('@/assets/estetica2.JPG', import.meta.url).href,
            new URL('@/assets/estetica3.JPG', import.meta.url).href,
            new URL('@/assets/estetica4.JPG', import.meta.url).href,
          ],
          description: 'WEB para una estetica, con implementacion de videos, contacto con codigo QR, panel de publicacion para administrador y otras modificaciones pedidos por el cliente ',
          technologies: 'Vue.js, Bootstrap, Node.js, Laravel, PHP, MySQL',
          client: 'Anonimo',
          year: 2024
        },
        {
          id: 4,
          title: 'Api de Escritorio ',
          images: [
            new URL('@/assets/estacionamiento.JPG', import.meta.url).href,
          
          ],
          description: 'Esta es una aplicacion de escritorio, que desarrolle con mis conocimientos recientes en el ecosistema Microsoft (C#, .NET, WPF, SQLite). A pedido de un cliente que necesitaba gestionar su estacionamiento mensual con una tabla simple con funcion de fecha y avisos de terminos como se ve en la foto. es una aplicacion totalmente portable a otros Ordenadores ',
          technologies: 'C#, .Net, WPF, SQLite',
          client: 'Anonimo',
          year: 2024
        }
      ]
    
    };
  }
};
</script>

<style scoped>
.projects {
  text-align: center;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}

.title {
  color: rgb(6, 194, 153);
  text-align: center;
}

.project-list {
  text-align: left;
}

.project {
  margin-bottom: 3rem;
}

.project-box {
  /* border: 2px solid rgb(6, 194, 153); */
  /* border-radius: 10px; */
  padding: 1.5rem;
  text-align: left;
   border: 2px solid rgba(6, 194, 153, 0.7);
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(6, 194, 153, 0.5);
}

.project-description {
  text-align: left;
  margin-bottom: 1rem;
}

.project-details {
  list-style: none;
  padding: 0;
}

.project-details li {
  margin-bottom: 0.5rem;
}

.project-images {
  display: flex;
  flex-wrap: wrap; /* Permite que las imágenes se ajusten automáticamente a la línea siguiente */
  justify-content: center;
}

.project-image {
  width: calc(50% - 20px); /* Ajusta el ancho de las imágenes para mostrar dos por fila */
  height: auto;
  margin: 0.5rem; /* Añade un poco de margen entre las imágenes */
}

@media (min-width: 768px) {
  .project-images {
    display: flex;
    flex-wrap: wrap; /* Ajusta las imágenes en filas */
    justify-content: center; /* Centra las imágenes horizontalmente */
  }

  .project-image {
    width: 45%; /* Ancho de las imágenes en dispositivos más grandes */
  }
}
</style>