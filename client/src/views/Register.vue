<template>
    <div>
        <h2>Register</h2>
        <div class="row">
            <div class="card mx-auto">
                <div class="card-header text-white bg-primary">
                    <h5>Register</h5>
                </div>
                <div class="card-body">
                    <form @submit.prevent="registerUser">
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input 
                            id="username" 
                            type="text" 
                            placeholder="Username" 
                            name="username" 
                            v-model="username" 
                            class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input 
                            id="name" 
                            type="text" 
                            placeholder="Name" 
                            name="name" 
                            v-model="name" 
                            class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input 
                            id="email" 
                            type="email" 
                            placeholder="Email" 
                            name="email" 
                            v-model="email" 
                            class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" placeholder="Password" name="password" id="password" v-model="password">
                        </div>
                        <div class="form-group">
                            <label for="confirm_password">Confirm Password</label>
                            <input type="password" class="form-control" placeholder="Confirm Password" name="confirm_password" id="confirm_password" v-model="confirm_password">
                        </div>
                        <button class="btn btn-primary">Register</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <router-link to="/login" class="card-link">Already have an account?</router-link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data () {
        return{
            username: "",
            password: "",
            name: "",
            email: "",
            confirm_password: ""
        }
    },
    methods: {
        ...mapActions(['register']),
        registerUser() {
            let user ={
                username: this.username,
                password: this.password,
                confirm_password: this.confirm_password,
                email: this.email,
                name: this.name
            };
            this.register(user).then(res => {
                if(res) {
                    this.$router.push("/login");
                }
            });
        }
    }
}
</script>

<style>
    .card{
    width: 60%;
    border-radius: 4;
}
.btn{
    border-radius: 4;
}
.form-control{
    border-radius: 4;
}
</style>