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

export default {
  name: 'App',
  components: {
	formBlock
  }
}
</script>

<style>
p, h1 {
  margin: 0;
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
  /*font-family: "PF Din Text Pro";*/
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
