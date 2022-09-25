<template>
    <div class="promo--wrapper content">
        <div class="promo--title">
            <h1 >
                Мы не создаём велосипеды
            </h1>
            <p>
                #Framework
            </p>
            <ImgPic1 class="pic1--img"/>

        </div>

        <div class="promo--descr">
            <p class="title">Мы берём:</p>

            <div class="row">
                <div class="col left--col">
                    <p class="label">
                        Frontend
                    </p>
                    <ul>
                        <li>то, как выглядит сайт</li>
                        <li>то, как происходит взаимодействие с клиентом</li>
                        <li>то, как выполняется отправка/получение данных с сервера</li>
                    </ul>

                    <p>--</p>
                    <p class="descr">И используя Node.js, создаём современные реактивные сайты с ленивой загрузкой, серверным рендерингом, дружелюбные к SEO и посковым запросам</p>
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
    .promo--wrapper {
        display: flex;
        flex-direction: column;
        background-color: #F6F6F6;
        /*text-shadow: none;*/
    }
    .promo--wrapper p, li {
    }
    .promo--title {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding-right: 18px;
        padding-bottom: 18px;
    }
    .promo--title h1 {
        padding: 28px;
        font-weight: 400;
        letter-spacing: 1pt;
    }
    .promo--title p {
        color: #FF2E63;
        font-weight: 500;
        position: absolute;
        font-size: 0.76em;
    }
    .promo--descr {
        padding-left: 18px;
        font-size: 0.87em;
        letter-spacing: .82pt;
        padding-bottom: 48px;
    }
    .left--col, .right--col{
        max-width: 100%;
    }
    .promo--descr p.title {
        font-size: 1.2em;
        letter-spacing: 2.2pt;
        text-transform: uppercase;
        font-weight: 400;
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
    }
    .col:hover {
        box-shadow: 0px 0px 3px rgba(0,0,0,.2);
    }
    .left--col {
        margin-right: 8px;
    }
    .pic1--img {
        max-width: 200px;
    }
    .django--img svg {
        width: 100px;
        padding-top: 18px;
        opacity: 0.2;
    }
    .django--img svg:hover {
        opacity: 1;
    }
@media screen and (min-width: 900px) {
    .left--col, .right--col {
        max-width: 50%;
    }

}
@media screen and (min-width: 1200px) {
    .left--col, .right--col {
        max-width: 30%;
        margin-right: 28px;
    }

}
</style>