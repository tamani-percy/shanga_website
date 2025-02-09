<!--<template>-->
<!--  <div class="bg-secondaryColor p-5 text-textColor w-full estimates-container lg:inline flex justify-center flex-col items-center">-->
<!--    <h1 class="text-4xl font-bold text-center">Returns Calculator</h1>-->
<!--    <p class="mt-3 text-center">Check out our compound interest calculator to see just how much the power of time and-->
<!--      compound interest can help your money grow.*</p>-->
<!--    <div class="flex justify-center gap-x-10 flex-col lg:flex-row">-->
<!--      <div class="flex flex-col mt-24">-->
<!--        <div>-->
<!--          <div>-->
<!--            <label for="initialDeposit" class="block mb-1">Initial Deposit: &nbsp;-->
<!--              <font-awesome-icon :icon="['fas', 'circle-info']"-->
<!--                                 class="text-2xl text-textColor bg-secondaryColor hover:cursor-pointer"-->
<!--                                 v-tooltip="{ value: 'The amount first deposited after the account or basket is created.', autoHide:false}"/>-->
<!--            </label>-->
<!--            <input type="number" v-model.number="initialDeposit" placeholder="K"-->
<!--                   class="bg-textInputColor focus:outline-0 text-textAltColor rounded-lg w-60 block p-2.5"/>-->
<!--          </div>-->
<!--          <div>-->
<!--            <label for="annualReturn" class="block mt-4 mb-1">Average Annual Return (%):&nbsp;-->
<!--              <font-awesome-icon :icon="['fas', 'circle-info']"-->
<!--                                 class="text-2xl text-textColor bg-secondaryColor hover:cursor-pointer"-->
<!--                                 v-tooltip="{ value: 'Expected annual return from investment.', autoHide:false}"/>-->
<!--            </label>-->
<!--            <input type="number" v-model.number="annualReturn" placeholder="K"-->
<!--                   class="bg-textInputColor focus:outline-0 text-textAltColor rounded-lg w-60 block p-2.5"/>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div>-->
<!--          <div>-->
<!--            <label for="contributions"-->
<!--                   class="block mt-4 mb-1 ">Contributions:&nbsp;-->
<!--              <font-awesome-icon :icon="['fas', 'circle-info']"-->
<!--                                 class="text-2xl text-textColor bg-secondaryColor hover:cursor-pointer"-->
<!--                                 v-tooltip="{ value: 'Number of contributions made after initial deposit.', autoHide:false}"/>-->
<!--            </label>-->
<!--            <input type="number" v-model.number="contributions" placeholder="K"-->
<!--                   class="bg-textInputColor focus:outline-0 text-textAltColor rounded-lg w-60 block p-2.5"/>-->
<!--          </div>-->
<!--          <div class="mt-2 justify-start gap-x-5 flex">-->
<!--            <div class="flex flex-col justify-between">-->
<!--              <label><input type="radio" v-model="contributionPeriod" value="daily"-->
<!--                            class="w-4 h-4 text-green-600 bg-gray-100 border-gray-900 focus:ring-green-500"/>-->
<!--                Daily-->
<!--              </label>-->
<!--              <label><input type="radio" v-model="contributionPeriod" value="weekly"-->
<!--                            class="w-4 h-4 text-green-600 bg-gray-100 border-gray-900 focus:ring-green-500"/>-->
<!--                Weekly-->
<!--              </label>-->
<!--            </div>-->
<!--            <div class="flex flex-col justify-between">-->
<!--              <label><input type="radio" v-model="contributionPeriod" value="monthly"-->
<!--                            class="w-4 h-4 text-green-600 bg-gray-100 border-gray-900 focus:ring-green-500"/>-->
<!--                Monthly-->
<!--              </label>-->
<!--              <label><input type="radio" v-model="contributionPeriod" value="yearly"-->
<!--                            class="w-4 h-4 text-green-600 bg-gray-100 border-gray-900 focus:ring-green-500"/>-->
<!--                Yearly-->
<!--              </label>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="mt-4 flex flex-col items-start">-->
<!--          <label for="duration" class="block mt-4 mb-1">Duration-->
<!--            (Years)&nbsp;-->
<!--            <font-awesome-icon :icon="['fas', 'circle-info']"-->
<!--                               class="text-2xl text-textColor bg-secondaryColor hover:cursor-pointer"-->
<!--                               v-tooltip="{ value: 'The frequency with which the contributions are made.', autoHide:false}"/>-->
<!--          </label>-->

