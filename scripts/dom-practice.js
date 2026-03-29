document.addEventListener('DOMContentLoaded', function(){
    
    console.log('=== ЗАДАНИЕ 1: Генерация списка ===');
    
    const task1Container = document.getElementById('task1-container');
    const addUserBtn = document.getElementById('addUserBtn');
    
    const h1 = document.createElement('h1');
    h1.textContent = 'Список пользователей';
    h1.className = 'title is-4';
    task1Container.appendChild(h1);
    
    const ul = document.createElement('ul');
    ul.className = 'content';
    
    const users = ['Анна', 'Борис', 'Виктор'];
    users.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        ul.appendChild(li);
    });
    
    task1Container.appendChild(ul);
    console.log('Создан список с пользователями:', users);
    
    let userCount = 3;
    addUserBtn.addEventListener('click', function(){
        userCount++;
        const newLi = document.createElement('li');
        newLi.textContent = 'Новый пользователь';
        ul.appendChild(newLi);
        console.log(`Добавлен пользователь №${userCount}`);
    });
    
    
    console.log('\n=== ЗАДАНИЕ 2: Работа с селекторами ===');
    
    const container = document.getElementById('container');
    
    const textElements = document.querySelectorAll('.text');
    console.log('Найдено элементов с классом text:', textElements.length);
    
    const specialElement = document.querySelector('.special');
    if(specialElement){
        specialElement.classList.add('red-text');
        console.log('Элементу .special добавлен класс red-text');
    }
    
    if(textElements.length >= 3){
        textElements[2].classList.add('bg-green');
        console.log('Третьему параграфу добавлен класс bg-green');
    }
    
    if(container){
        container.classList.add('border-container');
        console.log('Контейнеру добавлен класс border-container');
    }
    
    
    console.log('\n=== ЗАДАНИЕ 3: Data-атрибуты и вычисления ===');
    
    const items = document.querySelectorAll('.item');
    const totalPriceEl = document.getElementById('total-price');
    const maxPriceItemEl = document.getElementById('max-price-item');
    
    let totalPrice = 0;
    let maxPrice = 0;
    let maxPriceName = '';
    
    items.forEach((item, index) => {
        const price = Number(item.dataset.price);
        const name = item.textContent.trim();
        
        totalPrice += price;
        
        if(price > maxPrice){
            maxPrice = price;
            maxPriceName = name;
        }
        
        if(item.classList.contains('active')){
            item.classList.add('highlight');
            console.log(`Элемент "${name}" активен — добавлен класс highlight`);
        }
        
        console.log(`Товар ${index + 1}: ${name}, цена: ${price} ₽`);
    });
    
    totalPriceEl.textContent = totalPrice;
    maxPriceItemEl.textContent = maxPriceName;
    
    console.log('Суммарная стоимость всех товаров:', totalPrice, '₽');
    console.log('Самый дорогой товар:', maxPriceName, `(${maxPrice} ₽)`);
    
    console.table(
        Array.from(items).map(item => ({
            'Товар': item.textContent.trim(),
            'Цена (₽)': item.dataset.price,
            'Активный': item.classList.contains('active') ? '✅' : '❌'
        }))
    );
});