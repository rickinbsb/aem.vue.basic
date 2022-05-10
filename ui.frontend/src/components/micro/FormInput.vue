<template>
  <div>
    <input
      :value="value"
      :type="inputType"
      :placeholder="String(label)"
      :class="inputClass"
      @input="parse"
      @keyup.enter="$emit('enter', $event.target.value)"
    />
    <svg-icon
      type="mdi"
      :path="icon"
      :class="'input-icon input-' + inputType"
    />
  </div>
</template>
<script>
import SvgIcon from '@jamescoyle/vue-icon'

export default {
  props: {
    value: { type: String, default: null },
    inputType: { type: String, default: 'text' },
    label: { type: String, default: '' },
    icon: { type: String, default: '' },
    rounded: { type: Boolean, default: false },
    warning: { type: Boolean, default: false }
  },
  components: {
    SvgIcon
  },
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    parse (event) {
      this.$emit('input', event.target.value)
    }
  },
  computed: {
    inputClass: function () {
      const classes = []
      if (this.rounded) classes.push('rounded')
      if (this.warning) classes.push('warning')
      return classes.join(' ')
    }
  }
}
</script>
<style lang="scss" scoped>
$primary: #e0e0e0;
$warning: #e9b425;

input {
  margin: 15px 0;
  width: 100%;
  background: transparent;
  border: 1px solid #ffffff;
  color: $primary;
  box-sizing: border-box;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  caret-color: transparent; /* looks way too big without this */

  &:focus {
    background: #ffffff10;
  }

  &.rounded {
    border-radius: 50px;
  }

  &.warning {
    border: 1px solid $warning;
  }

  &[type='password'] {
    letter-spacing: 5px;
    font-weight: 700;
    font-size: 32px;
    padding: 8px 20px;

    &::placeholder {
      letter-spacing: 0;
      font-weight: 400;
      font-size: 16px;
      padding: 8px 0;
      transform: translateY(-5px); /* To compensate for font-size change */
    }
  }
}

.input-icon {
  margin-left: -46px;
  margin-bottom: -7px;
  color: $primary;

  &.input-password {
    margin-bottom: 0;
  }
}
</style>
