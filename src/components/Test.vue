<template>
  <div>123</div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    // new Promise((resolve, reject) => {
    //   console.log('log: 外部promise-1')
    //   resolve()
    // })
    //   .then(() => {
    //     console.log('log: 外部第一个then-2')
    //     new Promise((resolve, reject) => {
    //       console.log('log: 内部promise-3')
    //       resolve()
    //     })
    //       .then(() => {
    //         console.log('log: 内部第一个then-4')
    //         new Promise((resolve, reject) => {
    //           resolve()
    //         }).then(() => { console.log('log: 内部第二个then-6') })
    //       })
    //       .then(() => {
    //         // console.log('log: 内部第二个then-6')
    //       })
    //   })
    //   .then(() => {
    //     console.log('log: 外部第二个then-5')
    //   })

    // log: 外部promise
    // log: 外部第一个then
    // log: 内部promise
    // log: 内部第一个then
    // log: 外部第二个then
    // log: 内部第二个then

    // let p = new Promise((resolve, reject) => {
    //   setTimeout(resolve, 1000)
    // })
    // p.then(() => {
    //   console.log('log: 外部第一个then')
    // })
    // p.then(() => {
    //   console.log('log: 外部第二个then')
    // })
    // p.then(() => {
    //   console.log('log: 外部第三个then')
    // })
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
