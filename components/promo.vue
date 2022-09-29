<template>
    <div class="promo--wrapper content">
        <div class="promo--descr">
            <div class="row">
                <div v-for="cart in carts">
                    <ToolsCart
                        v-bind:data="cart"
                        ></ToolsCart>
                </div>

            </div>
        </div>
    </div>
</template>

<style>

</style>

<script>
    export default {
        data() {
            return {
                carts: [{
                    title: "Frontend",
                    h3: "Внешний вид и поведение",
                    h4: "Используемые технологии:",
                    img: "ImgPic1",
                    ul: [{
                            li: "JavaScript фреймворки VueJS, NuxtJS",
                            p: "Предоставляют инструменты для взаимодействия с данными, реализуют реактивную загрузку страниц, используют компонентный стиль"
                        },
                        {
                            li: "Всё только самое необходимое",
                            p: "Мы придерживаемся модели KISS - делай проще! Чем проще система, тем она надежнее. Система состоящая из простых и надежных компонентов легко отлаживается и гибка в разработке"
                        },
                        {
                            li: "Оптимизация на всех этапах разработки",
                            p: "Сжатие картинок для ускорения загрузки страниц, использование векторной SVG графики, минимизация и чистый CSS/SCSS, фоновая загрузка данных"
                        }],
                    descr: "Используя платформу Node.js, мы создаём современные сайты с серверным рендерингом, дружелюбные к SEO и посковым запросам, SPA (одностраничные приложения)",
                    hashtag: "#Framework #SSR #NodeJS",
                },
                {
                    title: "Backend",
                    h3: "Сервер и хранимые данные",
                    h4: "Используемые технологии:",
                    img: "ImgDjango",
                    ul: [{
                            li: "Python фреймворки Django, Ninja",
                            p: "Программные инструменты для безопасной работы с базой данных, интерфейс управления, модульный подход"
                        },
                        {
                            li: "Обработка и представление данных",
                            p: "Типизация Pydantic и валидация входных данных, реализация методов добавления, чтения, модификации, удаления и архитектуры хранения информации в базе данных, спецификация передачи данных {JSON:API}"
                        },
                        {
                            li: "Возможности",
                            p: "JWT авторизация, системные рассчёты, поиск и фильтрация данных, SQL отчёты"
                        }],
                    descr: "Используя Django, мы реализуем бизнес-процессы, быстрый и удобный API для взаимодействия с клиентскими приложениями и сервисами",
                    hashtag: "#Python #RESTapi #CRUD",
                }],
            }
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital@0;1&display=swap');

    .promo--wrapper {
        display: flex;
        justify-content:center;
        align-content: center;
        flex-direction: column;
        background-color: lighten($green_clr, 77%);
        /*text-shadow: none;*/
    }
    .promo--wrapper p, li {
    }
    .promo--title::before {
        content:  "";
        margin-left: 8px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: absolute;
        border: 1px solid #6d6875;
        background-color: #b5838d;
    }
    .promo--title::after {
        content: "";
        width: 16px;
        height:  16px;
        border-radius: 50%;
        background-color: #b5838d;
        position: absolute;
        margin-top: -2px;
        margin-left: -680px;
        opacity: 0.5;
        border: 1px solid #6d6875;

    }
    .promo--title {
        align-self: center;
        text-align: right;
        padding: 18px 48px;
        box-shadow: 3px 3px 6px lighten($dark_clr, 68%),
            -3px -3px 6px lighten($dark_clr, 58%);
        margin-bottom: 18px;
        max-width: 1058px;
        background-color: #e5989b;
    }
/*e5989b*/
/*b5838d*/
/*6d6875*/
/*ffb4a2*/
/*ffcdb2*/
    .promo--title h1 {
        padding: 0px 0 0px 18px;
        font-weight: 400;
        letter-spacing: 1pt;
        font-style: italic;
        color: #6d6875;
        font-family: 'Merriweather', serif;
    }
    .promo--title .descr {
        text-align: right;
        padding-top: 28px;
        padding-left: 18px;
        padding-bottom: 28px;
        letter-spacing: 1.2pt;
        line-height: 1.2em;
        font-family: 'Merriweather', serif;
        color: #6d6875;
    }
    .promo--title .descr span {
        font-weight: 600;
        color: #ffcdb2;
    }
    .promo--title .label {
        color:  #b5838d;
        letter-spacing: 2pt;
        padding-left: 18px;
        font-weight: 500;
        font-size: 0.76em;
    }
    .promo--descr {
        margin:  0 -8px;
        font-size: 0.87em;
        letter-spacing: .82pt;
        padding-bottom: 48px;
    }
    .promo--descr p.title {
        font-size: 1.2em;
        letter-spacing: 1pt;
        text-transform: uppercase;
        font-weight: 600;
        padding-bottom: 18px;
    }
    .promo--descr .label {
        letter-spacing: 6pt;
        font-size: 18px;
        font-weight: 500;
        text-transform: uppercase;
        padding-top: 12px;
        padding-bottom: 8px;
        color: $red_clr;
        z-index: 1;
    }
    .promo--descr .label::before {
        content: "";
        position:  absolute;
        width: 16px;
        height: 2px;
        margin-left: 8px;
        margin-top: 28px;
        border-radius: 5px;
        background-color: $red_clr;
        z-index: 0;
    }
    .promo--descr .label span {
        border: 1px solid rgba(0,0,0,.2);
        padding: 2px 0 0 8px;
        margin-right: 2px;
    }
    .promo--descr ul {
        padding-left: 18px;
        padding-bottom: 18px;
    }
    .promo--descr li {
        font-weight: 400;
        letter-spacing: 0.8pt;
        line-height: 24px;
        padding-left: 18px;
        display: list-item;
    }
    .promo--descr li::marker {
        content: '—';
        font-size: 1.2em;
        font-weight: 300;
    }

    .promo--descr p.descr {
        line-height: 2.2em;
        font-weight: 500;
        text-align: justify;
        padding-bottom: 18px;
        border-bottom: 1px solid $bz_clr;
        margin-bottom: 8px;
    }
    .col {
        border:  1px solid rgba(0,0,0,.2);
        border-radius: 15px;
        padding: 28px;
        /*background-color: $light_clr;*/
        box-shadow: -3px -3px 4px lighten($dark_clr, 56.25%),
            3px 3px 2px lighten($dark_clr, 26.25%),
            inset -3px -3px 2px lighten($dark_clr, 56.25%),
            inset 3px 3px 6px lighten($dark_clr, 70.25%);
        color: $blue_clr;
        margin:  8px 8px;
        max-width: 500px;
    }
    .col:hover .pic1--img {
        opacity: 1;
        transition: all 0.4s;
    }
    .col--title {
        position: relative;
        padding-bottom: 18px;
    }
    .col .banner {
        overflow:  hidden;
        right: 18px;
        margin-top: -38px;
        position:  absolute;
    }
    .hashtag {
        text-align: right;
        font-size: 12px;
        color:  #533483;
    }
    .pic1--img {
        height: 100px;
        width: 100px;
        opacity: 0.1;
        transition: opacity 0.4s;
    }
    .django--img svg {
        height: 100px;
        padding-top: 18px;
        opacity: 0.2;
    }
    .django--img svg:hover {
        opacity: 1;
    }
@media screen and (min-width: 900px) {
    .col {
    }

}
@media screen and (min-width: 1200px) {
    .col {
    }

}
</style>