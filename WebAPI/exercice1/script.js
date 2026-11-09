const button = document.getElementById("connect");
const form = document.getElementById("form");

const username = document.getElementById("username");
const password = document.getElementById("password");

const image = document.getElementById("image");
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const email = document.getElementById('email');




button.addEventListener("click", async function (event) {

    event.preventDefault();

    const username_ = username.value;
    const password_ = password.value;

    try {
        const response = await fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username_,
                password: password_,
                expiresInMins: 30
            }),
            credentials: "include"
        });

        const data = await response.json();

        localStorage.setItem("accessToken",data.accessToken);
        localStorage.setItem("refreshToken",data.refreshToken);

        const profileResponse = await fetch('https://dummyjson.com/auth/me',{
            method:"GET",
            headers:{
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                },

        }
        )
        const profile = await profileResponse.json();
        form.style.display = "none";
        image.setAttribute('src',profile.image);
        nom.textContent = profile.lastName;
        prenom.textContent = profile.firstName;
        email.textContent = profile.email;

    } catch (error) {
        console.error(error);
    }
});