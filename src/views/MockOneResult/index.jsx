import React, { Component } from 'react'
import Echarts from 'echarts/lib/echarts'
import './index.less'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'

import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/dataZoom'
import 'echarts/lib/component/grid'

export default class MockOneResult extends Component {
  componentDidMount () {
    const line = Echarts.init(document.getElementById('line'))
    line.setOption({
      tooltip: {
          trigger: 'axis',
          position: function (pt) {
              return [pt[0], '14%'];
          }
      },

      legend: {
          data: ['今日销售曲线', '平均线', '目标线'],
          x: 'left'
      },
      xAxis: {
          type: 'category',
          axisLine: {
              show: false,
          },
          axisTick: {
              show: false,
          },
          boundaryGap: true,

          data: ['0.1', '1', '1.9', '2.8', '3.7', '4.6', '5.5', '6.4', '7.3', '8.2', '9.1', '10', '10.9', '11.8', '12.7', '13.6']
      },
      yAxis: [{
          type: 'value',
          axisLine: {
              show: false,
          },
          axisTick: {
              show: false,
          },
          splitLine: {
              lineStyle: {
                  type: 'dotted',
              }
          },
          splitArea: {//背景条纹
              show: true,
              areaStyle: {
                  color: [
                      'rgba(255,255,255,0)',
                      'rgba(242,243,248,1)'
                  ]
              }

          },
          min: 0,
          splitNumber: 5,
      }],
      dataZoom: [{
          type: "slider", /*类型*/
          xAxisIndex: 0, /*对应的轴*/
          bottom: "10", /*位置，定位*/
          start: 20, /*开始*/
          end: 100, /*结束*/
          handleIcon: "M0,0 v9.7h5 v-9.7h-5 Z",
          handleStyle: { /*手柄的样式*/
              color: "#40bcf9",
              borderColor: "#1fb2fb"
          },
          backgroundColor: "#e2f3ff", /*背景 */
          dataBackground: { /*数据背景*/
              lineStyle: {
                  color: "#000000"
              },
              areaStyle: {
                  color: "#d4d9dd"
              }
          },
          fillerColor: "rgba(31,178,251,0.2)", /*被start和end遮住的背景*/
          labelFormatter: function (value, params) { /*拖动时两端的文字提示*/
              var str = "";
              if (params.length > 4) {
                  str = params.substring(0, 4) + "…";
              } else {
                  str = params;
              }
              return str;
          }
      }],
      grid: {
          left: '1rem',
          right: '4%',
          bottom: '20%',
          top: '14%',
          containLabel: true,
          borderWidth: '0'
      },
      series: [
          {
              name: "今日销售曲线",
              type: "line",
              smooth: true,
              symbol: 'circle',
              symbolSize: 10,
              data: [0, 0.5, 0.8, 1, 1.2, 1.5, 1.6, 1.8, 2.5, 3, 4, 4.8, 6, 7.4, 8.4, 9.2],
              itemStyle: {
                  normal: {
                      color: '#5fbdff',
                      lineStyle: {
                          width: 3
                      }
                  }
              }

          },
          {
              name: "平均线",
              type: "line",
              smooth: true,
              symbol: 'circle',
              symbolSize: 10,
              data: [0, 0.9, 1.1, 1.5, 2, 1.5, 1.6, 1.8, 1.9, 2, 2.4, 2.8, 3, 3.5, 4, 5],
              itemStyle: {
                  normal: {
                      color: '#ff975f',
                      lineStyle: {
                          width: 3,
                          type: 'dotted',
                      }
                  }
              }

          },
          {
              name: "目标线",
              type: "line",
              smooth: true,
              symbol: 'circle',
              symbolSize: 10,
              data: [0, 1, 1.2, 1.3, 1.6, 1.8, 2, 3, 3.5, 4, 4.5, 4.5, 4.6, 7, 6.5, 7],
              itemStyle: {
                  normal: {
                      color: '#86ce80',
                      lineStyle: {
                          width: 3,
                          type: 'dotted',
                      }
                  }
              }

          }
      ]
    });

    const pie = Echarts.init(document.getElementById('pie'))
    pie.setOption({
      title: {
          text: '南丁格尔玫瑰图',
          left: 'center',
          top: 20,
          textStyle: {
              color: '#ccc'
          }
      },
      tooltip: {
          trigger: 'item',
          formatter: "{b} : {c} ({d}%)"
      },
      visualMap: {
          show: false,
          min: 500,
          max: 600,
          inRange: {
              //colorLightness: [0, 1]
          }
      },
      series: [{
          name: '访问来源',
          type: 'pie',
          radius: '50%',
          center: ['50%', '50%'],
          color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5'], //'#FBFE27','rgb(11,228,96)','#FE5050'
          data: [{
                  value: 285,
                  name: '黑名单查询'
              },
              {
                  value: 410,
                  name: '红名单查询'
              },
              {
                  value: 274,
                  name: '法人行政处罚'
              },
              {
                  value: 235,
                  name: '其它查询'
              }
          ].sort(function(a, b) {
              return a.value - b.value
          }),
          roseType: 'radius',
          label: {
              normal: {
                  formatter: ['{c|{c}次}', '{b|{b}}'].join('\n'),
                  rich: {
                      c: {
                          color: 'rgb(241,246,104)',
                          fontSize: 20,
                          fontWeight:'bold',
                          lineHeight: 5
                      },
                      b: {
                          color: 'rgb(98,137,169)',
                          fontSize: 15,
                          height: 40
                      },
                  },
              }
          },
          labelLine: {
              normal: {
                  lineStyle: {
                      color: 'rgb(98,137,169)',
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20,
              }
          }
      }]
    })
  }

  render() {
    return (
      <div>
        <div id="line"></div>
        <div className="charts">
          <div id="bar"></div>
          <div id="pie"></div>
        </div>
      </div>
    )
  }
}
