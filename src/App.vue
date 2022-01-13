<template>
  <Youtube/>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect, onBeforeMount, onMounted, onBeforeUpdate, onBeforeUnmount, onUnmounted, onErrorCaptured, onRenderTracked, onRenderTriggered, onActivated, onDeactivated} from 'vue'
import Youtube from './components/Youtube.vue'

export default {
  name: 'App',
  setup(){
    //refs are for primitive properties: strings, numbers, booleans
    const name1 = ref('Chris')
    const name2 = ref('Toshiro')
    const name3 = ref('Takeo')
    const fullname = computed(() => {
      return `${name1.value} ${name2.value} ${name3.value}`
    })
    
    const address = reactive({
      line1: '21 yellow brick road',
      line2: 'oz land',
      city: 'nevernever land',
      postcode: 'ABC 123'
    })

    const formatAddress = computed(() => {
      return `${this.address.line1},
      ${this.address.line2},
      ${this.address.city},
      ${this.address.postcode}`
    })

    const setDefault = () => {
      name1.value = 'Chris'
      name2.value = 'Toshiro'
      name3.value = 'Takeo'
      address.line1 = ''
      address.line2 = ''
      address.city = ''
      address.postcode = ''
    }

    watchEffect(() => {
      console.log('watchEffect is like computed property for watch')
      console.log(name1.value, name2.value, name3.value)
    })
    
    watch([name1, name2, name3], 
    (
      [newName1, newName2, newName3],
      [oldName1, oldName2, oldName3]
    ) => {
      console.log('Changed', newName1, newName2, newName3, oldName1, oldName2, oldName3)
    })
    //hooks

    onBeforeMount(() => {
      console.log("onBeforeMount", name1.value, address.line1)
    })
    onMounted(() => {
      console.log("onMounted")
    })
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate")
    })
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount")
    })
    onUnmounted(() => {
      console.log("onUnmounted")
    })
    onErrorCaptured(() => {
      console.log("onErrorCaptured")
    })
    onRenderTracked(() => {
      console.log("onRenderTracked")
    })
    onRenderTriggered(() => {
      console.log("onRenderTriggered")
    })
    onDeactivated(() => {
      console.log("onDeactivated")
    })
    onActivated(() => {
      console.log("onActivated")
    })

    return { name1, name2, name3, address, fullname, formatAddress, setDefault }
  },
  components: {
    Youtube
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
