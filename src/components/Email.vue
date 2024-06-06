<template>
    <div class="container">
        <form class="container" @submit.prevent="handleForm">
            <h1 class="title">Email</h1>
            <input v-model="email" @input="emitEmailUpdate" type="text" name="email" id="email" placeholder="Enter your email">
            
            <div class="buttons">
                <button @click="emailPrevClicked" type="submit" id="btn-prev"   >prev</button>
                <button @click="emailNextClicked" type="submit" id="btn-next" >next</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import {ref,defineEmits,defineProps} from 'vue'


const emit = defineEmits(['emailNext','emailPrev']);

const props = defineProps(['email'])
const email = ref(props.email);

const emitEmailUpdate = () => {
  emit('update-email', email.value)
}
const emailNextClicked = () => { 
    emit('emailNext');
 }
 const emailPrevClicked= () => {
    emit('emailPrev');
 }
</script>

<style scoped>
.container{
    margin: 5rem auto;
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
    margin-top: -3rem;
}
#email{
    text-align: center;
    margin: 0 auto;
    padding: 0.8rem 1rem;
    border-radius: .6rem;
    width: 70%;

}
.buttons{
    padding-top: 3rem;
    display: flex;
    justify-content: space-around;
}
button{
    padding: 0.5rem 2rem;
    border-radius: 1rem;
    cursor: pointer;
}
</style>