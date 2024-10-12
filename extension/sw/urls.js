export function filenameFromUrl(url, format) {
    return new URL(url).hostname + '.' + format;
}
 