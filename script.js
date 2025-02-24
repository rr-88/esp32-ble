const form = document.getElementById("form");
form.addEventListener("submit", async function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        try {
                const response = await fetch("https://script.google.com/macros/s/AKfycbxRzYYFTYouqrSQ2wCRgOcn-rsZyZoGrgxYGWDF4cE0fyVVpWGzWz29KLuJijRr6drv/exec", {
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
