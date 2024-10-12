export function claims(jwt) {
    return JSON.parse(Buffer.from(jwt.split('.')[1], 'base64url').toString());
}