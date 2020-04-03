<template>
  <div id="chart-demo">
    <DxChart
      id="chart"
      :data-source="dataSource"
    >
      <DxCommonSeriesSettings argument-field="date"/>
      <DxSeries
        name="Chart"
        value-field="percent"
      />
      <DxValueAxis
        :tick-interval="1"
        name="frequency"
        position="left"
      />
    </DxChart>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import {
  DxChart,
  DxSeries,
  DxArgumentAxis,
  DxCommonSeriesSettings,
  DxExport,
  DxGrid,
  DxMargin,
  DxLegend,
  DxTitle,
  DxSubtitle,
  DxTooltip,
  DxValueAxis,
} from 'devextreme-vue/chart';
import DxSelectBox from 'devextreme-vue/select-box';
import { LinearChartDataSource } from '../types';

@Component({
  components: {
    DxSelectBox,
    DxChart,
    DxSeries,
    DxArgumentAxis,
    DxCommonSeriesSettings,
    DxExport,
    DxGrid,
    DxMargin,
    DxLegend,
    DxTitle,
    DxSubtitle,
    DxTooltip,
    DxValueAxis,
  },
})
export default class Linear extends Vue {

  @Prop()
  private dataSource!: LinearChartDataSource[];

}
</script>

<style scoped>
.options {
    padding: 20px;
    background-color: rgba(191, 191, 191, 0.15);
    margin-top: 20px;
}

.option {
    margin-top: 10px;
}

.caption {
    font-size: 18px;
    font-weight: 500;
}

.option > span {
    margin-right: 10px;
}

.option > .dx-widget {
    display: inline-block;
    vertical-align: middle;
}
</style>
