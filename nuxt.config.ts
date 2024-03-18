// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages:true,
  modules: ['@nuxt/ui'],
  runtimeConfig:{
    public :{ 
        bucketUrl:process.env.BUCKET_URL
    }
  },
  devtools: { enabled: true },
})
