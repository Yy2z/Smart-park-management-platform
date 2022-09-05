<template>
    <div>
        <!-- /* 大容器 */ -->
       <section class="container">
        
        <!-- 左容器 -->
        <section class="itemLeft">
                <div class="item"  ref="myChart1" id="myChart1"></div>
                <div class="item" ref="myChart2" id="myChart2"></div>
                <div class="item" ref="myChart3" id="myChart3"></div>
        </section>
        <!-- 中容器 -->
        <section class="itemCenter">
                    <div class="centeOne">
                        <span>当前园区总收入:</span>
                        <div id="text1">15,092,346万元</div>
                    </div>
                    <div class="centerTwo" ref="myChart4" id="myChart4"></div>
                </section>
        <!-- 右容器 -->
        <section class="itemRight">
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
            </section>  
       </section>

    </div>
</template>
<script>
    import * as echarts from 'echarts'
    export default{
        mounted(){
        //访客
            let myChart1=echarts.init(this.$refs.myChart1)
            var data=[95, 88, 65,55,48,];
var className=['A1写字楼','A2写字楼','A3写字楼','B1写字楼','B2写字楼',];
var colorList=['#39B3FF','#47E0E0','#7891D9','#83D978','#C7A530',];
var defaultData=[100,100,100,100,100,100];
         let a = {
    legend:{
      data:[''],
      icon:'circle',
      bottom:10,
      textStyle:{
          color:'#ffffff'
      }
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(params) {
            return params[0].name + '<br/>' +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                // params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() + ' <br/>'
                params[0].seriesName + ' : ' + params[0].value
        }
    },
    backgroundColor: 'rgb(20,28,52)',
    xAxis: {
        type: 'value',
        axisLine: {
            show: true
        },
         splitLine: {
            show: false
        },
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: true
        },
        axisLine: {
            show: true
        },
        data: className
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '12'
            },
            formatter: function(value) {
                    return value + ' %';
            },
        },
        data: data
    }],
    series: [{
            name: '完成率',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: (params) => {
					return colorList[params.dataIndex]
				}
                },
            },
            barWidth: 20,
            data: data
        }
    ]
};
     
    myChart1.setOption(a)

    let myChart2=echarts.init(this.$refs.myChart2)
    let color = ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'];
let echartData = [
    {
        name: '第一产业',
        value: '234.3',
    },
    {
        name: '第二产业',
        value: '234.3',
    },
    {
        name: '第三产业',
        value: '234.3',
    },
    
];
let formatNumber = function (num) {
    let reg = /(?=(\B)(\d{3})+$)/g;
    return num.toString().replace(reg, ',');
};
 let b = {
    backgroundColor: '#364686',
    color: color,
    title: [
        {
            text: '产业分布',
            x: 'center',
            top: '42%',
            textStyle: {
                color: '#fff',
                fontSize: 24,
                fontWeight: '100',
            },
        },
        {
            text: '60%',
            x: 'center',
            top: '60%',
            textStyle: {
                fontSize: 26,
                color: '#00f0ff',
                foontWeight: '200',
            },
        },
    ],
    polar: {
        radius: ['44%', '50%'],
        center: ['50%', '50%'],
    },
    angleAxis: {
        max: 100,
        show: false,
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    series: [
        {
            type: 'pie',
            radius: ['55%', '67%'],
            center: ['50%', '50%'],
            data: echartData,
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    borderColor: '#364684',
                    borderWidth: 2,
                },
            },
            labelLine: {
                normal: {
                    length: 30,
                    length2: 20,
                    lineStyle: {
                        color: '#e6e6e6',
                    },
                },
            },
            label: {
                normal: {
                    formatter: (params) => {
                        return '{icon|●}{name|' + params.name + '}\n{value|' + formatNumber(params.value) + '}';
                    },
                    padding: [0, -70, 40, -60],
                    rich: {
                        icon: {
                            fontSize: 16,
                            align: 'left',
                            padding: [4, 0, 0, 0],
                        },
                        name: {
                            fontSize: 14,
                            align: 'left',
                            padding: [4, 0, 0, 0],
                            color: '#fff',
                        },
                        value: {
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#fff',
                            align: 'left',
                        },
                    },
                },
            },
        },
        {
            name: '',
            type: 'pie',
            startAngle: 90,
            radius: '50%',
            hoverAnimation: false,
            center: ['50%', '50%'],
            itemStyle: {
                normal: {
                    labelLine: {
                        show: false,
                    },
                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                        {
                            offset: 1,
                            color: 'rgba(50,171,241, 1)',
                        },
                        {
                            offset: 0,
                            color: 'rgba(55,70,130, 0)',
                        },
                    ]),
                    // borderWidth: 1,
                    // borderColor: '',
                    shadowBlur: 10,
                    // shadowColor: 'rgba(55,70,130, 1)'
                },
            },
            data: [
                {
                    value: 100,
                },
            ],
        },
    ],
};
myChart2.setOption(b)

