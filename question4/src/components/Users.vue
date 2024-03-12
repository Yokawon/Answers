<template>
  <div>
    <div v-for="u in list" :key="u.groupId">
      <p>{{ u.groupName }}</p>
      <el-row v-for="(ui, index) in u.users" :key="index">
        <el-card shadow="hover">
          <h3>{{ ui.role === "admin" ? "管理员" : "用户" }}{{ index + 1 }}</h3>
          <p>Name: {{ ui.name }}</p>
          <p>Email: {{ ui.email }}</p>
          <p>Role: {{ ui.role }}</p>
          <el-button @click="updateUserInfo(ui.id, ui.name, ui.role)"
            >更新</el-button
          >
        </el-card>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "../mock/UsersList";
export default {
  name: "Users",
  props: { list: Array, getList: Function },
  methods: {
    updateUserInfo(id, name, role) {
      const updateinfo = { id, name, role };
      axios
        .put("/api/userslist", updateinfo)
        .then(() => {
          this.$message({
            message: "用户信息更新成功！",
            type: "success",
          });
          this.getList();
        })
        .catch((err) => alert("Error!", err));
    },
  },
};
</script>

<style>
</style>