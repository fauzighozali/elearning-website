z<template>
  <div>
    <vs-input
        v-validate="'required'"
        data-vv-validate-on="blur"
        name="username"
        icon-no-border
        icon="icon icon-user"
        icon-pack="feather"
        label-placeholder="Username"
        v-model="username"
        class="w-full mt-10"/>
    <span class="text-danger text-sm">{{ errors.first('username') }}</span>
    <vs-input
        v-validate="'required'"
        data-vv-validate-on="blur"
        name="password"
        type="password"
        icon-no-border
        icon="icon icon-lock"
        icon-pack="feather"
        label-placeholder="Password"
        v-model="password"
        class="w-full mt-10" />
    <span class="text-danger text-sm">{{ errors.first('password') }}</span>
    <vs-divider></vs-divider>
    <vs-button class="float-right mt-1 mb-5" :disabled="!validateForm" @click="loginJWT">Login</vs-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      isWeb: 1
    }
  },
  computed: {
    validateForm () {
      return !this.errors.any() && this.username !== '' && this.password !== ''
    }
  },
  methods: {
    checkLogin () {
      if (this.$store.state.auth.isUserLoggedIn()) {
        this.$vs.notify({
          title: 'Login Attempt',
          text: 'You are already logged in!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning'
        })
        return false
      }
      return true
    },
    loginJWT () {
      if (!this.checkLogin()) return
      this.$vs.loading()
      const payload = {
        userDetails: {
          username: this.username,
          password: this.password,
          isWeb: this.isWeb
        }
      }
      this.$store.dispatch('auth/loginJWT', payload)
        .then(() => { 
          this.$vs.loading.close()
          this.$router.replace({name:`dashboard-analytics`})
        })
        .catch(error => {
          console.log(error)
          this.$vs.loading.close()
          this.$vs.notify({
            title: 'Error',
            text: error.message,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          })
        })
    }
  }
}

</script>

