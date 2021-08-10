<template>
  <div id="view-content">
    <div class="courses">
      <h2>
        Cursos
      </h2>
      <div class="courses-table">
        <ul v-if="this.courses.length > 0">
          <li v-for="course in this.courses" :key="course._id">
            <div class="course-name">
              {{ course.title }}
            </div>
            <div class="icons">
              <button @click="removeCourse(course._id)">
                <img src="../assets/trash.png" alt="Remove course">
              </button>
              <!-- <button>
                <img src="../assets/edit.png" alt="Edit course">
              </button> -->
            </div>
          </li>
        </ul>
        <ul v-else>
          <li>
            Nenhum curso adicionado
          </li>
        </ul>
      </div>
    </div>
    <div class="notices">
      <h2>
        Notícias
      </h2>
      <div class="notices-table">
        <ul v-if="this.notices.length > 0">
          <li v-for="notice in this.notices" :key="notice._id">
            <div class="notice-name">
              {{ notice.title }}
            </div>
            <div class="icons">
              <button @click="removeNotice(notice._id)">
                <img src="../assets/trash.png" alt="Remove notice" >
              </button>
              <!-- <button>
                <img src="../assets/edit.png" alt="Edit notice">
              </button> -->
            </div>
          </li>
        </ul>
        <ul v-else>
          <li>
            Nenhum curso adicionado
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../services/api'

export default {
  data(){
    return {
      courses: [],
      notices: []
    }
  },
  mounted(){
    this.renderCourses(),
    this.renderNotices()
  },
  methods: {
    renderCourses(){
      const promise =api().get('/courses');

      promise.then(res => {
        this.courses = res.data

        return this.courses
      })
    },
    renderNotices(){
      const promise = api().get('/notices');

      promise.then(res => {
        this.notices = res.data

        return this.notices
        })
    },
    async removeNotice(id){
      try {
        await api().delete('/notice/'+id);
  
        alert('Notícia removida com sucesso');

        this.renderNotices()
      } catch (error) {
        alert('Erro ao remover notícia')
      }
    },
    async removeCourse(id){
      try {
        await api().delete('/course/'+id);
  
        alert('Curso removido com sucesso');

        this.renderCourses()
      } catch (error) {
        alert('Erro ao remover curso')
      }
    }
  },
  watch: {
    courses(){
      this.renderCourses()
    },
    notices(){
      this.renderNotices()
    }
  }
}
</script>

<style scoped>
  button {
    background-color: var(--blue-principal);
    width: 2rem;
    height: 2rem;
    margin: 0 .5rem;

    border: none;
    border-radius: .2rem;

    cursor: pointer;
  }

  button img {
    width: 1rem
  }

  h2 {
    margin-bottom: .5rem;
  }

  .icons {
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

  #view-content{
    padding: 1rem;
    width: 30%;
  }

  .courses {
    margin-bottom: 2rem;
  }

  .courses-table, .notices-table {
    border: 1px solid var(--dark-gray);
    border-bottom: none;

    max-height: 15rem;
    overflow-y: auto;
  }

  .courses ul, .notices ul {
    padding: 0;
    list-style: none;
  }

  .courses ul li, .notices ul li  {
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid var(--dark-gray);
    padding: .5rem;
  }

  @media (max-width: 900px){
    #view-content{ 
      width: 100%;
    }
  }
</style>