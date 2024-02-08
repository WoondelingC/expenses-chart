const getInf = () => {
  fetch("/data.json")
    .then((res) => res.json())
    .then((data) => {
      const info = {
        labels: data.map((inf) => inf.day),
        datasets: [
          {
            data: data.map((inf) => inf.amount),
            backgroundColor: [
              "hsl(10,79%,65%)",
              "hsl(10,79%,65%)",
              "rgb(1 196 191 / 61%)",
              "hsl(10,79%,65%)",
              "hsl(10,79%,65%)",
              "hsl(10,79%,65%)",
              "hsl(10,79%,65%)",
            ],
            borderRadius: 5,
          },
        ],
      };
      const titleTooltip = (e) => `$${e[0].formattedValue}`;
      const labelTooltip = (e) => "";
      const options = {
        scales: {
          y: {
            display: false,
            grid: {
              display: false,
              drawTicks: false,
              drawBorder: false,
            },
          },
          x: {
            display: false,
            grid: {
              display: false,
              drawBorder: false,
            },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            yAlign: "bottom",
            displayColors: false,
            callbacks: {
              title: titleTooltip,
              label: labelTooltip,
            },
          },
        },
      };
      const config = {
        type: "bar",
        data: info,
        options,
      };
      new Chart(document.getElementById("myGraph"), config);
    });
};

getInf();
