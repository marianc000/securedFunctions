import { OAuth2Client } from 'google-auth-library';

const idToken=' .SIGNATURE_REMOVED_BY_GOOGLE';
const client = new OAuth2Client();
 
const claims= await client.verifyIdToken( {idToken}  );
console.log(claims)
 
//https://oauth2.googleapis.com/tokeninfo?id_token=