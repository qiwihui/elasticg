<template>
  <v-card>
    <v-card-title>
      <h1 class="text-h5">Document</h1>
      <reload-button :action="load"/>
      <back-button :route="{name: 'Search'}"/>
    </v-card-title>
    <v-divider/>

    <v-card-text>
      <loader :request-state="requestState">
        <print-pretty :caption="caption" :document="data" :initial-height="800"/>
      </loader>
    </v-card-text>
  </v-card>
</template>

<script>
  import BackButton from '@/components/shared/BackButton'
  import PrintPretty from '@/components/shared/PrintPretty'
  import ReloadButton from '@/components/shared/ReloadButton'
  import Loader from '@/components/shared/Loader'
  import { computed, onMounted } from '@vue/composition-api'
  import { setupElasticsearchRequest } from '@/mixins/RequestComposition'

  export default {
    name: 'document',
    components: {
      BackButton,
      Loader,
      PrintPretty,
      ReloadButton
    },
    setup (props, context) {
      const methodParams = computed(() => {
        const routeParams = context.root.$route.params
        return {
          index: routeParams.index, type: routeParams.type, id: routeParams.id
        }
      })

      const { load, requestState, data } = setupElasticsearchRequest('get', methodParams.value)
      onMounted(load)

      const caption = computed(() => {
        const routeParams = context.root.$route.params
        const docType = routeParams.type || '_doc'
        return `${routeParams.index}/${docType}/${routeParams.id}`
      })

      return {
        load,
        requestState,
        data,
        caption
      }
    }
  }
</script>
