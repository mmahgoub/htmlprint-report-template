Highcharts.chart('liq-chart', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        margin: [0, 10, 0, 10]
    },
    title: {
        text: 'Liquidity',
        align: 'center',
        verticalAlign: 'middle',
        y: 50
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -30,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '80%'],
            size: '110%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
            ['Chrome', 58.9],
            ['Firefox', 13.29]
        ]
    }]
});


Highcharts.chart("revenues", {
    chart: {
      type: "bar"
    },
    title: {
      text: ""
    },
    xAxis: {
      categories: ["Apples", "Oranges", "Pears", "Grapes", "Bananas"]
    },
    yAxis: {
      min: 0,
      title: {
        text: "Total fruit consumption"
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: "normal"
      }
    },
    series: [
      {
        name: "John",
        data: [5, 3, 4, 7, 2]
      },
      {
        name: "Jane",
        data: [2, 2, 3, 2, 1]
      },
      {
        name: "Joe",
        data: [3, 4, 4, 2, 5]
      }
    ]
  });

  Highcharts.chart('emergency', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    yAxis: {
        title: ""
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});