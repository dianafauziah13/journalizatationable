<template>
    <div class="vue-tempalte">
        <form>
            <h3>Login</h3>
 
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control form-control-lg" />
            </div>
 
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
 
            <button type="submit" class="btn btn-dark btn-lg btn-block">Login</button>
 
            <p class="forgot-password text-right mt-2 mb-4">
                Dont have an account?   
                <router-link :to="{name: 'signup'}">Register</router-link>
            </p>
 
 
        </form>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {}
        }
    }
</script>