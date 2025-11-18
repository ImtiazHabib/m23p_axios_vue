<script setup>
import { onMounted,ref } from 'vue';
import PostCards from '../components/postCards.vue';
import Navbar from '../pages/parts/Navbar.vue';
import axios from 'axios';
 

// stroing data 
const posts = ref({});

// fetching data from json placholder api 
onMounted( async() =>{
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts');

    posts.value = data.data;
}

)

</script>

<template>
   <Navbar />

    <!-- main section -->
     <section>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>
                        Hello Welcome to axios vue
                    </h1>
                </div>
            </div>

            <div class="row">
                <!-- sending post data to the vue file  -->
                   <PostCards  :posts="posts" />
            </div>
        </div>
     </section>
</template>

<style></style>