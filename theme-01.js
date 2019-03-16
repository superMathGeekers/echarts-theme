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
          line: '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1500985172208" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1868" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"><defs><style type="text/css"></style></defs><path d="M921.984 255.808a96 96 0 1 0-58.88-25.088L759.04 450.752a96.192 96.192 0 0 0-93.12 27.648L448 349.568a96 96 0 1 0-179.456 49.92l-138.24 182.784a96 96 0 1 0 48.832 41.6l137.92-182.4a95.808 95.808 0 0 0 110.208-29.824l212.928 125.888a96 96 0 1 0 172.672-51.008l109.12-230.72zM32 832h896a32 32 0 1 1 0 64H32a32 32 0 1 1 0-64z" p-id="1869"></path></svg>',
          // eslint-disable-next-line
          bar: '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1500984692053" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1759" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"><defs><style type="text/css"></style></defs><path d="M128 384h64a64 64 0 0 1 64 64v256a64 64 0 0 1-64 64H128a64 64 0 0 1-64-64V448a64 64 0 0 1 64-64z m320-320h64a64 64 0 0 1 64 64v576a64 64 0 0 1-64 64H448a64 64 0 0 1-64-64V128a64 64 0 0 1 64-64z m320 192h64a64 64 0 0 1 64 64v384a64 64 0 0 1-64 64h-64a64 64 0 0 1-64-64V320a64 64 0 0 1 64-64zM32 832h896a32 32 0 1 1 0 64H32a32 32 0 1 1 0-64z" p-id="1760"></path></svg>',
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
