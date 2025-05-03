const API_BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

// Fetch mock news by query
async function fetchNews(query) {
  try {
    const url = `${API_BASE_URL}${query}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Display news articles
function displayNews(articles) {
  const container = document.getElementById('news-container');
  container.innerHTML = ''; // Clear previous articles
  articles.forEach(article => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('article');
    newsItem.innerHTML = `
      <h2>${article.title}</h2>
      <p>${article.body.slice(0, 100)}...</p>
      <a href="#">Read More</a>
    `;
    container.appendChild(newsItem);
  });
}

// Add event listeners for navigation links
document.getElementById('us-news').addEventListener('click', async (e) => {
  e.preventDefault();
  const news = await fetchNews('?_limit=10');
  displayNews(news);
});

document.getElementById('eg-news').addEventListener('click', async (e) => {
  e.preventDefault();
  const news = await fetchNews('?_limit=10&_start=10');
  displayNews(news);
});

// Load USA news on page load
document.addEventListener('DOMContentLoaded', async () => {
  const news = await fetchNews('?_limit=10');
  displayNews(news);
});
