// index.js

import { http } from '@google-cloud/functions-framework';
import { getParts } from './utils/multipart.js';
import { claims } from './utils/jwt.js';

http('run', async (req, res) => {
 
  const idToken = req.get('Authorization').split(' ')[1];

  const { email, aud } = claims(idToken);

  const { files } = await getParts(req);

  const file = files.map(o => ({ filename: o.filename, length: o.buf.length }))[0];

  res.json({ email, aud, file, idToken });
});