<template>
<div>
  <data-table :data="$store.state.dataSource2" bordered>
    <column label="姓名" field="name"></column>
    <column label="工号" field="work_no"></column>
    <column label="生日" field="birthday" :width="200"></column>
    <column label="Email" field="email" :width="200"></column>
    <column label="性别" field="gender"></column>
    <column label="成绩" field="achievement"></column>
  </data-table>
  <button class="button" @click="durationNotify">10秒关闭</button>

  <div>
    <a class="button is-primary" @click="addAppCount">+</a>
    {{$store.state.appConut}}
    {{$store.getters.watchAppConut}}
    <a class="button" @click="deieteAppCount">-</a>
  </div>
  请求提示： {{$store.state.actionDes}}
</div>
</template>

<script>
import { getAllDict, getDouBanMovieList } from '@/utils/api'
let that
export default {
  data () {
    return {

    }
  },
  created () {
    // this.getDict()
    that = this
    this.getDouBanMovieList()
  },
  methods: {
    addAppCount () {
      this.$store.commit('ADD_COUNT', 1)
    },
    deieteAppCount () {
      if (this.$store.state.appConut) this.$store.commit('DELETE_COUNT', 1)
    },
    // 获取热门电影
    getDouBanMovieList () {
      getDouBanMovieList().then(function (data) {
        that.$store.dispatch('RESET_ACCTION_APP_COUNT', data.title)
      })
    },
    async getDict () {
      const data = await getAllDict()
      if (data.code === 1 && data.data) {
        console.log('接口数据', data)
      }
    },
    durationNotify () {
      this.$notify.open({
        content: '10秒后自动关闭！',
        duration: 1000
      })
    }
  }
}
</script>
