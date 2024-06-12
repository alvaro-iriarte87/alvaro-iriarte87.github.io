<template>
  <nav class="navbar">
    <div class="navbar-header">
      <h1 class="titlep"> Mi Portafolio <i class="fas fa-terminal"></i></h1>
      <button @click="toggleMenu" class="menu-toggle">
        <i class="fas fa-bars"></i>
      </button>
    </div>
    <div class="profile">
      <img :src="profileImage" alt="Alvaro Benjamin Iriarte Maccio" class="profile-img" />
      <h2>Alvaro Benjamin Iriarte Maccio</h2>
      <p><i class="fas fa-laptop-code"></i> Desarrollador Web</p>
    </div>
    <ul :class="{ 'menu-open': menuOpen }">
      <li><router-link to="/"><i class="fas fa-home"></i> Inicio</router-link></li>
      <li><router-link to="/about"><i class="fas fa-user"></i> Sobre Mí</router-link></li>
      <li><router-link to="/projects"><i class="fas fa-folder"></i> Proyectos</router-link></li>
      <li><router-link to="/Contact"><i class="fas fa-address-card"></i> Contacto </router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      profileImage: new URL('@/assets/perfil.jpeg', import.meta.url).href,
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: #2d2d2d;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  transition: transform 0.3s ease;
}

.navbar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
}

.titlep {
  background-color: rgb(6, 194, 153);
  width: 100%;
  text-align: center;
}

p {
  color: rgb(6, 194, 153);
}

.profile {
  text-align: center;
  margin-bottom: 2rem;
}

.profile-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  box-shadow: 0 4px 10px rgb(6, 194, 153); /* Efecto 3D */
  border: 2px solid #2d2d2d; /* Borde sólido */
}

.navbar ul {
  list-style: none;
  padding: 0;
  width: 100%;
}

.navbar li {
  width: 100%;
  text-align: center;
  margin: 1rem 0;
  background-color: rgb(6, 194, 153);
}

.navbar a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 0.5rem;
}

.navbar a:hover {
  background-color: #6d6b6b;
}

.menu-open {
  display: block !important;
}

/* Media queries para dispositivos móviles */
@media (max-width: 768px) {
  .navbar {
    width: 100%;
    height: auto;
    position: static;
    transform: translateX(0);
    transition: none;
  }

  .menu-toggle {
    display: block;
  }

  .navbar ul {
    display: none;
    flex-direction: column;
    width: 100%;
    padding: 0;
  }

  .navbar ul.menu-open {
    display: block;
  }

  .navbar li {
    margin: 0;
  }

  .profile {
    display: block; /* Aseguramos que la imagen se muestre */
    margin-bottom: 1rem;
  }

  .profile-img {
    width: 80px; /* Ajustamos el tamaño para móviles */
    height: 80px;
    margin: 0.5rem auto;
  }
}
</style>
