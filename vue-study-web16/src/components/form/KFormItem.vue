<template>
  <div class="kform-item">
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <span class="errorMessage" v-if="error">{{ error }}</span>
  </div>
</template>
<script>
import Scheme from "async-validator";
import emitter from '@/mixins/emitter'
export default {
 name:'KFormItem',
 componentName:'KFormItem',
  inject: ["form"],
  mixins:[emitter],
  data() {
    return {
      error: ""
    };
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String,
      default: ""
    }
  },
  methods: {
    validate() {
      console.log("validate");
      // 在这里进行信息的校验

      // 获取表单的值
      const value = this.form.model[this.prop];

      // 获取值对应的验证规则
      const validateRule = this.form.rules[this.prop];

      // 根据校验源去生成校验规则
      const validator = new Scheme({ [this.prop]: validateRule });
      // 验证值
      return validator.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.error = errors[0].message;
        } else {
          this.error = "";
        }
      });
    }
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
    if(this.prop) {
    //   this.$parent.$emit("KForm-addFiled", this);
    this.dispatch('KForm',"KForm-addFiled", this)
    }
  }
};
</script>
<style>
.kform-item .errorMessage {
  color: red;
  font-size: 12px;
}
</style>