import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

const options = {
    method: 'GET',
    url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
    params: {url: 'https://time.com/6266679/musk-ai-open-letter/', length: '3'},
    headers: {
        'X-RapidAPI-Key': 'dea5310136msh3f59c4dcecedff3p1e01b8jsndffe742e9b8d',
        'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
    }
};

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `test`
        })
    })
})

export const { useLazyGetSummaryQuery } = articleApi
