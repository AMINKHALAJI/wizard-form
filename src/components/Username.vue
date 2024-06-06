<template>
    <div class="container">
        <form class="container" @submit.prevent="handleForm">
            <h1 class="title">Username</h1>
            <input type="text" v-model="username" @input="emitUsernameUpdate"  name="username" id="username"  placeholder="Enter your username">
            
            <div class="buttons">
                <button type="submit" id="btn-prev" disabled  >prev</button>
                <button @click="userNextClicked" type="submit" id="btn-next" >next</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import {ref,defineEmits,defineProps} from 'vue'

const props = defineProps(['username'])

const username = ref(props.username);
const emit = defineEmits(['userNext','update-username']);

const emitUsernameUpdate = () => {
  emit('update-username', username.value)
}
const userNextClicked = () => { 
    emit('userNext');
 }
</script>

<style scoped>
.container{
    margin: 5rem auto ;
    background-color: rgb(8, 83, 84);
    height: 30rem;
    width: 25rem;
    display: flex;
    flex-direction: column;
}
.title{
    color: antiquewhite;
    text-align: center;
    padding-top: 0rem;
    margin-top: -2rem;
}
#username{
    text-align: center;
    margin: 3rem auto 0;
    padding: 0.8rem 1rem;
    border-radius: .6rem;
    width: 70%;
}
.buttons{

    margin-top: 6rem;
    display: flex;
    justify-content: space-around;
}
button{
    padding: 0.5rem 2rem;
    border-radius: 1rem;
    cursor: pointer;
}
</style>