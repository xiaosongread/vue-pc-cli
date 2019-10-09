<template>
<div>
  <data-table :data="dataSource2" bordered>
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
      dataSource2: [{
        'name': '张三',
        'work_no': '1012',
        'birthday': '2019-10-02',
        'email': '123@qq.com',
        'gender': '男',
        'achievement': '98'
      }]
    }
  },
  created () {
    this.getDict()
  },
  methods: {
    async getDict () {
      const data = await getAllDict()
      if (data.code === 1 && data.data) {
        console.log('接口数据', data)
      }
    },
    durationNotify () {
      console.log('aaa')
      this.$notify.open({
        content: '10秒后自动关闭！',
        duration: 1000
      })
    }
  }
}
</script>
