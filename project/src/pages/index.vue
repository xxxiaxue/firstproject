<template>
  <div class="index-wrap">
  	<div class="index-left">
      <div class="index-left-block">
      <h2>全部产品</h2>
      <template v-for="product in productList">    
        <h3>{{ product.title }}</h3>
      <ul>
        <li v-for="item in product.list">
          <a :href="item.url">{{ item.name }}</a>
          <span v-if="item.hot" class="hot-tag">HOT</span>
        </li>
      </ul>
      <div v-if="!product.last" class="hr"></div>
      </template>  
      <div class="index-left-block lasted-new">
      <h2>最新消息</h2>
      <template v-for="xinwen in newList">
      <h3>{{ xinwen.title }}</h3>
        <ul>
          <li v-for="item in xinwen.list">
            <a :href="item.url">{{ item.name }}</a>
          </li>
        </ul>
      </template>
      </div> 
    </div>
  </div>
    <div class="index-right">
      <slide-show :slides="slides"></slide-show>
    <div class="index-board-list">
      <div class="index-board-item" 
        v-for="(item, index) in boardList"
        :class="[{'line-last' : index % 2 !== 0 },
        'index-board-' + item.id]">
        <div class="index-board-item-inner">
          <h4>{{ item.title }}</h4>
          <p>{{ item.description }}</p>
          <div class="index-board-button">
            <a href="" class="button" @click="atRigth">立即购买</a>
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </div>
        </div>
    </div>
    </div>
    </div>
    </div>
</template>

<script>
  import slideShow from '../components/slideShow'
  export default {
    components: {
      slideShow
      //RegSucssful 
    },
    created: function () {
      this.$http.get('api/getnewsList')
      .then((res) => {
        this.newList = res.data
      },(err) =>{
        console.log(err)
      })
    },
    data () {
      
  	  return {
        slides: [
        {
          src: require('../assets/slideShow/1.jpg'),
          title: '**1',
          href: 'detail/count'
        },
        {
          src: require('../assets/slideShow/2.jpg'),
          title: '**2',
          href: 'detail/count'
        },
        {
          src: require('../assets/slideShow/3.jpg'),
          title: '**3', 
          href: 'http://baidu.com'
        },
        {
          src: require('../assets/slideShow/7.jpg'),
          title: '**4',
          href: 'detail/forecast'
        }
        ],
        boardList: [
        {
          title: '开放产品',
          description: '其是一款开放产品',
          id: 'car',
          saleout: false
        },
        {
          title: '品牌营销',
          description: '帮助你的产品找到更好的定位',
          id: 'earth',
          saleout: false
        },
        {
          title: '使命必达',
          description: '快递永远保持最前端的速度',
          id: 'loud',
          saleout: true
        },
        {
          title: '勇攀高峰',
          description: '我们永远追求最好的最快捷的服务',
          id: "san",
          saleout: false
        }
        ],
  	    productList: {
          pc: {
            title: 'PC产品',
            list: [
            {
              name: '数据统计',
              url: 'http://starcraft.com'
            },
            {
              name: '数据预测',
              url: 'http://warcraft.com'
            },
            {
              name: '流量分析',
              url: 'http://overwatch.com',
              hot: true
            },
            {
              name: '广告发布',
              url: 'http://hearstone.com'
            }
            ]
          },
          app: {
            title: '手机应用类',
            list: [
            {
              name: '91助手',
              url: 'http://weixin.com'
            },
            {
              name: '产品助手',
              url: 'http://twitter.com'
            },
            {
              name: '智能地图',
              url: 'http://maps.com'
            },
            {
              name: '团队语音',
              url: 'http://phone.com'
            }
            ]
          }
        },
        newList: {
          /*news: {
            title: 'PC产品',
            list: [
            {
              name: '数据统计',
              url: 'http://starcraft.com'
            },
            {
              name: '数据预测',
              url: 'http://warcraft.com'
            },
            {
              name: '流量分析',
              url: 'http://overwatch.com',
              hot: true
            },
            {
              name: '广告发布',
              url: 'http://hearstone.com'
            }
            ]
          }*/
        }
      }
    },
    methods: {
      atRigth () {
        this.$router.puth({ path: '/detail/analysis' })
      }
    }
    /*computed: {
      atRigth () {
        this.$router.puth({ path: 'imgMap' })
      }
    }*/
  }
</script>
<style scoped>
ul,*,body {
  list-style: none;
  padding: 0;margin: 0;
}
.index-left-block {
  height: 100%;
}
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 20px;
}
.index-left {
  float: left;
  width: 300px;
  margin-left: 40px;
}
.index-left-block h2 {
  font-size: 16px;
  width: 285px;
  padding-left: 15px;
  line-height: 45px;
  height: 45px;
  color: #fff;
  background: #4fc08d;
}

.index-left-block {
  
  background: #fff;
  box-shadow: 0 0 2px #fff;
}
.index-left-block h3 {
  font-size: 15px;
  padding: 15px;
  
}
.index-left-block .lasted-new{
  border-top: 10px solid #dcdcdc;
}

.index-left-block ul li {
  padding-left: 17px;
  margin: 0 8px 8px 8px;

}
.index-left-block ul li a {
  text-decoration: none;
  color: #000;
}
.index-left-block .lasted-new {
  height: 300px;
  margin-bottom: 20px;

}
.index-left-block .lasted-new h2 {
 
}
.hot-tag {
  background: red;
  font-size: 12px;
  color: #fff;
  border-radius: 5px;
}
.index-right {
  float: left;
  width: 860px;
  
}
.line-last {
  margin: 0;
}
.index-board-item {
  width: 355px;
  height: 88px;
  float: left;
  background: #fff;
  box-shadow: 0 0 3px #fff;
  padding: 15px;
  margin-left: 20px;
  margin-bottom: 20px
}
.index-board-list {
  overflow: hidden;
}

.index-board-button {
  padding-left: 0px;
  background: #4fc08d;
  width: 100px;
  height: 26px;
}
.button {
  display: block;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  line-height: 26px;
  text-align: center;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-item-inner h4 {
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 7px;
}
.index-board-item-inner p {
  font-size: 14px;
  padding-bottom: 7px;
}
.index-board-car .index-board-item-inner {
  background: url(../assets/6.png) no-repeat;
}
.index-board-earth .index-board-item-inner {
  background: url(../assets/7.png) no-repeat;
}
.index-board-loud .index-board-item-inner {
  background: url(../assets/8.png) no-repeat;
}
.index-board-san .index-board-item-inner {
  background: url(../assets/9.png) no-repeat;
}

</style>