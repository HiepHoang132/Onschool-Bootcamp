const BASE_URL = "https://jsonplaceholder.typicode.com/users";

async function fetchUrl(url, options = {}) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Resource not found.");
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

$("#get-user-btn").click(async () => {
  const data = await fetchUrl(BASE_URL);
  const formattedData = JSON.stringify(data, null, 2);

  if (data) {
    $("#result").html(`
        <h4 class='text-success'>Danh sách Users</h4>
        <pre>${formattedData}</pre>
    `);
  }
});
