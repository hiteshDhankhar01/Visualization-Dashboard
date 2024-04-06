import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
// import Data from '../../assets/jsondata.json';

const LikelihoodChart = ({data}) => {
    const chartRef = useRef(null);
    const myChart = useRef(null); // Use useRef to store chart instance

    // const data = Data.slice(0, 20);

    useEffect(() => {
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
            type: 'bar',
            data: {
                labels: uniqueSectors,
                datasets: [
                    {
                        label: 'likelihood',
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

export default LikelihoodChart;


// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';
// import Data from '../../assets/jsondata.json';

// const LikelihoodChart = () => {
//     const chartRef = useRef(null);
//     let myChart = null; // Declare chart instance variable

//     const data = Data.slice(0, 20);

//     useEffect(() => {
//         const uniqueSectors = [...new Set(data.map(item => item.sector))];
//         const intensities = uniqueSectors.map(sector => {
//             const filteredData = data.filter(item => item.sector === sector);
//             return filteredData.reduce((acc, curr) => acc + curr.likelihood, 0);
//         });

//         const ctx = chartRef.current.getContext('2d');

//         // Check if myChart exists and destroy it
//         if (myChart) {
//             myChart.destroy();
//         }

//         // Create new chart instance
//             myChart = new Chart(ctx, {
//             type: 'bar',
//             data: {
//                 labels: uniqueSectors,
//                 datasets: [
//                     {
//                         label: 'likelihood',
//                         data: intensities,
//                         backgroundColor: 'rgba(255, 99, 132, 0.9)',
//                         borderColor: 'rgba(255, 99, 132, 1)',
//                         borderWidth: 1,
//                     },
//                 ],
//             },
//             options: {
//                 scales: {
//                     y: {
//                         beginAtZero: true,
//                     },
//                 },
//             },
//         });

//         // Return cleanup function to destroy the chart instance when component unmounts
//         return () => {
//             if (myChart) {
//                 myChart.destroy();
//             }
//         };
//     }, [data]);

//     return (
//         <div className="w-full">
//             <canvas ref={chartRef} />
//         </div>
//     );
// };

// export default LikelihoodChart;


// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';
// import Data from '../../assets/jsondata.json';

// const LikelihoodChart = () => {
//     const chartRef = useRef(null);

//     const data = Data.slice(0, 20);

//     useEffect(() => {
//         const uniqueSectors = [...new Set(data.map(item => item.sector))];
//         const intensities = uniqueSectors.map(sector => {
//             const filteredData = data.filter(item => item.sector === sector);
//             return filteredData.reduce((acc, curr) => acc + curr.likelihood, 0);
//         });

//         const ctx = chartRef.current.getContext('2d');

//         // const ctx = chartRef.current.getContext('2d');

//         if (myChart) {
//             myChart.destroy();
//         }

//         var myChart = new Chart(ctx, {

//             // new Chart(ctx, {
//             type: 'bar',
//             data: {
//                 labels: uniqueSectors,
//                 datasets: [
//                     {
//                         label: 'likelihood',
//                         data: intensities,
//                         backgroundColor: 'rgba(255, 99, 132, 0.9)',
//                         borderColor: 'rgba(255, 99, 132, 1)',
//                         borderWidth: 1,
//                     },
//                 ],
//             },
//             options: {
//                 scales: {
//                     y: {
//                         beginAtZero: true,
//                     },
//                 },
//             },
//         });
//     }, [data]);

//     return (
//         <div className="w-full">
//             <canvas ref={chartRef} />
//         </div>
//     );
// };

// export default LikelihoodChart;
