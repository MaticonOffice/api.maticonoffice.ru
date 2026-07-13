[RU](README.md) | [EN](README.en.md)

# Сайт API Maticon Office

[Сайт API Maticon Office](https://api.maticonoffice.ru/) содержит документацию по использованию Maticon Office.

## Обновление документации

Содержимое документации оформлено в Markdown и находится в [каталоге сайта](https://github.com/MaticonOffice/api.maticonoffice.ru.3.0/tree/master/site). Проще всего перейти к нужному Markdown-файлу и нажать кнопку редактирования в правом верхнем углу (значок карандаша). После внесения изменений отправка правок создаст запрос на включение изменений (Pull Request, PR) для проверки. Вопросы можно задать на нашем [форуме](https://forum.maticonoffice.ru/); мы будем рады помочь.

## Сборка сайта

Чтобы собрать сайт из исходного кода, установите актуальные версии Node.js и npm и получите последние изменения из ветки `master`. Затем выполните `npm install`, `npm run build` для сборки файлов документации и `npm start` для запуска сайта в режиме разработки.

## Создание документации OpenAPI

### Создание всех файлов

Чтобы создать документацию для всех OpenAPI-спецификаций, выполните следующую команду из корневого каталога проекта:

```bash
yarn docusaurus gen-api-docs all
```

> Команда создаст документацию API для всех файлов спецификаций OpenAPI (OAS), указанных в конфигурации `docusaurus-plugin-openapi-docs`.

### Создание одного файла

Документацию OpenAPI можно создать и для отдельного пути или спецификации OAS, указав уникальный `id`:

```bash
yarn docusaurus gen-api-docs <id>
```

Пример:

```bash
yarn docusaurus gen-api-docs docspaceBackend
```

> В приведённом примере будет создана только документация API, относящаяся к `docspaceBackend`.

## Очистка документации OpenAPI

### Очистка всех файлов

Чтобы удалить всю документацию API, выполните следующую команду из корневого каталога проекта:

```bash
yarn docusaurus clean-api-docs all
```

### Очистка одного файла

Можно удалить отдельный набор документации API, указав уникальный `id` нужной спецификации.

```bash
yarn docusaurus clean-api-docs <id>
```

Пример:

```bash
yarn docusaurus clean-api-docs docspaceBackend
```

> В приведённом примере будет удалена вся документация API, относящаяся к `docspaceBackend`.

## Связанные ресурсы

- [Документация Maticon Office](https://api.maticonoffice.ru/)
- [Форум Maticon Office](https://forum.maticonoffice.ru/)
- [Maticon Office](https://maticonoffice.ru/)

## Лицензия

- [GPL-3.0](https://raw.githubusercontent.com/MaticonOffice/api.maticonoffice.ru.3.0/master/LICENSE)
