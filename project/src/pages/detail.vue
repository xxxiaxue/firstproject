<template>
  <div class="detail-wrap">
  	<div class="detail-left">
  	  <div class="product-board">
  	  	<!--<img :src="imgMap[$route.path]">-->
  	  	<img :src="productsIcon">
  	  	<ul>
  	  	   <!--<li v-for="item in products">
  	  	  {{ item.name }}
  	  	  </li>-->
  	  	 <router-link v-for="item in products"
  	  	    :to="{ path: item.path}" 
  	  	    tag="li" 
  	  	    active-class="active">
  	  	  	{{ item.name }}
  	  	  </router-link>
  	  	</ul>
  	  </div>
  	</div>
  	<div class="detail-rigth">
  	  <keep-alive>
        <router-view></router-view>
      </keep-alive>
  	</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
       products: [
        {
          name: '数据统计',
          path: 'count',
          active: false
        },
        {
          name: '数据预测',
          path: 'forecast',
          active: false
        },
        {
          name: '流量分析',
          path: 'analysis',
          active: false
        },
        {
          name: '广告发布',
          path: 'publish',
          active: false
        }
      ],
      imgMap: {
      	'/detail/count': require("../assets/6.png"),
      	'/detail/forecast': require("../assets/7.png"),
      	'/detail/analysis': require("../assets/8.png"),
      	'/detail/publish': require("../assets/9.png"),
      }
     }   
    },
    computed: {
      productsIcon () {
      	return this.imgMap[this.$route.path]
      }
    }
  }
</script>
<style>
  .detail-wrap {
  	width: 1200px;
    overflow: hidden;
  	margin: 0 auto;
  	margin-bottom: 20px;
  }
  .detail-left {
  	float: left;
  	width: 200px;
  	text-align: center;
  	
  }
  .detail-rigth {
  	float: left;
  	width: 980px;
    margin-left: 20px;
    background: #fff;
  }
  .product-board {
  	background: #fff;
  	padding: 20px 0;
  }
  .product-board ul {
  	margin-top: 20px;
  }
  .product-board li {
  	text-align: left;
  	padding: 15px 15px;
  	cursor: pointer;
  }
  .product-board li.active,
  .product-board li:hover {
  	background: #4fc08d;
  	height: 15px;
  	color: #fff;
  }
  .product-board li a {
  	display: block;
  }
  .sales-board {
    margin-right: 15px;
  
  }
  .sales-board-intro h2{
  	padding: 15px 0;
  	font-size:20px;
  	margin-left: 20px;
  }
  .sales-board-intro p {
  	display: block;
  	font-size: 15px;
    line-height: 30px;
    margin-bottom: 30px;
    margin-left: 20px;
  }
  .sales-board-line {
  	padding-bottom: 20px; 
    margin-left: 20px;
  }
  .sales-board-line-left {
  	float: left;
    width: 80px;
    display: inline-block;
  }
  .sales-board-line-right {
  	display: inline-block;
    margin-left: 50px;
  }
  .sales-board-line-right .button {
  	width: 85px;
  	height: 30px;
  	background: #4fc08d;
  	line-height: 30px;
  	color: #fff;
  	font-size: 15px;
  	cursor: pointer;
  	text-align: center;
  }
  .sales-board-des {
  	width: 980px;
  	border-top: 17px solid #dcdcdc;
  }
  .sales-board-des h2 {
  	margin-left: 20px;
  	margin-right: 20px;
  	font-size: 18px;
  	padding: 15px 0;

  }
  .sales-board-des p {
  	padding-right: 10px;
  	line-height: 30px;
    margin-bottom: 30px;
    margin-left: 20px;
  }
  .sales-board-des h3 {
    font-size: 18px;
    padding: 20px;
  }
  .sales-board-des ul li {
    padding-left: 20px;
  	line-height: 30px;
  }
  .sales-board-des ul {
  	padding-bottom: 30px;
  }
  .sales-board-line-left .input {
  	display: inline-block;
  	width: 30px;
  }
</style>