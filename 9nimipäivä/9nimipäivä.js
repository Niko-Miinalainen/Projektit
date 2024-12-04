tänään();
function tänään() {
  const url = new URL("https://nameday.abalin.net/api/V1/today");

  const params = {
    country: "fi",
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
        data.day + "." + data.month + " " + data.nameday.fi;
    });
}

huomenna();
function huomenna() {
  const url = new URL("https://nameday.abalin.net/api/V1/tomorrow");

  const params = {
    country: "fi",
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
        data.day + "." + data.month + " " + data.nameday.fi;
    });
}

eilen();
function eilen() {
  const url = new URL("https://nameday.abalin.net/api/V1/yesterday");

  const params = {
    country: "fi",
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
        data.day + "." + data.month + " " + data.nameday.fi;
    });
}

päivänä();
function päivänä() {
  let aika = document.getElementById("päivä").value.split("-");
  console.log(aika);
  const url = new URL("https://nameday.abalin.net/api/V1/getdate");

  const params = {
    day: "18",
    month: "11",
    country: "hu",
  };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  fetch(url, {
    method: "POST",
    headers,
  }).then((response) => response.json());
}
