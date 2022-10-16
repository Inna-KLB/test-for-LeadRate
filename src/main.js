import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import './scss/style.scss';

const app = createApp(App);

app.use(store);
app.mount('#app');

window.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('keyup', (e) => {
    if (e.key === 'Delete') {
      store.commit('deleteCompletedTasks');
    }
  });
});
