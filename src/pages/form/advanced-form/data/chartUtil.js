import echarts from 'echarts'
import {chartConfigList} from './chartConfig';

export const renderChart = (chartId, data, showConfigList,strategyList,className,height) => {
    const legend = [];

    const yAxis = [
        {
            name: "收益率(%)",
            show: false,
            type: "value",
            position: 'left',
            index: 0
        }, {
            name: "投入本金",
            show: false,
            type: "value",
            position: 'right',
            index: 1
        }, {
            name: "PE-TTM",
            show: false,
            type: "value",
            position: 'right',
            index: 2
        }, {
            name: "年化率(%)",
            show: false,
            type: "value",
            position: 'left',
            offset: 60,
            interval: 50,
            max: 200,
            index: 3
        }, {
            name: "期数",
            show: false,
            type: "value",
            position: 'right',
            offset: 60,
            index: 4
        },
        {
          name: "收益",
          show: false,
          type: "value",
          position: 'left',
          index: 5
      }
    ]

    const series = [];
    ((showConfigList[0]||{}).config || []).forEach((item, index) => {
        strategyList.forEach((s, sIndex) => {
            const showList = showConfigList[sIndex].config;
            const {
                name,
                field,
                show,
                type,
                yIndex,
                lineStyle
            } = showList[index];
            if (show) {
                const confName = `${s.name  }-${  name}`;
                series.push({
                    name: confName,
                    type: type || 'line',
                    showAllSymbol: false,
                    yAxisIndex: yIndex,
                    lineStyle: lineStyle || {},
                    data: data[sIndex][field]
                })
                yAxis[yIndex].show = true;
                legend.push(confName);
            }
        });
    });

    const option = {
        title: false,
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            type: 'scroll',
            // bottom: -10,
            data: legend
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        // toolbox: {
        //     feature: {
        //         saveAsImage: {}
        //     }
        // },
        xAxis: {
            data: data[0].date
        },
        yAxis,
        series
    };
    const chartElement = document.getElementById(chartId);
    const parentElement = chartElement.parentNode;
    parentElement.removeChild(chartElement);
    const newElement = document.createElement('div');
    newElement.setAttribute('id',chartId);
    newElement.setAttribute('className',className);
    newElement.style.width = '100%';
    newElement.style.height = height+'px';
    parentElement.appendChild(newElement);
    const myChart = echarts.init(newElement);
    myChart.setOption(option);
}
