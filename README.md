# Музичний акінатор
Веб-додаток, що дозволяє знайти пісню за її звучанням чи уривком тексту або пропонує зіграти в гру "Музичний акінатор": гравець загадує пісню, а додаток у свою чергу повинен її відгадати.

## Передумови
Вам необхідно мати найновіші версії:
- Linux або macOS. Windows, на жаль, не підтримується. Якщо у вас Windows, ми рекомендуємо збирати проект всередені віртуальної машини Linux.
- [NodeJS >= 10.18.0](https://nodejs.org/en/)
- [Yarn >= 1.21.1](https://yarnpkg.com/getting-started/install)

## Як запустити проект?
У терміналі виконати наступні команди:
```shell
git clone https://github.com/F3Joule/Quinic.MusicAkinator.git quinic-akinator
cd quinic-akinator

yarn
```

У файлі [.env](.env) у наступному рядку замінити "your_token" на ваш токен [Audd](https://audd.io/):
```
AUDD_TOKEN=your_token
```
Для безпосереднього запуску додатку:
```shell
yarn start
```
Якщо, після запуску проекту, вас не було автоматично перенаправлено на сторінку додатку, перейдіть на [http://localhost:3000/](http://localhost:3000/)

## Альтернативи
Ви можете переглянути роботу додатку за посиланням на Heroku:
[https://quinic-music-akinator.herokuapp.com/](https://quinic-music-akinator.herokuapp.com/)
