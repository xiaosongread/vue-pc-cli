<template>
<div class="body">
  <div class="header">
    <span class="title">人民数科党建信息平台</span>
  </div>
  <div class="conts">
    标题： 行稳致远，中国号扬帆再出发
    副标题：
    作者： 李拯
    日期： 2022年12月30日
    来源： 人民网
    摘要： 这篇文章主要讲述了中国的韧性和潜力以及未来的发展方向。文章指出，中国经济在疫情冲击下表现出色，实现了经济的稳步增长和社会的安定。同时，文章强调了稳定是中国发展的重要保证，包括经济社会发展的大局稳定、民生的稳定和心理上的稳定等。文章呼吁人们在面临困难和挑战时要坚定信心，保持稳定的心态和态度，为实现中华民族的伟大复兴而不懈努力。
  </div>
</div>
</template>

<script>
import { dataToJsonArticle, menuDataList, topDataListJson } from '@/utils/api'
import IndexLogoHeader from '@/components/IndexLogoHeader'
import Header from '@/components/Header'
import IndexMb1Left from '@/components/IndexMb1Left'
import NavYwsd from '@/components/NavYwsd'
import IndexMb2Left from '@/components/IndexMb2Left'
import IndexMb2Right from '@/components/IndexMb2Right'
import IndexMb3Left from '@/components/IndexMb3Left'
import IndexMb3Right from '@/components/IndexMb3Right'
import Footer from '@/components/Footer'
let _that
export default {
  components: {
    IndexLogoHeader,
    Header,
    IndexMb1Left,
    NavYwsd,
    IndexMb2Left,
    IndexMb2Right,
    IndexMb3Left,
    IndexMb3Right,
    Footer
  },
  data () {
    return {

    }
  },
  created () {
    this.menuDataList()
    _that = this
  },

  methods: {
    async menuDataList () {
      const data = await menuDataList()
      this.menuList = data.data
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.header {
  width: 100%;
  height: 56px;
  max-width: 100%;
  background-color: #D42A2A;
  color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1116;
  font-size: 16px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    color: rgb(255, 218, 128);
    font-weight: 600;
    font-family: 微软雅黑;
    font-size: 18px;
  }
}
.conts {
  width: 1200px;
  margin: 70px auto 0;
}
</style>
