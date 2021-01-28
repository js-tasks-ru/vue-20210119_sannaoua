import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

// const app = ...
// Рекомендуется использовать МЕТОД в качестве обработчика события

const app = new Vue({
  template: `#app`,

  data() {
    return{
      count: 0,
    };
  },
  methods: {
    increaseCount() {
      this.count++
    }
  }
})

app.$mount('#app');
