import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
// import Data from '../../assets/jsondata.json';

const CountryLikelihoodChart = ({data}) => {
    const chartRef = useRef(null);
    const myChart = useRef(null); // Use useRef to store chart instance

    // const data = Data.slice(0, 50);

    useEffect(() => {
        const uniqueCountry = [...new Set(data.map(item => item.country))];
        const intensities = uniqueCountry.map(country => {
            const filteredData = data.filter(item => item.country === country);
            return filteredData.reduce((acc, curr) => acc + curr.relevance, 0);
        });

        const ctx = chartRef.current.getContext('2d');

        // Check if myChart.current exists and destroy it
        if (myChart.current) {
            myChart.current.destroy();
        }

        // Create new chart instance
        myChart.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: uniqueCountry,
                datasets: [
                    {
                        label: 'Relevance',
                        data: intensities,
                        backgroundColor: 'rgba(255, 99, 132, 0.9)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });

        // Return cleanup function to destroy the chart instance when component unmounts
        return () => {
            if (myChart.current) {
                myChart.current.destroy();
            }
        };
    }, [data]);

    return (
        <div className="w-full">
            <canvas ref={chartRef} />
        </div>
    );
};

export default CountryLikelihoodChart;