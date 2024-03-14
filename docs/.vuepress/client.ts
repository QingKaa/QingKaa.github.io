import { defineClientConfig } from "vuepress/client"

import NotFound from "./layouts/NotFound.vue"

export default defineClientConfig({
    // @ts-ignore
    enhance({ app, router, siteData }) { },
    setup() { },
    rootComponents: [],
    layouts: {
        NotFound
    }
})