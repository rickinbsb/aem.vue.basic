<template>
  <div class="button-wrapper">
    <button :class="'btn ' + type" @click="action">{{ text }}</button>
  </div>
</template>
<script>
export default {
  props: {
    text: { type: String, default: '' },
    type: { type: String, default: '' },
    action: { type: Function, default: () => {} }
  }
}
</script>

<style lang="scss" scoped>
$primary: #c12d18;
$secondary: #fff;

.button-wrapper {
  min-width: 130px;

  .btn {
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    padding: 0 20px;
    text-align: center;
    height: 100px;
    width: 100%;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease-in, box-shadow 0.1s ease-in-out;

    &:active {
      box-shadow: inset 0 0 20px -3px #0008;
    }

    &.primary {
      color: $primary;
      background-color: $secondary;

      &:hover {
        background-color: #ccc;
      }
    }

    &.secondary {
      color: $secondary;
      background-color: transparent;

      &:hover {
        background-color: #00000060;
      }
    }
  }
}
</style>
