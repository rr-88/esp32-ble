const form = document.getElementById("form");
form.addEventListener("submit", async function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log(data);
        try {
                const response = await fetch("https://script.google.com/macros/s/AKfycbwCp-YgcyxO02wCP-bZNZ1KMhJBZaEqAmJUOeppIuS1Ii6453Rt-_NM0-Nh1z18ouhf/exec", {
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
