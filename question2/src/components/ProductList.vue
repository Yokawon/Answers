<template>
  <div>
    <h1>商品列表</h1>
    <div v-for="(p, index) in products" :key="index">
      <h3>商品名称:{{ p.name }}</h3>
      <p>价格:{{ p.price }}￥</p>
      <p>评分:{{ calcAvgRatings(p.reviews) }}</p>
    </div>
  </div>
</template>

<script>
import "../mock/GoodsList";
import axios from "axios";

export default {
  name: "ProductList",
  data() {
    return {
      products: [],
    };
  },
  methods: {
    calcAvgRatings(r) {
      let count = 0;
      let tolrating = 0.0;
      let avg = 0.0;
      r.forEach((e) => {
        tolrating += e.rating;
        count += 1;
      });
      avg = tolrating / count;
      return avg.toFixed(1);
    },
  },
  created() {
    axios
      .get("/api/goodslist")
      .then((res) => {
        this.products = res.data.data;
        console.log(res);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  },
};
</script>

<style scoped>
</style>