import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LikelihoodChart2 = ({ data }) => {
    const chartRef = useRef(null);
    const myChart = useRef(null); // Use useRef to store chart instance

    useEffect(() => {
        // Check if data is provided
        if (!data || data.length === 0) return;

        const uniqueSectors = [...new Set(data.map(item => item.sector))];
        const intensities = uniqueSectors.map(sector => {
            const filteredData = data.filter(item => item.sector === sector);
            return filteredData.reduce((acc, curr) => acc + curr.likelihood, 0);
        });

        const ctx = chartRef.current.getContext('2d');

        // Check if myChart.current exists and destroy it
        if (myChart.current) {
            myChart.current.destroy();
        }

        // Create new chart instance
        myChart.current = new Chart(ctx, {
            type: 'doughnut', // Use doughnut chart type
            data: {
                labels: uniqueSectors,
                datasets: [
                    {
                        label: 'likelihood',
                        data: intensities,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.9)',
                            'rgba(54, 162, 235, 0.9)',
                            'rgba(255, 206, 86, 0.9)',
                            'rgba(75, 192, 192, 0.9)',
                            'rgba(153, 102, 255, 0.9)',
                            'rgba(255, 159, 64, 0.9)',
                            'rgba(255, 99, 132, 0.9)',
                            'rgba(54, 162, 235, 0.9)',
                            'rgba(255, 206, 86, 0.9)',
                            'rgba(75, 192, 192, 0.9)',
                            'rgba(153, 102, 255, 0.9)',
                            'rgba(255, 159, 64, 0.9)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ],
                        borderWidth: 1,
                    },
                ],
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
        <div className="flex">
            <canvas ref={chartRef} />
        </div>
    );
};

export default LikelihoodChart2;





// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';
// // import Data from '../../assets/jsondata.json';

// const LikelihoodChart2 = ({ data }) => {
//     const chartRef = useRef(null);
//     const myChart = useRef(null); // Use useRef to store chart instance

//     //  data = data.filter(item => item.end_year && item.likelihood); // Filter data with both end_year and likelihood

//     const uniqueSectors = [...new Set(data.map(item => item.sector))];
//     const intensities = uniqueSectors.map(sector => {
//         const filteredData = data.filter(item => item.sector === sector);
//         return filteredData.reduce((acc, curr) => acc + curr.likelihood, 0);
//     });

//     const ctx = chartRef.current.getContext('2d');

//     // Check if myChart.current exists and destroy it
//     if (myChart.current) {
//         myChart.current.destroy();
//     }

//     // Create new chart instance
//     myChart.current = new Chart(ctx, {
//         type: 'doughnut', // Use doughnut chart type
//         data: {
//             labels: uniqueSectors,
//             datasets: [
//                 {
//                     label: 'likelihood',
//                     data: intensities,
//                     backgroundColor: [
//                         'rgba(255, 99, 132, 0.9)',
//                         'rgba(54, 162, 235, 0.9)',
//                         'rgba(255, 206, 86, 0.9)',
//                         'rgba(75, 192, 192, 0.9)',
//                         'rgba(153, 102, 255, 0.9)',
//                         'rgba(255, 159, 64, 0.9)',
//                         'rgba(255, 99, 132, 0.9)',
//                         'rgba(54, 162, 235, 0.9)',
//                         'rgba(255, 206, 86, 0.9)',
//                         'rgba(75, 192, 192, 0.9)',
//                         'rgba(153, 102, 255, 0.9)',
//                         'rgba(255, 159, 64, 0.9)',
//                     ],
//                     borderColor: [
//                         'rgba(255, 99, 132, 1)',
//                         'rgba(54, 162, 235, 1)',
//                         'rgba(255, 206, 86, 1)',
//                         'rgba(75, 192, 192, 1)',
//                         'rgba(153, 102, 255, 1)',
//                         'rgba(255, 159, 64, 1)',
//                         'rgba(255, 99, 132, 1)',
//                         'rgba(54, 162, 235, 1)',
//                         'rgba(255, 206, 86, 1)',
//                         'rgba(75, 192, 192, 1)',
//                         'rgba(153, 102, 255, 1)',
//                         'rgba(255, 159, 64, 1)',
//                     ],
//                     borderWidth: 1,
//                 },
//             ],
//         },
//     });

//     // Return cleanup function to destroy the chart instance when component unmounts
//     return () => {
//         if (myChart.current) {
//             myChart.current.destroy();
//         }
//     };
// }

// return (
//     <div className="flex ">
//         <canvas ref={chartRef} />
//     </div>
// );
// };

// export default LikelihoodChart2;

