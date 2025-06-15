document.addEventListener('DOMContentLoaded', () => {
    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    const container = document.querySelector('.articles');

    if (articles.length > 0 && container) {
        container.innerHTML = '';

        articles.forEach((article, index) => {
            const articleElement = document.createElement('article');

            articleElement.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.summary}</p>
                <button class="read-more-btn" data-index="${index}">Read More</button>
                <div class="full-content">${article.content}</div>
            `;

            container.appendChild(articleElement);
        });

        // Effet d'ouverture et fermeture
        document.querySelectorAll('.read-more-btn').forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                    button.textContent = 'Read More';
                } else {
                    content.style.display = 'block';
                    button.textContent = 'Show Less';
                }
            });
        });
    }
});
