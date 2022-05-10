<template>
  <main class="login">
    <section class="login-form">
      <form>
        <h1>{{ greatingTitle }}</h1>
        <p>{{ greatingText }}</p>
        <h2>{{ formTitle }}</h2>
        <form-input
          v-model="form.user"
          :label="userLabel"
          :icon="mdiAccountOutline"
          :warning="loginFail"
          rounded
          @enter="login"
        />
        <form-input
          v-model="form.password"
          inputType="password"
          :label="pwdLabel"
          :icon="mdiLockOutline"
          :warning="loginFail"
          rounded
          @enter="login"
        />
        <p class="warning">{{ loginFail ? errorMessage : '' }}</p>
        <button type="button" class="btn-login" @click.stop="login">
          {{ btnText }}
        </button>
      </form>
    </section>
    <section
      class="login-banner"
      v-if="bgPath"
      :style="{ backgroundImage: `url('${bgPath}')` }"
    >
      <img class="brand" :src="imagePath" />
    </section>
    <div />
  </main>
</template>
<script>
import { mdiLockOutline, mdiAccountOutline } from '@mdi/js'
import FormInput from '@/components/micro/FormInput.vue'

export default {
  components: { FormInput },
  props: {
    imagePath: { type: String, default: '/' },
    bgPath: { type: String, default: '/' },
    homePath: { type: String, default: '/' },
    greatingTitle: { type: String, default: 'edit me!' },
    greatingText: { type: String, default: 'edit me!' },
    formTitle: { type: String, default: 'edit me!' },
    btnText: { type: String, default: 'edit me!' },
    userLabel: { type: String, default: 'edit me!' },
    pwdLabel: { type: String, default: 'edit me!' },
    errorMessage: { type: String, default: 'edit me!' }
  },
  data () {
    return {
      form: {},
      loginFail: false,
      mdiLockOutline,
      mdiAccountOutline
    }
  },
  methods: {
    login () {
      if (this.form?.user === 'admin' && this.form?.password === 'admin') {
        localStorage.setItem('user', this.form?.user)

        // this.$router.push(this.homePath + '.html')
        window.location = this.homePath + '.html'
      } else {
        this.loginFail = true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

$primary: #e0e0e0;
$warning: #e9b425;

.login {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);

  .login-form {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    form {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 16px;
      color: $primary;
      width: 379px;
      padding: 0 20px;
      display: flex;
      flex-direction: column;

      h1,
      h2,
      p {
        margin: 0;
        font-weight: 400;
      }

      h1 {
        font-size: 60px;
        line-height: 90px;
      }

      p {
        line-height: 24px;

        &.warning {
          color: $warning;
          font-weight: 700;
          text-align: center;
          align-self: center;
          max-width: 300px;
          height: 48px;
          margin: 15px 0 40px;
        }
      }

      h2 {
        font-size: 30px;
        line-height: 45px;
        margin: 100px 0 10px 0;
      }

      button {
        &.btn-login {
          font-weight: 700;
          font-size: 18px;
          line-height: 27px;
          color: #ffffff;
          border: none;
          cursor: pointer;
          padding: 20px;
          background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
          box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
          border-radius: 50px;
        }

        transition: background 0.2s ease-in, box-shadow 0.1s ease-in-out;

        &:hover {
          background: linear-gradient(90deg, #c13216 0%, #c13216 100%);
        }

        &:active {
          box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.3);
        }
      }
    }
  }

  .login-banner {
    flex: 1;
    display: flex;
    align-items: start;
    justify-content: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}

@media only screen and (max-width: 768px) {
  .login {
    flex-direction: column-reverse;

    .login-banner {
      background-size: 0;
      flex: 0;
    }
  }
}
</style>
