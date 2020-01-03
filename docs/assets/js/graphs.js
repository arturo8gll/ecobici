var edad = document.getElementById("edad")
var estaciones = document.getElementById("estaciones")

var config = {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [75, 25],
        backgroundColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
        label: "Dataset 1"
      }
    ],
    labels: ["Masculino", "Femenino"]
  },
  options: {
    responsive: true,
    legend: {
      display: false
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }
}

var estConf = {
  type: "pie",
  data: {
    datasets: [
      {
        data: [60, 20, 20],
        backgroundColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)"
        ],
        label: "Dataset 1"
      }
    ],
    labels: ["Cuauhtémoc", "Benito Juárez", "Miguel Hidalgo"]
  },
  options: {
    responsive: true,
    legend: {
      position: "top",
      labels: {
        fontSize: 20
      }
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }
}
// And for a doughnut chart
var edadChart = new Chart(edad, config)
var estChart = new Chart(estaciones, estConf)

var edad_min_m = document.getElementById("edad-min-m")
var edad_mean_m = document.getElementById("edad-mean-m")
var edad_max_m = document.getElementById("edad-max-m")

var edad_min_f = document.getElementById("edad-min-f")
var edad_mean_f = document.getElementById("edad-mean-f")
var edad_max_f = document.getElementById("edad-max-f")

var edad_min_m_od = new Odometer({
  el: edad_min_m,
  value: 0,
  // Any option (other than auto and selector) can be passed in here
  format: "",
  theme: "default"
})
var edad_mean_m_od = new Odometer({
  el: edad_mean_m,
  value: 0,
  // Any option (other than auto and selector) can be passed in here
  format: "",
  theme: "default"
})
var edad_max_m_od = new Odometer({
  el: edad_max_m,
  value: 0,
  // Any option (other than auto and selector) can be passed in here
  format: "",
  theme: "default"
})
var edad_min_f_od = new Odometer({
  el: edad_min_f,
  value: 0,
  // Any option (other than auto and selector) can be passed in here
  format: "",
  theme: "default"
})
var edad_mean_f_od = new Odometer({
  el: edad_mean_f,
  value: 0,
  // Any option (other than auto and selector) can be passed in here
  format: "",
  theme: "default"
})
var edad_max_f_od = new Odometer({
  el: edad_max_f,
  value: 0,
  // Any option (other than auto and selector) can be passed in here
  format: "",
  theme: "default"
})

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  offset: 300
  //anchorPlacement: 'center-center', // defines which position of the element regarding to window should trigger the animation
})

document.addEventListener("aos:in", ({ detail }) => {
  console.log("animated in", detail)
  console.log(detail.id)
  if (detail.id === "edad-chart") {
    edadChart.render()
    console.log("ejecuto")
  }
  if (detail.id === "est-chart") {
    estChart.render()
    console.log("ejecuto")
  }
  if (detail.id === "edad") {
    edad_min_m_od.update(16)
    edad_mean_m_od.update(35)
    edad_max_m_od.update(65)

    edad_min_f_od.update(16)
    edad_mean_f_od.update(32)
    edad_max_f_od.update(65)
    console.log("ejecuto")
  }
})
