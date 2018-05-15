import Vue from 'vue'
import VAlert from 'vuetify/es5/components/VAlert'
import VApp from 'vuetify/es5/components/VApp'
import VBtn from 'vuetify/es5/components/VBtn'
import VCard from 'vuetify/es5/components/VCard'
import VChip from 'vuetify/es5/components/VChip'
import VDataTable from 'vuetify/es5/components/VDataTable'
import VDivider from 'vuetify/es5/components/VDivider'
import VForm from 'vuetify/es5/components/VForm'
import VFooter from 'vuetify/es5/components/VFooter'
import VGrid from 'vuetify/es5/components/VGrid'
import VIcon from 'vuetify/es5/components/VIcon'
import VList from 'vuetify/es5/components/VList'
import VProgressLinear from 'vuetify/es5/components/VProgressLinear'
import VSelect from 'vuetify/es5/components/VSelect'
import VSnackBar from 'vuetify/es5/components/VSnackbar'
import VSubheader from 'vuetify/es5/components/VSubheader'
import VSwitch from 'vuetify/es5/components/VSwitch'
import VTabs from 'vuetify/es5/components/VTabs'
import VTextField from 'vuetify/es5/components/VTextField'
import VToolbar from 'vuetify/es5/components/VToolbar'
import Vuetify from 'vuetify/es5/components/Vuetify'

// Base styles
import './stylesheets/style.scss'

import './stylesheets/vuetify.styl'

Vue.use(Vuetify, {
  components: {
    VAlert,
    VApp,
    VBtn,
    VCard,
    VChip,
    VDataTable,
    VDivider,
    VForm,
    VFooter,
    VGrid,
    VIcon,
    VList,
    VProgressLinear,
    VSelect,
    VSnackBar,
    VSubheader,
    VSwitch,
    VTabs,
    VTextField,
    VToolbar
  }
})
