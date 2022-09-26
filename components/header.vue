<template>
    <div class="header"
        :style="{ background: colors[cIndex] }">
        <div class='logo__img' @click="start">
            <NuxtLink to="/" ><ImgB17Logo /> </NuxtLink>
        </div>

        <h2>b17.studio</h2>

        <!-- <ToolsColorModePicker class="color-mode-picker--wrapper"/> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cIndex: 0,
                colors: [
                    '#edf2f4',
                    '#E94560',
                    '#edf2f4',
                    '#E94560',
                    '#f8edeb',
                    '#E94560',
                    '#f6fff8',
                    '#E94560',
                    '#f9f4f5',
                    '#E94560',
                ],
                isRunning: false,
                time: 10,
                timer: null,
            }
        },
        methods: {
             start () {
                 this.isRunning = true
                 if (!this.timer) {
                      this.timer = setInterval( () => {
                            if (this.time > 0) {
                                 this.time--
                                 if (this.cIndex == this.colors.length - 1) {
                                    this.cIndex = 0
                                 } else {
                                    this.cIndex++
                                 }
                            } else {
                                 clearInterval(this.timer)
                                 this.reset()
                            }
                      }, 300 )
                 }
             },
             stop () {
                 this.isRunning = false
                 clearInterval(this.timer)
                 this.timer = null
             },
             reset () {
                  this.stop()
                  this.time = 10
             },
        }
    }

</script>


<style>
    .header {
        display: flex;
        padding: 18px;
        justify-content: center;
        align-items: center;
        box-shadow: inset 0 -6px 4px -4px rgba(0,0,0,.4);
    }
    .header h2 {
        cursor: pointer;
        /*mix-blend-mode: difference;*/
        font-size: 28px;
        font-weight: 600;
        letter-spacing: 1.2pt;
        margin-right: 8px;
    }
    .header h2::aftar {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        /*display: inline-block;*/
        /*display: block;*/
        width: 15px;
        height: 15px;
        background-color: #000;
    }
    .logo__img {
        cursor:  pointer;
        filter: hue-rotate(0deg);
        /*mix-blend-mode: difference;*/
        margin-top: -8px;
        padding-right: 20px;
    }
    .logo__img svg{
        height: 48px;
        width: auto;
    }

</style>