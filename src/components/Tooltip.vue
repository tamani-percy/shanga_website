<template>
  <div class="card flex flex-wrap justify-center">
    <Button
        v-tooltip="{
                value: tooltipContent,
                pt: {
                    arrow: {
                        style: {
                            borderBottomColor: 'var(--p-primary-color)'
                        }
                    },
                    text: '!bg-primary !text-primary-contrast !font-medium'
                }
            }"
        :label="label"
    />
  </div>
</template>

<script>
import Tooltip from 'primevue/tooltip';

export default {
  name: 'TooltipButton',
  components: {
    Tooltip
  },
  props: {
    tooltipContent: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: 'Button'
    }
  }
}
</script>
