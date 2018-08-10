<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>流量分析</h2>
      <p>
        依托自身完善的服务体系，强大的技术支持团队以及多年丰富的网站建设经验、信息资源和市场运作实力，在短短的时间里，迅速成长为业内领先的知名企业，是网络信息化技术产业的高新科技企业。我们注重客户提出的每个要求，我们充分考虑您的每一个细节，我们积极的做好服务
      </p>
    </div>
    <div class="sales-board-from">
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          购买数量：
        </div>
        <div class="sales-board-line-right">
          <v-counter @on-change="onParamChange('buyNum',$event)"> 
          </v-counter>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品类型：
        </div>
        <div class="sales-board-line-right">
           <!--<v-selection :selections="buyType" @on-change="onParamChange('buyType',$event)"></v-selection>-->
        </div>
      </div>
      
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          有效时间：
        </div>
        <div class="sales-board-line-right">
          <!--<v-chooser
          :selections="periodList"
          @on-change="onParamChange('period', $event)"></v-chooser>-->
        </div>
      </div>

      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品版本：
        </div>
        <div class="sales-board-line-right">
          <!--<v-mul-chooser :selections="versionList"
            @on-change="onParamChange('versions', $event)">
          </v-mul-chooser>-->
        </div>
      </div>

      <div class="sales-board-line">
        <div class="sales-board-line-left">
          总价：
        </div>
        <div class="sales-board-line-right">
          500元
        </div>
      </div>
      
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          &nbsp; 
        </div>
        <div class="sales-board-line-right">
          <div class="button">
            立即购买
          </div> 
        </div>
      </div>

    </div>
    <div class="sales-board-des">
      <h2>产品说明</h2>
      <p>依托自身完善的服务体系，强大的技术支持团队以及多年丰富的网站建设经验、信息资源和市场运作实力依托自身完善的服务体系，强大的技术支持团队以及多年丰富的网站建设经验、信息资源和市场运作实力依托自身完善的服务体系，强大的技术支持团队以及多年丰富的网站建设经验、信息资源和市场运作实力
      </p>
      <h3>用户行为指标</h3>
      <ul>
        <li>强大的技术支持团队以及多年丰富的网站建设经验、信息资源和市场运作实力,其主要包括：</li>
        <li>用户在网站停留的时间</li>
        <li>用户在网站的来源</li>
        <li>用户搜索内容和关键词</li>
        <li>在不同的时间的用户访问量</li>
        <li>技术支持以及多年丰富的网站建设经验市场运作实力</li>
      </ul>
    </div>

  </div>
</template>

<script>
import VCounter from '../../components/counter'
/*import VChooser from '../../components/chooser'
import VMulChooser from '../../components/mutiply-chooser'
import VSelection from '../../components/selection'*/
  export default {
    components: {
      
      VCounter
      /*VChooser,
      VSelection,
      VMulChooser*/
    },
    data () {
      return {
        buyNum: 0
        /*buyType: {},
        versions:[],
        period: {}*/
       /* versionList: [
          {
            label: '客户版'
            value：0
          },
          {
            label: '代理商版'
            value：1
          },
          {
            label: '专家版'
            value：2
          }
        ],
        periodList: [
          {
            label: '半年'
            value：0
          },
          {
            label: '一年'
            value：1
          },
          {
            label: '三年'
            value：2
          }
        ],
        buyType: [
        {
          label: '入门版'
          value：0
        },
        {
          label: '中级版'
          value：1
        },
        {
          label: '高级版'
          value：2
        }
        ]*/
      }
    },
    methods: {
      onParamChange (attr,val) {
        this[attr] = val
      }
    }
  }
</script>
<style>
  
</style>