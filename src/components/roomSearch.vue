<template>
  <div class="roomSearchBox">
    <div class="roomTotal">共<span>200</span>套符合搜索结果</div>
    <ul class="roomSearch">
      <li class="roomSearch_li">
        <div class="roomSearch_li_left">价格区间</div>
        <dl class="roomSearch_li_right">
          <dt>全部</dt>
          <dd>150万以下</dd>
          <dd>150万-200万</dd>
          <dd>200万-350万</dd>
          <dd>500万以上</dd>
          <dd>1000万以上</dd>
        </dl>
      </li>
      <li class="roomSearch_li">
        <div class="roomSearch_li_left">户型</div>
        <dl class="roomSearch_li_right">
          <dt>全部</dt>
          <dd>别墅</dd>
          <dd>三室两厅</dd>
          <dd>三室一厅</dd>
          <dd>两室两厅</dd>
          <dd>两室一厅</dd>
          <dd>一室一厅</dd>
        </dl>
      </li>
      <li class="roomSearch_li">
        <div class="roomSearch_li_left">装修</div>
        <dl class="roomSearch_li_right">
          <dt>全部</dt>
          <dd>毛坯</dd>
          <dd>精装</dd>
        </dl>
      </li>
      <li class="roomSearch_li">
        <div class="roomSearch_li_left">面积</div>
        <dl class="roomSearch_li_right">
          <dt>全部</dt>
          <dd>80㎡以下</dd>
          <dd>80㎡-100㎡</dd>
          <dd>100㎡-150㎡</dd>
          <dd>150㎡以上</dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'roomSearch',
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
@import "src/styles/color.scss";
.roomSearchBox{
  width: 1250px;
  margin: 0 auto 40px;
  .roomTotal{
    margin: 0 0 10px 0;
    span{
      color: $red_color;
      font-size: 14px;
      font-weight: bold;
    }
  }
}
.roomSearch{
  border: 1px solid $border_color;
  &_li{
    line-height: 50px;
    display: flex;
    color: $sub_title_color;
    &:not(:last-child) {
      border-bottom: 1px solid $border_color;
    }
    &_left{
      width: 80px;
      text-align: center;
      background: $gray_bg_color;
    }
    &_right{
      flex: 1;
      display: flex;
      align-items: center;
      padding: 0 20px;
      dt,dd{
        margin-right: 10px;
      }
      dt{
        line-height: 30px;
        padding: 0 5px;
        color: #ffffff;
        background: $red_color;
      }
      dd:hover{
        color: $red_color;
        cursor: pointer;
      }
    }
  }
}
</style>
