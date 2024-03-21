// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages:true,
  modules: [
    'nuxt-icon',
    '@nuxt/ui', '@vite-pwa/nuxt', '@pinia/nuxt'],
  runtimeConfig:{
    public :{ 
        bucketUrl:process.env.BUCKET_URL
    }
  },
  devtools: { enabled: true },
})