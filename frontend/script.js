async function login() {
    console.log("LOGIN CLICKED");
    const response = await fetch(
        "http://127.0.0.1:8000/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: document.getElementById("email").value,
                password: document.getElementById("password").value
            })
        }
    );

    const data = await response.json();

    console.log(data);

    if (data.access_token) {

        localStorage.setItem(
            "token",
            data.access_token
        );

        window.location.href = "dashboard.html";

    } else {

        alert("Login Failed");

    }
}