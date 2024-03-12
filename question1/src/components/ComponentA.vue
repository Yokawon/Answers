<template>
  <div class="container">
    <div class="content" :style="{ height: dynamicHeight }">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo culpa porro
      labore, sequi perferendis tempore est. Ratione nesciunt voluptates saepe
      voluptatibus odio! Ipsum odit aspernatur esse eos, accusamus mollitia
      voluptatum id reprehenderit delectus nihil repudiandae asperiores dolores!
      Ducimus quae quia, aut placeat ut similique atque dignissimos quaerat
      veniam eaque velit aspernatur perspiciatis libero quam officiis.
      Voluptatibus quaerat illo obcaecati expedita tempora dolor omnis eum
      dolorem repudiandae consequuntur odit debitis, soluta, similique eveniet,
      facilis harum amet adipisci culpa veritatis ipsam. Deserunt vero ipsum
      nostrum in, odio est fugit eligendi id laudantium ea, veritatis, excepturi
      blanditiis nobis minus enim at asperiores itaque!
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentA",
  data() {
    return {
      dynamicHeight: "auto",
    };
  },
};
</script>

<style>
.container {
  background-color: #f0f0f0;
  max-height: 80vh;
}
.content {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: height 0.3s linear;
}
</style>