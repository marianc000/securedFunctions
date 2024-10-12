// action.js

import { getIdToken } from "./token.js";
import { display } from './../popup/show.js';
import { takeScreenshot } from "./screenshot.js";
import { upload } from "./upload.js";
import { filenameFromUrl } from "./urls.js";
import options from './options.js';

const { clientId, redirectPath, serviceUrl, fileFieldName, format } = options;

export async function onClicked({ id, url, windowId }) {

    const idToken = await getIdToken(clientId, redirectPath);

    const blob = await takeScreenshot(windowId, format);

    const fileName = filenameFromUrl(url, format);

    const r = await upload({ serviceUrl, fileFieldName, blob, url, fileName, idToken });

    display(id, r);
}
