<template>
  <div class="message-container" ref="container1">
    <form @submit.prevent="handlesubmit" action="">
      <div class="name">
        <input
          type="text"
          v-model="formData.nickname"
          placeholder="用户昵称"
          maxlength="10"
        />
        <span class="length1">{{formData.nickname.length}}/10</span>
        <span class="error">{{ error.nickname }}</span>
      </div>
      <div class="content">
        <textarea placeholder="输入内容" v-model="formData.content" maxlength="300"></textarea>
        <span class="length2">{{formData.content.length}}/300</span>
        <span class="error">{{ error.content }}</span>
      </div>
      <button class="submit" :disabled="isloading" type="sumbit">
        {{ isloading ? "提交中..." : "提交" }}
      </button>
    </form>
  </div>
</template>

<script>
import showMessage from "@/utils/showMessage";
export default {
  data() {
    return {
      formData: {
        nickname: "",
        content: "",
      },
      error: {
        nickname: "",
        content: "",
      },
      isloading: false,
    };
  },
  methods: {
    handlesubmit() {
      console.log(11);
      this.error.nickname = "";
      this.error.content = "";
      if (!this.formData.nickname) {
        this.error.nickname = "请输入用户名";
      }
      if (!this.formData.content) {
        this.error.content = "请输入内容";
      }
      if (this.error.nickname || this.error.content) return;
      this.isloading = true;
      this.$emit("submit", this.formData, (successMsg) => {
        showMessage({
          content: successMsg,
          type: "success",
          duration: 1000,
          container: this.$refs.container1,
        });
        this.formData.nickname = "";
        this.formData.content = "";
        this.isloading = false;
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.message-container {
  .name {
    position: relative;
    height: 60px;
    input {
      height: 27px;
      width: 300px;
      border-radius: 3px;
      border: 1px dashed darken(@gray, 30%);
    }
    .length1 {
        position: relative;
        left: -40px;
        top: 2px;
        color: @gray;
        font-size: 13px;
    }
  }
  .content {
    textarea {
      height: 100px;
      width: 500px;
      border-radius: 3px;
      border: 1px dashed darken(@gray, 30%);
      resize: none;
    }
    .length2 {
        position: relative;
        left: -42px;
        bottom: 8px;
        color: @gray;
        font-size: 13px;
    }
  }
  .submit {
    margin-top: 15px;
    background-color: @primary;
    width: 75px;
    height: 32px;
    color: white;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    &:disabled {
      background-color: lighten(@primary, 10%);
    }
  }
  .error {
    margin-top: 3px;
    font-size: 14px;
    display: block;
    color: red;
  }
}
</style>