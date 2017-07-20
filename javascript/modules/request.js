export function suscribe(url) {
  return fetch(url, {
    method: 'post'
  });
}