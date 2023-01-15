import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('[name="email"]'),
    message: document.querySelector('[name="message"]'),
};
console.log(refs);

// 1. Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".

// 4. Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

refs.form.addEventListener('input', throttle(() => {
    const formData = {
        email: refs.email.value,
        message: refs.message.value,
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}), 500);

// 2. Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.

function dataFromStorage() {
    const dataStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (dataStorage) {
        dataStorage.email ? (refs.email.value = dataStorage.email) : {};
        dataStorage.message ? (refs.message.value = dataStorage.message) : {};
    }
};

dataFromStorage();

// 3. Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.

refs.form.addEventListener('submit', (event) => {
    event.preventDefault();

if (refs.email.value && refs.message.value) {
    const localData = localStorage.getItem(STORAGE_KEY);
    console.log(JSON.parse(localData));
};
  
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
});
