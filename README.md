# CAD Exchanger test task

### Ссылка на сайт:

http://193.227.240.131:8080/

Сайт развернут на облачном сервере рег.ру. Статические файлы раздает локальный сервер Nginx.
Бэкенд, написанный на js (express), запущен в Docker-контейнере на этом же облачном сервере.

При написании фронтенда испольозвались следующие библиотеки:

- React-router
- Ant design
- Styled components
- React-lite-youtube-embed

В проекте активно использовались семантические тэги, такие как: `header`, `footer`, `main`, `section`, `h1`...`h4`

Весь повторяемый код выносился в отдельные сущности и переиспользовался по необходимости

Сборка проекта осуществляется с помощью Vite

### Запустить проект локально

1. `npm install --global yarn`
2. `git-clone https://github.com/lmsnsk/cadex-test.git`
3. `cd cadex-test && yarn`
4. `yarn dev`
