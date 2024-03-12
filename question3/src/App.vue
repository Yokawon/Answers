<template>
  <div id="app">
    <el-table :data="userslist" border>
      <el-table-column label="用户组" prop="groupName" width="180">
      </el-table-column>
      <el-table-column label="用户列表">
        <template v-slot="scope">
          <el-table :data="scope.row.users" style="width: 100%">
            <el-table-column
              label="姓名"
              prop="name"
              sortable
            ></el-table-column>
            <el-table-column
              label="邮箱"
              prop="email"
              sortable
            ></el-table-column>
            <el-table-column label="用户角色" prop="role"></el-table-column>
            <el-table-column
              label="注册日期"
              prop="createdAt"
              :formatter="formatDate"
              :filters="[
                { text: '2023-01-01', value: '2023-01-01T00:00:00Z' },
                { text: '2023-01-02', value: '2023-01-02T00:00:00Z' },
                { text: '2023-01-03', value: '2023-01-03T00:00:00Z' },
                { text: '2023-01-04', value: '2023-01-04T00:00:00Z' },
                { text: '2023-01-04', value: '2023-01-05T00:00:00Z' },
              ]"
              :filter-method="filterDate"
              sortable
            >
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
import "./mock/UsersList";

export default {
  name: "App",
  data() {
    return {
      userslist: [],
    };
  },
  methods: {
    formatDate(date) {
      return new Date(date.createdAt).toLocaleString();
    },
    filterDate(value, row) {
      console.log(row.createdAt);
      return row.createdAt === value;
    },
  },
  created() {
    axios.get("/api/userslist").then((res) => {
      this.userslist = res.data.data;
    });
  },
};
</script>

<style>
</style>
