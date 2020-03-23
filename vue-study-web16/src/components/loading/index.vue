<template>
  <div>
    <button @click="showLoading">显示loading</button>
  </div>
</template>
<script>
// import Loading from "@/components/loading/Loading";
export default {
  methods: {
    showLoading() {
      var loading = this.$Loading({
        target:document.body,
        text: "加载中...",
        background: "rgba(0, 0, 0, 0.7)",
        spinner:'el-icon-loading'
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    }
  }
};
</script>