const form = document.getElementById("form");
form.addEventListener("submit", async function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        try {
                const response = await fetch("https://script.google.com/macros/s/AKfycbyERa_j1DoDEQCRkMjPlKu41CNs_jH_4vuM5Y9e1uLlv3ME2ecJi9nZi3EfXAD8yqTe/exec", {
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
