<template>
  <div class="home">
    <h1 class="title">Bienvenido a Mi Portafolio</h1>
    <div class="code-animation">
      <pre id="code"></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    const codeLines = [
      "const greet = () => {",
      "    console.log('¡Hola, mundo!');",
      "};",
      "",
      "const developer = {",
      "    name: 'Alvaro Benjamin Iriarte Maccio',",
      "    age: 37 años",
      "    skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js','laravel', 'PHP', 'MYSQL'],",
      "    En desarrollo Continuo de habilidades",
      "};",
      "",
      "Print('Este portafolio ha sido creado utilizando mis conocimientos y habilidades adquiridas durante mi trayectoria como desarrollador web. Representa una síntesis de mi experiencia y mi capacidad para diseñar y desarrollar soluciones innovadoras en el campo del desarrollo web');",

      "return developer </>"
    ];

    let i = 0;
    let j = 0;
    const speed = 50; // Velocidad de la escritura
    const codeElement = document.getElementById('code');

    function typeCode() {
      if (i < codeLines.length) {
        if (j < codeLines[i].length) {
          codeElement.innerHTML += codeLines[i].charAt(j);
          j++;
          setTimeout(typeCode, speed);
        } else {
          codeElement.innerHTML += '\n';
          i++;
          j = 0;
          setTimeout(typeCode, speed);
        }
      }
    }

    typeCode();
  }
}
</script>

<style scoped>
.home {
   max-width: 1000px;
  margin: auto;
   margin-top: 40px; /* Ajusta el margen superior */
  padding-top: 20px; /* Ajuste del margen superior */
  margin-left:200px;
  text-align: center;
  border: 2px solid rgba(6, 194, 153, 0.7);
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(6, 194, 153, 0.5);
}

.title{
    color:rgb(6, 194, 153);
}

/* Estilos para la animación */
.code-animation {
  background-color: #2d2d2d;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  max-width: 600px;
  margin: auto;
}

pre {
  white-space: pre-wrap;
  text-align: left;
  font-size: 1rem;
  color: rgb(6, 194, 153);
  overflow: hidden;
  border-right: 3px solid rgba(255,255,255,0.75); /* Efecto cursor */
  animation: blink-caret .75s step-end infinite;
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: rgba(255,255,255,0.75); }
}

@media (max-width: 768px) {
  .home{
    margin-left:10px;
  }
}
</style>
