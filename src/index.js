import { parse } from 'query-string';
import Vue from 'vue';
import App from './App.vue';
import { Module21 } from './module2';

new Vue({
  el: '#app',
  render: (h) => h(App),
});

const url =
  'https://www.google.com/search?q=quickjs&oq=quickjs&aqs=chrome..69i57j0l7.7253j0j1&sourceid=chrome&ie=UTF-8';

const urlObj = parse(url);
console.info('...', urlObj);
