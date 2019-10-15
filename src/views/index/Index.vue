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
  <div>test merge file to other brnach</div>
</div>
</template>

<script lang="ts">
// import Vue from 'vue'
import { Component, Vue } from 'vue-property-decorator'
import { getAllDict } from '@/utils/api.js'
// import Component from 'vue-class-component'

@Component({})
export default class extends Vue {
  mounted () {
    this.getDict()
    console.log('store数据', this.$store.state.dataSource2)
  }

  private async getDict() {
    const data = await getAllDict()
    // if (data.data) {
    //   console.log('接口数据', data)
    // }
  }

  durationNotify () {
    // this.$notify.open({
    //   content: '10秒后自动关闭！',
    //   duration: 1000
    // })
  }
}
</script>
