import "regenerator-runtime/runtime";

const url = 'https://frozen-anchorage-06057.herokuapp.com/api/v1/books';

const getBooks = async () => {
  const response = await fetch(url, {
    method: 'GET',
    // mode: 'cors',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  });

  return response.json();
};

const saveBook = async (title, category) => {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, category }),
  });

  if (response.status === 400) { throw new Error('You need your name to send.'); }

  return response.json();
};

getBooks().then((body) => { console.log(body) }).catch(err => displayError(err));

export { saveBook, getBooks };
