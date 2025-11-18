<script setup>
import axios from 'axios';
import { onMounted,ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';



// reading data of the post id 
const post = useRoute();
const router = useRouter();
const postId = post.params.id;

const postDetails = ref({});

// searching content and store it on 
onMounted(  async() => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    
    postDetails.value = response.data;

}

)

const goBack = () => {
   router.back();
}

</script>

<template>
   <Navbar />

    <!-- main section -->
     <section>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>
                       {{ postDetails.title }}
                    </h1>

                    <button  @click="goBack"> 
                        Go Back 
                    </button>
                </div>
            </div>
        </div>
     </section>
</template>

<style></style>