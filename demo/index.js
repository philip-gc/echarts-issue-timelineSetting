var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, null, {renderer: 'svg', useDirtyRect: false});

option = {
  dataset: [
    {
      source: [
        ['A', 'B01', 'B02', 'B03', 'B11', 'B12', 'B13'],
        ['a', 10, 20, 0.5, 9, 12, 0.75],
        ['b', 15, 18, 0.83, 22, 20, 1.1],
        ['c', 13, 16, 0.81, 0, 0, null],
        ['d', 0, 0, null, 18, 20, 0.9]
      ]
    },
    // {
    //   source: [
    //     ['B', 'a', 'b'],
    //     ['B0', 0.5, 0.83],
    //     ['B1', 0.75, 1.1]
    //   ]
    // },
    {
      fromDatasetIndex: 0,
      transform: [
        {type: 'filter', config: {dimension: 'B02', '!=': 0}},
        {type: 'sort', config: {dimension: 'B01', order: 'desc'}}
      ]
    },
    {
      fromDatasetIndex: 0,
      transform: [
        {type: 'filter', config: {dimension: 'B12', '!=': 0}},
        {type: 'sort', config: {dimension: 'B11', order: 'desc'}}
      ]
    },
  ],
  timeline: {
    axisType: 'category', data: ['B0', 'B1']
  },
  grid: [
    {left: '2%', width: '40%'},
    {right: '2%', width: '40%'},
  ],
  xAxis: [
    {gridIndex: 0, type: 'value'},
    {gridIndex: 1, type: 'value'}
  ],
  yAxis: [
    {gridIndex: 0, type: 'category'},
    {gridIndex: 1, type: 'category'}
  ],
  series: [
    {
      type: 'bar', xAxisIndex: 0, yxisInex: 0, 
    },
    {
      type: 'scatter', xAxisIndex: 0, yxisInex: 0,
    },
    {
      type: '',
      xAxisIndex: 1, yxisInex: 1
    }
  ],

  options: [
    {
      series: [
        {encode: {x: 'B01', y: 'A'}, datasetIndex: 1},
        {encode: {x: 'B02', y: 'A'}, datasetIndex: 1},
        {}
      ]
    },
    {
      series: [
        {encode: {x: 'B11', y: 'A'}, datasetIndex: 2},
        {encode: {x: 'B12', y: 'A'}, datasetIndex: 2},
        {}
      ]
    }
  ]
};

myChart.setOption(option);
window.addEventListener('resize', myChart.resize)
