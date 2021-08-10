<template>
  <section id="principles">
    <div class="container-principles">
      <div class="principle">
        <div class="principle-icon">
          <img src="https://ik.imagekit.io/xc7bzbnt53/ABQ/missao.png" alt="Missao">
        </div>
        <div class="principle-text">
          <div class="principle-title">
            <h1>Missão</h1>
          </div>
          <div class="principle-description">
            <p>
              Promover e apoiar, junto à sociedade em geral, discussões e ações estratégicas para a difusão da Química e áreas afins, nos campos da ciência, da educação, da tecnologia e da inovação, por meio de visão sistêmica e integrada ao meio ambiente e ao desenvolvimento sustentável, visando à melhoria da qualidade de vida.
            </p>
          </div>
        </div>
      </div>

      <div class="principle">
        <div class="principle-icon">
          <img src="https://ik.imagekit.io/xc7bzbnt53/ABQ/visao.png" alt="Visao">
        </div>
        <div class="principle-text">
          <div class="principle-title">
            <h1>Visão</h1>
          </div>
          <div class="principle-description">
            <p>
              Ser uma entidade reconhecida em âmbito nacional e internacional, destacando-se no cenário científico e tecnológico, fundamentada na ética e na excelência de suas práticas.
            </p>
          </div>
        </div>
      </div>

      <div class="principle">
        <div class="principle-icon">
          <img src="https://ik.imagekit.io/xc7bzbnt53/ABQ/valores.png" alt="Valores">
        </div>
        <div class="principle-text">
          <div class="principle-title">
            <h1>Valores</h1>
          </div>
          <div class="principle-description">
            <ul>
              <li>Competência</li>
              <li>Compromisso com a Dissiminação da Informação</li>
              <li>Ética</li>
              <li>Espírito Colaborativo e Participativo</li>
              <li>Inovação</li>
              <li>Motivação</li>
              <li>Respeito à Sociedade e ao Meio Ambiente</li>
              <li>Responsabilidade</li>
              <li>Sustentabilidade</li>
              <li>Transparência</li>
              <li>Voluntariedade para o Trabalho Cooperativo</li>
            </ul>
          </div>
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
.container-principles {
  display: flex;
  flex-direction: column;

  margin-top: 10rem;
  padding: 0 200px;
}

.principle {
  display: flex;
  align-items: flex-start;
  margin-bottom: 5.375rem;
}

.principle-text {
  margin-left: 6.25rem;
}

.principle-icon img {
  height: 10.25rem;
}

.principle-title {
  color: var(--blue-principal);
}

.principle-title h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.principle-description {
  font-size: 1.4rem;
  color: var(--dark-gray);
  font-weight: bold;
}

.principle-description ul {
  list-style-position: inside;
  padding-left: 0;
}

@media (max-width: 900px){
  .principle{
    flex-direction: column;
    align-items: center;
  }

  .container-principles {
    padding: 0 20px;
    align-items: center;
  }

  .principle-text {
    margin: 0;
  }

  .principle-title {
    display: flex;
    justify-content: center;
  }

  .principle-description {
    text-align: center;
    font-size: 1.5rem;
  }
}
</style>