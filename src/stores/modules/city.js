import { defineStore } from 'pinia'
import { getCityAll } from '@/services/modules/city'

const useCityStore = defineStore('city',{
    state:()=>({
        allCities:{},
        currentCity:{cityName:"上海"}
    }),
    actions:{
        async fetchAllCityData() {
            const res = await getCityAll()
            this.allCities = res.data
        }
    }
})

export default useCityStore