<template>
  <div class="contact">
    <h1 class="title">Contacto</h1>
    <div class="qr-box">
      <div class="qr-section">
        <p><b>Escanea el código QR para contactarme en WhatsApp:</b></p>
        <img :src="qrCodeUrl" alt="Código QR para WhatsApp" />
        <p><b>Si no te resulto el codigo QR proba de contactarme con los siguientes enlaces a mis redes </b></p>
      </div>
    </div>
    <br>
    <div class="social-icons">
      <a href="https://www.linkedin.com/in/alvaro-iriarte-7237b8308" target="_blank"><i class="fab fa-linkedin"></i></a>
      <a href="https://github.com/alvaro-iriarte87?tab=repositories" target="_blank"><i class="fab fa-github"></i></a>
      <a href="URL_DE_TU_FACEBOOK" target="_blank"><i class="fab fa-facebook"></i></a>
      <a href="URL_DE_TU_INSTAGRAM" target="_blank"><i class="fab fa-instagram"></i></a>
      <a href="URL_DE_TU_WHATSAPP" target="_blank"><i class="fab fa-whatsapp"></i></a>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode';

export default {
  name: 'Contact',
  data() {
    return {
      qrCodeUrl: ''
    };
  },
  mounted() {
    this.generateQRCode();
  },
  methods: {
    generateQRCode() {
      const phoneNumber = '381153372807'; // Reemplaza con tu número de teléfono sin el símbolo "+"
      const message = 'Hola, me gustaría contactarte'; // Mensaje opcional
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      QRCode.toDataURL(whatsappUrl, { width: 200 }, (err, url) => {
        if (err) {
          console.error('Error generando el código QR:', err);
        } else {
          this.qrCodeUrl = url;
        }
      });
    }
  }
};
</script>

<style scoped>
.contact {
  text-align: center;
  padding: 1rem;
  margin-left: 100px;
  margin-right: auto;
  width: 100%;
}

.title {
  color: rgb(6, 194, 153);
}

.qr-box {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  border: 2px solid rgba(6, 194, 153, 0.7);
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(6, 194, 153, 0.5);
}

.qr-section {
  text-align: center;
}

.qr-section img {
  width: 200px;
  height: 200px;
  margin-top: 1rem;
}

.social-icons {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.social-icons a {
  color: rgb(6, 194, 153);
  font-size: 2rem;
  margin: 0 1rem;
}

.social-icons a:hover {
  color: #005744;
}

/* Reglas de medios para dispositivos móviles */
@media (max-width: 768px) {
  .contact {
    text-align: center;
    padding: 2rem;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }
  .qr-box {
    max-width: 100%;
  }
}
</style>
