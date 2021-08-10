<template>
  <section id="leaders">
    <div class="container-leaders">
      <div class="section-title">
        <h1>Dirigentes ABQ-AO</h1>
        <h2>Mandato 2021 a 2023</h2>
      </div>
      <div class="leaders-box">
        <div class="line">
          <div class="leader">
            <img src="https://ik.imagekit.io/xc7bzbnt53/ABQ/carol_j3cGkjcJj.png" alt="Ana Caroline Araújo Duarte da Silva">
            <div class="leader-title">
              <h3 class="leader-name">Ana Caroline Araújo Duarte da Silva</h3>
              <h4 class="leader-cargo">Presidente</h4>
            </div>
          </div>
          <div class="leader">
            <img src="https://ik.imagekit.io/xc7bzbnt53/ABQ/waldireny_qUnD9rwwbm.png" alt="Waldireny Caldas Rochas">
            <div class="leader-title">
              <h3 class="leader-name">Waldireny Caldas Rochas</h3>
              <h4 class="leader-cargo">Vice-Presidente</h4>
            </div>
          </div>
        </div>
        <div class="line">
          <div class="leader">
            <img src="https://ik.imagekit.io/xc7bzbnt53/ABQ/nancy_W3hakkENp.png" alt="Nancy Barbosa Granjeiro">
            <div class="leader-title">
              <h3 class="leader-name">Nancy Barbosa Granjeiro</h3>
              <h4 class="leader-cargo">Diretora-Tesoureira</h4>
            </div>
          </div>
          <div class="leader">
            <img src="https://ik.imagekit.io/xc7bzbnt53/ABQ/image_I_Z29vP-1.png" alt="Pedro Campelo de Assis Junior">
            <div class="leader-title">
              <h3 class="leader-name">Pedro Campelo de Assis Junior</h3>
              <h4 class="leader-cargo">Diretor-Secretário</h4>
            </div>
          </div>
        </div>
        <div class="line">
          
          <div class="leader">
            <img src="https://ik.imagekit.io/xc7bzbnt53/ABQ/Group_36_o1x1KxClF.png" alt="Suziane Correia dos Santos">
            <div class="leader-title">
              <h3 class="leader-name">Suziane Correia dos Santos</h3>
              <h4 class="leader-cargo">Diretora Social</h4>
            </div>
          </div>
          <div class="leader">
            <img src="https://ik.imagekit.io/xc7bzbnt53/ABQ/patrick_CfyAmrzrj.png" alt="Patrick Gomes de Souza">
            <div class="leader-title">
              <h3 class="leader-name">Patrick Gomes de Souza</h3>
              <h4 class="leader-cargo">Diretor de Divulgação</h4>
            </div>
          </div>
        </div>
        <div class="line">
          <div class="leader">
            <img src="https://ik.imagekit.io/xc7bzbnt53/ABQ/image_eKzw4Tsac5.png" alt="Klenicy Kazumy Yamaguchi">
            <div class="leader-title">
              <h3 class="leader-name">Klenicy Kazumy Yamaguchi</h3>
              <h4 class="leader-cargo">Diretora de Ensino</h4>
            </div>
          </div>
          <div class="leader">
            <img src="https://ik.imagekit.io/xc7bzbnt53/ABQ/noemia_MUW_GU8iI.png" alt="">
            <div class="leader-title">
              <h3 class="leader-name">Noemia Duarte</h3>
              <h4 class="leader-cargo">Representante Estudantil</h4>
            </div>
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
.container-leaders {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container-leaders .section-title{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.leaders-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.leaders-box .line {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.leader {
  display: flex;
  align-items: center;
  margin: 0rem 3.438rem
}

.leader:not(:first-child){
  margin: 2rem 3.438rem
}

.leader-title {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.leader-name {
  text-align: center;
  width: 15rem;
  color: var(--blue-principal);
  font-size: 1.5rem;
}

.leader-cargo {
  font-size: 1.2;
  color: var(--dark-gray);
  margin-top: 0.5rem;
}
</style>