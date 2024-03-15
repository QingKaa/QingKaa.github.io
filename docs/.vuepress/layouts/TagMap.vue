<template>
    <div>
      <h1>Tag page</h1>
      <ul>
        <li v-for="({ items, path }, name) in categoryMap.map">
          <RouteLink :key="name" :to="path" class="category">
            {{ name }}
          </RouteLink>
        </li>
      </ul>
    </div>
  </template>
  <script setup lang="ts">
  import { useBlogCategory } from '@vuepress/plugin-blog/client'
  import { RouteLink } from 'vuepress/client'
  
  const categoryMap = useBlogCategory('tag')
  console.log(`TagMap.vue:21: categoryMap ==========> `,categoryMap)

  </script>
  