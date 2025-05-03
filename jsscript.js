document.addEventListener('DOMContentLoaded', function() {
    // Проверка загрузки изображений
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.onerror = function() {
            console.error('Не удалось загрузить изображение:', this.src);
            this.style.border = '2px dashed red';
        }
    });

    // Плавная прокрутка для меню
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Обработчик кнопки "Заказать звонок"
    const callButton = document.querySelector('.btn-call');
    if(callButton) {
        callButton.addEventListener('click', function() {
            alert('Форма заказа звонка будет здесь!');
        });
    }
});
