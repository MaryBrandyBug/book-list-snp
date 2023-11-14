export default function isExternalLink(url) {
  return url !== window.location.host;
}
