import { State, ChartType, DataSource} from '@/types';
import { GetterTree } from 'vuex';

export const getters: GetterTree<State, any> = {

    getChartTypesValues: (state: State) => state.chartTypes.map((item: ChartType) => item.value),
    getDataSourcesValues: (state: State) => state.dataSources.map((item: DataSource) => item.value),

    getChartTypeByValue: (state: State) => (value: string) =>
        state.chartTypes.find((item: ChartType) => item.value === value),

    getDataSourceByValue: (state: State) => (value: string) =>
        state.dataSources.find((item: DataSource) => item.value === value),

};
