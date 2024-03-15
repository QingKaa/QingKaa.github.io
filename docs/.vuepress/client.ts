import { defineClientConfig } from "vuepress/client"

import NotFound from "./layouts/NotFound.vue"
import About from "./layouts/About.vue"
import TagMap from "./layouts/TagMap.vue"

export default defineClientConfig({
    // @ts-ignore
    enhance({ app, router, siteData }) { },
    setup() { },
    rootComponents: [],
    layouts: {
        NotFound,
        About,
        TagMap
    }
})