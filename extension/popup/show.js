let html = fetch(import.meta.resolve('./popup.html')).then(r => r.text());

export async function display(tabId, { email, aud, fields, file, idToken }) {
    const id = chrome.runtime.id;
    return chrome.scripting.executeScript({
        target: { tabId },
        func: showPopup,
        args: [await html, id, JSON.stringify({ email, aud, ...file }, null, 2)]
    })
}

function showPopup(html, id, str) {
    window[id]?.remove();
    html = html.replace('DIV_ID', id);

    document.body.insertAdjacentHTML('beforeend', html);

    const div = window[id];
    div.querySelector('pre').innerText = str.trim();
    div.addEventListener('click', e => e.target === div && div.remove());
}