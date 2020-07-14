<template>
  <div class="flex flex-col items-center">
    <div>Root Store</div>
    <div>Counter {{counter}}</div>
    <div class="flex items-center justify-center space-x-4">
      <button
        @click="increment"
        class="uppercase border-b-2 border-purple-600 text-purple-900 bg-white shadow px-3 py-2 rounded"
      >Increase</button>
      <button
        @click="decrement"
        class="uppercase border-b-2 border-purple-600 text-purple-900 bg-white shadow px-3 py-2 rounded"
      >Decrease</button>
    </div>
    <div class="flex flex-col mt-4">
      <div>Module A Counter: {{moduleACounter}}</div>
      <div>Module B Counter: {{moduleBCounter}}</div>
    </div>
  </div>
</template>

<script>
import { storeSymbol } from "@/store";
import { inject, computed } from "vue";
export default {
  setup() {
    const { increment, decrement, state, moduleA, moduleB } = inject(
      storeSymbol
    );
    const counter = computed(() => state.counter);
    const moduleACounter = computed(() => moduleA.state.counter);
    const moduleBCounter = computed(() => moduleB.state.counter);
    return { counter, increment, decrement, moduleACounter, moduleBCounter };
  }
};
</script>

<style lang="scss" scoped>
</style>