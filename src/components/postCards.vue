<script setup>

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
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
    </div>
   </template>
   
              
</template>

<style >
    
</style>