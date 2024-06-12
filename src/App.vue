<template>
  <div id="app">
    <Navbar />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
/* Estilos generales */
body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  background: rgb(92, 89, 89);
}

#app {
  display: flex;
}

.main-content {
  margin-left: 250px; /* Ajusta el espacio para el Navbar */
  padding: 1rem;
  flex: 1;
}

/* Media queries para dispositivos móviles */
@media (max-width: 768px) {
  #app {
    flex-direction: column;
  }

  .main-content {
    margin-left: 0; /* Elimina el margen izquierdo en móviles */
    padding: 0.5rem;
  }
}
</style>
