export interface State {
    linearChartsCount: number;
    pieChartsCount: number;
    createChartWindowFlag: boolean;
    chartType: number;
    dataSource: number;
    chartTypes: ChartType[];
    dataSources: DataSource[];
    charts: Chart[];
}

export interface Chart {
    type: number;
    dataSource: Array<LinearChartDataSource | PieChartDataSource>;
}

export interface LinearChartDataSource {
    date: string;
    percent: number;
}

export interface PieChartDataSource {
    group: string;
    percentage: number;
}

export interface ChartType {
    id: number;
    value: string;
}

export interface DataSource {
    id: number;
    value: string;
}
