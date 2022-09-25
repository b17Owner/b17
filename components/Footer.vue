<!-- Please remove this file from your project -->
<template>
  <div class="tutorial--wrapper content">
    <a class='social--link' href="https://github.com/b17Owner/" target="_blank">
        <p>github</p>
        <svg
      class="button--github"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      width="32"
      height="32"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    ><path d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247z" fill="#7D6E83" /></svg></a>

    <a class="social--link" href="https://vk.com/bitowner"  target="_blank">
        <p>b17owner</p>
        <ImgVk class="button--vk" />
    </a>
  </div>
</template>

<style>
    .tutorial--wrapper {
        background-color: #DAE5D0;
        flex: 0 0 auto;
    }

    .social--link {
        font-family: 'Syncopate', sans-serif;
        font-size: 12px;
        align-self: center;
        color: #7D6E83;
        padding-right: 18px;
        padding-left: 18px;
        display: flex;
        align-items: center;
        text-decoration: none;
    }
    .social--link p {
        padding-right: 8px;
    }
    .social--link:nth-child(1) {
        padding-left: 0px;
    }
    .button--vk svg{
        fill: #7D6E83;
    }
</style>

<script>
export default {
  name: 'NuxtTutorial'
}
</script>
