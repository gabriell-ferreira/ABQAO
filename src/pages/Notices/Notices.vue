<template>
  <div id="notice">
    <Menu/>
    <div class="notice-container">
      <div class="title">
        Notícias
      </div>
      <div class="notice-box" v-if="this.notices.length > 0">
        <div class="notice" v-for="notice in this.notices" :key='notice._id'>
          <img class="notice-image" :src="notice.image" alt="">
          <div class="notice-title">{{ notice.title }}</div>
          <div class="notice-date">{{ notice.date }}</div>
          <div class="notice-description">{{ notice.description }}</div>

          <router-link class="notice-more" :to="{name:'notice', params:{id: notice._id}}">
            Saiba Mais
          </router-link>
        </div>
      </div>
      <div class="notice-box" v-else>
        <h2>Não há notícias a serem mostradas</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '../../components/Menu.vue';
import api from '../../services/api';
import env from '../../../config/prod.env'

export default {
  data(){
    return{
      notices: [],
      env
    }
  },
  components: {
    Menu
  },
  methods: {
    getNotices(){
      const promise = api().get('/notices');

      promise.then(async response => {
        this.notices = response.data;
        return this.notices
      })
    }
  },
  mounted(){
    this.getNotices();
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

  .notice-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .notice-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    width: 70rem;
  }

  .notice {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:1rem 3rem
  }

  .notice-img {
    background-color: var(--blue-principal);
    border-radius: .5rem;

    height: 13rem;
    width: 12rem;
  }

  .notice-title {
    color: var(--blue-principal);
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: .5rem
  }

  .notice-date {
    color: var(--dark-gray);
    font-size: 1.3rem;
    margin: .5rem 0
  }

  .notice-description {
    color: var(--dark-gray);

    font-weight: bold;
    font-size: 1rem;
    text-align: justify;
    word-break:break-all;

    width: 15rem;
  }

  .notice-more {
    background-color: var(--blue-principal);
    border-radius: .5rem;
    border: none;
    color: var(--white);
    
    font-weight: bold;
    font-size: 1rem;

    padding: .5rem 1rem;
    margin-top: 1em;
  }

  @media (max-width: 900px){
    .notice-box {
      width: 100%;
    }
  }

</style>