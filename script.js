function clock() {
  let Days_Name = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let Months_Name = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let time = new Date();
  let hour = time.getHours();
  let staus = "";
  if (hour > 12) {
    staus = "PM";
  } else staus = "AM";
  let date = time.getDate();

  let seconds = time.getSeconds();

  let minutes = time.getMinutes();

  let days = time.getDay();

  let month = time.getMonth();

  let year = time.getFullYear();

  document.getElementById("demo").innerHTML = `
      <h1>Clock</h1>
      <h2>${hour}:${minutes}:${seconds} ${staus}</h2>
      <h3> ${Days_Name[days]} ${date} ${Months_Name[month]} ${year}</h3>
      `;
}

setInterval(clock, 1000);
