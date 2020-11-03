<template>
  <div class="roomItem" @click="jumpDetail">
    <div class="roomItem_header">
      <img src="//img.ziroom.com/pic/house_images/g2m3/M00/37/D2/ChAZVF-T7r-AM31cAAp7TkQX5o8614.jpg_C_640_480_Q100.jpg" class="zoomBox">
    </div>
    <div class="roomItem_cons">
      <div class="roomItem_cons_header">
        <h3>合租·石韵浩庭4居室-南卧</h3>
        <div class="roomItem_cons_header_tag">住宅</div>
      </div>
      <div class="roomItem_cons_des">
        <div>19.6㎡ | 三室两厅 | 3/15层 | 南北朝向</div>
        <div>单价：12300元/㎡  市场价：430000元</div>
        <div class="roomItem_cons_des_local">
          <i class="iconfont iconlocation"></i>
          <div>小区距九龙山行约500米</div>
        </div>
        <div class="price">¥41000元</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'roomItem',
  data () {
    return {
      
    }
  },
  methods: {
    jumpDetail() {
      this.$router.push({
        name: 'Detail',
        query: { id: 1 }
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
