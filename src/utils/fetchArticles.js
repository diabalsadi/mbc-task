const fetchArticles = () =>
  fetch(
    `https://newsapi.org/v2/everything?q=mbc&from=2023-10-11&to=2023-10-11&sortBy=popularity&apiKey=cef05d3b11ba4e75a417a26afb38ccdb`
  )
    .then((response) => response.json())
    .then((data) => data.articles);

export default fetchArticles;
