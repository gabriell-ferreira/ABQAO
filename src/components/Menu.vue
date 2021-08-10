<template>
  <div id="menu">
    <div class="header-container">
      <div class="logo">
        <router-link to="/home">
          <img src="https://ik.imagekit.io/xc7bzbnt53/ABQ/logo-abq_UgzEoB1Bo6.png" alt="Logo ABQAO">
        </router-link>
      </div>
      <div class="menu">
        <ul>
          <li>
            <router-link to='/home'>
              Início
            </router-link>
          </li>
          <li>
            <router-link to='/notices'>
              Notícias
            </router-link>
          </li>
          <li>
            <router-link to='/courses'>
              Cursos
            </router-link>
          </li>
          <li>
            <a target="_blank" href='https://www.abq.org.br/associe-se-a-abq.html'>
              Associe-se
            </a>
          </li>
          <li>
            <a href="http://www.abq.org.br/rqi/">
            RQI</a>
          </li>
        </ul>
      </div>
      <img @click="openMenu" class="menu-icon" src="../assets/menu.png" alt="Menu icon">
    </div>
      <div class="menu-mobile" v-show="menuOpen">
        <nav>
          <ul>
            <li>
            <router-link to='/home'>
              Início
            </router-link>
          </li>
          <li>
            <router-link to='/notices'>
              Notícias
            </router-link>
          </li>
          <li>
            <router-link to='/courses'>
              Cursos
            </router-link>
          </li>
          <li>
            <a target="_blank" href='https://www.abq.org.br/associe-se-a-abq.html'>
              Associe-se
            </a>
          </li>
          <li>
            <a href="http://www.abq.org.br/rqi/">
            RQI</a>
          </li>
          </ul> 
        </nav>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      menuOpen: false
    }
  },
  methods: {
    openMenu(){
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: .4rem 1.25rem;
  margin-bottom: 2.5rem;

  background-color: var(--blue-principal); 
}

.logo img {
  width: 25.188rem;
  height: 4.875rem;
}

.menu {
  color: var(--white);
  font-size: 1.3rem;
}

.menu ul {
  list-style: none;
  display: flex;
  gap: 3rem;
}

.menu a {
  text-decoration: none;
  color: var(--white)
}

.menu-mobile {
  display: none;
  position: absolute;

  background-color: var(--blue-principal);

  width: 100%;
  height: 100vh;
  top: 6rem;
}

.menu-mobile nav ul {
  list-style: none;
  padding: 1rem;
  margin: 0
}

.menu-mobile nav ul li {
  margin-bottom: 1rem;
}

.menu-mobile nav ul li a {
  color: var(--white);
  text-decoration: none;
  font-size: 1.5rem;
}

.menu-icon {
  display: none;
  position: absolute;
  
  right: 1rem;
  width: 2rem;
}

@media (max-width: 900px){
  .menu {
    display: none;
  }

  .logo img {
    width: 70%
  }

  .menu-mobile {
    display: flex;
  }

  .menu-icon {
    display: block;
  }
}

</style>