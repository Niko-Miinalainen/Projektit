let maa = "fi";

function valitse() {
  maa = document.getElementById("maa").value;
  tänään();
  huomenna();
  eilen();
  päivänä();
  console.log(maa);
}

tänään();
function tänään() {
  const url = new URL("https://nameday.abalin.net/api/V1/today");

  const params = {
    country: maa,
  };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  fetch(url, {
    method: "GET",
    headers,
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("t").innerHTML =
        data.day + "." + data.month + " " + data.nameday[maa];
    });
}

huomenna();
function huomenna() {
  const url = new URL("https://nameday.abalin.net/api/V1/tomorrow");

  const params = {
    country: maa,
  };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  fetch(url, {
    method: "GET",
    headers,
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("h").innerHTML =
        data.day + "." + data.month + " " + data.nameday[maa];
    });
}

eilen();
function eilen() {
  const url = new URL("https://nameday.abalin.net/api/V1/yesterday");

  const params = {
    country: maa,
  };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  fetch(url, {
    method: "GET",
    headers,
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("e").innerHTML =
        data.day + "." + data.month + " " + data.nameday[maa];
    });
}

päivänä();
function päivänä() {
  let aika = document.getElementById("päivä").value.split("-");

  const url = new URL("https://nameday.abalin.net/api/V1/getdate");

  let params = {
    day: aika[2],
    month: aika[1],
    country: maa,
  };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  console.log(aika);
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  fetch(url, {
    method: "POST",
    headers,
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("p").innerHTML =
        data.day + "." + data.month + " " + data.nameday[maa];
    });
}

function nimellä() {
  let nimi = document.getElementById("nimi").value;

  const url = new URL("https://nameday.abalin.net/api/V1/getname");

  const params = {
    name: nimi,
    country: maa,
  };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  fetch(url, {
    method: "GET",
    headers,
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("n").innerHTML = "";
      for (let o = 0; o < data[0].length; o++) {
        document.getElementById("n").innerHTML +=
          data[0][o].day +
          "." +
          data[0][o].month +
          " " +
          data[0][o].name +
          "<br>";
      }
    });
}
