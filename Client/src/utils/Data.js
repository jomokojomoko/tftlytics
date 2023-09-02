const labels = [1, 'February', 'March', 'April', 'May', 'June', 'July'];
export const Data = {
  labels,
  datasets: [
    {
      data: [1,2,3,4,5,6,7],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
   
  };