document.addEventListener('DOMContentLoaded', () => {
    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    const container = document.querySelector('.articles');

    if (!container) return;

    if (articles.length === 0) {
        container.innerHTML = '<p>No articles found. Please add some in the admin page.</p>';
        return;
    }

    container.innerHTML = ''; // vider

    articles.forEach((article, index) => {
        const articleEl = document.createElement('article');

        articleEl.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.summary}</p>
            <button class="read-more-btn" data-index="${index}">Read More</button>
            <div class="full-content">${article.content}</div>
        `;

        container.appendChild(articleEl);
    });

    // gestion des clics read more
    document.querySelectorAll('.read-more-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
                btn.textContent = 'Read More';
            } else {
                content.style.display = 'block';
                btn.textContent = 'Show Less';
            }
        });
    });
});
