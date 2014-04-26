window.SAMPLE_DATA = {
    base: {
        chart: {
            style: {
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
            }
        },
        tooltip: {
            enabled: false
        },
        title: {
            text: "Awesomeness per day",
            x: 20 //center
        },
        xAxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
            title: {
                text: "Values"
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: "#808080"
            }],
            min: 0
        },
        series: [{
            name: "Hestavollane",
            data: [3.4, 4.1, 3.8, 4.4, 5.1, 4.8, 5.3]

        }, {
            name: "Voll",
            data: [2.9, 2.2, 2.6, 3.3, 3.1, 3.2, 3.5]
        }, {
            name: "Voll",
            data: [0.2, 0.4, 0.8, 1.8, 1.1, 2.1, 1.5]
        }]
    },
    pie: {
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['Firefox', 45.0],
                ['IE', 26.8],
                {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Safari', 8.5],
                ['Opera', 6.2],
                ['Others', 0.7]
            ]
        }]
    }
};


