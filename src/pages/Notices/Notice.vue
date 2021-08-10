<template>
  <div id="notice">
    <Menu />
    <div class="notice-container">
      <div class="notice">  
        <div class="notice-title">
          {{this.notice.title}}
        </div>

        <img class="notice-image" src="../../assets/laboratorio.jpg" alt="">

        <div class="notice-content">
          <div class="notice-date">
            {{this.notice.date}}
          </div>
          <p>
            {{this.notice.content}}
          </p>
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
      notice: {}
    }
  },
  mounted(){
    this.getNotice()
  },
  methods: {
    async getNotice(){
      await api().get(`/notice/${this.$route.params.id}`)
        .then(response => {
          this.notice = response.data
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
  .notice-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .notice {
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: white;
    border-radius: .5rem;
    box-shadow: 1px 4px 6px 2px #c1c1c1;

    padding: 2rem 1rem; 
    width: 50%;
  }

  .notice-title {
    font-size: 2rem;

    text-transform: capitalize;
  }

  .notice-img {
    height: 15rem;
    width: 15rem;
    margin: 1rem 0;

    background-color: var(--blue-principal);
  }

  .notice-content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  .notice-date {
    font-weight: bold;
    color: var(--dark-gray);
    font-size: 1.2rem;
  }

  @media (max-width: 900px){
    .notice {
      width: 100%;
    }
  }
</style>