<!--
 * @Author: Palank 754803053@qq.com
 * @Date: 2022-09-02 10:06:15
 * @LastEditors: hhhhaqi 111732507+hhhhaqi@users.noreply.github.com
 * @LastEditTime: 2022-09-13 11:31:38
 * @FilePath: \Smart-park-management-platform-1\src\views\visualization\Energy.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <!-- 大容器 -->
        <section class="container">
        <!-- 上容器 -->
        <section class="itemTop">
            <div class="item1" >
                    <div class="font">实际租赁情况</div>
                    <div class="Div1">
                        <div> 
                            <div class="div2">3490</div>
                            <div class="div3">可租赁资产</div>
                            <el-icon size="200%" color="red"><Select /></el-icon>
                        </div>
                        <div> 
                            <div class="div2">87</div>
                            <div class="div3">待租资产</div>
                        
                            <el-icon size="200%" color="pink"><VideoPause /></el-icon>
                        </div>
                        <div> 
                            <div class="div2">2464</div>
                            <div class="div3">已租资产</div>
                            <el-icon size="200%" color="yellow"><CloseBold /></el-icon>
                        </div>
                        <div> 
                            <div class="div2">26</div>
                            <div class="div3">到期资产</div>
            
                            <el-icon size="200%" color="green"><WarningFilled /></el-icon>
                        </div>
                        
                    </div>
                </div>
                <div class="item1" >
                    <div class="font">人员流量监控</div>
                    <div ref="myChart1" id="myChart1"></div>
                </div>
                <div class="item1" >
                    <div class="font">租金收入情况</div>
                    <div ref="myChart2" id="myChart2"></div>

                </div>
        </section>
        <!-- 下容器 -->
        <section class="itemBottom">
            <div class="item" >
                    <div class="font">当月收益汇总</div>
                    <div ref="myChart3" id="myChart3"></div>
                </div>
                <div class="item" >
                    <div class="font">企业种类占比</div>
                    <div ref="myChart4" id="myChart4"></div>
                </div>
                <div class="item" >
                    <div class="font">新增租赁提醒</div>
                    <div>
                        <div class="icon">
                            <el-icon color="green" size="200%"><CircleCheckFilled /></el-icon>
                            <div>
                                <div>浙江久拓科技有限公司</div>
                                <span>A2幢3层504室</span>
                                <span>2022-02-2</span>
                            </div>
                            <div>
                                <div>股份制企业</div>
                                <div>朱志豪 </div>
                            </div>
                        </div>
                        <div class="icon">
                            <el-icon color="green" size="200%"><CircleCheckFilled /></el-icon>
                            <div>
                                <div>浙江久拓科技有限公司</div>
                                <span>A2幢3层504室</span>
                                <span>2022-02-2</span>
                            </div>
                            <div>
                                <div>股份制企业</div>
                                <div>朱志豪 </div>
                            </div>
                        </div>
                        <div class="icon">
                            <el-icon color="green" size="200%"><CircleCheckFilled /></el-icon>
                            <div>
                                <div>浙江久拓科技有限公司</div>
                                <span>A2幢3层504室</span>
                                <span>2022-02-2</span>
                            </div>
                            <div>
                                <div>股份制企业</div>
                                <div>朱志豪 </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item" >
                    <div class="font">租赁到期提醒</div>
                    <div>
                        <div class="icon">
                            <el-icon color="red" size="200%"><CircleCloseFilled /></el-icon>
                            <div>
                                <div>浙江久拓科技有限公司</div>
                                <span>A2幢3层504室</span>
                                <span>2022-02-2</span>
                            </div>
                            <div>
                                <div>股份制企业</div>
                                <div>朱志豪 </div>
                            </div>
                        </div>
                        <div class="icon">
                            <el-icon color="yellow " size="200%"> <WarningFilled /></el-icon>
                            <div>
                                <div>浙江久拓科技有限公司</div>
                                <span>A2幢3层504室</span>
                                <span>2022-02-2</span>
                            </div>
                            <div>
                                <div>股份制企业</div>
                                <div>朱志豪 </div>
                            </div>
                        </div>
                        <div class="icon">
                            <el-icon color="yellow " size="200%"> <WarningFilled /></el-icon>
                            <div>
                                <div>浙江久拓科技有限公司</div>
                                <span>A2幢3层504室</span>
                                <span>2022-02-2</span>
                            </div>
                            <div>
                                <div>股份制企业</div>
                                <div>朱志豪 </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
        </section>
    </div>
