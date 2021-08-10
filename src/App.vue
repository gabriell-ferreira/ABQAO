<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  /* GLOBAL */
  /* @import url('./assets/Fonts/GoogleSans-Bold.ttf'); */
  /* @import url('./assets/Fonts/GoogleSans-Regular.ttf'); */

  @font-face {
    font-family: 'GoogleSans';
    src: url('./assets/Fonts/GoogleSans-Regular.ttf');
  } 
  
  :root {
    --blue-principal: #38A8F2;
    --blue-course: #2d8ac8;
    --white: #FFFFFF;
    --dark-gray: #959595;
    --light-blue: #69BFF8;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'GoogleSans', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  .section-title {
    color: var(--blue-principal);
    margin-bottom: 2rem
  }

  .section-title h1 {
    font-size: 3rem;
  }

  @media (max-width: 900px){
    .about-text p {
      font-size: 1.5rem;
    }

    .section-title h1{
      font-size: 2rem;
    }

    .leader {
      flex-direction: column;
    }
  }
</style>