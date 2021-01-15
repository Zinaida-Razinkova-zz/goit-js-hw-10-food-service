// Получаем ссылки
const refs = {
  body: document.querySelector('body'),
  switch: document.querySelector('#theme-switch-toggle'),
};
// Добавляем слушатель событий
refs.switch.addEventListener('change', setClassList);
refs.switch.addEventListener('change', setLocalStorage);

// Изменение темы
function setClassList(event) {
  const check = refs.switch.checked;

  if (check) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
  }
}

// localStorage
function setLocalStorage(event) {
  const check = refs.switch.checked;

  if (check) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeInLocal = localStorage.getItem('theme');

if (themeInLocal === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.switch.checked = true;
}
