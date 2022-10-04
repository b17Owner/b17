<template>
    <div class="promo--wrapper content">
        <h1 ref="h1">Современный сайт для прогрессивных идей</h1>

        <div class="promo">
            <div class="row">
                <!-- Carts block -->
                <div v-for="cart in carts" style="width: 100%;">
                    <ToolsCart
                        v-bind:data="cart"
                        v-gsap.fromTo="[
                            { opacity: 0 },
                            { opacity: 1, duration: 2.4 }
                        ]"
                        ></ToolsCart>
                </div>
                <!-- Question block -->

            </div>
            <div class="question--wrapper">
                <img src="~/assets/img/morpheus.png" alt="">
                <h2>Вы хотите сайт?</h2>
                <div class="question--button--wrapper">
                    <button class="question--button button--yes">Да</button>
                    <button class="question--button button--no">Нет</button>
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
                            p: "Инструменты для взаимодействия с данными, реализация реактивной загрузки страниц, использование компонентного стиля"
                        },
                        {
                            li: "Всё только самое необходимое",
                            p: "Придерживаемся модели KISS - делай проще! Чем проще система, тем она надежнее. Система состоящая из простых и надежных компонентов легко отлаживается и гибка в разработке"
                        },
                        {
                            li: "Оптимизация на всех этапах разработки",
                            p: "Сжатие картинок для ускорения загрузки страниц, использование векторной SVG графики, минимизация и чистый CSS/SCSS, фоновая загрузка данных"
                        }],
                    descr: "Используя платформу Node.js, создаём современные сайты с серверным рендерингом, дружелюбные к SEO и посковым запросам, SPA (одностраничные приложения)",
                    hashtag: "#Framework #SSR #NodeJS",
                },
                {
                    title: "Backend",
                    h3: "Сервер и хранимые данные",
                    h4: "Используемые приложения:",
                    img: "ImgDjango",
                    ul: [{
                            li: "Python фреймворки Django, Django-Ninja",
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
                },
                {
                    title: "Tools",
                    h3: "Вспомогательные программы",
                    h4: "Используемые инструменты:",
                    img: "ImgDocker",
                    ul: [{
                            li: "Контейнеризация Docker",
                            p: "Удобное стредство для виртуализации приложений, обеспечивает переносимость и гибкость в создании мультисервисных систем"
                        },
                        {
                            li: "Настройка VDS/VPS",
                            p: "Установка рабочего окружения, nginx-прокси, docker-compose и прочих необходимых компонентов"
                        },
                        {
                            li: "Система управления версиями git",
                            p: "Для контроля изменений кода и обновления приложения"
                        },
                        {
                            li: "Автоматизация и скриптинг",
                            p: "Для выполнения автоматических действий по расписанию, резервированию базы данных и других манипуляций с ОС и данными мы используем Bash и Python скрипты, а также официальные утилиты (напр.: pg_dump, mysqldump и др.)"
                        }],
                    descr: "",
                    hashtag: "#Bash #Backup #Script",
                }],
            }
        },
        mounted() {
            this.textEffect()
        },
        methods: {
            textEffect() {
                const gsap = this.$gsap
                const el = this.$refs.h1
                gsap.to(el, {
                    duration: 3,
                    delay: 3,
                    text: {
                        value: "Современный подход к разработке сайтов",
                        newClass: "h1",
                        delimiter: " "
                    },
                    ease: "elastic.out(1, 0.3)",
                });
            }
        }
    }
</script>

<style lang="scss">

.promo--wrapper {
    display: flex;
    /*align-content: center;*/
    flex-direction: column;
    background-color: lighten($green_clr, 77%);
    /*text-shadow: none;*/
}
.promo--wrapper h1 {
    padding: 36px 8px;
    color: #444c5c;
}
.h1 {
    color: #444c5c;
}
.question--wrapper {
    margin: 28px auto;
    max-width: 400px;
    text-align: center;
}
.question--wrapper h2 {
    margin-bottom: 28px;
    color: $blue_clr;
}
.question--button {
    cursor:  pointer;
    border-radius: 17.05px;
    padding: 9px 48px ;
    border: none;
    color: $blue_clr;
    font-weight: 700;
    text-transform: uppercase;
    position: relative;
}
.button--no {
    background-color: $red_clr;
    color: $red_clr;
    z-index: 1;
}
.button--no::before {
    content:  '';
    position:  absolute;
    background-color: lighten($red_clr, 77%);
    border-radius: 15px;
    top: 2px;
    left: 0;
    bottom: 2px;
    right: 0;
    z-index: -1;
}
.button--yes {
    background-color: $green_clr;
    color: $green_clr;
    z-index: 1;
}
.button--yes::before {
    content:  '';
    position:  absolute;
    background-color: lighten($green_clr, 77%);
    border-radius: 15px;
    top: 2px;
    left: 0;
    bottom: 2px;
    right: 0;
    z-index: -1;
}
.question--button--wrapper {
    display: flex;
    justify-content: space-around;
}


/*e5989b*/
/*b5838d*/
/*6d6875*/
/*ffb4a2*/
/*ffcdb2*/

</style>