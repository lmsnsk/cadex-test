# CAD Exchanger test task

### Ссылка на сайт:

http://topgear.website/

Сайт развернут на облачном сервере. Статические файлы раздает локальный сервер Nginx.
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

### Крутая CSS технология Anchor

Представляет собой CSS функцию для удобного позиционирования элемента относительно другого.

Пример:

```css
.baseElement {
  anchor-name: --some-name;
}

.positionedElement {
  position-anchor: --some-name;
  top: anchor(--some-name top);
  right: calc(anchor(--some-name left) + 10%);
}
```

В данном примере верхняя граница элемета будет спозиционирована вровень с верхней границе базового элемента, а правая граница - относительно левой границы с отступом 10% размера элемента.

Также есть возможность позиционироваться относительно нескольких якорей.

Но на данный момент техника не поддерживается браузерами Firefox и Safari, поэтому использование ее все еще не желательно.

https://developer.mozilla.org/en-US/docs/Web/CSS/anchor
