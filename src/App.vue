<template>
  <div id="app">
    <div class="w-full flex">
      <div
        class="h-64 flex items-center justify-center mx-auto mt-8 shadow-lg rounded-lg w-5/12 bg-purple-800"
      >
        <RootComponent />
      </div>
    </div>
    <div class="w-full flex">
      <div
        class="h-64 flex items-center justify-center mx-auto mt-8 shadow-lg rounded-lg w-5/12 bg-pink-600"
      >
        <ComponentA />
      </div>
      <div
        class="h-64 flex items-center justify-center mx-auto mt-8 shadow-lg rounded-lg w-5/12 bg-blue-900"
      >
        <ComponentB />
      </div>
    </div>
  </div>
</template>

<script>
import ComponentA from "./components/component-a";
import ComponentB from "./components/component-b";
import RootComponent from "./components/root-component";
export default {
  name: "App",
  components: {
    RootComponent,
    ComponentA,
    ComponentB
  }
};
</script>

<style lang="scss">
#app {
  @apply text-white;
  font-family: "Inter";
}
</style>
