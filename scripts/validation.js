document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('feedbackForm');
    if(!form) return;

    form.addEventListener('submit', function(event){
        event.preventDefault();
        
        document.querySelectorAll('.input.is-danger, .textarea.is-danger').forEach(el => {
            el.classList.remove('is-danger');
        });
        document.querySelectorAll('.help.is-danger').forEach(el => el.remove());
        
        let isValid = true;

        const fullname = document.getElementById('fullname');
        const fullnameValue = fullname.value.trim();
        if(fullnameValue === ''){
            showError(fullname, 'Введите ФИО');
            isValid = false;
        } else if(fullnameValue.split(' ').filter(w => w).length < 2){
            showError(fullname, 'Введите фамилию и имя');
            isValid = false;
        }

        const phone = document.getElementById('phone');
        const phoneValue = phone.value.trim();
        const phoneDigits = phoneValue.replace(/\D/g, '');
        if(phoneValue === ''){
            showError(phone, 'Введите номер телефона');
            isValid = false;
        } else if(phoneDigits.length < 10){
            showError(phone, 'Минимум 10 цифр');
            isValid = false;
        }

        const email = document.getElementById('email');
        const emailValue = email.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(emailValue === ''){
            showError(email, 'Введите email');
            isValid = false;
        } else if(!emailPattern.test(emailValue)){
            showError(email, 'Неверный формат email');
            isValid = false;
        }

        const agreement = document.getElementById('agreement');
        if(!agreement.checked){
            const checkboxControl = agreement.closest('.control');
            const help = document.createElement('p');
            help.classList.add('help', 'is-danger');
            help.textContent = 'Необходимо согласие на обработку данных';
            checkboxControl.appendChild(help);
            isValid = false;
        }

        if(isValid){
            const formData = {
                fullname: fullnameValue,
                phone: phoneValue,
                email: emailValue,
                message: document.getElementById('message').value.trim() || '(не заполнено)',
                timestamp: new Date().toLocaleString('ru-RU')
            };
            
            const event = new CustomEvent('formValid', { detail: formData });
            document.dispatchEvent(event);
            
            alert('✅ Форма отправлена! Данные в консоли.');
            form.reset();
        }
    });

    function showError(input, message){
        input.classList.add('is-danger');
        const help = document.createElement('p');
        help.classList.add('help', 'is-danger');
        help.textContent = message;
        
        const parent = input.type === 'checkbox' ? input.closest('.control') : input.closest('.control');
        parent.appendChild(help);
    }

    document.querySelectorAll('.input, .textarea, .checkbox input').forEach(input => {
        input.addEventListener('input', function(){
            this.classList.remove('is-danger');
            const help = this.closest('.control')?.querySelector('.help.is-danger');
            if(help) help.remove();
        });
    });
});