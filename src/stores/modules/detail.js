import { defineStore } from 'pinia';
import { getDetailInfos } from '@/services/modules/detail.js';

const useDetailStore = defineStore('detail', {
    state: () => ({
        detailData: {}
    }),
    actions: {
        async fatchDetailData(houseId) {
            const res = await getDetailInfos(houseId);
            this.detailData = res.data;
        }
    }
});

export default useDetailStore;
