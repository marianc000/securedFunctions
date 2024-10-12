// upload.js

export async function upload({ serviceUrl, blob, fileName, idToken }) {

    const options = {
        method: "POST",
        body: formData(blob, fileName),
        headers: {
            Authorization: 'Bearer ' + idToken
        }
    };

    return fetch(serviceUrl, options).then(r => r.json());
}

function formData(blob, fileName) {
    const data = new FormData();

    data.append('screenshot', blob, fileName);

    return data;
}