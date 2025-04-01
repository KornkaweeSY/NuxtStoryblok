const state = reactive({
    page: 1,
    perPage: 3,
    total: null,
    all_news: [],
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
}
