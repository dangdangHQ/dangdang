<template>
  <div>
    <KForm :model="userInfo" :rules="rules" ref="loginForm">
      <KFormItem label="用户名" prop="username">
        <KInput type="text" v-model="userInfo.username" placeholder="请输入用户名"></KInput>
      </KFormItem>
      <KFormItem label="密码" prop="password">
        <KInput type="password" v-model="userInfo.password" placeholder="请输入密码"></KInput>
      </KFormItem>
      <KFormItem>
        <button @click="submit">登陆</button>
      </KFormItem>
    </KForm>
  </div>
</template>
<script>
import KInput from "@/components/form/KInput.vue";
import KFormItem from "@/components/form/KFormItem.vue";
import KForm from "@/components/form/KForm.vue";
import Notice from "@/components/Notice.vue";
export default {
  data() {
    return {
      userInfo: {
        username: "Tom",
        password: ""
      },
      rules: {
        // required:不能拼写错误，要不然不会验证非空
        username: [{ required: true, message: "用户名不能为空" }],
        password: [{ required: true, message: "密码不能为空" }]
      }
    };
  },
  components: {
    // ElementTest,
    KInput,
    KFormItem,
    KForm
  },
  methods: {
    submit() {
      console.log(this.$refs["loginForm"]);
      this.$refs["loginForm"].validate(valid => {
        console.log(valid);
        const notice = this.$create(Notice, {
          title: "社会你杨哥喊你来搬砖",
          message: valid ? "请求登录!" : "校验失败!",
          duration: 10000
        });
        notice.show();
      });
    }
  }
};
</script>