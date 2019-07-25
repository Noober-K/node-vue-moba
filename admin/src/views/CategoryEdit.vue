<template>
    <div class="about">
        <h1>新建分类</h1>
        <!-- 横向显示的话 在el-form增加 label-width="120px" -->
        <!-- native表示原生表单
             prevent阻止默认提交，不跳转页面
             save指的是方法，在script里定义
         -->
        <el-form @submit.native.prevent="save">
            <el-form-item label="名称">
              <!-- 双向绑定数据 v-model -->
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item>
               <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<script>

  
export default {
  data() {
    return {
      model: {}
    }
  },
  methods: {
    async save(){
      // 请求接口，提交数据  需要安装axios
      const res = await this.$http.post('categories',this.model)
      this.$router.push('/categories/list')
      // element ui提供的弹窗提示方法
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    }
  }
}
</script>