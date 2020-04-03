import { MutationTree } from 'vuex';
import { State, DataSource, ChartType } from '@/types';

export const mutations: MutationTree<State> = {

    SET_CHART_TYPE: (state: State, value: number) => state.chartType = value,
    SET_DATA_SOURCE: (state: State, value: number) => state.dataSource = value,
};
