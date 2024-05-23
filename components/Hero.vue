<template>            
    <div class="pt-3 pb-3 flex-grow-0 flex-shrink-0 w-2/5 pl-7 px-5 lg:px-0">
        <div class="flex flex-col">
            <div class="w-full max-w-full self-start mt-1 mb-0">
                <div class="relative">
                    <div class="h-full w-full">
                        <img src="/teles.svg" alt="Teles" class="w-full max-w-[248px] h-full object-cover rounded-md lg:m-auto" />
                    </div>
                </div>
            </div>
        </div>
    </div>            
    <div class="pt-3 pb-3 flex-grow-0 flex-shrink-0 lg:w-3/5 pr-3 lg:pr-7">
        <div class="flex flex-col">
            <div class="w-full max-w-full mt-5 mb-3">
                <h3 class="w-full max-w-full py-1 px-2 font-semibold text-4xl leading-tight m-0">👋 Hello, my name is Teles.</h3>
            </div>
            <div class="w-full max-w-full my-1">
                <div class="flex">
                    <div class="w-full max-w-full py-1 px-2">
                        <span class="block">I am a <span class="font-semibold">Creative Software Engineer</span> with over 11 years of experience in web development, focused on frontend technologies, and proficient in <span class="font-semibold">JavaScript</span>, <span class="font-semibold">Typescript</span>, <span class="font-semibold">Node</span>, <span class="font-semibold">Python</span>, and more.</span>                                
                        <span class="block mt-4">My work is dedicated to <span class="font-semibold">SEO</span> and <span class="font-semibold">UX</span>, and the products I've worked on have reached millions of users in Brazil, as well as numerous startup founders.</span>
                    </div>
                </div>
            </div>
            <!-- <div class="w-60 max-w-full self-start mt-1 mb-0">
                <div class="relative flex justify-center w-full min-h-24 h-24">
                    <iframe src="https://indify.co/widgets/live/button/CnS1pe66vn2davyZ9jAl" frameborder="0" sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin allow-storage-access-by-user-activation allow-popups-to-escape-sandbox" allowfullscreen class="absolute inset-0 w-full h-full bg-gray-800 rounded-md"></iframe>
                </div>
            </div> -->
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Hero',
    props: {
      title: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  