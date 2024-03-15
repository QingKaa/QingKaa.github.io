import { viteBundler } from "@vuepress/bundler-vite"
import { defineUserConfig } from "vuepress"
import { defaultTheme } from "@vuepress/theme-default"
import AutoPrefixer from "autoprefixer"
import TailWindCss from "tailwindcss"
import { blogPlugin } from "@vuepress/plugin-blog"

import navbar from "./navbar"

export default defineUserConfig({
    bundler: viteBundler({
        viteOptions: {
            // 注入tailWindCss
            css: {
                postcss: {
                    plugins: [
                        TailWindCss(),
                        AutoPrefixer(),
                    ]
                }
            }
        }
    }),

    theme: defaultTheme({
        navbar: navbar
    }),
    plugins: [
        blogPlugin({
            filter: ({ filePathRelative, frontmatter }) => {
                // 舍弃那些不是从 Markdown 文件生成的页面
                if (!filePathRelative) return false
                // 舍弃那些没有使用默认布局的页面
                if (frontmatter['home'] || frontmatter.layout) return false
                return true
            },
            getInfo: ({ frontmatter, git = {}, data = {} }) => {
                // 获取页面信息
                const info: Record<string, any> = {
                    author: frontmatter['author'] || '',
                    categories: frontmatter['categories'] || [],
                    date: frontmatter.date || git.createdTime || null,
                    tags: frontmatter['tags'] || [],
                    excerpt: data['excerpt'] || '',
                }
                return info
            },
            category: [
                {
                    key: 'tag',
                    getter: ({ frontmatter }) => frontmatter.tag || [],
                    path: '/tag/',
                    layout: 'TagMap',
                    frontmatter: () => ({ title: '标签页' }),
                    itemPath: '/tag/:name/',
                    itemLayout: 'TagList',
                    itemFrontmatter: (name) => ({ title: `${name}标签` }),
                },
            ],
        })],

    base: '/',
    lang: 'zh-CN',
    title: '清咔啊',
    description: '欢迎来到清咔的网站',
})