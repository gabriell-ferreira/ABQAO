<template>
  <div id="admin">
    <Menu/>
    <div class="admin-container">
      <div class="form">

        <form class="admin-course" @submit.prevent="createCourse">
          <p class="errors" v-if="errorsCourses.length">
            <b>Corrija os seguintes erros:</b>
            <ul>
              <li v-for="error in errorsCourses" :key="error">
                {{error}}
              </li>
            </ul>
          </p>

          <label for="admin-title-course">
            Título do curso:
            <input v-model="course.title" type="text" placeholder="Ex: curso de química" id="admin-title-course">
          </label>

          <label for="admin-course-hour">
            Horas do curso:
            <input v-model="course.hours" placeholder="Ex: 10" type="number"
            min="0" id="admin-course-hour"> 
          </label>

          <label for="admin-course-link">
            Link do curso:
            <input v-model="course.link" placeholder="Ex: https://www.link.com" type="text" id="admin-course-link">
          </label>

          <label for="admin-course-description">
            Descrição do curso:
            <textarea v-model="course.description" name="admin-course-description" id="admin-course-description"></textarea>
          </label>

          <button type="submit">Adicionar Curso</button>
        </form>
        <form @submit.prevent='createNotice' class="admin-notice">
          <p class="errors" v-if="errorsNotices.length">
            <b>Corrija os seguintes erros:</b>
            <ul>
              <li v-for="error in errorsNotices" :key="error">
                {{error}}
              </li>
            </ul>
          </p>
          <label for="admin-title-notice">
            Título da notícia:
            <input v-model="notice.title" name="title" type="text" placeholder="Ex: Título da notícia" id="admin-title-notice">
          </label>

          <label for="admin-notice-date">
            Data da notícia:
            <input v-model="notice.date" name="date" placeholder="Ex: 01/01/2021" type="text" id="admin-notice-date">
          </label>

          <label for="admin-file-image">
            Banner da notícia:
            <input name="image" @change="onFileUpload" type="file" id="admin-notice-image">
          </label>

          <label for="admin-notice-content">
            Conteúdo da notícia:
            <textarea v-model="notice.content" name="content" id="admin-notice-content"></textarea>
          </label>

          <button type='submit'>Adicionar Notícia</button>
        </form>
      </div>
      <ViewContent />
    </div>
  </div>
</template>

<script>
import api from '../../services/api'

import Menu from '../../components/Menu.vue';
import ViewContent from '../../components/ViewContent.vue';

export default {
  data(){
    return {
      course: {
        title: null,
        hours: null,
        link: null,
        description: null
      },
      notice: {
        title: null,
        date: null,
        content: null,
        file: null
      },
      errorsCourses: [],
      errorsNotices: []
    }
  },
  methods: {
    onFileUpload(event){
      this.notice.file = event.target.files[0]
    },
    async createCourse(e){
      this.errorsCourses = []
      if(!this.course.title){
        this.errorsCourses.push('O título é obrigatório')
        e.preventDefault()
      }  
      if(!this.course.hours){
        this.errorsCourses.push('A quantidade de horas é obrigatório')
        e.preventDefault()
      }  
      if(!this.course.link){
        this.errorsCourses.push('O link para o curso é obrigatório')
        e.preventDefault()
      }
      if(!this.course.description){
        this.errorsCourses.push('A descrição do curso é obrigatória')
        e.preventDefault()
      }

      await api().post('/registerCourse', this.course).then(response => {
        alert('Curso adicionado com sucesso.')

        this.course.title = '';
        this.course.hours = '';
        this.course.link = '';
        this.course.description = '';

        this.errorsCourses = []

        return response.data
      }).catch(err => {
        console.err(err)
      })
    },
    async createNotice(e){
      this.errorsNotices = [] 
      if(!this.notice.title){
        this.errorsNotices.push('O título é obrigatório')
        e.preventDefault()
      }  
      if(!this.notice.date){
        this.errorsNotices.push('A data da notícia é obrigatória')
        e.preventDefault()
      }  
      if(!this.notice.content){
        this.errorsNotices.push('O conteúdo da notícia é obrigatório')
        e.preventDefault()
      }

      const data = new FormData()
      data.append('title', this.notice.title)
      data.append('date', this.notice.date)
      data.append('content', this.notice.content)
      data.append('image', this.notice.file)
      // data.append('image', this.notice.image)
      const config = {
        header : {
          'Content-Type' : 'multipart/form-data'
        }
      }
      await api().post('/registerNotice', data, config).then(response => {
        alert('Notícia adicionada com sucesso.')

        this.notice.title = '';
        this.notice.date = '';
        this.notice.content = '';
        this.notice.file = '';

        this.errorsNotices = []

        return response.data
      }).catch(err => {
        console.error(err)
      })
    }
  },
  components: {
    Menu,
    ViewContent
  }
}
</script>

<style scoped>
  .admin-container {
    display: flex;
    padding: 0 1rem;
    justify-content: center;
  }

  .form {
    border-radius: .5rem;
    box-shadow: 1px 4px 6px 2px #c1c1c1;
    padding: .5rem
  }

  .form label {
    color: var(--blue-principal);
    font-size: 1.3rem;
    font-weight: bold
  }

  .admin-notice,
  .admin-course {
    display: flex;
    flex-direction: column;

    margin-bottom: 1rem;
    padding: 0 1rem
  }

  #admin label {
    display: flex;
    flex-direction: column;

  }

  #admin input,
  #admin textarea {
    width: 20rem;
    margin: .5rem 0
  }

  #admin input {
    height: 2rem;
    font-size: 1rem;
    padding: .6rem;
  }

  #admin textarea {
    resize: none;
    height: 5rem;

    font-size: 1rem;
  }

  #admin button {
    width: 10rem;
    height: 2rem;
    margin-top: 1rem;

    background-color: var(--blue-principal);
    border:none;
    border-radius: .5rem;
    color: var(--white);
    
    font-size: 1rem;
    font-weight: bold;
  }

  .errors {
    margin-bottom: 1rem;
  }

  @media (max-width: 900px){
    .admin-container {
      flex-direction: column;
    }
    #admin input,
    #admin textarea {
      width: 100%
    }
  }
</style>