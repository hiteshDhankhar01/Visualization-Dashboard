import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Data from '../../assets/jsondata.json';
import { ChartDateFormatter, registerables } from 'chartjs-adapter-date-fns';

const LineChart = () => {
    const chartContainer = useRef(null);
    const chartInstance = useRef(null);

    const data = Data.slice(0, 200)

    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            chartInstance.current = new Chart(chartContainer.current, {
                type: 'line',
                data: {
                    labels: data.map(entry => entry.published),
                    datasets: [{
                        label: 'Intensity',
                        data: data.map(entry => entry.intensity),
                        fill: false,
                        borderColor: 'rgba(75,192,192,1)',
                        borderWidth: 2,
                    }],
                },
                options: {
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'day',
                                tooltipFormat: 'dd/MM/yyyy' // optional, customize tooltip format
                            },
                        },
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
                plugins: [ChartDateFormatter, ...registerables], // Add the date adapter plugin
            });
        }

        // Clean up
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [data]);

    return (
        <div>
            <canvas ref={chartContainer} />
        </div>
    );
};

export default LineChart;
