<template>
<div>
    <div id="main" style="width:800px;height:300px;border:1px dashed #ccc "></div>
  
</div>
</template>
<script>
import echarts from 'echarts'
import {mapActions , mapGetters} from 'vuex'
export default {
components:{
   
},
computed:{
     ...mapGetters({
    list:"cate/list"
    })
},
data(){
return{
}
},
methods:{
...mapActions ({
  requseCatelist:'cate/requseCatelist'

})




 
    },
    mounted() {
  this.requseCatelist()
   var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:this.list.map(item=>item)
            },
            xAxis: {
                data: this.list.map(item=>item.catename)
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: this.list.map(item=>item.children?item.children.length:0)
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}
        

}

</script>
<style>
</style>