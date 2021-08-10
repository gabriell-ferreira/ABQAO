<template>
  <div id="course">
    <Menu />
    <div class="course-container">
      <div class="title">
        Cursos
      </div>
      <div class="course-box" v-if="this.courses.length > 0">
        <div class="course" v-for="course in this.courses" :key='course._id'>
          <div class="course-img">
            <img src="../../assets/courses-img.png" alt="">
          </div>
          <div class="course-title">{{ course.title }}</div>
          <div class="course-hours">
            <img src="../../assets/clock.png" alt="Clock icon">
            {{ course.hours }} Horas
          </div>

          <router-link class="course-more" :to="{name: 'course', params: {id: course._id}}">Saiba Mais</router-link>
        </div>
      </div>
      <div class="course-box" v-else>
        <h2>Não há cursos a serem exibidos</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '../../components/Menu.vue';
import api from '../../services/api';

export default {
  data(){
    return {
      courses: []
    }
  },
  components: {
    Menu
  },
  methods: {
    getCourses(){
      const promise = api().get('/courses');

      promise.then(async response => {
        this.courses = response.data;
        return this.courses;
      })
    }
  },
  mounted(){
    this.getCourses();
  }
}
</script>

<style scoped>
.title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;

    color: var(--blue-principal)
  }

  .course-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .course-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .course-hours img {
    margin-right: .5rem;
  }

  .course {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 1rem 5rem
  }

  .course-img {
    background-color: var(--blue-course);
    border-radius: .5rem;

    height: 13rem;
    width: 12rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .course-img img{
    width: 6rem;
  }

  .course-title {
    color: #000;
    font-weight: bold;
    font-size: 1.5rem;
    margin-top:.5rem;
  }

  .course-hours {
    color: var(--blue-principal);
    font-size: 1.4rem;
    font-weight: bold;
    margin: .5rem 0;

    display: flex;
    align-items: center;
  }

  .course-more {
    background-color: var(--blue-principal);
    border-radius: .5rem;
    border: none;
    color: var(--white);
    
    font-weight: bold;
    font-size: 1rem;

    padding: .5rem 1rem;
  }

  @media (max-width: 900px){
    .course-box {
      flex-direction: column;
      width: 100%;
    }

    .logo {
      width: 10px;
    }

    .course-more {
      width: 10rem
    }
  }
</style>