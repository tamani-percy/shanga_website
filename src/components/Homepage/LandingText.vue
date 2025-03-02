<script setup lang="ts">
import {MyPreset} from "@/PrimevuePresets.ts";
import {ref, onMounted} from 'vue';

const words = [
  "invest your funds.",
  "grow your investments.",
  "create sustainable investments."
];
const currentWordIndex = ref(0);
const displayedText = ref("");
const isDeleting = ref(false);
const typingSpeed = 100;
const deletingSpeed = 75;
const type = () => {
  const currentWord = words[currentWordIndex.value];

  if (!isDeleting.value) {
    displayedText.value = currentWord.substring(0, displayedText.value.length + 1);
  } else {
    displayedText.value = currentWord.substring(0, displayedText.value.length - 1);
  }

  if (!isDeleting.value && displayedText.value === currentWord) {
    setTimeout(() => {
      isDeleting.value = true;
      type();
    }, 1000); // Pause for 1 second before deleting
  } else if (isDeleting.value && displayedText.value === "") {
    isDeleting.value = false;
    currentWordIndex.value = (currentWordIndex.value + 1) % words.length;
    setTimeout(() => type(), 500); // Pause for 0.5 second before typing the next word
  } else {
    const speed = isDeleting.value ? deletingSpeed : typingSpeed;
    setTimeout(() => type(), speed);
  }
};

onMounted(() => {
  type();
});
</script>

<template>
  <div class="min-h-[800px] w-full flex justify-center gap-4 relative"
       :style="{ background: '#343A40' }">
    <div class="justify-center flex flex-col">
      <div class="text-center lg:w-[940px] p-5 lg:p-0">
        <span class="text-3xl lg:text-4xl inline-block text-textColor align-middle font-bold">You have an opportunity to <span
            class="text-3xl lg:text-4xl font-bold underline" :style="{color: '#07FFDC'}">{{ displayedText }}</span> </span>
        <span class="inline-block align-middle text-3xl lg:text-4xl font-bold text-textColor animate-blink">|</span>
        <p class="mt-10 text-textColor text-2xl">We are committed to creating diverse investment options by acting as an
          <br> intermediary investor taking away all the complexities of stock-picking from our clients.</p>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* No custom CSS needed! */
</style>