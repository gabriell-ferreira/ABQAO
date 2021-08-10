<template>
  <div id="login">
    <img src="https://ik.imagekit.io/xc7bzbnt53/ABQ/logo-abq_UgzEoB1Bo6.png" alt="Logo ABQ-AO">

    <div class="login-container">
      <label for="email">
        Email:
        <input autocomplete="off" type="email" id="email" v-model="email">
      </label>
      <label for="password">
        Senha:
        <input type="password" name="password" id="password" v-model="password">
      </label>

      <button @click='handleLogin'>Login</button>
    </div>
  </div>
</template>

<script>
import api from '../../services/api'

export default {
  data(){
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async handleLogin(){
      try {
        const req = await api().post('/login', {
          email: this.email,
          password: this.password
        });
        
        const user = await req.data
  
        await api().get('/userProfile', {
          headers: {
            authorization: 'Bearer ' + user.token
          }
        })

        localStorage.setItem('token', user.token)
  
        this.$router.push('/admin')
      } catch (error) {
        alert('Login inválido')
        this.email = '';
        this.password = ''
      }
    }
  }
}
</script>

<style scoped>
  #login {
    background-color: var(--blue-principal);
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  #login img {
    width: 16rem;
    margin-bottom: 1rem;
  }

  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--white);
    border-radius: .8rem;

    height: 20rem;
    padding: 1rem;
  }

  .login-container label:first-child {
    margin-top: 1.5rem
  }

  .login-container label {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .login-container input {
    height: 2rem;
    width: 15rem;

    border: 1px solid var(--blue-principal);
    border-radius: .5rem;

    font-size: .9rem;
    padding: 0 1rem
  }

  .login-container button {
    width: 5rem;
    height: 2rem;

    background-color: var(--blue-principal);
    color: var(--white);
    border: none;
    border-radius: .5rem;

    font-size: 1rem;
    font-weight: bold;
  }

</style>