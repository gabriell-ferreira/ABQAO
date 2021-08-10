<template>
  <section id="about">
    <div class="container-about">
      <div class="section-title">
        <h1>Quem Somos</h1>
      </div>
      <div class="about-area">
        <div class="about-video">
          <video class="video" controls loop autoplay muted src="https://ik.imagekit.io/xc7bzbnt53/ABQ/ABQAO_dCPSnS85h.mp4" alt='ABQ video'></video>
        </div>
        <div class="about-text">
          <p>
            A ABQ - ASSOCIAÇÃO BRASILEIRA DE QUÍMICA reúne pessoas e instituições que lidam com a Química, visando a promoção a difusão do conhecimento, da educação, da melhoria da qualidade de vida, através da Química.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.container-about {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-area {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  background-color: var(--blue-principal);
  width: 100%;
  min-height: 25.688rem;
  padding: 2rem 1.5rem;
}

.about-video {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.about-video video {
  border: 5px solid var(--white);
  border-radius: 25px;
  width: 80%;
  object-fit: cover;
}

.about-text {
  color: var(--white);
  max-width: 50.375rem;
}

.about-text p {
  font-size: 1.6rem;
  font-weight: bold;
  text-align: justify;
  line-height: 140.5%;
  letter-spacing: 0.5%;
}
</style>