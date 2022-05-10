<template>
  <footer>
    <timer
      :keep-alive-txt="keepAliveTxt"
      :refresh-in-txt="refreshInTxt"
      :timer="timer"
      class="timer"
    />
    <div class="actions">
      <footer-button
        :text="keepNavTxt"
        type="primary"
        :action="newTab"
        id="keepnav"
      />
      <footer-button
        :text="logoutTxt"
        type="secondary"
        :action="logout"
        id="logout"
      />
    </div>
  </footer>
</template>
<script>
import FooterButton from '@/components/micro/FooterButton.vue'
import Timer from '@/components/micro/Timer.vue'

export default {
  components: { FooterButton, Timer },
  props: {
    logoutTxt: { type: String, default: '' },
    keepAliveTxt: { type: String, default: '' },
    refreshInTxt: { type: String, default: '' },
    keepNavTxt: { type: String, default: '' },
    target: { type: String, default: 'https://google.com' },
    loginPath: { type: String, default: '/' },
    interval: { type: String, default: '' }
  },
  data () {
    return {
      timer: null
    }
  },
  created () {
    if (!localStorage.getItem('user')) {
      // this.logout() //this is buggy
    }

    setInterval(() => {
      if (this.timer !== null) {
        this.timer -= 1

        if (this.timer < 1) {
          this.logout()
        }
      } else {
        this.timer = parseInt(this.interval)
      }
    }, 1000)
  },
  methods: {
    logout () {
      window.localStorage.clear()
      window.location = this.loginPath + '.html'
    },
    newTab () {
      window.open(this.target, '_blank')
    }
  }
}
</script>
<style lang="scss" scoped>
footer {
  position: fixed;
  display: flex;
  justify-content: end;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100px;
  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);

  .timer {
    flex: 1;
  }

  .actions {
    display: flex;

    .button-wrapper {
      width: 130px;
    }
  }
}

@media only screen and (max-width: 580px) {
  footer {
    .actions {
      width: 100%;

      #logout {
        order: 1;
      }

      #keepnav {
        flex: 1;
        order: 2;
      }
    }
    #timer {
      display: none;
    }
  }
}
</style>
