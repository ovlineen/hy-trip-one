import { defineStore } from 'pinia';
import { getCityAll } from '@/services/modules/city';

const useCityStore = defineStore('city', {
    state: () => ({
        allCities: {},
        currentCity: { cityName: "广州" }
    }),
    actions: {
        async fetchAllCityData() {
            const res = await getCityAll();
            this.allCities = res.data;
        }
    }
});

export default useCityStore;