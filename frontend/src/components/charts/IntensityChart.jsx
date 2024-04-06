import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Data from '../../assets/jsondata.json';
console.log(Data.length)

const IntensityChart = ({data}) => {
  const chartRef = useRef(null);
  let myChart = null;

  // const data = Data.slice(0, 20);

  useEffect(() => {
    const uniquePestles = [...new Set(data.map(item => item.pestle))];
    const intensities = uniquePestles.map(pestle => {
      const filteredData = data.filter(item => item.pestle === pestle);
      return filteredData.reduce((acc, curr) => acc + curr.intensity, 0);
    });

    const ctx = chartRef.current.getContext('2d');

    if (myChart) {
      myChart.destroy();
    }

    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: uniquePestles,
        datasets: [
          {
            label: 'Intensity',
            data: intensities,
            backgroundColor: '#7367F0',
            borderColor: '#7367F0',
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

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [data]);

  return (
    <div className="w-full">
      <canvas ref={chartRef} />
    </div>
  );
};

export default IntensityChart;



// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';
// import Data from '../../assets/jsondata.json';

// const IntensityChart = () => {
//   const chartRef = useRef(null);

//   const data = Data.slice(0, 20);

//   useEffect(() => {
//     const uniquePestles = [...new Set(data.map(item => item.pestle))];
//     const intensities = uniquePestles.map(pestle => {
//       const filteredData = data.filter(item => item.pestle === pestle);
//       return filteredData.reduce((acc, curr) => acc + curr.intensity, 0);
//     });

//     const ctx = chartRef.current.getContext('2d');
//     new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: uniquePestles,
//         datasets: [
//           {
//             label: 'Intensity',
//             data: intensities,
//             backgroundColor: 'rgba(255, 99, 132, 0.9)',
//             borderColor: 'rgba(255, 99, 132, 1)',
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//           },
//         },
//       },
//     });
//   }, [data]);

//   return (
//     <div className="w-full">
//       <canvas ref={chartRef} />
//     </div>
//   );
// };

// export default IntensityChart;
