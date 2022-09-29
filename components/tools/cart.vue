<template>
    <div class="cart--wrapper">

        <div v-if="cart" class="cart">
            <div class="cart--background">

            </div>
            <div class="cart--title">
                <div v-if="cart.img" class="cart--banner">
                  <component
                    :is="`${cart.img}`"
                    class="cart--img"
                  />
                </div>
                <p class="cart--label">
                    <span>{{ cart.title[0] }}</span>{{ cart.title.substring(1) }}
                </p>
            </div>
            <h3 v-if="cart.h3" class="cart--h3">{{ cart.h3 }}</h3>
            <h4 v-if="cart.h4" class="cart--h4">{{ cart.h4 }}</h4>
            <ul v-if="cart.ul" class="cart--ul">
                <li v-for="item in cart.ul">
                    {{ item.li }}
                    <p v-if="item.p">{{ item.p }}</p>
                </li>
            </ul>

            <p v-if="cart.descr" class="cart--descr">
                {{ cart.descr }}
            </p>
            <p class="cart--hashtag">
                {{ cart.hashtag }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['data'],
        data() {
            return {
                cart: this.data
            }
        }
    }
</script>

<style lang="scss">
.cart {
    position: relative;
    border-radius: 17.5px;
    padding: 28px;
    background-color: transparent;
    color: #457B9D;
    margin: 8px 8px;
    max-width: 500px;
    min-height: 300px;
    transform: translate3d(0,0,0);
    /*border: 2px solid $green_clr;*/
    z-index: 1;
/*    box-shadow: -2px -2px 2px lighten($dark_clr, 60%),
                4px 4px 2px lighten($dark_clr, 68%);
*/    overflow: hidden;
}
.cart--background {
    border: none;
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background-color: lighten($green_clr, 70%);
    border-radius: 17.5px;
    z-index: -10;
    filter: blur(5px);
    box-shadow: -2px -2px 8px lighten($dark_clr, 40%),
                5px 5px 8px lighten($dark_clr, 48%);

/*    box-shadow: -4px -4px 8px lighten($dark_clr, 57%),
                3px 3px 8px lighten($dark_clr, 68%),
                inset 0px 0px 3px lighten($dark_clr, 58%),
                inset 2px 2px 4px lighten($dark_clr, 57%);*/
    transition: box-shadow 0.4s;
}
.cart:hover .cart--background{
    box-shadow: -4px -4px 8px lighten($dark_clr, 57%),
                3px 3px 8px lighten($dark_clr, 58%),
                inset 0px 0px 3px lighten($green_clr, 28%),
                inset 2px 2px 4px lighten($green_clr, 27%);
    background-color: lighten($green_clr, 65%);
    transition: box-shadow 0.4s;
}
.cart:hover {
    box-shadow: -2px -2px 8px lighten($green_clr, 50%),
                5px 5px 8px lighten($green_clr, 58%);
    transition: box-shadow 0.4s;
}
.cart--h3 {
    padding-bottom: 28px;
    text-transform: uppercase;
    color:  $dark_clr;
    font-weight: 400;

}
.cart--h4 {
    padding-bottom: 28px;
}
.cart--label {
    letter-spacing: 6pt;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    padding-top: 12px;
    padding-bottom: 8px;
    color: $red_clr;
    z-index: 1;
}
.cart--label::before {
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
.cart--label span {
    border: 1px solid rgba(0,0,0,.2);
    padding: 2px 0 0 8px;
    margin-right: 2px;
}
.cart--ul {
    padding-left: 18px;
    padding-bottom: 18px;
}
.cart--ul li {
    font-weight: 500;
    letter-spacing: 0.8pt;
    line-height: 24px;
    padding-left: 18px;
    display: list-item;
}
.cart--ul li p {
    padding-top: 8px;
    padding-bottom: 28px;
    font-size: 12px;
    font-weight: 500;
    color: lighten($dark_clr, 10%);
}
.cart--ul li::marker {
    content: '—';
    font-size: 1.2em;
    font-weight: 300;
}
.cart--descr {
    line-height: 2.2em;
    font-weight: 400;
    text-align: justify;
    padding-bottom: 18px;
    border-bottom: 1px solid $bz_clr;
    margin-bottom: 8px;
}
.cart--title {
    position: relative;
    padding-bottom: 18px;
}
.cart--banner {
    overflow:  hidden;
    right: 18px;
    margin-top: 0px;
    position:  absolute;
    z-index: -10;
}
.cart--img {
    height: 100px;
    width: 100px;
    opacity: 0.1;
    transition: opacity 0.4s;
}
.cart:hover .cart--img {
    opacity: 1;
    transition: all 0.4s;
}
.cart--hashtag {
    text-align: right;
    font-size: 12px;
    color:  $bz_clr;
}

</style>