import { createApp } from "vue";
import App from "./App.vue";
import {
  storeSymbol,
  createStore,
  createModuleA,
  createModuleB,
  moduleASymbol,
  moduleBSymbol,
} from "./store";
import "./assets/tailwind.css";

const app = createApp(App);
const store = createStore();

// Vue.config.productionTip = false;
app.provide(storeSymbol, store);
/* 
I had an idea here for maybe instead of doing modules, essentially just do separate stores? But then they would be completely separated and I' not sure of how much use seperated stores would be...
you can use them like this:

setup(){
    const {state, increment, decrement, rootStore} = useModuleA(moduleASymbol)
    return{...^those things or whatever}
}
 */
app.provide(moduleASymbol, createModuleA(store));
app.provide(moduleBSymbol, createModuleB(store));
app.mount("#app");