</template>
<script >
      import * as echarts from 'echarts'
      export default{
        mounted(){
            let myChart1=echarts.init(this.$refs.myChart1)
            let dataC1 = [250, 300, 160, 420, 550, 300,120,650,340,500];

let xData = ['1月', '2月','3月','4月','5月','6月','7月','8月','9月','10月',];

var fontColor = '#30eee9';
let a= {
    backgroundColor: 'rgba(1,2,34,0)',
    grid: {
        left: '10%',
        right: '6%',
        top: '10%',
        bottom: '20%',
    },
    legend: {
        data: ['a'],
        textStyle: {
            color: '#A9DDEE',
        },

        orient: 'horizontal',
        icon: 'rect',
        top: '5',
        right: '5%',
        itemGap: 10,
        itemWidth: 10,
        itemHeight: 7,
    },

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: '#57617B',
            },
        },
    },
    xAxis: {
        type: 'category',
        boundaryGap: false, //顶头显示
        axisLine: {
            show: true,
            lineStyle: {
                color: '#3585d5',
            },
        },

        axisTick: {
            show: false,
            // alignWithLabel: true,
            lineStyle: {
                color: '#3585d5',
            },
        },
        axisLabel: {
            fontSize: 10,
        },
        data: xData,
    },
    yAxis: {
        name: '%',
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#3585d5',
            },
        },
        splitLine: {
            show: false,
            lineStyle: {
                type: 'dotted',
                color: '#3585d5',
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            fontSize: 10,
        },
        boundaryGap: false,
    },
    series: [
        {
            name: '项目',
            type: 'line',
            stack: '总量',
            smooth: true,
            symbol: 'none',
            showSymbol: true,
            symbolSize: 40,
            itemStyle: {
                normal: {
                    color: '#71bd27',
                    lineStyle: {
                        color: '#71bd27',
                        width: 3,
                    },
                    areaStyle: {
                        //color: '#94C9EC'
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 0.4,
                                color: 'rgba(240, 250, 230,0.1)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(240, 250, 230,0.9)',
                            },
                        ]),
                    },
                },
            },
          
            data: dataC1,
        },
    ],
};
myChart1.setOption(a)

let myChart2=echarts.init(this.$refs.myChart2)

let b = {
    grid: [{
            x: '12%',
            y: '16%',
            width: '80%',
            height: '72%'
        },
        {
            x: '12%',
            y: '16%',
            width: '80%',
            height: '20%'
        },
        {
            x: '12%',
            y: '16%',
            width: '86%',
            height: '72%'
        },
    ],
    xAxis: [{
            type: 'category',
            boundaryGap: false,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#C1C1C1',
                    opacity: 0.5,
                    type: 'dashed'
                }
            },
            axisLabel: {
                color: '#999999'
            },
            axisTick: false,
            axisLine: {
                show: false,
            },
            gridIndex: 0
        },
        {
            //上方线
            gridIndex: 1,
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'green',
                    opacity: 0.5,
                }
            }
        },
        {
            //下方线
            gridIndex: 2,
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'green',
                    opacity: 0.5,
                }
            }
        }
    ],
    yAxis: [{
            name: "",
            type: 'value',
            boundaryGap: [0, '20%'],
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#C1C1C1',
                    opacity: 0.5,
                    type: 'dashed'
                }
            },
            axisLabel: {
                color: '#999999'
            },
            axisTick: false,
            //左侧线
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'green',
                    opacity: 0.5
                }
            },
            gridIndex: 0
        },
        {
            name: this.rightUnit,
            type: 'value',
            splitLine: {
                show: !this.unit,
                lineStyle: {
                    color: '#C1C1C1',
                    opacity: 0.5,
                    type: 'dashed'
                }
            },
            axisLabel: {
                color: '#999999',
                fontSize: this.yTextSize,
                fontWeight: 400,
                fontFamily: 'Microsoft YaHei'
            },
            axisTick: false,
            splitNumber: 5,
            //右侧线
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'green',
                    opacity: 0.5,
                }
            },
            gridIndex: 0
        },
        {
            gridIndex: 1,
            axisLine: {
                show: false,
            }
        },
        {
            gridIndex: 2,
            axisLine: {
                show: false,
            }
        }
    ],
    visualMap: {
        type: 'piecewise',
        show: false,
        dimension: 0,
        seriesIndex: 0,
        pieces: [{
            gt: 1,
            lt: 3,
            color: 'rgba(0, 180, 0, 0.5)'
        }, {
            gt: 5,
            lt: 7,
            color: 'rgba(0, 180, 0, 0.5)'
        }]
    },
    series: [{
        type: 'line',
        smooth: 0.6,
        symbol: 'none',
        lineStyle: {
            color: 'green',
            width: 2
        },
        data: [
            ['2019-10-10', 200],
            ['2019-10-11', 400],
            ['2019-10-12', 650],
            ['2019-10-13', 500],
            ['2019-10-14', 250],
            ['2019-10-15', 300],
            ['2019-10-16', 450],
            ['2019-10-17', 300],
            ['2019-10-18', 100]
        ]
    }]
};
myChart2.setOption(b)

