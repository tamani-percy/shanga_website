<template>
  <div class="w-full relative">
    <PatternBackground
        :animate="true"
        :direction="PATTERN_BACKGROUND_DIRECTION.TopRight"
        :variant="PATTERN_BACKGROUND_VARIANT.Dot"
        class="flex h-[36rem] w-full items-center justify-center"
        :speed="PATTERN_BACKGROUND_SPEED.Slow"
    >
      <div class="flex flex-col justify-center items-center">
        <SparklesText
            text="SHANGA"
            :colors="{ first: '#9E7AFF', second: '#FE8BBB' }"
            :sparkles-count="10"
            class="my-8"
        />
        <div class="mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          <FlipWords
              :words="['Demystifying Investments...', 'Investing, without the jargon...', 'Your financial journey, simplified...', 'Versatile']"
              :duration="3000"
              class="flex justify-center text-wrap text-2xl !text-primary"
          />
        </div>
        <h1 class="mt-10 font-bold text-4xl">Grow your wealth with confidence</h1>
        <h1 class="mt-10 text-2xl">Investing across Africa has never been easier. Let us show you how.</h1>
        <Button class="mt-10"
            size="large"
            @click="router.push({ name: 'coming_soon' })"
        >
          Get Started
          <font-awesome-icon :icon="['fas','arrow-right']"/>
        </Button>
      </div>
    </PatternBackground>

  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import PatternBackground from "@/components/ui/pattern-background/PatternBackground.vue";
// @ts-ignore
import {
  PATTERN_BACKGROUND_DIRECTION,
  PATTERN_BACKGROUND_SPEED,
  PATTERN_BACKGROUND_VARIANT
} from "@/components/ui/pattern-background";
import FlipWords from "@/components/ui/flip-words/FlipWords.vue";
import SparklesText from "@/components/ui/sparkles-text/SparklesText.vue";
import Button from "primevue/button"
import router from "@/router";
</script>

<style scoped>
</style>