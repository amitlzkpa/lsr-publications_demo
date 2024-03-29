import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import axios from 'axios';

import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import Button from 'primevue/button';
import Card from 'primevue/card';
import Sidebar from 'primevue/sidebar';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ScrollPanel from 'primevue/scrollpanel';
Vue.component('Button', Button);
Vue.component('Card', Card);
Vue.component('Sidebar', Sidebar);
Vue.component('DataTable', DataTable);
Vue.component('Column', Column);
Vue.component('ScrollPanel', ScrollPanel);

Vue.prototype.$api = axios.create();


import { Auth0Plugin } from "./auth";

async function main() {

  let domain = 'lsr-publications.us.auth0.com';
  let clientId = 'TlthX6giO41oKlXqqkHyrYj5NOtckD5b';

  Vue.use(Auth0Plugin, {
    domain,
    clientId,
    onRedirectCallback: appState => {
      router.push(
        appState && appState.targetUrl
          ? appState.targetUrl
          : window.location.pathname
      );
    }
  });
  
  Vue.config.productionTip = false;
  
  new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
  });

}


main();