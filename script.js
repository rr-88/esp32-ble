const form = document.getElementById("form");
form.addEventListener("submit", async function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log(data);
        try {
                const response = await fetch("https://script.google.com/macros/s/AKfycbxTvS_bUlOrNJDQkLiEMoK-SnOcO2-bVkeCBI0z-68Pmwtzugj1VoLi1-HN8cmjnGCr/exec", {
                        method: "POST",
                        body: new URLSearchParams(data)
                });
                const responseText = await response.text();
                alert(responseText);
                form.reset();
        }
        catch (error) {
                alert(error);
        }
});
