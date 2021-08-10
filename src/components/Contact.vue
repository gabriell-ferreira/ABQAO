<template>
  <section id="contact">
    <div class="contact-container">
      <div class="contact-form">
        <h1>Fale Conosco</h1>
        <form method="POST" @submit.prevent="tempSend">
          <input type="text" placeholder="Nome" v-model="name" name="name" id="name">
          <input type="email" placeholder="Email" v-model="email" name="email" id="email">
          <textarea name="message" id="message" v-model="message" placeholder="Mensagem"></textarea>
          <button type="submit" class="btn-email">Enviar</button>
        </form>
      </div>
      <div class="contact-infos-container">
        <div class="contact-infos">
          <div class="info">
            <h3>Email</h3>
            <div class="info-content">
              <img src="../assets/email.png" alt="Email icon">
              <span>abqamazonia@gmail.com</span>
            </div>
          </div>
          <div class="info">
            <h3>Instagram</h3>
            <div class="info-content">
              <img src="../assets/instagram.png" alt="Email icon">
              <a href="https://www.instagram.com/abq_ao/">
              @abq_ao</a>
            </div>
          </div>
          <div class="info">
            <h3>Associe-se</h3>
            <div class="info-content">
              <img src="../assets/people.png" alt="People icon">
              <a href="https://www.abq.org.br/associe-se-a-abq.html">
                https://www.abq.org.br/associe-se-a-abq.html</a>
            </div>
          </div>
          <div class="info">
            <h3>Cadastro no site da ABQ</h3>
            <div class="info-content">
              <img src="../assets/link.png" alt="Link icon">
              <a href="https://www.abq.org.br/cadastro_site_abq.html">
                https://www.abq.org.br/cadastro_site_abq.html</a>
            </div>
          </div>
          <div class="info">
            <h3>RQI - Revista de Química Industrial</h3>
            <div class="info-content">
              <img src="../assets/notes.png" alt="Notes icon">
              <a href="http://www.abq.org.br/rqi">
                http://www.abq.org.br/rqi</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from 'emailjs-com'
import env from '../../config/prod.env'

export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    tempSend(){
      alert('Função temporariamente indisponível.')
    },
    sendEmail(e) {
      try {
        emailjs.sendForm(env.YOUR_SERVICE_ID, env.YOUR_TEMPLATE_ID,e.target,
        env.YOUR_USER_ID, {
          from_name: this.name,
          email: this.email,
          message: this.message
        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>

<style>
.contact-container {
  display: flex;
  width: 100%;
}

.contact-form {
  background-color: var(--blue-principal);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 2;
  padding: 20px;
}

.contact-form h1{
  color: var(--white);
  font-size: 2rem;
  margin-bottom: 15px;
}

.contact-form input {
  height: 3.125rem;
  margin-bottom: 15px;
}

.contact-form input {
  height: 3.125rem;
  margin-bottom: 15px;
  border: none
}

.contact-form textarea {
  height: 8.25rem;
  resize: none;
}

.contact-form input, 
.contact-form textarea {
  width: 500px;
  border-radius: 13px;
  padding: 15px;
  border: none;
  font-size: 1rem
}

.contact-form form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-infos-container {
  display: flex;
  align-items: center;
  flex: 1;
}

.contact-infos {
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
}

.contact-infos .info {
  margin: 8px 0;
}

.contact-infos .info .info-content {
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  color: var(--dark-gray);
  font-weight: bold;
}

.contact-infos .info a {
  text-decoration: none;
  color: var(--dark-gray);
  word-break: break-all;
}

.contact-infos .info .info-content img {
  margin-right: 10px;
}

.contact-infos .info h3 {
  color: var(--blue-principal);
  margin-bottom: 5px;
}

.btn-email {
  width: 10rem;
  height: 3rem;
  margin-top: 1rem;
  
  background-color: var(--blue-principal);
  border: 2px solid var(--white);
  border-radius: .5rem;
  color: var(--white);
  font-size: 1rem;
  font-weight: bold;
}

@media (max-width: 900px){
  .contact-container {
    flex-direction: column;
  }

  .contact-form {
    width: 100%;
  }

  .contact-form form{
    width: 100%;
  }

  .contact-form input,
  .contact-form textarea {
    width: 100%;
  }

  .contact-infos-container {
    width: 100%;
    justify-content: center;
    padding: 1rem;
  }

  .contact-infos {
    padding: 5px;
  }
}
</style>