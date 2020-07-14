<template>
  <div class="flex flex-col items-center">
    <div>Module A</div>
    <div>Counter {{counter}}</div>
    <div class="flex items-center justify-center space-x-4">
      <button
        @click="increment"
        class="uppercase border-b-2 border-pink-900 text-pink-700 bg-white shadow px-3 py-2 rounded"
      >Increase</button>
      <button
        @click="decrement"
        class="uppercase border-b-2 border-pink-900 text-pink-700 bg-white shadow px-3 py-2 rounded"
      >Decrease</button>
    </div>
    <div class="flex flex-col mt-4">
      <div>Root State Counter: {{rootCounter}}</div>
    </div>
  </div>
</template>

<script>
import { storeSymbol } from "@/store";
import { inject, computed } from "vue";
export default {
  setup() {
    const {
      moduleA: { increment, decrement, state, rootStore }
    } = inject(storeSymbol);
    const counter = computed(() => state.counter);
    const rootCounter = computed(() => rootStore.state.counter);
    return { counter, increment, decrement, rootCounter };
  }
};
</script>

<style lang="scss" scoped>
</style>