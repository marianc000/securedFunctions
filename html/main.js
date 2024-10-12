let idToken;
function handleCredentialResponse(response) {
    console.log(response.credential);
    idToken = response.credential;
    btn.classList.add('block');
}

google.accounts.id.initialize({
    client_id: "412552140478-kpk3n0ldvtvu0cfipt487tej4o0tckdv.apps.googleusercontent.com",
    callback: handleCredentialResponse
});
google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large" }  // customization attributes
);


const url = "https://europe-west6-positive-tracer-432214-n8.cloudfunctions.net/screenshot";

btn.addEventListener('click', onClick);

function onClick() {
    get(url, {
        method: "GET",
        headers: {
            Authorization: 'Bearer ' + idToken
        }
    }).then(console.log);
}

function get(url, options) {
    return fetch(url, options).then(r => r.json());
}