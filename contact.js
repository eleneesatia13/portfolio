let scriptURL = "https://script.google.com/macros/s/AKfycbzbWU5XfHs1PsBw0jXmaE6byvYjwce2qFVtJkySz-VSJ145rR4PBQibomQZt6rjI1w0/exec";
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById("submit").textContent = "Please wait...";
    document.getElementById("submit").disabled = true;

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            document.getElementById("submit").textContent = "Send Succesfuly🤩";
            setTimeout(() => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("text-area").value = "";
                document.getElementById("submit").textContent = "Send";
                document.getElementById("submit").disabled = false;
            }, 3500);
        }).catch(error => {
            document.getElementById("submit").textContent = "Please Try Again😘"
            document.getElementById("submit").disabled = false;
        });
});