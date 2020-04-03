import { State } from '@/types';

export const state: State = {
    linearChartsCount: 0,
    pieChartsCount: 0,
    createChartWindowFlag: false,
    chartType: 0,
    dataSource: 0,
    chartTypes: [
        {
            id: 1,
            value: 'Linear chart',
        },
        {
            id: 2,
            value: 'Pie chart',
        },
    ],
    dataSources: [
        {
            id: 1,
            value: 'Linear data source',
        },
        {
            id: 2,
            value: 'Pie data source',
        },
    ],
    charts: [],
};
