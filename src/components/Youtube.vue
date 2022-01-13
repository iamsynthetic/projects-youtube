<template>
    <div>
        <p>{{ allText }}</p>
        <input type="text" v-model="data.searchterm" @keyup.enter="getYT">
        <p>searchbox copy is: {{data.searchterm}}</p>
        <br>
        <div class="video-container">
            <iframe width="640" height="360" :src="`https://www.youtube.com/embed/${data.playvideo}`" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
import { reactive, computed, watch } from 'vue'
import axios from 'axios'

export default {
    setup () {
        //constants and refs
        let data = reactive({
            searchterm: 'candy',
            videos: '',
            playvideo: '',
            allvideodata: '',
            amountofvideos:'5'
        })
        const apiURL = 'http://localhost:3000/'
        //const apiKey = 'AIzaSyAqx8ZKkEDl6_WDHRCVAp1_khFu2BFvGU0'
        const title = 'youtube'
        const allText = computed(() => {
            return `${title}`
        })
        
        const getYT = () => {
            axios(`${apiURL}?type=video&part=snippet&q=${data.searchterm}`).then(response => {
            //axios(`${apiURL}?type=video&part=snippet&q=${data.searchterm}`).then(response => {
                console.log('blah blah ' + response.data)
                console.log(response.data.items[0].id.videoId)
                console.log(data.searchterm)
                data.allvideodata = response.data
                data.playvideo = response.data.items[0].id.videoId
            })
            // axios
            //     .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            //     .then(response => (console.log(response)))
            
        }

        //watch
        watch(data.searchterm,(newValue, oldValue) => {
            console.log('new value is: ' + newValue)
            console.log(oldValue)
        })

        //watcheffect
        // watchEffect(() => {
        //   console.log('allText is changed!')
        //   console.log(title.value)  
        // })
        //hooks
        
        //return
        return {allText, data, getYT}
    }
}
</script>

<style lang="scss" scoped>

</style>