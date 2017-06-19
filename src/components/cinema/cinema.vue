<template>
  <div class="mainContainer" style="overflow:scroll">
    	<div class="cinema_header">
    		<div class="cinema_header_zone">
    			<span >郑州</span><i class="fa fa-angle-down"></i>
    		</div>
    		<div class="cinema_header_name">影院</div>
    		<div class="cinema_header_search"><i class="fa fa-search"></i></div>
    	</div>
    	<div class="cinema_nav">
    			 <div class="cinema_nav_filtrate">
    			 		<div id="">
    			 			<span>区域</span><i class="fa fa-caret-down"></i>
    			 		</div>
    			 		<div id="">
    			 			<span>离我最近</span><i class="fa fa-caret-down"></i>
    			 		</div>
    			 		<div id="">
    			 			<span>品牌</span><i class="fa fa-caret-down"></i>
    			 		</div>
    			 		<div id="">
    			 			<span>特效/服务</span><i class="fa fa-caret-down"></i>
    			 		</div>
    			 </div>
    	</div>
     <div class="cinema_content">
  			<ul>
  				<li v-for="cinema in c.管城回族区">
        <div class="cinema-name">
          <span class="cinema-name-left">{{cinema.nm}}</span>
          <span class="cinema-name-right">{{cinema.sellPrice}}<small>元起</small></span>
        </div>
        <div class="addr">
          <span class="addr-left">{{cinema.addr}}</span>
        </div>
        </li>
  			</ul>
  		</div>
  </div>
</template>

<script>
var sinema = {name: '梅花幻影院'}

export default {
  name: 'cinema',
   data () {
    return {
      sinema: sinema,
      c: ''
    }
  }, 
  mounted: function() {
      this.requestData()
  },
  methods: {
      requestData() {
        this.$ajax.get('/API/cinemas.json')
        .then(function(res) {
        console.log(res.data)
        this.c = res.data.data
        }.bind(this))
      } 
    },
  components: {}
  }
</script>
<style scoped>
ul{
    margin:0px;
    padding: 10px 0px;
  }
 li{
    list-style: none;
    border-bottom: 1px solid #E6E6E6;
    padding: 10px 20px;
  }
  .cinema-name{
    margin-bottom: 15px;
    text-align: left;
  }
  .addr{
    text-align: left;
  }
  .cinema-name-left{
    font-size: 1rem;
  }
  .cinema-name-right{
    margin-left: 15px;
    color:#e54847;
  }
  .addr-left{
    font-size: 0.3rem;
  }
  .mainContainer{
    width: 100%;
    height: 100%;
    background: #fff;
    color: #fff;
    font-size: 16px;;
  }
  .cinema_content{
    color:black;
  }
  .cinema_header{
  	background: #D23E34;
  	display: flex;
  	display: -webkit-flex;
  	display: -ms-flexbox;
  	display: -moz-flex;
  	height:12vw;
  	justify-content:center;
  	align-items:center;
  	position: fixed;
  width: 100%;
  top:0;
  }
  .cinema_header_zone{
  	display:flex;
  	display: -webkit-flex;
  	display: -ms-flexbox;
  	display: -moz-flex;
  	height:8vw;
  	justify-content:flex-start;
  	align-items:center;
  	position: absolute;
  	left:3vw;
  }
  .cinema_header_name{
  	display:flex;
  	display: -webkit-flex;
  	display: -ms-flexbox;
  	display: -moz-flex;
  	height:8vw;
  	justify-content:content;
  	align-items:center;
  }
  .cinema_header_search{
  	display:flex;
  	display: -webkit-flex;
  	display: -ms-flexbox;
  	display: -moz-flex;
  	height:8vw;
  	justify-content:flex-end;
  	align-items:center;
  	position: absolute;
  	right:3vw;
  }
  .cinema_nav_banner img{
  	width: 100%;
  	height: 100%;
  }
  .cinema_nav_filtrate{
  	color: #848282;
  	display: flex;
  	display: -webkit-flex;
  	display: -ms-flexbox;
  	display: -moz-flex;
  	justify-content: center;
  	height: 8vw;
  	align-items: center;
  	border-bottom: 1px solid #e0e0e0;
  }
 .cinema_nav_filtrate >div{
 		width: 25%;
 }
.cinema_nav_filtrate >div>span{
 		margin-right: 2vw;
 }
  .cinema_nav_filtrate div:nth-child(-n+3){
  	 border-right: 1px solid #e0e0e0;
  }
</style>
