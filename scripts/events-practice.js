// scripts/events-practice.js
document.addEventListener('DOMContentLoaded', function(){
    
    console.log('=== ПРАКТИЧЕСКОЕ 12: Обработка событий ===\n');
    
    // ==================== ЗАДАНИЕ 1: Счётчик кликов ====================
    console.log('Задание 1: Счётчик кликов');
    
    const clickBtn = document.getElementById('click-btn');
    const clickCount = document.getElementById('click-count');
    let count = 0;
    
    clickBtn.addEventListener('click', function(){
        count++;
        clickCount.textContent = count;
        console.log(`Клик №${count}`);
    });
    
    
    // ==================== ЗАДАНИЕ 2: Приветствие ====================
    console.log('\nЗадание 2: Приветствие');
    
    const nameInput = document.getElementById('name-input');
    const greetBtn = document.getElementById('greet-btn');
    const greetOutput = document.getElementById('greet-output');
    
    greetBtn.addEventListener('click', function(){
        const name = nameInput.value.trim();
        
        if(name === ''){
            alert('Введите имя!');
            return;
        }
        
        const message = `Привет, ${name}!`;
        greetOutput.textContent = message;
        greetOutput.style.display = 'block';
        console.log(message);
    });
    
    // Дополнительно: очистка сообщения при вводе
    nameInput.addEventListener('input', function(){
        greetOutput.style.display = 'none';
    });
    
    
    // ==================== ЗАДАНИЕ 3: Переключатель темы ====================
    console.log('\nЗадание 3: Переключатель темы');
    
    const themeBtn = document.getElementById('theme-btn');
    let isDarkTheme = false;
    
    themeBtn.addEventListener('click', function(){
        isDarkTheme = !isDarkTheme;
        
        if(isDarkTheme){
            document.body.classList.add('dark-theme');
            themeBtn.innerHTML = '<span class="icon"><i class="fas fa-sun"></i></span><span>Светлая тема</span>';
            console.log('Тема: тёмная');
        } else {
            document.body.classList.remove('dark-theme');
            themeBtn.innerHTML = '<span class="icon"><i class="fas fa-moon"></i></span><span>Тёмная тема</span>';
            console.log('Тема: светлая');
        }
    });
    
    
    // ==================== ЗАДАНИЕ 4: Список дел ====================
    console.log('\nЗадание 4: Список дел');
    
    const todoInput = document.getElementById('todo-input');
    const addTodoBtn = document.getElementById('add-todo-btn');
    const todoList = document.getElementById('todo-list');
    
    addTodoBtn.addEventListener('click', function(){
        const todoText = todoInput.value.trim();
        
        if(todoText === ''){
            alert('Введите задачу!');
            return;
        }
        
        // Создаём новый элемент li
        const li = document.createElement('li');
        li.textContent = todoText;
        
        // Добавляем возможность удаления по клику
        li.style.cursor = 'pointer';
        li.title = 'Кликните для удаления';
        li.addEventListener('click', function(){
            li.remove();
            console.log('Задача удалена:', todoText);
        });
        
        todoList.appendChild(li);
        console.log('Добавлена задача:', todoText);
        
        todoInput.value = '';
        todoInput.focus();
    });
    
    // Дополнительно: добавление по Enter
    todoInput.addEventListener('keypress', function(event){
        if(event.key === 'Enter'){
            addTodoBtn.click();
        }
    });
    
    
    // ==================== ЗАДАНИЕ 5: Управление размером ====================
    console.log('\nЗадание 5: Управление размером');
    
    const sizeBox = document.getElementById('size-box');
    const sizePlus = document.getElementById('size-plus');
    const sizeMinus = document.getElementById('size-minus');
    let currentSize = 100;
    
    sizePlus.addEventListener('click', function(){
        currentSize += 10;
        sizeBox.style.width = currentSize + 'px';
        sizeBox.style.height = currentSize + 'px';
        sizeBox.textContent = currentSize + 'px';
        console.log(`Размер: ${currentSize}px`);
    });
    
    sizeMinus.addEventListener('click', function(){
        if(currentSize > 20){ // Минимальный размер 20px
            currentSize -= 10;
            sizeBox.style.width = currentSize + 'px';
            sizeBox.style.height = currentSize + 'px';
            sizeBox.textContent = currentSize + 'px';
            console.log(`Размер: ${currentSize}px`);
        } else {
            console.warn('Минимальный размер достигнут!');
        }
    });
    
    
    // ==================== ДОПОЛНИТЕЛЬНО: События мыши ====================
    console.log('\n=== Дополнительные события ===');
    
    // Событие наведения на квадрат
    sizeBox.addEventListener('mouseover', function(){
        console.log('Курсор на квадрате');
        sizeBox.style.opacity = '0.8';
    });
    
    sizeBox.addEventListener('mouseout', function(){
        sizeBox.style.opacity = '1';
    });
    
    // Событие фокуса на поле ввода
    nameInput.addEventListener('focus', function(){
        console.log('Поле ввода получило фокус');
    });
    
    nameInput.addEventListener('blur', function(){
        console.log('Поле ввода потеряло фокус');
    });
});