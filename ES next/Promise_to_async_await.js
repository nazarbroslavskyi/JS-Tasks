async function loadJson(url) {
  const response = await fetch(url);
  return response.status === 200 ? response.json() : new Error(response.status);
}

loadJson('no-such-user.json').catch(err => console.log(err));