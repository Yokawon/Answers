<template>
  <users :list="list" :getList="getList"> </users>
</template>

<script>
import axios from "axios";
import Users from "./Users.vue";
import "../mock/UsersList";

export default {
  name: "UsersList",
  components: { Users },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getList() {
      axios
        .get("/api/userslist")
        .then((res) => {
          this.list = res.data.data;
          console.log("获取列表成功！");
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  created() {
    this.getList();
  },
};
</script>

<style>
</style>