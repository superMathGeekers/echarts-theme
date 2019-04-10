/**
 * 皮肤
 * option 可以覆写皮肤的 设置
 *
 * 使用方式一：
 * https://www.npmjs.com/package/echarts-for-react
 *
 * 使用方式二：
 * http://echarts.baidu.com/api.html#echarts.init
 *
 */

export default {
  // 全图默认背景
  // backgroundColor: 'rgba(255,255,255,1)',

  // 默认色板
  color: [
    '#6095F2',
    '#FF759C',
    '#00E1E1',
    '#FFA14A',
    '#FFD21A',
    '#B8E986',
    '#E479F2',
    '#70E092',
    '#996BE8',
    '#D4B383',
    '#96989B',
    '#FF7977',
  ],

  // 图表标题
  title: {},

  // 图例
  legend: {
    itemGap: 20,
    left: 'center',
    itemWidth: 10,
    itemHeight: 10,
  },

  // 工具箱
  toolbox: {
    showTitle: false,
    right: 45,
    feature: {
      magicType: {
        type: ['bar', 'line'],
        title: {
          line: '曲线图',
          bar: '柱形图',
        },
        icon: {
          // eslint-disable-next-line
          line: 'path://m921.984,255.808a96,96 0 1 0 -58.88,-25.088l-104.064,220.032a96.192,96.192 0 0 0 -93.12,27.648l-217.92,-128.832a96,96 0 1 0 -179.456,49.92l-138.24,182.784a96,96 0 1 0 48.832,41.6l137.92,-182.4a95.808,95.808 0 0 0 110.208,-29.824l212.928,125.888a96,96 0 1 0 172.672,-51.008l109.12,-230.72zm-889.984,576.192l896,0a32,32 0 1 1 0,64l-896,0a32,32 0 1 1 0,-64z',
          // eslint-disable-next-line
          bar: 'patch://m128,384l64,0a64,64 0 0 1 64,64l0,256a64,64 0 0 1 -64,64l-64,0a64,64 0 0 1 -64,-64l0,-256a64,64 0 0 1 64,-64zm320,-320l64,0a64,64 0 0 1 64,64l0,576a64,64 0 0 1 -64,64l-64,0a64,64 0 0 1 -64,-64l0,-576a64,64 0 0 1 64,-64zm320,192l64,0a64,64 0 0 1 64,64l0,384a64,64 0 0 1 -64,64l-64,0a64,64 0 0 1 -64,-64l0,-384a64,64 0 0 1 64,-64zm-736,576l896,0a32,32 0 1 1 0,64l-896,0a32,32 0 1 1 0,-64z'
        },
        iconStyle: {
          normal: {
            color: '#7E8896',
            borderColor: '#7E8896',
            borderWidth: 0,
          },
          emphasis: {
            color: '#59AAFA',
            borderColor: '#59AAFA',
            borderWidth: 0,
          },
        },
      },
    },
  },

  // 提示框
  tooltip: {
    confine: true,
    trigger: 'axis',
    backgroundColor: 'rgba(50,66,105,.9)',
    padding: 20,
    axisPointer: {
      type: 'shadow',
      shadowStyle: {
        color: 'rgba(89,170,250,0.1)',
        shadowColor: 'rgba(50,66,105,.9)',
      },
    },
  },

  // 区域缩放控制器
  dataZoom: {
    type: 'slider',
    show: true,
    start: 50,
    end: 100,
    handleSize: 30,
    minSpan: 10,
    maxSpan: 100,
    dataBackground: {
      lineStyle: {
        opacity: 0,
      },
    },
    fillerColor: 'rgba(49,108,198,.1)',
    borderColor: '#E1E7F0',
  },

  // 网格
  grid: {
    top: 40,
    left: 30,
    right: 45,
    containLabel: true,
  },

  // 类目轴
  categoryAxis: {
    axisLine: {
      lineStyle: {
        color: 'rgba(211,214,219,1)',
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      textStyle: {
        color: 'rgba(35,40,46,.85)',
      },
      margin: 12,
    },
    boundaryGap: true,
  },

  // 数值型坐标轴默认参数
  valueAxis: {
    axisLine: {
      show: false,
      lineStyle: {
        color: ['rgba(35,40,46,.46)'],
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      margin: 0,
    },
    splitLine: {
      lineStyle: {
        color: ['#EBEFF5'],
      },
    },
  },

  // 柱形图默认参数
  bar: {
    barMaxWidth: 30,
    barGap: 0,
    // barCategoryGap: 0,
  },

  // 折线图默认参数
  line: {
    smooth: true,
  },

  // 默认标志图形类型列表
  symbolList: [
    'circle',
    'rectangle',
    'roundRect',
    'triangle',
    'diamond',
    'emptyCircle',
    'emptyRectangle',
    'emptyTriangle',
    'emptyDiamond',
  ],
  textStyle: {
    color: 'rgba(35,40,46, .85)',
    // eslint-disable-next-line
    fontFamily: '-apple-system, BlinkMacSystemFont,"Segoe UI", Roboto,"Helvetica Neue", Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei", SimSun, sans-serif',
    fontFamily2: '微软雅黑',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
};
