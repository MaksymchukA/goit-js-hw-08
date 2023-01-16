// 1. Ознайомся з документацією бібліотеки Vimeo плеєра.
// 2. Додай бібліотеку як залежність проекту через npm.

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// 3. Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// 4. Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.

// 5. Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".

// 7. Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.

const onTimeupdate = (data) => {
    const time = data.seconds;
    console.log(time);
    localStorage.setItem("videoplayer-current-time", time);
};

player.on('timeupdate', throttle(onTimeupdate, 1000));

// 6. Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.

const currentTime = localStorage.getItem("videoplayer-current-time") || 0;
player.setCurrentTime(currentTime);

// if (localStorage['videoplayer-current-time']) {
//     player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
//   }
