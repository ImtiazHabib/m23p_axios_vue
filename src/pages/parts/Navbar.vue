<script setup>
import { RouterLink } from 'vue-router';

</script>
<template >
    <section class="navigation_section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="inner_navbar_section">
                        <nav class="navbar navbar-expand-lg bg-body-tertiary">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="#">Navbar</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <RouterLink class="nav-link active" aria-current="page" :to="{name:'postPage'}">Home</RouterLink >
                                        </li>
                                        <li class="nav-item">
                                            <RouterLink class="nav-link" aria-current="page" :to="{name:'aboutUs'}">About Us</RouterLink >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style >
    
</style>