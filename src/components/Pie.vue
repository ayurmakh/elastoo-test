<template>
  <DxPieChart
    id="pie"
    :data-source="dataSource"
    palette="Bright"
    @point-click="pointClickHandler($event)"
    @legend-click="legendClickHandler($event)"
  >
    <DxSeries
      argument-field="group"
      value-field="percentage"
    >
      <DxLabel :visible="true">
        <DxConnector
          :visible="true"
          :width="1"
        />
      </DxLabel>
    </DxSeries>
    <DxSize :width="500"/>
    <DxExport :enabled="true"/>
  </DxPieChart>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import DxPieChart, {
  DxSize,
  DxSeries,
  DxLabel,
  DxConnector,
  DxExport,
} from 'devextreme-vue/pie-chart';
import { PieChartDataSource } from '../types';

@Component({
    components: {
        DxPieChart,
        DxSize,
        DxSeries,
        DxLabel,
        DxConnector,
        DxExport,
    },
})
export default class Pie extends Vue {

  @Prop()
  private dataSource!: PieChartDataSource[];

    private pointClickHandler(e: any): void {
        this.toggleVisibility(e.target);
    }
    private legendClickHandler(e: any) {
        const arg = e.target;
        const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];
        this.toggleVisibility(item);
    }

    private toggleVisibility(item: any) {
        item.isVisible() ? item.hide() : item.show();
    }
}
</script>

<style>
#pie {
    height: 440px;
}

#pie * {
    margin: 0 auto;
}
</style>
