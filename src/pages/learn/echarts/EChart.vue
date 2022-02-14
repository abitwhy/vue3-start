<template>
  <div ref="chart" class="chart"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  props: {
    // ECharts 配置项
    option: {
      require: true,
      type: Object,
    },
    // option 变化时，echartsInstance.setOption 的 opts 参数，见官网 https://echarts.apache.org/zh/api.html#echartsInstance.setOption
    setOption: { type: [Object], default: () => new Object() },
  },
  data() {
    return {
      echart: null,
    }
  },
  watch: {
    option(newOption) {
      const { echart, setOption, option } = this
      // 注意：观察到如果给 option 赋的新值是包含原 option 的合并对象，可能会使得 notMerge 配置失效
      echart.setOption(newOption, {
        notMerge: option.series[0].universalTransition,
        ...setOption,
      })
    },
  },
  mounted() {
    const { option } = this,
      chart = this.$refs.chart

    this.echart = echarts.init(chart)
    this.echart.setOption(option)
  },
  unmounted() {
    this.echart.dispose()
  },
}
</script>

<style lang="stylus" scoped>
.chart {
  // width: 100%; // 宽度100%可省
  height: 100%;
}
</style>
