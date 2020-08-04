const API_KEY = 'prSUIN2A5rKqnYkLjWQpOFZufhM0DF7w';

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURI(
    category
  )}&limit=10`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }));

  return gifs;
};
