// Загрузка конфига
fetch('config.json')
    .then(response => response.json())
    .then(config => {
        // Динамическое заполнение hero-секции
        document.querySelector('.hero h1').textContent = config.hero.title;
        document.querySelector('.hero p').textContent = config.hero.description;
        // ...и т.д.
    });