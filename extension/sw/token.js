export async function getIdToken(clientId, redirectPath) {
    const scopes = ["email"];

    const redirectUri = chrome.identity.getRedirectURL(redirectPath);

    const url = 'https://accounts.google.com/o/oauth2/v2/auth?response_type=id_token' +
        '&client_id=' + clientId + '&redirect_uri=' + redirectUri +
        '&scope=' + scopes.join(' ') + '&nonce=any';

    return chrome.identity.launchWebAuthFlow({ interactive: true, url })
        .then(url => new URLSearchParams(url.split('#')[1]).get('id_token'))
        .catch(ex => console.log(ex));
}  