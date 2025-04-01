/* interface NewsResponse {
    data: any[]; // Replace `any` with the actual type of your news items
    total: number;
}

const state = reactive({
    page: 1,
    perPage: 3,
    total: null as number | null,
    all_news: [] as any[], // Replace `any` with the actual type of your news items
    loading: false,
});

export function useNews() {
    const fetchNews = async () => {
        state.loading = true;
        try {
            const response = await $fetch<NewsResponse>('/api/news', {
                params: {
                    page: state.page,
                    perPage: state.perPage,
                },
            });
            state.all_news = response.data;
            state.total = response.total;
        } catch (error) {
            console.error('Error fetching news:', error);
        } finally {
            state.loading = false;
        }
    };

    return {
        ...toRefs(state),
        fetchNews,
    };
} */


/* interface NewsResponse {
    stories: any[];  // หรือใช้ type ที่เหมาะสมสำหรับข้อมูลที่ดึงมา
    total: number;
}

const state = reactive({
    page: 1,
    perPage: 3,
    total: null as number | null,
    all_news: [] as any[], // กำหนดประเภทให้เหมาะสม
    loading: false,
});

export function useNews() {
    const storyblokApi = useStoryblokApi(); // ใช้ API ของ Storyblok

    async function fetchNews() {
        state.loading = true;
        try {
            const params = {
                version: useRoute().query._storyblok ? 'draft' : 'published',
                page: state.page,
                per_page: state.perPage,
                starts_with: 'news/', // กำหนดให้ดึงเฉพาะ stories ที่เริ่มต้นด้วย 'news/'
                sort_by: 'content.date:desc', // เรียงลำดับตามวันที่
            };

            const { data } = await storyblokApi.get('cdn/stories', params);

            if (data) state.all_news = data.stories;
            state.total = data.total;
        } catch (error) {
            console.error('Error fetching news:', error);
        } finally {
            state.loading = false;
        }
    }

    const formattedNews = computed(() =>
        state.all_news.map(({ uuid, content, created_at, slug }) => {
            return {
                uuid,
                content,
                created_at,
                slug,
                name: content?.name,  // ตรวจสอบว่า content มี field name หรือไม่
            };
        }),
    );

    return {
        ...toRefs(state),
        fetchNews,
        formattedNews,
    };
} */
