## О проекте
[![](https://github.com/Viktor-Rybakov/my-blog/workflows/Lighthouse/badge.svg?branch=master)](https://github.com/Viktor-Rybakov/my-blog/actions?query=workflow%3ALighthouse)
[![HTML](https://github.com/Viktor-Rybakov/my-blog/workflows/HTML/badge.svg)](https://github.com/Viktor-Rybakov/my-blog/actions?query=workflow%3AHTML)
[![](https://github.com/Viktor-Rybakov/my-blog/workflows/Editor%D0%A1onfig/badge.svg)](https://github.com/Viktor-Rybakov/my-blog/actions?query=workflow%3AEditor%D0%A1onfig)

Это проект личного блога. При создании этого проекта я хочу пробовать и изучать новые для себя технологии разработки, а о чём-то интересном писать статьи.

## Разработка

- Установка зависимостей: `npm install`
- Старт сервера для локальной разработки: `npm start`
- Запуск сборки проекта: `npm run build`

## Окружение и технологии

Движок [Eleventy](https://www.11ty.io/) собирает Markdown и JSON по шаблонам [Nunjucks](https://mozilla.github.io/nunjucks/) и генерирует статичные HTML-страницы. Стили пишутся на чистом CSS, соединяются импортами, сжимаются и оптимизируются с помощью плагинов [PostCSS](https://postcss.org/).
