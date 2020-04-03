import { state } from './state';
import consts from '@/consts';
import { ActionTree } from 'vuex';
import api from '@/api';
import { LinearChartDataSource, Chart, PieChartDataSource } from '@/types';

export const actions: ActionTree<any, any> = {

    setLinearChartsCount: ({ commit }, value: number) => commit('SET_LINEAR_CHARTS_COUNT', value),
    setPieChartsCount: ({ commit }, value: number) => commit('SET_PIE_CHARTS_COUNT', value),
    setCreateChartWindowFlag: ({ commit }, value: boolean) => commit('SET_CREATE_CHART_WINDOW_FLAG', value),
    setChartType: ({ commit }, value: number) => commit('SET_CHART_TYPE', value),
    setDataSource: ({ commit }, value: number) => commit('SET_DATA_SOURCE', value),

    getDataSourceAndCreateChart: ({ commit }) => {

        if (state.dataSource === consts.LINEAR_CHART_TYPE) {
            api.getDataSource(process.env.VUE_APP_LINEAR_CHART_ID).then(
                (onfulfilled) => {
                    const chart: Chart = {
                        type: 1,
                        dataSource: [],
                    };
                    for (const item of onfulfilled.data) {
                        const dataSource: LinearChartDataSource = {
                            date: item['Дата'],
                            percent: item['Процент'],
                        };
                        chart.dataSource.push(dataSource);
                    }
                    state.charts.push(chart);
                },
                (onrejected) => {
                    console.log(onrejected);
                    alert('Error receiving data');
                },
            );
        } else {
            api.getDataSource(process.env.VUE_APP_PIE_CHART_ID).then(
                (onfulfilled) => {
                    const chart: Chart = {
                        type: 2,
                        dataSource: [],
                    };
                    for (const item of onfulfilled.data) {
                        const dataSource: PieChartDataSource = {
                            group: item['Группа'],
                            percentage: item['Доля'],
                        };
                        chart.dataSource.push(dataSource);
                    }
                    state.charts.push(chart);
                },
                (onrejected) => {
                    console.log(onrejected);
                    alert('Error receiving data');
                },
            );
        }
    },
};
