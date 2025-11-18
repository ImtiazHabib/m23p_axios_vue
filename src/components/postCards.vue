<script setup>
import { RouterLink } from 'vue-router';


// taking post from postpage
const props = defineProps({
    posts:{
        type:Object,
    } 
});





</script>

<template >
   
   <template  v-for="post in posts">
     <div class="col-md-4">
         <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ post.title }}</h5>
                        <p class="card-text">{{ post.body }}</p>
                        <RouterLink :to="`/postDetails/${post.id}`" class="btn btn-primary">Go to post </RouterLink>
                    </div>
                    </div>
    </div>
   </template>
   
              
</template>

<style >
    
</style>