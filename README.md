# PiterJS

# Внесение данных

Всё данные находятся в data.[tree](https://github.com/nin-jin/tree.d) конфигах. Для отступов используются табы, юниксовые переводы строк. После обновления данных нужно открыть [piterjs.org](https://piterjs.org/). Если будут какие-либо ошибки или данные не появятся, то в консоли разработчика (Ctrl+Shit+I) будет написано в чём проблема.

Проще всего вносить данные через свой форк прямо на гитхабе.

## Добавление докладчика

1. Открываем [speaker/speaker.data.tree](speaker/speaker.data.tree)
2. Поиском проверяем, что этого докладчика ещё нет.
3. Если есть - обновляем его данные, если надо.
4. Если нет - придумываем ему красивый идентификатор. Например - первые слога фамилии и имени транслитом. Или широко известный никнейм докладчика. Проверяем, что этот идентификатор ещё никем не занят.
5. Добавляем данные о нём по аналогии с остальными.

## Добавление выступления

1. Открываем [speech/speech.data.tree](speech/speech.data.tree)
2. Придумываем выступлению красивый идентификатор. Желательно не слишком длинный. Проверяем, что других докладов с этим идентификатором ещё нет.
3. Добавляем данные о нём по аналогии с остальными.
4. В поле `speaker` указываем идентификаторы докладчиков. В поле `duration` (продолжительность доклада) используется [ISO8601](https://en.wikipedia.org/wiki/ISO_8601#Durations).

## Добавление митапа

1. Открываем [meetup/meetup.data.tree](meetup/meetup.data.tree)
2. Добавляем данные о нём по аналогии с остальными.
3. В поле `speeches` указываем идентификаторы выступлений. В поле `place` указываем идентификатор площадки.  В поле `start` (время начала митапа)  используется [ISO8601](https://en.wikipedia.org/wiki/ISO_8601). 

## Добавление площадки

1. Открываем [place/place.data.tree](place/place.data.tree)
2. Добавляем данные о ней по аналогии с остальными.

## Изменение презентации

1. Открываем [intro/intro.view.tree](intro/intro.view.tree)
2. Изменяем по аналогии с остальным. В `text` можно использовать markdown. Можно добавлять свои страницы или скрывать существующие, поставив `- ` (дефис+пробел) перед веткой описания слайда. У каждого слайда первым словом задаётся уникальный идентификатор, который будет фигурировать в ссылке.

# Запуск девсервера

```
git clone https://github.com/eigenmethod/mam.git ./mam && cd mam
npm install
npm start
```

Application will be accessible at `http://localhost:9080/piterjs/app/-/index.html`

You can change source files (`./piterjs/**`) and reload page to view result.

# BrowserStack

We use it for crossbrowser testing.

[![](https://p14.zdusercontent.com/attachment/1015988/mfyOFKgRwkD1eZtad4ssyr2lH?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..1p0MOCVJ8yuuJjpalEeW_g.pnLJSEABWtJrPhudmT0et0R-OlyYeYgaL5MVQbb4Am2pgwy088zmEuuhXZtidJnb9ZVmF-y4ozuXcEQo1_ers9Qdy1CkbQ_SxSH1rFUO3YAtl-WnJ6BIgZkYyFL-3dI09QYc8V4iVZ6OYoqVl9sL3ETQRssGIUh01yOctsxKCX8BYpmtDD7OFcMouOHphczDR9QP5DaTj9cvGLq07JSfFTqW2xzPEC7BkqxvZ2D30fhIsNkziauaWhxNXda-ezQmIg0vyRJ6rp6YVUSWoxzdBfqBrDmUi6v07s1AGsl07GA.5DNalAqUarVI6r2U8iey-Q)](http://browserstack.com/)
