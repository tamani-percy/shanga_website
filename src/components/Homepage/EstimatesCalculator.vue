<script setup lang="ts">
import {onMounted, onUnmounted, ref, watch} from 'vue';
import {Bar} from 'vue-chartjs';
import {Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js';
import InputNumber from 'primevue/inputnumber';
import RadioButton from 'primevue/radiobutton';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import ProgressSpinner from 'primevue/progressspinner';
import RadioButtonGroup from 'primevue/radiobuttongroup';
// @ts-ignore

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const initialDeposit = ref(0);
const contributions = ref(0);
const contributionPeriod = ref('monthly');
const duration = ref(1);
const annualReturn = ref(0);
const futureBalance = ref(0);
const chartKey = ref(0);
const isLoading = ref(false);
const showChart = ref(false);

const chartData = ref({
  labels: [] as string[],
  datasets: [
    {
      label: 'Investment',
      data: [] as number[],
      backgroundColor: '#343a40',
      borderColor: '#343a40',
      borderWidth: 1,
      fill: false,
    },
    {
      label: 'Return',
      data: [] as number[],
      backgroundColor: '#05b3a0',
      borderColor: '#05b3a0',
      borderWidth: 1,
      fill: false,
    },
  ],
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 1,
  scales: {
    x: {
      display: true,
      stacked: true,
      title: {
        display: true,
        text: 'Years',
      },
    },
    y: {
      display: true,
      stacked: true,
      title: {
        display: true,
        text: 'Balance (K)',
      },
    },
  },
});

watch(annualReturn, (newValue) => {
  if (newValue > 20) {
    annualReturn.value = 20;
  }
});

// @ts-ignore
const calculateInvestment = async () => {
  if (annualReturn.value > 20) {
    annualReturn.value = 20;
  }

  isLoading.value = true;
  showChart.value = false;

  // Simulate a delay to allow the UI to update
  await new Promise(resolve => setTimeout(resolve, 100));

  const periodsPerYear: any = {daily: 365, weekly: 52, monthly: 12, yearly: 1};
  const contributionPeriodValue = periodsPerYear[contributionPeriod.value];
  const ratePerPeriod = annualReturn.value / 100 / contributionPeriodValue;

  let balance = initialDeposit.value;
  const labels = [];
  const investmentData = [];
  const returnData = [];
  let currentYear = new Date().getFullYear();

  for (let i = 1; i <= duration.value; i++) {
    let yearlyBalance = balance;
    let yearlyInvestment = initialDeposit.value;
    let yearlyReturn = 0;

    for (let j = 1; j <= contributionPeriodValue; j++) {
      yearlyReturn += yearlyBalance * ratePerPeriod;
      yearlyBalance += contributions.value + yearlyBalance * ratePerPeriod;
    }

    labels.push((currentYear + i - 1).toString());
    investmentData.push(yearlyInvestment);
    returnData.push(parseFloat(yearlyReturn.toFixed(2)));

    balance = yearlyBalance;
  }

  futureBalance.value = parseFloat(balance.toFixed(2));
  chartData.value.labels = labels;
  chartData.value.datasets[0].data = investmentData;
  chartData.value.datasets[1].data = returnData;

  chartKey.value += 1;
  isLoading.value = false;
  showChart.value = true;

  document.getElementById('chart-container')?.scrollIntoView({behavior: 'smooth'});
}
const isMobile = ref(false);

const checkIfMobile = () => {
  isMobile.value = window.innerWidth <= 768; // Adjust the breakpoint as needed
};

onMounted(() => {
  checkIfMobile();
  window.addEventListener('resize', checkIfMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkIfMobile);
});
</script>

<template>
  <Card :style="{
    minHeight: showChart ? (isMobile ? 'fit-content' : 'fit-content') : (isMobile ? '950px' : '200px'),
    height: showChart ? 'auto' : (isMobile ? '600px' : '500px'),
    backgroundColor: '#03807A',
    borderRadius: 0,
    width: '100%',
    marginTop: '10px',
    transition: 'height 0.5s ease',
    paddingTop: '10px'
  }">

    <template #content>
      <h1 class="text-4xl font-bold text-center text-textColor">Returns Calculator</h1>
      <p class="mt-3 text-center text-textColor">
        Check out our compound interest calculator to see just how much the power of time and compound interest can help
        your money grow.*
      </p>
      <Divider/>
      <div class="card flex-wrap flex mt-10 gap-x-4 lg:gap-y-0 gap-y-5 items-center justify-center">
        <div>
          <label for="initialDeposit" class="block mb-1 text-textColor">Initial Deposit: &nbsp;</label>
          <InputNumber id="initialDeposit" v-model="initialDeposit" name="initialDeposit" prefix="ZMW "
                       placeholder="ZMW"/>
        </div>
        <div>
          <label for="annualReturn" class="block mb-1 text-textColor">Average Annual Return:&nbsp;</label>
          <InputNumber id="annualReturn" v-model="annualReturn" name="annualReturn" :min="0" :max="20" suffix="%"
                       placeholder="%"/>
        </div>
        <div>
          <label for="contributions" class="block mb-1 text-textColor">Contributions:&nbsp;</label>
          <InputNumber id="contributions" v-model="contributions" name="contributions" placeholder="ZMW" prefix="ZMW "
          />
        </div>
        <div>
          <label for="initialDeposit" class="block text-textColor">Deposit frequency: &nbsp;</label>
          <RadioButtonGroup name="contributionPeriod" class="flex flex-col">
            <div class="flex flex-col justify-between mb-1">
              <label class="text-textColor">
                <RadioButton v-model="contributionPeriod" inputId="daily" value="daily"/>
                Daily
              </label>
            </div>
            <div class="flex flex-col justify-between mb-1">
              <label class="text-textColor">
                <RadioButton v-model="contributionPeriod" inputId="weekly" value="weekly"/>
                Weekly
              </label>
            </div>
            <div class="flex flex-col justify-between mb-1">
              <label class="text-textColor">
                <RadioButton v-model="contributionPeriod" inputId="monthly" value="monthly"/>
                Monthly
              </label>
            </div>
            <div class="flex flex-col justify-between">
              <label class="text-textColor">
                <RadioButton v-model="contributionPeriod" inputId="yearly" value="yearly"/>
                Yearly
              </label>
            </div>
          </RadioButtonGroup>
        </div>
        <div>
          <label for="duration" class="block mb-1 text-textColor">Duration (Years)&nbsp;</label>
          <InputNumber id="duration" v-model="duration" :min="1" :max="100" name="duration" placeholder="0"
                       suffix=" Years"/>
        </div>
        <div class="w-full flex justify-center mt-5">
          <Button label="Calculate😊" @click="calculateInvestment" rounded raised style="width: 10rem"
                  severity="secondary"/>
        </div>
      </div>
      <div class="flex justify-center flex-col items-center">
        <h1 class="text-md font-bold text-textColor text-2xl text-center my-7">
          Potential Future Balance: &nbsp; <br>
          <span class="text-4xl font-bold border-dashed border-b" style="color: #171C1F">
            ZMW {{ futureBalance.toLocaleString() }}
          </span>
        </h1>
        <div class="loader-container" v-if="isLoading">
          <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="3" fill="#343a40" animationDuration=".5s"/>
        </div>
        <div id="chart-container" class="max-w-6xl h-dvh w-fit lg:w-full flex justify-center">
          <Bar v-if="showChart" :key="chartKey" :data="chartData" :options="chartOptions"
               class="max-w-5xl bg-textColor rounded-lg p-5"/>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="text-center text-sm text-textColor mt-5 p-4 flex justify-center">
        <p class=" max-w-4xl">
          The chart shows an estimate of how much an investment could grow over time based on the initial deposit,
          contribution frequency, and interest rate specified. Changes in those variables can affect the
          outcome. Results do not predict the
          investment performance of any portfolio and do not take into consideration economic or market factors which
          can impact performance.
        </p>
      </div>
    </template>
  </Card>
</template>

<style>
.card {
  transition: height 0.5s ease;
  width: 100%;
}


.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; /* Adjust as needed */
}

/* Adjust chart container height for mobile */
@media (max-width: 768px) {
  #chart-container {
    height: 400px; /* Adjust as needed */
  }
}
</style>