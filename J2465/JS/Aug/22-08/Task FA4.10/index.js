const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

async function fetchUrl(url, options) {
  const data = await fetch(url, options);
  const jsonData = await data.json();
  console.log(JSON.stringify(jsonData));
}

document.getElementById("api-get").addEventListener("click", async () => {
  await fetchUrl(BASE_URL + "/1", {});
});

document.getElementById("api-get-all").addEventListener("click", async () => {
  await fetchUrl(BASE_URL, {});
});

document.getElementById("api-create").addEventListener("click", async () => {
  await fetchUrl(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "foo", body: "bar", userId: 1 }),
  });
});

document.getElementById("api-update").addEventListener("click", async () => {
  await fetchUrl(BASE_URL + "/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "foo", body: "bar", userId: 1, id: 1 }),
  });
});

document.getElementById("api-delete").addEventListener("click", async () => {
  await fetchUrl(BASE_URL + "/1", {
    method: "DELETE",
  });
});
