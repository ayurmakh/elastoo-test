import { MutationTree } from 'vuex';
import { State, DataSource, ChartType } from '@/types';

export const mutations: MutationTree<State> = {

    SET_LINEAR_CHARTS_COUNT: (state: State, value: number) => state.linearChartsCount = value,
    SET_CREATE_CHART_WINDOW_FLAG: (state: State, value: boolean) => state.createChartWindowFlag = value,
    SET_PIE_CHARTS_COUNT: (state: State, value: number) => state.pieChartsCount = value,
    SET_CHART_TYPE: (state: State, value: number) => state.chartType = value,
    SET_DATA_SOURCE: (state: State, value: number) => state.dataSource = value,
};
