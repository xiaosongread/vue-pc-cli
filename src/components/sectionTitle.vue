<template>
  <div class="index_section">
    <div class="index_section_title">
      {{title}}
    </div>
    <div class="index_section_sub_title">{{subTitle}}</div>
    <div class="index_section_more" v-if="url">
      <router-link :to="{name:url}">更多</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sectionTitle',
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped lang="scss">
.index_section{
  width: 1150px;
  margin: 0 auto;
  position: relative;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  &_sub_title{
    text-align: center;
    color: rgba(0,0,0,.4);
    margin-top: 6px;
  }
  &_title{
    margin: 60px auto 0;
    padding: 0 40px;
    position: relative;
    display: inline-block;
    height: 36px;
    font-size: 30px;
    color: rgba(0,0,0,.85);
    &::after{
      content: "";
      position: absolute;
      top: 0;
      width: 36px;
      height: 36px;
      right: 0;
      background: url(//static8.ziroom.com/phoenix/pc/images/2019/title_bg2.png) no-repeat 50%;
      background-size: 100%;
    }
    &::before{
      content: "";
      position: absolute;
      top: 0;
      width: 36px;
      height: 36px;
      left: 0;
      background: url(//static8.ziroom.com/phoenix/pc/images/2019/title_bg1.png) no-repeat 50%;
      background-size: 100%;
    }
  }
  &_more{
    color: rgba(0,0,0,.3);
    font-size: 12px;
    padding: 2px 4px;
    border: 1px solid rgba(0,0,0,.3);
    border-radius: 8px;
    position: absolute;
    bottom: 0;
    right: 40px;
    &:hover{
      border: 0px;
      background: rgba(0,0,0,.3);
      color: #ffffff;
      // background: #ffa000;
    }
  }
}

</style>
