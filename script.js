const form = document.getElementById("form");
form.addEventListener("submit", async function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log(data);
        try {
                const response = await fetch("https://script.google.com/macros/s/AKfycbxsgletSkPBddkEa5dyKxVkpyWO9eYrpY3e1ez2I6SMlRjR6PBDgcQtoIwyp0U5e9Un/exec", {
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
