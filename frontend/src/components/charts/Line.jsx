import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Line = ({ data }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [selectedYear, setSelectedYear] = useState('');

    const chartContainer = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (selectedYear === '') {
            setFilteredData(data);
        } else {
            setFilteredData(data.filter(entry => entry.start_year === selectedYear));
        }
    }, [selectedYear, data]);

    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            chartInstance.current = new Chart(chartContainer.current, {
                type: 'line',
                data: {
                    labels: filteredData.map(entry => entry.sector),
                    datasets: [{
                        label: 'Intensity',
                        data: filteredData.map(entry => entry.intensity),
                        fill: false,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        tension: 0.1
                    },
                    {
                        label: 'Likelihood',
                        data: filteredData.map(entry => entry.likelihood),
                        fill: false,
                        borderColor: 'rgba(255, 99, 132, 1)',
                        tension: 0.1
                    }],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        // Clean up
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [filteredData]);

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    return (
        <div>
            <div>
                <label htmlFor="year">Select Year:</label>
                <select id="year" value={selectedYear} onChange={handleYearChange}>
                    <option value="">All</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2027">2027</option>
                </select>
            </div>
            <canvas ref={chartContainer} />
        </div>
    )
}

export default Line;
