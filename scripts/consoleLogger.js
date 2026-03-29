document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('formValid', function(event){
        const data = event.detail;
        
        console.clear();
        console.log('НОВАЯ ЗАЯВКА С ФОРМЫ');
        console.log('='.repeat(40));
        console.log('ФИО:', data.fullname);
        console.log('Телефон:', data.phone);
        console.log('Email:', data.email);
        console.log('Сообщение:', data.message);
        console.log('Время:', data.timestamp);
        console.log('='.repeat(40));
        
        console.table({
            'ФИО': data.fullname,
            'Телефон': data.phone,
            'Email': data.email,
            'Сообщение': data.message
        });
    });
});