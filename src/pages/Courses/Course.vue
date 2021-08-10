<template>
  <div id="course">
    <Menu />
    <div class="course-container">
      <div class="course">  
        <div class="course-title">
          {{this.course.title}}
        </div>
        <div class="course-img">
          <img src="../../assets/courses-img.png" alt="">
        </div>
        <div class="course-content">
          <div class="course-hours">
            <img src="../../assets/clock.png" alt="">
            {{this.course.hours}} horas
          </div>
          <a target='_blank' :href='this.course.link'>
            Saiba mais
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../services/api';
import Menu from '../../components/Menu.vue'

export default {
  data(){
    return {
      course: {}
    }
  },
  mounted(){
    this.getCourse()
  },
  methods: {
    async getCourse(){
      await api().get(`/course/${this.$route.params.id}`)
        .then(response => {
          this.course = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  components: {
    Menu
  }
}
</script>

<style scoped>
  a {
    padding: 1rem
  }

  .course-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .course {
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: white;
    border-radius: .5rem;
    box-shadow: 1px 4px 6px 2px #c1c1c1;

    padding: 2rem 1rem; 
    width: 50%;
  }

  .course-title {
    font-size: 2rem;

    text-transform: capitalize;
  }

  .course-img {
    height: 15rem;
    width: 15rem;
    margin: 1rem 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--blue-course);
  }

  .course-img img{
    width: 6rem;
  }

  .course-content {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .course-hours {
    font-weight: bold;
    color: var(--blue-principal);
    font-size: 1.2rem;
  }

  @media (max-width: 900px){
    .course {
      width: 100%;
    }
  }
</style>