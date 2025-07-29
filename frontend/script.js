const API_URL = "http://backend:5000/api";

  .then(response => response.json())
  .then(data => {
    document.getElementById('message').innerText = data.message;
  })
  .catch(error => {
    document.getElementById('message').innerText = 'Error connecting to API.';
    console.error(error);
  });
