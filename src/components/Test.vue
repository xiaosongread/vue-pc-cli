<template>
  <div>
    <Render :mes="mesg" ></Render>
  </div>
</template>

<script>
import Render from './Render'
export default {
  name: 'Test',
  data () {
    return {
      mesg: 'mesg!'
    }
  },
  components: { Render },
  created () {

  },
  methods: {
    getEleNodeType () {
      // 2 3 7

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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
