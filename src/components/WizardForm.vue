<template>
    <div>
      <Username @userNext="handleUserNext" :username="username" @update-username="updateUsername" v-show="usernamePage" />
  
      <Email @emailPrev="handleEmailPrev" :email="email" @update-email="updateEmail" @emailNext="handleEmailNext" v-show="emailPage" />
  
      <Review @reviewPrev="handleReviewPrev" :username="username" :email="email" v-show="reviewPage" />
    </div>
  </template>
  
  <script setup>
  import Username from "./Username.vue";
  import Email from "./Email.vue";
  import Review from "./Review.vue";
  
  import { ref } from "vue";
  
  const usernamePage = ref(true);
  const emailPage = ref(false);
  const reviewPage = ref(false);
  
  const username=ref("");
  const email=ref("");
  
  const updateUsername = (newUsername) => {
    username.value = newUsername
  }
  const updateEmail = (newEmail) => {
    email.value = newEmail
  }
  
  const handleUserNext=() => { 
      usernamePage.value=false;
      emailPage.value=true;
   }
   const handleEmailNext=() => { 
      emailPage.value=false;
      reviewPage.value=true;
   }
  
   const handleEmailPrev=() => { 
      emailPage.value=false;
      usernamePage.value=true;
   }
  
   const handleReviewPrev=() => { 
      emailPage.value=true;
      reviewPage.value=false;
   }
  
  
  </script>
  
  <style scoped></style>
  