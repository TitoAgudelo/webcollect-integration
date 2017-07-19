export function leanplumTrack() {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  return fetch('url', {
    headers,
    method: 'post',
    body: JSON.stringify(data),
  });
}