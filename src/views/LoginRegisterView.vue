<script>
import RegisterForm from "@/modules/Account/Components/RegisterForm.vue";
import LoginForm from "@/modules/Account/Components/LoginForm.vue";

export default {
  name: "LoginRegisterView",
  components: {LoginForm, RegisterForm},
  props: {
    isLogin: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<template>
  <login-form v-if="isLogin"/>
  <register-form v-else/>
</template>

<style scoped>

</style>