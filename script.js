const form = document.getElementById("form");
form.addEventListener("submit", async function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log(data);
        try {
                const response = await fetch("https://script.google.com/macros/s/AKfycbzBjPH8Aj2EwHdHOy9OQgs8gXRUyo16ZXCq4cJ80vDnPO-QWMlgC9NluNV1v4YtufH1/exec", {
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
