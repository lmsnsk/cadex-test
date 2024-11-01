# CAD Exchanger test task

### Ссылка на сайт:

http://topgear.website/

Сайт развернут на облачнос сервере. Статические файлы раздает локальный сервер Nginx.
Сервер, написанный на js (express), запущен на том же облачном сервере в Docker-контейнере.

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
