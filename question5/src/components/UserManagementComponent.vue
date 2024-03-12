<template>
  <el-table
    :data="users"
    :default-sort="{ prop: 'registrationDate', order: 'descending' }"
  >
    <el-table-column label="用户名" prop="username"></el-table-column>
    <el-table-column label="邮箱" prop="email"></el-table-column>
    <el-table-column sortable label="注册日期" prop="registrationDate">
    </el-table-column>
    <el-table-column fixed="right" label="操作">
      <template v-slot="scope">
        <el-button
          size="mini"
          :type="scope.row.status.code === 1 ? 'success' : 'warning'"
          @click="toggleStatus(scope.row)"
          >{{ scope.row.status.description }}
        </el-button>
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >编辑
        </el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";
import "../mock/Users";

export default {
  name: "UserManagementComponent",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
    toggleStatus(user) {
      // 切换用户状态
      user.status.code = user.status.code === 1 ? 0 : 1;
      user.status.description = user.status.code === 1 ? "Active" : "Inactive";
      axios
        .put("/api/users", { status: user.status })
        .then(() => {
          this.$message({
            message: "用户状态更新成功！",
            type: "success",
          });
        })
        .catch((err) => {
          console.error("Error deleting user:", err);
        });
    },
    handleDelete(user) {
      this.$confirm("确认删除该用户吗?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          axios
            .delete(`/api/users`)
            .then(() => {
              const index = this.users.indexOf(user);
              this.users.splice(index, 1);
              this.$message({
                message: "删除成功！",
                type: "success",
              });
            })
            .catch((err) => {
              console.error("Error deleting user:", err);
            });
        })
        .catch(() => {
          // 取消操作
        });
    },
  },
  created() {
    axios
      .get("/api/users")
      .then((res) => {
        this.users = res.data.data.map((user) => ({
          ...user,
          registrationDate: this.formatDate(user.registrationDate),
        }));
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>

<style>
</style>