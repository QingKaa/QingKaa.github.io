import { viteBundler } from "@vuepress/bundler-vite"
import { defineUserConfig } from "vuepress"
import { defaultTheme } from "@vuepress/theme-default"
import navbar from "./navbar"

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme({
        navbar: navbar
    }),

    base: '/',
    lang: 'zh-CN',
    title: '清咔啊',
    description: '欢迎来到清咔的网站',
})