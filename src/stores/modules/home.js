import { defineStore } from 'pinia';
import { gethotSuggests, getHomeCategories, getHomeHouselist } from '@/services/modules/home';

const useHomeStore = defineStore('home', {
    state: () => ({
        hotSuggests: [],
        categories: [],

        currentPage: 1,
        homelist: [],
    }),
    actions: {
        async fetchHotSuggestData() {
            const res = await gethotSuggests();
            this.hotSuggests = res.data;
        },
        async fetchCategoriesData() {
            const res = await getHomeCategories();
            this.categories = res.data;
        },
        async fetchHomeListData() {
            const res = await getHomeHouselist(this.currentPage++);
            this.homelist.push(...res.data);
        }
    }
});


export default useHomeStore;