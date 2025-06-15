document.addEventListener('DOMContentLoaded', () => {
  const articles = JSON.parse(localStorage.getItem('articles')) || [];
  const container = document.getElementById('articles');
  if (!articles.length) return;

  articles.forEach((a, i) => {
    const articleEl = document.createElement('div');
    articleEl.classList.add('article');
    articleEl.innerHTML = `
      <h2>${a.title}</h2>
      <button class="read-more-btn" data-i="${i}">Read More</button>
      <div class="full-content">${a.content}</div>
    `;
    container.appendChild(articleEl);
  });

  container.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const open = content.style.display === 'block';
      content.style.display = open ? 'none' : 'block';
      btn.textContent = open ? 'Read More' : 'Show Less';
    });
  });
});
