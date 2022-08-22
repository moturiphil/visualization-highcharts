document.addEventListener('DOMContentLoaded', function () {
    // 3rd last event
    const test =  Highcharts.chart('test', {
        chart: {
            type: 'column'
        },
        title: {
            text: ' Case Management for Eligible Pregnant and Breastfeeding Adolescents Girls and Young Women-HIV Negative '
        },
        xAxis: {
            categories: ['Homabay', 'Kajiado', 'Kiambu', 'Kilifi', 'Kisii', 
                            'Kitui', 'Machakos', 'Makueni', 'Meru', 'Migori', 'Mombasa', 
                            'Muranga', 'Nairobi', 'Nakuru', 'Nyamira', 'Trans Zoia', 'Turkana', 'Uasin Gishu', 'Vihiga']
        },
        yAxis: {
            title: {
                text: 'Indicators'
            },
        },
        series: [
            {
                name: 'Total # HIV-positive pregnant adolescents on follow up:<19yrs',
                data: [0,0,1,0,0,0,0,6,0,796,0,0,4,0,0,450,498,620]
            }, 
            {
                name: '  ag. Total # eligible PBF AGYW on follow up',
                data: [0,0,1,0,0,0,0,11,0,796,0,0,4,0,0,450,498,314,0]
            },
            {
                name: ' ai. # eligible PBF AGYW upto  date with all clinic services',
                data: [0,0,0,0,0,0,0,11,0,796,0,0,0,0,0,450,486,314,0]
            },
            {
                name: ' aj. # missed  clinic apointments/visits',
                data: [0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,29,10,0,0]
            },
            {
                name: ' ak. # missed/Due for initial HIV testing',
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            },
            {
                name: ' al. # missed/Due for Retests',
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0]
            },
            {
                name: '  am. # clients eligible for PrEP',
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,111,0,88,0]
            },
            {
                name: 'Count of an. # clients eligible for Dreams referrals',
                data: [88,5,0,18,31,9,5,7,15,80,14,10,0,20,64,21,69,24,42]
            },
            {
                name: ' ao. # clients with children missed Immunization',
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0]
            },
            {
                name: ' ap. # dignosed HIV Pos missed ART initiation',
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            }
        ]
    });

    // const posReferralsTransitions= Highcharts.chart('posReferralsTransitions', {
    //     chart: {
    //         type: 'line'
    //     },
    //     title: {
    //         text: ' Referrals and Transition for HIV Pos Pregnant Adolescents '
    //     },
    //     xAxis: {
    //         categories: ['Homabay', 'Kajiado', 'Kiambu', 'Kilifi', 'Kisii', 
    //                         'Kitui', 'Machakos', 'Makueni', 'Meru', 'Migori', 'Mombasa', 
    //                         'Muranga', 'Nairobi', 'Nakuru', 'Nyamira', 'Trans Zoia', 'Turkana', 'Uasin Gishu', 'Vihiga'
    //                     ]
    //     },
    //     yAxis: {
    //         title: {
    //             text: 'Indicators'
    //         },
    //     },
        // series: [
        //     {
        //         name: '  ab. # Referred to Health facility & clinical partner for missed services ',
        //         data: [0,0,0,0,0,0,0,0,0,31,0,0,0,0,0,2,0,0,0]
        //     }, 
        //     {
        //         name: '  ac. # confirmed succesfully referred ',
        //         data: [0,0,0,0,0,0,0,0,0,31,0,0,0,0,0,1,0,0,0]
        //     },
        //     {
        //         name: ' ad. Total # clients Transitioned out',
        //         data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]
        //     },
        //     {
        //         name: '  ae. # Transitioned to postnatal (Mother Baby Pair)',
        //         data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0]
        //     },
        //     {
        //         name: '  af. Transfer/ out/Dead/Relocated',
        //         data: [0,0,,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        //     }
        // ]
    // });

    // sixth visualization
    const last =  Highcharts.chart('last', {
        chart: {
            type: 'spline'
        },
        title: {
            text: ' Referrals and Transition for HIV Pos Pregnant Adolescents '
        },
        xAxis: {
            categories: ['Homabay', 'Kajiado', 'Kiambu', 'Kilifi', 'Kisii', 
                            'Kitui', 'Machakos', 'Makueni', 'Meru', 'Migori', 'Mombasa', 
                            'Muranga', 'Nairobi', 'Nakuru', 'Nyamira', 'Trans Zoia', 'Turkana', 'Uasin Gishu', 'Vihiga']
        },
        yAxis: {
            title: {
                text: 'Indicators'
            },
        },
        series: [
            {
                name: 'ab. # Referred to Health facility & clinical partner for missed services',
                data: [0,0,0,0,0,0,0,0,0,31,0,0,0,0,0,2,0,0,0]
            }, 
            {
                name: ' ac. # confirmed succesfully referred ',
                data: [0,0,0,0,0,0,0,0,0,31,0,0,0,0,0,1,0,0,0]
            },
            {
                name: 'ad. Total # clients Transitioned out',
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]
            },
            {
                name: ' ae. # Transitioned to postnatal (Mother Baby Pair)',
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0]
            },
            {
                name: 'af. Transfer/ out/Dead/Relocated',
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            },
            // {
            //     name: ' al. # missed/Due for Retests',
            //     data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0]
            // },
            // {
            //     name: '  am. # clients eligible for PrEP',
            //     data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,111,0,88,0]
            // },
            // {
            //     name: 'Count of an. # clients eligible for Dreams referrals',
            //     data: [88,5,0,18,31,9,5,7,15,80,14,10,0,20,64,21,69,24,42]
            // },
            // {
            //     name: ' ao. # clients with children missed Immunization',
            //     data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0]
            // },
            // {
            //     name: ' ap. # dignosed HIV Pos missed ART initiation',
            //     data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            // }
        ]
    });

    // First
    const enrollments =  Highcharts.chart('enrollments', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Enrollment and Followups'
        },
        xAxis: {
            categories: ['Homabay', 'Kajiado', 'Kiambu','Kilifi', 'Kisii', 
                            'Kitui', 'Machakos', 'Makueni', 'Meru', 'Migori', 'Mombasa', 
                            'Muranga', 'Nairobi', 'Nakuru', 'Nyamira', 'Trans Zoia', 'Turkana', 'Uasin Gishu', 'Vihiga']
        },
        yAxis: {
            title: {
                text: 'Indicators'
            },
        },
        series: [
            {
                name: ' Cumulative # of PMTCT clients enrolled in OVC',
                data: [638,20,21,232,110,14,12,22,90,491,152,7,1192,83,74,891,1341,530,98]
            }, 
            {
                name: 'Total # of PMTCT clients enrolled in OVC program this quarter',
                data: [73,8,14,44,88,0,0,0,90,278,8,0,375,8,74,187,565,45,44]
            },
            {
                name: 'Total # HIV-positive Breastfeeding mothers(Mother Baby pairs) on follow up',
                data: [197,16,19,232,96,14,12,21,57,361,152,6,1183,16,63,430,835,616,43]
            },
            {
                name: 'Total # HIV-positive pregnant adolescents on follow up:<19yrs ',
                data: [20,0,1,1,0,0,0,3,2,31,1,6,3,0,19,11,8,6,1]
            },
            {
                name: 'Total # eligible PBF AGYW on follow up',
                data: [0,0,1,0,0,0,0,11,0,796,0,0,4,0,0,450,498,314,0]
            },
            {
                name: 'Total # clients on follow up exited from PMTCT/OVC integration-all ',
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,45,6,0]
            }
        ]
    });

    const bars = Highcharts.chart('mother-baby', {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Case Management for HIV Pos Breastfeeding mothers(Mother Baby pairs)'
        },
        xAxis: {
            categories: ['Homabay', 'Kajiado', 'Kiambu','Kilifi', 'Kisii', 
                            'Kitui', 'Machakos', 'Makueni', 'Meru', 'Migori', 'Mombasa', 
                            'Muranga', 'Nairobi', 'Nakuru', 'Nyamira', 'Trans Zoia', 'Turkana', 'Uasin Gishu', 'Vihiga']
        },
        yAxis: {
            title: {
                text: 'Indicators'
            },
        },
        series: [
            {
                name: 'Total # HIV-positive Breastfeeding mothers(Mother Baby pairs) on follow up',
                data: [638,20,21,232,110,14,12,22,90,491,152,7,1192,83,74,891,1341,530,98]
            }, 
            {
                name: '# HIV Positive PBFW contacted',
                data: [73,8,14,44,88,0,0,0,90,278,8,0,375,8,74,187,565,45,44]
            },
            {
                name: 'Total # HIV-positive Breastfeeding  # HIV Positive PBFW upto  date with all clinic services(Mother Baby pairs) on follow up',
                data: [197,16,19,232,96,14,12,21,57,361,152,6,1183,16,63,430,835,616,43]
            },
            {
                name: 'Total # HIV-positive pregnant  # missed for  clinic appointments/IITs on follow up:<19yrs ',
                data: [120,0,1,1,0,0,0,3,2,31,1,6,3,0,19,11,8,6,1]
            },
            {
                name: ' # missed  VL',
                data: [0,0,1,0,0,0,0,11,0,796,0,0,4,0,0,450,498,314,0]
            },
            {
                name: ' # non suppressed: VL>1000 copies/ml ',
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,45,6,0]
            },
            {
                name: ' # non  # missed EID/PCR (for HEIs only): VL>1000 copies/ml ',
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,45,6,0]
            }
        ]
    });

    const posBreastfeeding = Highcharts.chart('pos-breastfeeding', {
        title: {
            text: 'Referrals and Transition for HIV Pos Breastfeeding mothers(Mother Baby pairs) '
        },
        xAxis: {
            categories: ['Homabay', 'Kajiado', 'Kiambu','Kilifi', 'Kisii', 
                            'Kitui', 'Machakos', 'Makueni', 'Meru', 'Migori', 'Mombasa', 
                            'Muranga', 'Nairobi', 'Nakuru', 'Nyamira', 'Trans Zoia', 'Turkana', 'Uasin Gishu', 'Vihiga']
        },
        yAxis: {
            title: {
                text: 'Indicators'
            },
        },
        series: [
            {
                type: 'line',
                name: '# Referred to Health facility & clinical partner for missed services',
                data: [0,0,0,21,0,0,0,0,10,357,5,0,0,0,0,21,17,8,0]
            }, 
            {
                type: 'line',
                name: ' # confirmed successfully referred',
                data: [0,0,0,21,0,0,0,0,10,357,5,0,0,0,0,17,11,3,0]
            },
            {
                type: 'line',
                name: 'Total # clients Transitioned out',
                data: [0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,38,0]
            },
            {
                type: 'line',
                name: 'Exited from the Program (Final HIV status of HEI is negative)',
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,13,0,29, 0]
            },
            {
                type: 'line',
                name: ' HIV +ve HEI enrolled in the CCC',
                data: [0,187,0,0,0,14,12,21,0,0,1,0,0,1,0,7,0,4,0]
            },
            {
                type: 'bar',
                name: 'Transfer/ out/Dead/Relocated',
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0]
            }
        ]
    });

    const posPregnantCaseManagement = Highcharts.chart('pos-pregnant-case-management', {
        chart: {
            type: 'column'
        },
        title: {
            text: ' Case Management for HIV Pos Pregnant Adolescents '
        },
        xAxis: {
            categories: ['Homabay', 'Kajiado', 'Kiambu', 'Kilifi', 'Kisii', 
                            'Kitui', 'Machakos', 'Makueni', 'Meru', 'Migori', 'Mombasa', 
                            'Muranga', 'Nairobi', 'Nakuru', 'Nyamira', 'Trans Zoia', 'Turkana', 'Uasin Gishu', 'Vihiga']
        },
        yAxis: {
            title: {
                text: 'Indicators'
            },
        },
        series: [
            {
                name: 'Total # HIV-positive pregnant adolescents on follow up:<19yrs ',
                data: [20,0,1,1,0,0,0,3,2,31,1,6,3,0,19,11,8,6,1]
            }, 
            {
                name: '  # HIV Pos Pregnant Adolescents contacted',
                data: [20,0,1,1,0,0,0,2,2,31,1,6,3,3,19,11,8,5,1]
            },
            {
                name: '# HIV Pregnant Adolescents upto  date with all clinic services',
                data: [18,0,1,1,0,,0,3,2,31,1,6,3,3,18,11,8,7,1]
            },
            {
                name: ' # missed clinic apointments/IITs',
                data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0]
            },
            {
                name: '  # missed  VL',
                data: [3,0,,0,0,0,0,0,0,0,0,0,,3,0,3,0,0,0]
            },
            {
                name: 'Transfer/ out/Dead/Relocated',
                data: [0,0,,0,0,0,0,0,0,0,0,0,,1,0,1,0,0,0]
            },
            {
                name: ' # Due for skilled delivery this month',
                data: [0,0,,0,0,0,0,0,0,0,0,0,,0,0,4,0,0,0]
            }
        ]
    });
    // const pregnancyManagement = Highcharts.chart('pregnant-management', {
        // chart: {
        //     type: 'bar'
        // },
        // title: {
        //     text: ' Case Management for Eligible Pregnant and Breastfeeding Adolescents Girls and Young Women-HIV Negative '
        // },
        // xAxis: {
        //     categories: ['Homabay', 'Kajiado', 'Kiambu', 'Kilifi', 'Kisii', 
        //                     'Kitui', 'Machakos', 'Makueni', 'Meru', 'Migori', 'Mombasa', 
        //                     'Muranga', 'Nairobi', 'Nakuru', 'Nyamira', 'Trans Zoia', 'Turkana', 'Uasin Gishu', 'Vihiga']
        // },
        // yAxis: {
        //     title: {
        //         text: 'Indicators'
        //     },
        // },
        // series: [
        //     {
        //         name: 'Total # HIV-positive pregnant adolescents on follow up:<19yrs',
        //         data: [0,0,1,0,0,0,0,6,0,796,0,0,4,0,0,450,498,620]
        //     }, 
        //     {
        //         name: '  ag. Total # eligible PBF AGYW on follow up',
        //         data: [0,0,1,0,0,0,0,11,0,796,0,0,4,0,0,450,498,314,0]
        //     },
        //     {
        //         name: ' ai. # eligible PBF AGYW upto  date with all clinic services',
        //         data: [0,0,0,0,0,0,0,11,0,796,0,0,0,0,0,450,486,314,0]
        //     },
        //     {
        //         name: ' aj. # missed  clinic apointments/visits',
        //         data: [0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,29,10,0,0]
        //     },
        //     {
        //         name: ' ak. # missed/Due for initial HIV testing',
        //         data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        //     },
        //     {
        //         name: ' al. # missed/Due for Retests',
        //         data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0]
        //     },
        //     {
        //         name: '  am. # clients eligible for PrEP',
        //         data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,111,0,88,0]
        //     },
        //     {
        //         name: 'Count of an. # clients eligible for Dreams referrals',
        //         data: [88,5,0,18,31,9,5,7,15,80,14,10,0,20,64,21,69,24,42]
        //     },
        //     {
        //         name: ' ao. # clients with children missed Immunization',
        //         data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0]
        //     },
        //     {
        //         name: ' ap. # dignosed HIV Pos missed ART initiation',
        //         data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        //     }
        // ]
    // });
});





