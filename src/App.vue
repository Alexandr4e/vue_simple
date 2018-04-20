<template>
  <div id="app">
    <div class="header">
      <h1 class="header__title">Облачный Битрикс24</h1>
      <p class="header__text">При покупке коробки,
        или облака на 12 месяцев, интеграция - бесплатно!
      </p>
      <p class="header__price">990 руб./месяц</p>
    </div>
    <formBlock></formBlock>
  </div>
</template>

<script>
import formBlock from './components/form/form.vue'
import fonts from './components/fonts/fonts.vue'

export default {
  name: 'App',
  components: {
	formBlock,
    fonts
  }
}
</script>

<style>
/* RESET CSS*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {margin: 0;padding: 0;	border: 0; font-size: 16px;	font: inherit;}

input, textarea {outline: none;}
textarea {resize: none;}

/* HTML5 display-role reset for older browsers*/
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {display: block;}
body {line-height: 1;}
ol, ul {list-style: none;}
blockquote, q {quotes: none;}
blockquote:before, blockquote:after,
q:before, q:after {content: ''; content: none;}
table {border-collapse: collapse; border-spacing: 0;}

* {
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #002130;
  margin: 95px auto 86px;
  max-width: 740px;
  padding: 0 20px;
}
.header {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 31px;
}
.header__title {
  color: #002e3f;
  font-family: 'pf_dintext_promedium', Arial, Tahoma, Verdana, sans-serif;
  font-size: 34px;
  font-weight: 500;
  margin-bottom: 11px;
}
.header__text {
  color: #002130;
  /*font-family: "PF Din Text Pro";*/
  font-size: 21px;
  font-weight: 300;
  margin-bottom: 8px;
}
.header__price{
  color: #002130;
  /*font-family: "PF Din Text Pro";*/
  font-size: 34px;
  font-weight: 300;
  margin-bottom: 29px;
}

@media screen and (max-width: 620px) {
  #app {
    margin: 74px auto 71px;
    padding: 0 14px;
  }
  .header__title {
    font-size: 24px;
    margin-bottom: 7px;
  }
  .header__text {
    font-size: 16px;
    margin-bottom: 12px;
  }
  .header__price{
    font-size: 24px;
    margin-bottom: 31px;
  }
}
</style>
