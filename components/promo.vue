<template>
    <div class="promo--wrapper content">
        <div class="promo--title">
            <h1 >
                Всё гениальное просто!
            </h1>
            <p class="label">
                «KISS - keep it simple, stupid!»
            </p>

            <p class="descr">
                Самые сложные алгоритмы состоят из простых.
                Чем проще части системы, тем она надёжней.
                Для построения механизмов,
                <span>мы берём</span>:
            </p>

        </div>

        <div class="promo--descr">

            <div class="row">
                <div class="col">
                    <div class="col--title">
                        <p class="label">
                            Frontend
                        </p>
                        <div class="banner">
                            <ImgPic1 class="pic1--img"/>
                        </div>
                    </div>
                    <ul>
                        <li>то, как выглядит сайт</li>
                        <li>то, как происходит взаимодействие с клиентом</li>
                        <li>то, как выполняется отправка/получение данных с сервера</li>
                    </ul>

                    <p>--</p>
                    <p class="descr">И используя Node.js, создаём современные реактивные сайты с ленивой загрузкой, серверным рендерингом, дружелюбные к SEO и посковым запросам</p>
                    <p class="hashtag">
                        #Framework #SSR #NodeJS
                    </p>
                </div>
                <div class="col">
                    <p class="label">
                        Backend
                    </p>
                    <ul>
                        <li>то, как сайт обрабатывает информацию</li>
                        <li>то, где хранятся данные</li>
                        <li>то, как организован доступ для пользователей</li>
                    </ul>

                    <p>--</p>
                    <p class="descr">И используя Django, реализуем бизнес-процессы, быстрый и удобный API для взяимодействия</p>
                    <ImgDjango class="django--img" />
                    <p class="hashtag">
                        #Python #RESTapi #CRUD
                    </p>
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

            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital@1&display=swap');

    .promo--wrapper {
        display: flex;
        flex-direction: column;
        background-color: #F6F6F6;
        /*text-shadow: none;*/
    }
    .promo--wrapper p, li {
    }
    .promo--title {
        width: 100%;
        justify-content: space-between;
        padding-top: 28px;
        padding-right: 18px;
        padding-bottom: 18px;

    }
    .promo--title h1 {
        padding: 0px 0 0px 18px;
        font-weight: 400;
        letter-spacing: 1pt;
        color: #FF2E63;
        font-style: italic;
        font-family: 'Merriweather', serif;
    }
    .promo--title .descr {
        text-align: right;
        padding-top: 28px;
        padding-left: 18px;
        letter-spacing: 1.2pt;
        line-height: 1.2em;
        width: 70%;
        font-style: italic;
    }
    .promo--title .descr span {
        font-weight: 600;
    }
    .promo--title p.label {
        letter-spacing: 2pt;
        padding-left: 18px;
        font-weight: 500;
        font-size: 0.76em;
    }
    .promo--descr {
        margin:  0 -8px;
        padding-left: 18px;
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
        padding-bottom: 8px;
        color: #533483;
    }
    .promo--descr ul {
        padding-left: 18px;
        padding-bottom: 18px;
    }
    .promo--descr li {
        font-weight: 400;
        line-height: 24px;
        padding-left: 18px;
        display:  list-item;
    }
    .promo--descr li::marker {
        content: '—';
        font-size: 1.2em;
        font-weight: 300;
    }

    .promo--descr p.descr {
        line-height: 2.2em;
        font-weight: 500;
    }
    .col {
        border:  1px solid rgba(0,0,0,.2);
        border-radius: 15px;
        padding: 28px;
        background-color: rgba(255, 255, 255, .7);
        margin:  8px 8px;
    }
    .col:hover {
        box-shadow: 0px 0px 3px rgba(0,0,0,.2);
    }
    .col--title {
        position: relative;
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
        max-width: 50%;
    }

}
@media screen and (min-width: 1200px) {
    .col {
        max-width: 30%;
    }

}
</style>