let myChart3=echarts.init(this.$refs.myChart3)
 let c= {
            backgroundColor:"#000",
            grid: {
                left: '3%',
                right: '5%',
                bottom: '3%',
                top:'80px',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ["11/20","11/22","11/24","11/26","11/28"],
                axisTick:{
                    show: false
                },
                axisLine:{  //轴线样式
                        lineStyle:{
                            color:'#666cb4',
                            width:1,//这里是为了突出显示加上的
                        }
                    },
                axisLabel:{
                    show: true,
                    textStyle: {
                        color: '#fff', //更改坐标轴文字颜色
                        fontSize: 14,
                        fontFamily: 'SourceHanSansSC-Regular',
                        fontSize: 14,
                        fontWeight: 'normal',
                        fontStretch: 'normal',
                        lineHeight: 40,
                        letterSpacing: 0,
                        padding: [15, 0, 0, 0]
                        },
                    },
                boundaryGap: false, //设置图表从原点开始
            },
            yAxis: {
                type: 'value',
                name:"(单位/万元)",
                nameTextStyle:{//y轴上方单位的颜色
                    color:'#fff',
                    fontFamily: 'SourceHanSansSC-Regular',
                    fontSize: 14,
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    lineHeight: 19,
                    letterSpacing: 0,
                    padding: [0, 0, 0, -30] //上右下左  设置y轴单位的位置
                },
                axisTick:{  //去除刻度线
                    show: false
                },
                axisLine:{  //轴线样式
                        lineStyle:{
                            color:'#666cb4',
                            width:1,//这里是为了突出显示加上的
                        }
                    },
                axisLabel:{
                    show: true,
                    textStyle: {
                        color: '#fff', //更改坐标轴文字颜色
                        fontSize: 14,
                        fontFamily: 'SourceHanSansSC-Regular',
                        fontSize: 14,
                        fontWeight: 'normal',
                        fontStretch: 'normal',
                        lineHeight: 19,
                        letterSpacing: 0,
                        top:'50%'
                        },
                    },
                splitLine:{  //设置网格颜色
                        show: true,
                        lineStyle:{
                                color: ['#3e4172'],
                                width: 1,
                                type: 'solid'
                            }
                },
                //boundaryGap: ['0%', '0%'],  //设置y轴刻度间距
            },
            series: [
            {
                    type: 'line',
                    data: ["85","674","851","162","910","248",],
                    smooth: true,  //设置曲线平滑
                    symbol: "none",  //取消折点圆圈
                    symbolSize: 7,
                    color:"#389ce6",
                    areaStyle:{
				        type : 'default',
				        //渐变色实现
				        color : new echarts.graphic.LinearGradient(0, 0, 0, 1,//变化度
				        //三种由深及浅的颜色
				        [{
				            offset : 0,
				            color : 'rgba(36,155,245,0.4)'
				        },{
				            offset : 1,
				            color : 'rgba(36,155,245,0)'
				        }
				        ]),
				    },
                    lineStyle:{
                    	color: '#25A0FC', //改变折线颜色
        				width:3
                    }
                }
            ]
        };
        myChart3.setOption(c)
        let myChart4=echarts.init(this.$refs.myChart4)
        let d = {
  xAxis: {
    type: 'category',
    data: [
       '2019-02', '2019-03','2019-04','2019-05','2019-06','2019-07',
      
    ]
  },
  yAxis: {
    type: 'value'
   
   
    
  },
   grid: {
        containLabel: true,
        left: '0%',
       
        right: '0%',
      
    },
  color:['#5a72e0'],
  series: [
    {
      data: [1200, 802, 911, 934, 1250, 1130, 1500,],
      type: 'line',
      smooth: true
    }
  ]
};
myChart4.setOption(d)
            }
    
        }

</script>

<style scoped>
    /* 大容器 */
 .container{
    width: 100%;
    height: 760px;
    margin: 10px auto;
    padding: auto;
   background-color: rgb(13, 38, 76);
    display: flex;
 }
 .itemLeft{
    width: 30%;
    /* border: 1px solid red */

   }
   .itemCenter{
      flex: 40%;
      
      
    }
    .itemRight{
        width: 30%;
    }
    .item{
        width: 400px;
        height: 32%;
        border: 1px solid blue;
        margin: 10px 30px;
        border-radius: 10px;
    }
    .centeOne{
        width: 600px;
        height: 15%;
        border: 1px solid blue;
        margin: 25px 25px;
        border-radius: 10px;
    }
    .centerTwo{
        width:600px;
        height:45%;
        border: 1px solid blue;
        margin: 25px 25px;
        border-radius: 10px;
        margin-top: 278px;
    }
    .centeOne>span{
        color:rgb(0, 161, 183);
        margin-left: 70px;
        font-size: 24; 
        margin-top: 40px;
    }
    #text1{
        color:rgb(0, 161, 183);
        margin-left: 140px;
        font-size: 220%;
        margin-top: 20px;
     
    }
    
  
</style>
