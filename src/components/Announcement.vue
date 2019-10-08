<template>
  <div class="announcement">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          公告1
        </a>
      </li>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          公告2
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Announcement',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
