<template>
<div class="body">
  <div class="header">
    <span class="title">人民数科党建信息平台</span>
  </div>
  <div class="app-main appMainIndex">
    <div class="search-header">
      <p class="search-header-title">人民数科党建信息平台</p>
      <div class="search-header-box">
        <div class="search-header-box-input">
          <div class="search-header-box-input-left">
            <div class="search-header-box-input-left-1">
              <div class="label-text">全部</div>
              <i class="el-icon-arrow-down"></i>
            </div>
            <div class="search-header-box-input-left-2">
              <div class="label-text">全文</div>
              <i class="el-icon-arrow-down"></i>
            </div>
          </div>
          <div class="search-header-box-input-right">
            <input type="text" placeholder="请输入内容">
            <i class="el-icon-search"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="section-box">
      <div class="sw-lists-button">
        <div class="sw-lists-button__item">
          <img src="../../assets/dj/zxjh.png" class="sw-lists-button__item--icon">
          <span class="sw-lists-button__item--label">总书记重要讲话</span>
        </div>
        <div class="sw-lists-button__item">
          <img src="../../assets/dj/rmrb.png" class="sw-lists-button__item--icon">
          <span class="sw-lists-button__item--label">人民日报</span>
        </div>
        <div class="sw-lists-button__item">
          <img src="../../assets/dj/mszk.png" class="sw-lists-button__item--icon">
          <span class="sw-lists-button__item--label">民生周刊</span>
        </div>
      </div>
      <div class="mid_title">
        <img  src="../../assets/dj/index_title_l.svg" alt="">
        <p class="mid_title_text">总书记重要讲话</p>
        <img src="../../assets/dj/index_title_r.svg" alt="">
      </div>
      <div class="el-tabs__content">
        <div class="multi_list">
          <div class="title">
            <span>人民日报社论汇编</span>
            <span class="refresh">
              <i class="el-icon-refresh"></i>
              换一批
            </span>
          </div>
          <div class="content">
            <div class="sw-lists">
              <div class="sw-lists__item is-icon is-dot">
                <div class="sw-lists__item--label">
                  <div class="sw-lists__item--text" @click="goInfo()">踔厉奋发新征程勇毅前行向复兴</div>
                </div>
              </div>
              <div class="sw-lists__item is-icon is-dot">
                <div class="sw-lists__item--label">
                  <div class="sw-lists__item--text">踔厉奋发新征程勇毅前行向复兴</div>
                </div>
              </div>
              <div class="sw-lists__item is-icon is-dot">
                <div class="sw-lists__item--label">
                  <div class="sw-lists__item--text">踔厉奋发新征程勇毅前行向复兴</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="multi_list">
          <div class="title">
            <span>人民日报社论汇编</span>
            <span class="refresh">
              <i class="el-icon-refresh"></i>
              换一批
            </span>
          </div>
          <div class="content">
            <div class="sw-lists">
              <div class="sw-lists__item is-icon is-dot">
                <div class="sw-lists__item--label">
                  <div class="sw-lists__item--text">踔厉奋发新征程勇毅前行向复兴</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="multi_list">
          <div class="title">
            <span>人民日报社论汇编</span>
            <span class="refresh">
              <i class="el-icon-refresh"></i>
              换一批
            </span>
          </div>
          <div class="content">
            <div class="sw-lists">
              <div class="sw-lists__item is-icon is-dot">
                <div class="sw-lists__item--label">
                  <div class="sw-lists__item--text">踔厉奋发新征程勇毅前行向复兴</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="copyright_cont">
    <p>民生周刊版权所有 未经书面授权禁止使用</p>
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
    },
    goInfo () {
      this.$router.push({
        path: '/Info',
        query: {
          id: 1
        }
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.body{
  background: #f5f5f5;
}
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
    background-color: hsla(0, 0%, 100%, .2);
    .title {
      color: rgb(255, 218, 128);
      font-weight: 600;
      font-family: 微软雅黑;
      font-size: 18px;
    }
}
.appMainIndex {
  min-height: calc(100vh - 60px);
  background: url(../../assets/dj/index_bg.png) no-repeat top / 100% 460px;
  width: 100%;
  overflow: auto;
  padding-top: 56px;
  .search-header {
    text-align: center;
    padding: 100px 0 50px;
    .search-header-title {
      color: rgb(255, 227, 148);
      font-weight: 600;
      font-family: "Heiti SC";
      font-size: 48px;
      letter-spacing: 5px;
    }
    .search-header-box {
      display: flex;
      justify-content: center;
      margin: 40px 0 6px;
      .search-header-box-input {
        display: flex;
        align-items: center;
        background-color: #fff;
        border-radius: 8px;
        border: 2px solid #cacaca;
        width: 900px;
        height: 52px;
        box-sizing: border-box;
        text-align: left;
        .search-header-box-input-left {
          width: 250px;
          padding-left: 20px;
          display: flex;
          position: relative;
          &::after {
            content: "";
            display: block;
            width: 1px;
            height: 44px;
            position: absolute;
            right: -15px;
            top: -12px;
            background: #ddd;
          }
          .search-header-box-input-left-1 {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: space-between;
            .label-text {
              margin-right: 10px;
            }
          }
          .search-header-box-input-left-2 {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: space-between;
            margin-left: 25px;
            .label-text {
              margin-right: 10px;
            }
          }
        }
        .search-header-box-input-right {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-left: 30px;
          padding-right: 30px;
          flex: 1;
          input {
            flex: 1;
            height: 30px;
            border: 0;
            font-size: 16px;
            width: 450px;
          }
          input:focus {
            outline: none; /* 移除默认的轮廓边框 */
            border: 0; /* 设置新的边框样式 */
          }
          .el-icon-search {
            font-size: 20px;
            color: #d42a2a;
          }
        }
      }
    }
  }
  .section-box {
    width: 1200px;
    margin: 0 auto;
    padding-bottom: 40px;
    .sw-lists-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 8px;
      -webkit-user-select: none;
      margin: 0 auto;
      .sw-lists-button__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        // flex: 1;
        width: 160px;
        height: 150px;
        border-radius: 8px;
        background: #fff;
        border: 1px solid transparent;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          border-color: #d42a2a;
          background: #fff;
          box-shadow: 0px 4px 24px 0px #f6d4d4;
        }
        .sw-lists-button__item--icon {
          width: 70px;
          height: 70px;
          margin-bottom: 14px;
        }
        .sw-lists-button__item--label {
          color: #5c5c5c;
          text-align: center;
          font-feature-settings: "clig" off, "liga" off;
          font-family: Source Han Sans CN;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px;
        }
      }
    }
    .mid_title {
      width: 100%;
      margin: 48px 0 46px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      .mid_title_text {
        text-align: center;
        width: auto;
        height: 52px;
        line-height: 52px;
        font-size: 32px;
        background: linear-gradient(90deg, #f72b23, #ff5a13);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: Microsoft YaHei;
        font-weight: 700;
        word-wrap: break-word;
        cursor: pointer;
      }
    }
    .el-tabs__content {
      overflow: inherit;
      min-height: 480px;
      position: relative;
      display: flex;
      gap: 18px;
      .multi_list {
        flex: 1;
        height: 480px;
        border-radius: 8px;
        overflow: hidden;
        background-color: #fff;
        &:hover {
          box-shadow: 0 2px 24px rgba(0,0,0,.16)
        }
        .title {
          width: 100%;
          height: 80px;
          background: url(../../assets/dj/index_djan_bg.png) no-repeat top / 100% 100%;
          color: #ffea9e;
          font-size: 20px;
          font-weight: 700;
          word-wrap: break-word;
          text-align: left;
          padding: 26px 20px;
          margin-bottom: 0px;
          display: flex;
          justify-content: space-between;
          align-items:self-end;
          .refresh {
            font-size: 14px;
            cursor: pointer;
          }
        }
        .content {
          padding: 10px;
          .sw-lists__item.is-icon {
            padding-left: 20px;
          }
          .sw-lists__item {
            position: relative;
            transition: background-color 0.3s;
          }
          .sw-lists__item.is-dot::before {
            content: "";
            position: absolute;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: #3e3e3e;
            left: 10px;
            top: 20px;
            transform: translate(-50%, -50%);
          }
          .sw-lists__item--label {
            display: flex;
            justify-content: space-between;
            color: #3e3e3e;
            font-family: Source Han Sans CN;
            font-size: 16px;
            line-height: 24px;
            font-style: normal;
            font-weight: 500;
            transition: color 0.3s;
            cursor: pointer;
            padding: 8px;
            .sw-lists__item--text {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            &:hover {
              color: #d42a2a;
            }
          }
        }
      }
    }
  }
}
.copyright_cont {
  width: 100%;
  height: 60px;
  background-color: #d42a2a;
  display: flex;
  justify-content: center;
  align-items: center;
  p{
    color: #fff;
    font-size: 16px;
    letter-spacing: .5px;
    word-wrap: break-word;
  }
}
</style>
