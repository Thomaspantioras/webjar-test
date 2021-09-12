<template>
  <div class="footer">
    <a href="#" class="previous">&laquo; Previous</a>
    <a href="#" class="next">Next &raquo;</a>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 3rem;
  display: flex;
  justify-content: space-evenly;
}
a {
  text-decoration: none;

  padding: 8px 16px;
}

a:hover {
  background-color: #ddd;
  color: black;
}

.previous,.next{
  background-color: #f1f1f1;
  color: black;
}

/* .next {
  background-color: #04AA6D;
  color: white;
} */

/* .round {
  border-radius: 50%;
} */
</style>