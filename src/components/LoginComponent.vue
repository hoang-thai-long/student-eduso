
<template>
    <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth px-0">
            <div class="row w-100 mx-0">
                <div class="col-lg-4 mx-auto">
                    <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                        <div class="brand-logo">
                            <img src="../assets/images/logo.svg" alt="logo">
                        </div>
                        <h4>Hello! let's get started</h4>
                        <h6 class="fw-light">Sign in to continue.</h6>
                        <form class="pt-3">
                            <div class="form-group">
                                <input type="email" class="form-control form-control-lg" id="exampleInputEmail1"
                                    placeholder="Username" v-model="username">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control form-control-lg" id="exampleInputPassword1"
                                    placeholder="Password" v-model="password">
                            </div>
                            <div class="mt-3">
                                <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="#"
                                    @click="login">SIGN IN</a>
                            </div>
                            <div class="my-2 d-flex justify-content-between align-items-center">
                                <div class="form-check">
                                    <label class="form-check-label text-muted">
                                        <input type="checkbox" class="form-check-input">
                                        Keep me signed in
                                    </label>
                                </div>
                                <a href="#" class="auth-link text-black">Forgot password?</a>
                            </div>
                            <div class="mb-2">
                                <button type="button" class="btn btn-block btn-facebook auth-form-btn">
                                    <i class="ti-facebook me-2"></i>Connect using facebook
                                </button>
                            </div>
                            <div class="text-center mt-4 fw-light">
                                Don't have an account? <a href="register.html" class="text-primary">Create</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import store from '@/store';
import config from '@/store/config';
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
const router = useRouter();
const route = useRoute();

const username = ref<string>("");
const password = ref<string>("");

const goTo = () => {
    const href = config.getQueryURL("target");
    if (href) {
        location.href = href;
    }
    else {
        console.log(router);
        router.push({
            name: 'dashboard', query: {
                ...route.query
            }
        });
    }
}

const login = () => {
    console.log(username.value, password.value);
    localStorage.setItem(config.keyToken, "test");
    store.commit("SET_USER",
        {
            id:"test",
            name:"Jony Deep",
        }
    )
    goTo();
}

</script>