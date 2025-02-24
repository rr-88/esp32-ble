const form = document.getElementById("form");
form.addEventListener("submit", async function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        try {
                const response = await fetch("https://script.google.com/macros/s/AKfycbw3mo7j8CuquQCstnqoJ13mpPIMrLVfe8d4x7czZ6xtALQZnC2au3xbHh1VjYANP0Wz/exec", {
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
