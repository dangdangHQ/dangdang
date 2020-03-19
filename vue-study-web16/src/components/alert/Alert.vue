<template>
  <div class="alert" v-show="visible">
    <div class="content" :class="[ effect,typeClass[type]]">
      <h3>{{ title }}</h3>
      <p v-if="description">{{ description }}</p>
      <!-- 穿过来的属性名是close-text这种形式的，由于中间有-，无法在props中定义，可以通过$attrs展开 -->
      <button v-if="closable" @click="close">{{ $attrs['close-text'] ? $attrs['close-text'] : '关闭'}}</button>
    </div>
  </div>
</template>
<script>
const typeClass = {
  info: "infoStyle",
  error: "errorStyle",
  success: "successStyle",
  warning: "warningStyle"
};
export default {
  data() {
    return {
      typeClass: typeClass,
      visible: true
    };
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "info"
    },
    description: {
      type: String
    },
    closable: {
      type: Boolean,
      default: true
    },
    effect: {
      type: String,
      default: "light"
    }
  },
  methods: {
    close() {
      this.visible = false;
      this.$emit("close");
    }
  }
};
</script>
<style>
/* .alert{
        border:1px solid #ccc; */
/* } */
.alert .content {
  position: relative;
  text-align: center;
}
.light {
  color: #000;
}
.dark {
  color: #fff;
}
.dark.infoStyle {
  background-color: #ccc;
}
.dark.successStyle {
  background-color: green;
}
.dark.erroeStyle {
  background-color: red;
}
.dark.warningStyle {
  background-color: orange;
}
.light.infoStyle {
  border: 1px solid #ccc;
}
.light.errorStyle {
  border: 1px solid red;
}
.light.successStyle {
  border: 1px solid green;
}
.light.warningStyle {
  border: 1px solid orange;
}
</style>