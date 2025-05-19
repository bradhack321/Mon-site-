
```javascript
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // Identifiants simples codés en dur
  if (user === "admin" && pass === "1234") {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("message").innerText = "Identifiants incorrects !";
  }
}
