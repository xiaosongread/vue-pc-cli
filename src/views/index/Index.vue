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
</div>
</template>

<script>
import { getAllDict } from '@/utils/api'
export default {
  data () {
    return {

    }
  },
  created () {
    this.getDict()
    console.log('store数据', this.$store.state.dataSource2)
  },
  methods: {
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
