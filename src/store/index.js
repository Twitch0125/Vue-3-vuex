import { reactive, inject, readonly, toRefs } from "vue";
export const storeSymbol = Symbol("store");
export const moduleASymbol = Symbol("moduleA");
export const moduleBSymbol = Symbol("moduleB");
export const useStore = () => inject(storeSymbol);
export const useModuleA = () => inject(moduleASymbol);
export const useModuleB = () => inject(moduleBSymbol);

export const createModuleA = (rootStore) => {
  const state = reactive({
    counter: 0,
  });
  const increment = () => {
    console.log("incrementingA");
    state.counter++;
  };
  const decrement = () => {
    console.log("decrementingA");
    state.counter--;
  };
  return {
    increment,
    decrement,
    rootStore: readonly(rootStore),
    state: readonly(state),
  };
};

export const createModuleB = (rootStore) => {
  const state = reactive({
    counter: 0,
  });
  const increment = () => {
    console.log("incrementingB");
    state.counter++;
  };
  const decrement = () => {
    console.log("decrementingB");
    state.counter--;
  };
  return {
    increment,
    decrement,
    rootStore: readonly(rootStore),
    state: readonly(state),
  };
};

export const createStore = () => {
  const state = reactive({
    counter: 0,
  });
  const increment = () => {
    console.log("incrementingRoot");
    state.counter++;
  };
  const decrement = () => {
    console.log("decrementingRoot");
    state.counter--;
  };
  const store = { state: readonly(state), increment, decrement };
  return {
    state: readonly(state),
    increment,
    decrement,
    moduleA: createModuleA(store),
    moduleB: createModuleB(store),
  };
};
