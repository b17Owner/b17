<template>
    <div class='layout--wrapper'>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap" rel="stylesheet">



        <div id="container">
            <div id="header">
                <Header />
            </div>
            <div id="wrapper">
                <main id="content">
                    <Nuxt />
                </main>
            </div>
            <div id="navigation" v-show="false">
                <p>menu</p>
            </div>
            <div id="footer">
                <Footer />
            </div>
        </div>


    </div>
</template>

<script>
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&display=swap');
    html {
        box-sizing:border-box;
    }
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: #16213E;
    }
    body {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        height: 100%;
        /*background-color: #edf2f4;*/
    }


    div#header {
        position: relative;
    }

    div#navigation {
        padding: 8px;
    }

    div#navigation li {
        list-style: none;
    }

    div#wrapper {
        float: left;
        width: 100%;
    }

    main#content {
        margin: 0 0 0 32px;
    }

    div#navigation {
        float: left;
        width: 32px;
        margin-left: -100%;
    }

    div#footer {
        clear: left;
        width: 100%;
    }

    .layout--wrapper {
        display: flex;
        flex-direction: column;
        height: 100%;
        /*flex: 1 0 auto;*/
    }
    .content {
        padding: 18px;
        display: flex;
    }
    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>