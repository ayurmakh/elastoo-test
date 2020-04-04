<template>
  <div class="wrapper">
    <div class="overlay"
      v-if="createChartWindowFlag">
      <div class="create-chart-window">
        <h1>Create chart</h1>
        <div class="chart-type">
          <p>Select chart type</p>
          <select
            v-model="chartType">
            <option
              v-for="(item, i) in getChartTypesValues"
              :key="i">{{ item }}</option>
          </select>
        </div>
        <div class="data-source">
          <p>Select date source</p>
          <select
            v-model="dataSource">
            <option
              v-for="(item, i) in getDataSourcesValues"
              :key="i">{{ item }}</option>
          </select>
        </div>
        <button
          class="button create-button"
          @click="createChart()">Create</button>
        <div class="close-button"
           @click="createChartWindowFlag=false">
          <i class="far fa-times-circle"></i>
        </div>
      </div>
    </div>
    <button
      class="button open-window-button"
      @click="createChartWindowFlag=true"
    >Create chart</button>
    <div class="charts">
      <div class="chart" v-for="(item, i) in charts" :key="i">
        <Linear :dataSource="item.dataSource" v-if="item.type===consts.LINEAR_CHART_TYPE" />
        <Pie :dataSource="item.dataSource" v-else />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Watch } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import { mapState } from 'vuex';
import Linear from '@/components/Linear.vue';
import Pie from '@/components/Pie.vue';
import { ChartType, DataSource, Chart } from '@/types';
import consts from '@/consts';

@Component({
  components: {
    Linear,
    Pie,
  },
  computed: {
    ...mapState([
      'linearChartsCount',
      'pieChartsCount',
      'charts',
    ]),
  },
})
export default class Home extends Vue {

  private linearChartsCount!: number;
  private pieChartsCount!: number;
  private charts!: Chart[];
  private consts = consts;

  private chartType: string = '';
  private dataSource: string = '';
  private createChartWindowFlag: boolean = false;

  @Getter
  private getChartTypesValues!: string[];

  @Getter
  private getDataSourcesValues!: string[];

  @Getter
  private getChartTypeByValue!: (value: string) => ChartType;

  @Getter
  private getDataSourceByValue!: (value: string) => DataSource;

  @Action
  private setChartType!: (value: number) => void;

  @Action
  private setDataSource!: (value: number) => void;

  @Action
  private getDataSourceAndCreateChart!: () => void;

  @Watch('chartType')
  private onChartTypeChange() {
    this.setChartType(this.getChartTypeByValue(this.chartType).id);
  }

  @Watch('dataSource')
  private onDataSourceChange() {
    this.setDataSource(this.getDataSourceByValue(this.dataSource).id);
  }

  private get linearChartsCountLocal(): number {
    return this.linearChartsCount;
  }

  private get pieChartsCountLocal(): number {
    return this.pieChartsCount;
  }

  private createChart(): void {
    if (this.chartType === '') {
      alert('Select chart type');
      return;
    }
    if (this.dataSource === '') {
      alert('Select data source');
      return;
    }
    this.getDataSourceAndCreateChart();
    this.createChartWindowFlag = false;
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
}
.button {
  background: #3996e0;
  color: #ffffff;
  border: none;
  width: 140px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
}
.create-button {
  width: 570px;
  position: absolute;
  bottom: 15px;
}
.close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  border-radius: 50%;
}
.open-window-button {
  margin: 20px auto;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 100;
}
.create-chart-window {
  width: 600px;
  height: 500px;
  background-color: #ffffff;
  margin: 50px auto 0 auto;
  padding: 15px 0 0 15px;
  border-radius: 5px;
  position: relative;

  h1 {
    font-weight: normal;
    font-size: 18px;
  }
}

.chart-type {
  margin-top: 80px;
}

.data-source {
  margin-top: 50px;
}

select {
  width: 570px;
  font-size: 14px;
  margin-top: 10px;
  height: 25px;
  background-color: #ffffff;
}


</style>
