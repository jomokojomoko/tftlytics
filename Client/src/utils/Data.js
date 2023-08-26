const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const Data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1,2,3,4,5,6,7],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [1,2,3,4,5,6,7],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const Options = {
    indexAxis: 'y' ,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      
    },
  };