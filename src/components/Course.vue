<template>
  <section id="courses" v-if="this.courses.length > 0">
     <div class="container-courses">
      <div class="section-title">
        <h1>Cursos</h1>
      </div>
      <div class="courses-box">
        <div v-for="(course, index) in this.courses" :key="course._id">  
          <div class="course" v-if="index >= courses.length-3">
            <div class="course-img">
              <img src="../assets/courses-img.png" alt="">
            </div>
            <span class="course-title">{{ course.title }}</span>
            <span class="course-hours">
              <img src="../assets/clock.png" alt="Clock icon">
              {{course.hours}} horas
            </span>
            <router-link :to="{name: 'course', params: {id: course._id}}">
              Saiba mais
            </router-link>
          </div>
        </div>
      </div>
     </div>
  </section>
</template>

<script>
import api from '../services/api'

export default {
  mounted() {
    this.getCourses()
  },
  data(){
    return {
      courses: []
    }
  },
  methods: {
    getCourses(){
      const promise = api().get('/courses')

      promise.then(response => {
        this.courses = response.data
        return this.courses
      })
    }
  }
}
</script>

<style >
.container-courses {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.courses-box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.course {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 6.25rem
}

.course .course-title {
  font-size: 2.25rem;
  margin-top: .8rem
}

.course-title {
  text-transform: capitalize;
}

.course-img {
  height: 19.875rem;
  width: 18.625rem;
  background-color: var(--blue-course);
  border-radius: 13px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.course-img img {
  height: 10rem
}

.course .course-hours {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #38A8F2;
  font-weight: bold;
  margin: .8rem 0
}

.course .course-hours img {
  margin-right: .8rem;
}

.course a {
  text-decoration: none;
  background-color: var(--blue-principal);
  color: var(--white);
  width: 100%;
  height: 4.438rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 13px;
}

.course a:hover {
  background-color: var(--light-blue);
}

@media (max-width: 900px){
  .course {
    margin: 3rem
  }
  
  .courses-box{
    margin-top: 1rem;
  }

  .course-img {
    height: 15.875rem;
    width: 16.625rem;
  }
}
</style>