<template>
  <div id="app">
    <Menu />
    <About />
    <Principle />
    <Leader />
    <Course />
    <Notice />
    <Contact />

    <footer id="contact">
      <a target="_blank" href="https://www.behance.net/ticianaramos">
        <img src="../../assets/behance.png" alt="Behance Ticiana Ramos">
        Ticiana Ramos
      </a>
      <div class="line"></div>
      <a target="_blank" href="https://github.com/gabriell-ferreira">
        <img src="../../assets/github.png" alt="Github Gabriel Ferreira">
        Gabriel Ferreira
      </a>
    </footer>
  </div>
</template>

<script>
import Menu from '../../components/Menu.vue'
import About from '../../components/About.vue'
import Principle from '../../components/Principle.vue'
import Leader from '../../components/Leader.vue'
import Course from '../../components/Course.vue'
import Notice from '../../components/Notice.vue'
import Contact from '../../components/Contact.vue'

export default {
  components: {
    Menu,
    About,
    Principle,
    Leader,
    Course,
    Notice,
    Contact,
  }
}
</script>

<style scoped>
  footer {
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
  }

  footer a {
    display: flex;
    align-items: center;
    color: var(--dark-gray);
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
  }

  footer img {
    margin-right: .5rem;
  }

  footer .line {
    height: 3rem;
    width: 2px;
    background-color: var(--dark-gray);
    margin:0 1rem
  }

  @media (max-width: 900px){
    footer {
      flex-direction: column;
    }

    footer .line {
      display: none;
    }

    footer a {
      margin: .5rem 0;
    }
  }
</style>