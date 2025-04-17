const form = document.getElementById("form");
form.addEventListener("submit", async function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log(data);
        try {
                const response = await fetch("https://script.google.com/macros/s/AKfycbyQvzm9DkuHiBhUfuBOdz8EAqBJIABz8ho56NDM2V6606mjUssfL6tu87iogIDFw-ZL/exec", {
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
