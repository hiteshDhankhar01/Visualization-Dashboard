import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const RadarChart = ({ data }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      chartInstance.current = new Chart(chartContainer.current, {
        type: 'radar',
        data: {
          labels: [...new Set(data.map(entry => entry.pestle))],
          datasets: [{
            label: 'Intensity',
            data: data.map(entry => entry.intensity),
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            borderWidth: 1,
          },
          {
            label: 'Likelihood',
            data: data.map(entry => entry.likelihood), // Assuming likelihood is represented as a number
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
          }],
        },
        options: {
          scale: {
            ticks: {
              beginAtZero: true,
            },
          },
        },
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

export default RadarChart;



// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';
// // import Data from '../../assets/jsondata.json';

// const RadarChart = ({ data }) => {
//   const chartContainer = useRef(null);
//   const chartInstance = useRef(null);

//   // const data = Data.slice(0, 2000)

//   useEffect(() => {
//     if (chartContainer && chartContainer.current) {
//       chartInstance.current = new Chart(chartContainer.current, {
//         type: 'radar',
//         data: {
//           // [...new Set(data.map(item => item.sector))];
//           labels: [...new Set(data.map(entry => entry.sector))],
//           datasets: [{
//             label: 'Intensity',
//             data: data.map(entry => entry.intensity),
//             backgroundColor: 'rgba(179,181,198,0.2)',
//             borderColor: 'rgba(179,181,198,1)',
//             borderWidth: 1,
//           }],
//         },
//         options: {
//           scale: {
//             ticks: {
//               beginAtZero: true,
//             },
//           },
//         },
//       });
//     }

//     // Clean up
//     return () => {
//       if (chartInstance.current) {
//         chartInstance.current.destroy();
//       }
//     };
//   }, [data]);

//   return (
//     <div>
//       <canvas ref={chartContainer} />
//     </div>
//   );
// };

// export default RadarChart;