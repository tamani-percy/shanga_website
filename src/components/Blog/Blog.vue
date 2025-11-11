<script setup lang="ts">

//@ts-ignore
import TextGenerateEffect from "@/components/ui/text-generate-effect/TextGenerateEffect.vue";
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
// @ts-ignore
import ArticleCard from "@/components/Blog/components/ArticleCard.vue";

</script>

<template>
  <div class="pt-32 mb-10 ">
    <h1 class="text-4xl font-bold text-center pb-5">Investment Insights</h1>
    <TextGenerateEffect
        words="Stay informed with the latest news, tips, and updates from the world of investing."
        class="text-xl text-center"/>
    <div class="px-0 md:px-10 mt-10">
      <Tabs value="0">
        <TabList>
          <Tab value="0">All</Tab>
          <Tab value="1">Education</Tab>
          <Tab value="2">Market Updates</Tab>
          <Tab value="3">Tips & Advice</Tab>
          <Tab value="4">Success Stories</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="flex flex-row gap-x-2">
              <article-card title="How Compound Interest Works: The 8th Wonder" tag="Education" date="07/01/2025"
                            articleImg="/images/blog/education.jpg"
                            description="Understanding the power of compound interest and how it can transform your investment returns."/>
              <article-card title="The Lusaka Stock Exchange: Opportunities in 2024" tag="Market Updates"
                            date="21/02/2024"
                            articleImg="/images/blog/market.jpg"
                            description="Discover the growth potential and emerging opportunities in Zambia's stock market this year."/>
              <article-card title="5 Common Investment Mistakes to Avoid" tag="Tips & Advice" date="12/03/2025"
                            articleImg="/images/blog/advice.jpg"
                            description="Learn from the most common pitfalls that new investors face and how to avoid them."/>
              <article-card title="Building Wealth: Start Small, Think Big" tag="Success" date="14/11/2025"
                            articleImg="/images/blog/success.jpg"
                            description="You don't need to be wealthy to start investing. Learn how small, consistent investments can grow significantly."/>
            </div>
          </TabPanel>
          <TabPanel value="1">
            <article-card title="How Compound Interest Works: The 8th Wonder" tag="Education" date="07/01/2025"
                          articleImg="/images/blog/education.jpg"
                          description="Understanding the power of compound interest and how it can transform your investment returns."/>
          </TabPanel>
          <TabPanel value="2">
            <article-card title="The Lusaka Stock Exchange: Opportunities in 2024" tag="Market Updates"
                          date="21/02/2024"
                          articleImg="/images/blog/market.jpg"
                          description="Discover the growth potential and emerging opportunities in Zambia's stock market this year."/>
          </TabPanel>
          <TabPanel value="3">
            <article-card title="5 Common Investment Mistakes to Avoid" tag="Tips & Advice" date="12/03/2025"
                          articleImg="/images/blog/advice.jpg"
                          description="Learn from the most common pitfalls that new investors face and how to avoid them."/>
          </TabPanel>
          <TabPanel value="4">
            <article-card title="Building Wealth: Start Small, Think Big" tag="Success" date="14/11/2025"
                          articleImg="/images/blog/success.jpg"
                          description="You don't need to be wealthy to start investing. Learn how small, consistent investments can grow significantly."/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>

  </div>

</template>

<style scoped>

</style>