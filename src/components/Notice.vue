<template>
  <section id="notices" v-if="this.notices.length > 0">
    <div class="container-notices">
      <div class="section-title">
        <h1>Notícias</h1>
      </div>
      <div class="notices-box">
        <div v-for="(notice, index) in this.notices" :key="notice._id">
          <div class="notice" v-if="index >= notices.length-4">
            
            <img class="notice-image" src="../assets/laboratorio.jpg" alt="">
            
            <div class="notice-content">
              <div class="notice-title">
                <h2>
                  <router-link :to="{name:'notice', params:{id: notice._id}}">
                    {{ notice.title }}
                  </router-link>
                </h2>
              </div>
              <div class="notice-data">
                {{ notice.date }}
              </div>
              <div class="notice-description">
                <p>
                  {{notice.description}}
                </p>
              </div>
            </div>
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
    this.getNotices()
  },
  data() {
    return {
      notices: []
    }
  },
  methods: {
    getNotices(){
      const promise = api().get('/notices')

      promise.then(response => {
        this.notices = response.data
        return this.notices
      })
    }
  }
}
</script>

<style>
a {
  text-decoration: none;
}
#notices {
  margin-top: 5rem;
  margin-bottom: 10rem;
}

.container-notices {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}

.notices-box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.notice {
  display: flex;
  margin: 2rem 1rem;
  flex-wrap: wrap;
}

.notice-image {
  background-color: var(--blue-principal);
  width: 150px;
  height: 150px;
  margin-right: 1rem;
  border-radius: 13px;
}

.notice-data {
  color: var(--dark-gray)
}

.notice-content {
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.notice-title a {
  text-decoration: none;
  color: var(--blue-principal);
  text-transform: capitalize;
}

@media (max-width: 900px){
  .notice {
    display: flex;
    margin: 2rem 0;
    flex-direction: column;
    align-items: center;
  }

  .notice-image {
    margin: 1rem 0;
  }

  .notice-data {
    margin: .8rem 0
  }

  .notice-content {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .notice-description p {
    text-align: center;
  }

  .notices-box {
    flex-direction: column;
    align-items: center;
  }
}
</style>