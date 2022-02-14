<template>
  <div class="echarts">
    <!-- 方式一：原始方式（与官网一致） -->
    <div ref="echart" class="echart"></div>
    <!-- 方式二：使用封装好的组件 -->
    <EChart :option="option"></EChart>
  </div>
</template>

<script>
import EChart from './EChart.vue'
import * as echarts from 'echarts'

export default {
  components: { EChart },
  data() {
    return {
      option: {},
    }
  },
  mounted() {
    const dataset = {
      dimensions: ['name', 'score'],
      source: [
        ['Hannah Krause', 314],
        ['Zhao Qian', 351],
        ['Jasmin Krause ', 287],
        ['Li Lei', 219],
        ['Karle Neumann', 253],
        ['Mia Neumann', 165],
        ['Böhm Fuchs', 318],
        ['Han Meimei', 366],
      ],
    }
    const pieOption = {
      dataset: [dataset],
      series: [
        {
          type: 'pie',
          // 通过 id 关联需要过渡动画的系列
          id: 'Score',
          radius: [0, '50%'],
          universalTransition: true,
          animationDurationUpdate: 1000,
        },
      ],
    }
    const barOption = {
      dataset: [dataset],
      xAxis: {
        type: 'category',
        axisLabel: {
          rotate: -90,
          interval: 0,
        },
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          // 通过 id 关联需要过渡动画的系列
          id: 'Score',
          // 每个数据都是用不同的颜色
          colorBy: 'data',
          encode: { x: 'name', y: 'score' },
          universalTransition: true,
          animationDurationUpdate: 1000,
        },
      ],
    }
    let option = barOption
    const myChart = echarts.init(this.$refs.echart) // 方式一所需

    setInterval(() => {
      option = option === pieOption ? barOption : pieOption
      // 使用 notMerge 的形式可以移除坐标轴
      myChart.setOption(option, true) // 方式一所需
      this.option = option // 方式二所需
    }, 2000)
  },
}
</script>
<style lang="scss">
.echarts,
.echart {
  width: 300px;
  height: 600px;
}
</style>