let myChart3=echarts.init(this.$refs.myChart3)

let c = {
  title: {
    text: ''
  },
  tooltip: {
    trigger: 'axis'
    
  },
  legend: {
    data: ['物业', '广告', '出租', '停车', ],
    textStyle: {
                fontSize: 12,
                color: "white"
            },
   
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['1日', '5日','10日','15日','20日','25日','31日',]
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '物业',
      type: 'line',
      // stack: 'Total',
      data: [30, 50, 35, 20, 25, 25, 45, 25, 8],
      smooth: false,
    },
    {
      name: '广告',
      type: 'line',
      // stack: 'Total',
      data: [55, 75, 80, 74, 65, 80, 70, 50, 61],
      smooth: true,
    },
    {
      name: '出租',
      type: 'line',
      // stack: 'Total',
      data: [110, 190, 169, 150, 130, 120, 140, 110, 120],
      smooth: true,
    },
    {
      name: '停车',
      type: 'line',
      // stack: 'Total',
      data: [280, 275, 261, 210, 220, 182, 205, 235, 248],
      smooth: true,
    },
    
  ]
};
myChart3.setOption(c)
let myChart4=echarts.init(this.$refs.myChart4)

let data1 = [
        { value: 998, name: "个人独资企业" },
        { value: 673, name: "私营企业" },
        { value: 797, name: "国有企业" },
        { value: 521, name: "联营企业" },
        { value: 221, name: "有限合伙企业 " }
     
    ];
    let colorList = [
        "#02F2F3",
        "#68B5FB",
        "#D45A49",
        "#F3E58D",
        "#C0FE5D",
        "#15DE57",
        "#F9F936"
    ];
let d = {
    tooltip: {
            trigger: "item",
            formatter: "{b}: {c} ({d}%)"
        },
        legend: {
            orient: "vertical",
            bottom: "15%",
            right: "5%",
            textStyle: {
                fontSize: 12,
                color: "white"
            },
    formatter:function(name){
        let percent = 0;
        let total = 0;
        for (let i = 0; i < data1.length; i++) {
            total += data1[i].value;
        }
    const item = data1.filter((item) => item.name === name)[0];
        percent = (
            (item.value / total) *
            100
        ).toFixed(1);
    return `${name}：${percent}%`;
    }
        },
        series: [
            {
                type: "pie",
                center: ["20%", "55%"],
                radius: ["30%", "50%"],
                avoidLabelOverlap: false,
                roseType:'radius',
                label: {
                    show: false,
                    position: "center"
                },
                itemStyle: {
                    normal: {
                        color: function(params) {
                            return colorList[params.dataIndex];
                        }
                    }
                },
                labelLine: {
                    show: false
                },
                data: data1
            }
        ]
    };
    myChart4.setOption(d)

        }
      }
</script>

<style scoped>
.container{
    width: 100%;
    height: 800px;
    background-image: url(src/assets/22.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
}
.itemTop{
    width: 25%;
    height: 70%;
    margin: 10px;
    border: 1px solid blue;
    border-radius: 20px;
    background-color: rgba(33, 30, 81, .6);
}
.itemBottom{
    width: 100%;
    height: 28%;
    margin: 10px;
    /* border: 1px solid blue; */
    border-radius: 20px;
    display: flex;
            flex-direction: row;
            justify-content: space-around;
}
.item{
            width: 24%;
            height: 99%;
            border: 1px solid blue;
            margin: 10px ;
            border-radius: 20px;
            background-color: rgba(33, 30, 81, .8);
           
        }
 .item1{
            width: 100%;
            height: 33%;
          
            margin: 0px ;
            border-radius: 20px;
           
        }
        .font{
            color: rgba(77, 217, 38, 0.589);
            font-size: 14;
            margin-left: 50px;
        }
        .Div1{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
        .div2{
            font-size: 200%;
            color: aqua;
            margin-top:20px;
        }
        .div3{
            font-size: 80%;
            color: rgb(228, 68, 108);
            margin-top:5px;
            margin-bottom: 25px;
        }
        #myChart1{
            width: 100%;
            height: 160px;
        }
        #myChart2{
            width: 100%;
            height: 160px;
        }
        #myChart3{
            width: 100%;
            height: 200px;
        }
        #myChart4{
            width: 100%;
            height: 200px;
        }
        .icon{
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: space-around;
            background-color:rgba(196, 169, 48, 0.4);
            margin-top: 17px;
            line-height: 25px;
        }
        .icon>div ,span{
            font-size: 60%;
            color: #fff;
        }
       
</style>
