<template>
  <div class="roomItem" @click="jumpDetail(info._id)">
    <div class="roomItem_header">
      <!-- <img src="//img.ziroom.com/pic/house_images/g2m3/M00/37/D2/ChAZVF-T7r-AM31cAAp7TkQX5o8614.jpg_C_640_480_Q100.jpg" class="zoomBox"> -->
      <img :src="info.imagePath" class="zoomBox">
    </div>
    <div class="roomItem_cons">
      <div class="roomItem_cons_header">
        <h3>{{info.name}}</h3>
        <div class="roomItem_cons_header_tag">{{info.roompPoperty | dictT('roompPoperty')}}</div>
      </div>
      <div class="roomItem_cons_des">
        <div>{{info.roomArea}}㎡ | {{info.doorModel | dictT('doorModel')}} | {{info.roomDirection | dictT('roomDirection')}}</div>
        <div>单价：{{info.unitPrice}}元/㎡  市场价：1212121元</div>
        <div class="roomItem_cons_des_local">
          <i class="iconfont iconlocation"></i>
          <div>{{info.address}}</div>
        </div>
        <div class="price">¥{{info.salePrice}}元</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'roomItem',
  props: {
    info: {
      type: Object,
      default: {}
    },
  },
  data () {
    return {
      
    }
  },
  methods: {
    jumpDetail(id) {
      this.$router.push({
        name: 'Detail',
        query: { id: id }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.roomItem{
  width: 370px;
  border: 1px solid rgba(0,0,0,.12);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  &_header{
    height: 270px;
    overflow: hidden;
    img{
      height: 100%;
    }
  }
  &_cons{
    padding: 20px 15px;
    &_header{
      display: flex;
      align-items: center;
      h3{
        font-size: 18px;
        color: rgba(0, 0, 0, .8);
      }
      &_tag{
        font-size: 12px;
        padding: 2px 5px;
        color: #ffffff;
        border-radius: 10px;
        background: #ffa000;
        margin-left: 10px;
      }
    }
    &_des{
      color: rgba(0,0,0,.4);
      font-size: 12px;
      text-align: left;
      margin-top: 10px;
      position: relative;
      &_local{
        display: flex;
        align-items: center;
      }
      .price{
        position: absolute;
        bottom: 0;
        right: 20px;
        font-size: 20px;
        color: #ffa000;
        font-weight: bold;
      }
    }
  }
}

</style>
