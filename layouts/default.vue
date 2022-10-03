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
                <aside id="navigation" v-show="false">
                    <p>menu</p>
                </aside>
                <main id="content">
                    <Nuxt />
                </main>
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

    div#wrapper {
        display: flex;
    }

    aside#navigation {
        flex:  1 0 10%;
        box-shadow: inset 0 -6px 4px -4px rgba(0,0,0,.4);
    }

    div#navigation li {
        list-style: none;
    }

    main#content {
        overflow-y: auto;
    }

    div#footer {
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
        box-shadow: inset 0 -6px 4px -4px rgba(0,0,0,.4);
    }
    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>