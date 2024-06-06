<template>
    <div class="container">
      <form class="container" @submit.prevent="handleForm">
        <h1 class="title">Review</h1>
  
        <h3  id="username"> Username  :{{ props.username }}</h3>
        <h3  id="email"> Email :{{ props.email }}</h3>
        
        <button class="submitBtn" type="submit" id="submit">Submit</button>
  
        <div class="buttons">
          <button @click="reviewPrevClicked" type="submit" id="btn-prev">
            Prev
          </button>
          <button type="submit" id="btn-next" disabled>Next</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { defineEmits,defineProps } from "vue";
  
  const emit = defineEmits(["reviewPrev"]);
  
  
  const props = defineProps(['username', 'email'])
  
  const reviewPrevClicked = () => {
    emit("reviewPrev");
  };
  </script>
  
  <style scoped>
  .container {
    margin: 5rem auto;
    background-color: rgb(8, 83, 84);
    height: 30rem;
    width: 25rem;
    display: flex;
    flex-direction: column;
  }
  .title {
    color: antiquewhite;
    text-align: center;
    margin-top: -3rem;
  }
  #username {
    text-align: center;
    color: antiquewhite;
  
    margin: 2rem auto 1rem;
    padding: 0.8rem 1rem;
    border-radius: 0.6rem;
    width: 70%;
  }
  
  #email {
    text-align: center;
    width: 70%;
    margin: 0 auto;
    padding: 0.8rem 1rem;
    color: antiquewhite;
  
    border-radius: 0.6rem;
  }
  .buttons {
    padding-top: 3rem;
    display: flex;
    justify-content: space-around;
  }
  button {
    padding: 0.5rem 2rem;
    border-radius: 1rem;
    cursor: pointer;
  }
  .submitBtn {
    width: 30%;
    margin: 5rem auto 0;
  }
  </style>
  