<template>
<div>
  <data-table :data="dataSource2" bordered :height="280">
    <column label="姓名" field="name"></column>
    <column label="工号" field="work_no"></column>
    <column label="生日" field="birthday" :width="200"></column>
    <column label="Email" field="email" :width="200"></column>
    <column label="性别" field="gender"></column>
    <column label="成绩" field="achievement"></column>
  </data-table>
</div>
</template>

<script>
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
  }
}
</script>
