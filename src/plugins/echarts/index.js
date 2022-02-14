// import Vue from 'vue'
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core'
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  VisualMapComponent,
} from 'echarts/components'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'
// 引入新功能
import { UniversalTransition } from 'echarts/features'
// 引入图表，图表后缀都为 Chart
import { GaugeChart, LineChart, PieChart, BarChart } from 'echarts/charts'
// // 引入图形相关帮助方法
// import { graphic } from 'echarts'

// 注册组件
echarts.use([
  // 图表
  BarChart,
  PieChart,
  GaugeChart,
  LineChart,
  // 新功能
  UniversalTransition,
  // 额外公共组件
  VisualMapComponent,
  LegendComponent,
  // 必要组件
  TitleComponent,
  TooltipComponent,
  GridComponent,
  CanvasRenderer,
])

// （可选）注入为 Vue 实例的全局属性（废弃：已改为模块化的方式使用）
// Vue.prototype.$echarts = echarts

// 注入 echarts 的工具函数为 Vue 实例的全局属性（废弃：echarts 支持渐变配色，且官方并未提供 graphic 的接口文档）
// Vue.prototype.$echarts = { graphic }
