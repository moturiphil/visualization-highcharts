document.addEventListener('DOMContentLoaded', function () {
    // 3rd last event
    const test =  Highcharts.chart('test', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'HTS_TST_POS'
        },
        subtitle: {
            text: 'Source: <a ' +
                'href="https://khis.org">KHIS</a>'
        },
        xAxis: {
            categories: ['Register/EMR', 'MOH 731', 'KHIS', 'Datime'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population(thousands)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' thousands'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'July',
            data: [631, 727, 3202, 721]
        }, {
            name: 'August',
            data: [814, 841, 3714, 726]
        }, {
            name: 'September',
            data: [1044, 944, 4170, 735]
        }]
    });


    const test1 =  Highcharts.chart('test1', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'TX_NEW'
        },
        subtitle: {
            text: 'Source: <a ' +
                'href="https://khis.org">KHIS</a>'
        },
        xAxis: {
            categories: ['Register/EMR', 'MOH 731', 'KHIS', 'Datime'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population(thousands)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' thousands'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'July',
            data: [631, 727, 3202, 721]
        }, {
            name: 'August',
            data: [814, 841, 3714, 726]
        }, {
            name: 'September',
            data: [1044, 944, 4170, 735]
        }]
    });

    const test2 =  Highcharts.chart('test2', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'TB_PREV (N)'
        },
        subtitle: {
            text: 'Source: <a ' +
                'href="https://khis.org">KHIS</a>'
        },
        xAxis: {
            categories: ['Register/EMR', 'MOH 731', 'KHIS', 'Datime'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population(thousands)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' thousands'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'July',
            data: [631, 727, 3202, 721]
        }, {
            name: 'August',
            data: [814, 841, 3714, 726]
        }, {
            name: 'September',
            data: [1044, 944, 4170, 735]
        }]
    });

    const test3 =  Highcharts.chart('test3', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'TB_PREV (N)'
        },
        subtitle: {
            text: 'Source: <a ' +
                'href="https://khis.org">KHIS</a>'
        },
        xAxis: {
            categories: ['Register/EMR', 'MOH 731', 'KHIS', 'Datime'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population(thousands)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' thousands'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'July',
            data: [631, 727, 3202, 721]
        }, {
            name: 'August',
            data: [814, 841, 3714, 726]
        }, {
            name: 'September',
            data: [1044, 944, 4170, 735]
        }]
    });

    const test4 =  Highcharts.chart('test4', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'PMTC_HEI_POS (0-2 months)'
        },
        subtitle: {
            text: 'Source: <a ' +
                'href="https://khis.org">KHIS</a>'
        },
        xAxis: {
            categories: ['Register/EMR', 'MOH 731', 'KHIS', 'Datime'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population(thousands)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' thousands'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'July',
            data: [631, 727, 3202, 721]
        }, {
            name: 'August',
            data: [814, 841, 3714, 726]
        }, {
            name: 'September',
            data: [1044, 944, 4170, 735]
        }]
    });

    const test5 =  Highcharts.chart('test5', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'PMTC_HEI_POS (>2-12 months)'
        },
        subtitle: {
            text: 'Source: <a ' +
                'href="https://khis.org">KHIS</a>'
        },
        xAxis: {
            categories: ['Register/EMR', 'MOH 731', 'KHIS', 'Datime'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population(thousands)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' thousands'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'July',
            data: [631, 727, 3202, 721]
        }, {
            name: 'August',
            data: [814, 841, 3714, 726]
        }, {
            name: 'September',
            data: [1044, 944, 4170, 735]
        }]
    });

    const test6 =  Highcharts.chart('test6', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'VMMC_CIRC'
        },
        subtitle: {
            text: 'Source: <a ' +
                'href="https://khis.org">KHIS</a>'
        },
        xAxis: {
            categories: ['Register/EMR', 'MOH 731', 'KHIS', 'Datime'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population(thousands)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' thousands'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'July',
            data: [631, 727, 3202, 721]
        }, {
            name: 'August',
            data: [814, 841, 3714, 726]
        }, {
            name: 'September',
            data: [1044, 944, 4170, 735]
        }]
    });

    
});