<!--          <span class="font-extrabold text-right text-md text-primaryColorFocus inline"> <font-awesome-icon-->
<!--              class="text-xl fa-icon inline" :icon="['fas', 'clock']" spin/> &nbsp;{{ duration }}</span>-->
<!--          <input type="range" v-model.number="duration" min="1" max="100"-->
<!--                 class="w-2/3 text-center accent-primaryColor h-2 mt-3 bg-textColor rounded-lg cursor-pointer"/>-->
<!--        </div>-->
<!--        <div class="w-full flex justify-start mt-5">-->
<!--          <button @click="calculateInvestment"-->
<!--                  class="border-primaryColor border hover:shadow-lg hover:bg-primaryColor hover:text-white rounded-full text-left focus:outline-none focus:ring-primaryColorFocus font-medium text-2xs px-4 py-2">-->
<!--            Submit-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="w-1/2 mt-5 min-h-dvh rounded-lg">-->
<!--        <h1 class="text-md font-bold text-primaryColorHover text-center my-3">Potential Future Balance: &nbsp; <br>-->
<!--          <span-->
<!--              class="text-3xl font-bold text-primaryColor border-dashed border-b">K{{ futureBalance }}</span></h1>-->
<!--        <Bar slot="Chart couldn't be loaded." ref="barChart" :key="chartKey" :data="data" :options="options"-->
<!--             class="w-full h-full max-w-5xl bar_chart bg-textColor rounded-lg p-5"/>-->

<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script lang="ts">-->
<!--import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from 'chart.js'-->
<!--import {Bar} from 'vue-chartjs'-->
<!--import Card from 'primevue/card';-->
<!--import {nextTick} from "vue";-->
<!--import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";-->

<!--ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement)-->

<!--export default {-->
<!--  name: 'App',-->
<!--  components: {-->
<!--    FontAwesomeIcon,-->
<!--    Card,-->
<!--    Bar-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      initialDeposit: 0,-->
<!--      contributions: 0,-->
<!--      contributionPeriod: 'monthly',-->
<!--      duration: 1,-->
<!--      annualReturn: 0,-->
<!--      futureBalance: 0,-->
<!--      chartKey: 0, // Add a key to force re-render-->
<!--      data: {-->
<!--        labels: [],-->
<!--        datasets: [-->
<!--          {-->
<!--            label: "Investment",-->
<!--            data: [],-->
<!--            backgroundColor: '#b60101',-->
<!--            borderColor: '#b60101',-->
<!--            borderWidth: 1,-->
<!--            fill: false,-->
<!--          },-->
<!--          {-->
<!--            label: "Return",-->
<!--            data: [],-->
<!--            backgroundColor: '#50B748',-->
<!--            borderColor: '#50B748',-->
<!--            borderWidth: 1,-->
<!--            fill: false,-->
<!--          }-->
<!--        ],-->
<!--      },-->
<!--      options: {-->
<!--        responsive: true,-->

<!--        scales: {-->
<!--          x: {-->
<!--            display: true,-->
<!--            stacked: true,-->
<!--            title: {-->
<!--              display: true,-->
<!--              text: 'Years'-->
<!--            }-->
<!--          },-->
<!--          y: {-->
<!--            display: true,-->
<!--            stacked: true,-->
<!--            title: {-->
<!--              display: true,-->
<!--              text: 'Balance (K)'-->
<!--            }-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  computed: {-->
<!--    durationLabel() {-->
<!--      return 'Years';-->
<!--    },-->
<!--    durationMin() {-->
<!--      return 1;-->
<!--    },-->
<!--    durationMax() {-->
<!--      return 75;-->
<!--    }-->
<!--  },-->
<!--  mounted() {-->
<!--    // Apply border radius to the canvas-->
<!--    nextTick(() => {-->
<!--      const canvas = this.$refs.barChart.$el.querySelector('canvas');-->
<!--      if (canvas) {-->
<!--        canvas.style.borderRadius = '15px';  // Adjust the radius as needed-->
<!--      }-->
<!--    });-->
<!--  },-->
<!--  methods: {-->
<!--    calculateInvestment() {-->
<!--      const periodsPerYear = {daily: 365, weekly: 52, monthly: 12, yearly: 1}-->
<!--      const contributionPeriodValue = periodsPerYear[this.contributionPeriod]-->
<!--      const totalPeriods = this.duration * contributionPeriodValue-->
<!--      const ratePerPeriod = this.annualReturn / 100 / contributionPeriodValue-->

<!--      let balance = this.initialDeposit-->
<!--      let labels = []-->
<!--      let investmentData = []-->
<!--      let returnData = []-->
<!--      let currentYear = new Date().getFullYear()-->

<!--      // Clear the labels array before adding new ones-->
<!--      this.data.labels = [];-->

<!--      for (let i = 1; i <= this.duration; i++) {-->
<!--        let yearlyBalance = balance;-->
<!--        let yearlyInvestment = this.initialDeposit;-->
<!--        let yearlyReturn = 0;-->

<!--        for (let j = 1; j <= contributionPeriodValue; j++) {-->
<!--          yearlyReturn += yearlyBalance * ratePerPeriod;-->
<!--          yearlyBalance += this.contributions + yearlyBalance * ratePerPeriod;-->
<!--        }-->

<!--        labels.push(currentYear + i - 1);-->
<!--        investmentData.push(yearlyInvestment);-->
<!--        returnData.push(yearlyReturn.toFixed(2));-->

<!--        balance = yearlyBalance;-->
<!--      }-->

<!--      this.futureBalance = balance.toFixed(2)-->
<!--      this.data.labels = labels-->
<!--      this.data.datasets[0].data = investmentData-->
<!--      this.data.datasets[1].data = returnData-->

<!--      this.chartKey += 1-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.estimates-container {-->
<!--height: 800px;-->
<!--  gap: 20px;-->
<!--}-->
<!--</style>-->

<template></template>