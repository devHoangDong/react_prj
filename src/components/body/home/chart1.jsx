import React from 'react';
import Chart from "react-apexcharts";



const chartData1 = {
    options: {
        chart: {
            id: "basic-bar",
            width: '100%',
        },
        stroke: {
            show: true,
            curve: 'smooth',
            width: 2,
        },
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
        },
        yaxis: [
            {
                axisTicks: {
                    show: true
                },
                axisBorder: {
                    show: true,
                    color: "#FF1654"
                },
                labels: {
                    style: {
                        colors: "#FF1654"
                    }
                },
                title: {
                    text: "Thu nhập",
                    style: {
                        color: "#FF1654"
                    }
                }
            },
            {
                opposite: true,
                axisTicks: {
                    show: true
                },
                axisBorder: {
                    show: true,
                    color: "#247BA0"
                },
                labels: {
                    style: {
                        colors: "#247BA0"
                    }
                },
                title: {
                    text: "Đơn hàng",
                    style: {
                        color: "#247BA0"
                    }
                }
            }
        ],
        title: {
            text: 'Báo cáo bán hàng',
            align: 'left',
            margin: 10,
            offsetX: 10,
            offsetY: 10,
            floating: false,
            style: {
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#263238'
            },
        }
    },
    colors: ["#FF1654", "#247BA0"],
    series: [
        {
            name: "Thu nhập",
            data: [30000000, 40000000, 45000000, 50000000, 49000000, 60000000, 70000000]
        }
        ,
        {
            name: "Đơn hàng",
            data: [2000, 3000, 4500, 4000, 3900, 5000, 6000]
        }
    ],

}
export default function ChartOne() {
    return (
        <div>
            <Chart
                options={chartData1.options}
                series={chartData1.series}
                type="line"
            />
        </div>
    )
}
