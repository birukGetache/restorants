<template>
 <div class="grid md:grid-cols-3">
    <div class=" col-span-2 md:col-span-1 md:flex md:justify-end">
        <nav class="text-right">
            <div class="flex justify-between items-center">
                <h1 class="font-bold uppercase p-4 border-b border-gray-600">

                    <a href="/" class="text-green-500 sm:text-red-500 text-sm
                     md:text-xl hover:text-gray-700">Food Ninjas</a>
                </h1>
                <div class="px-4 cursor-pointer md:hidden" @click="show = !show">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                         d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                      </svg>
                      
                </div>
            </div>
            <ul :class="['text-sm mt-6', show ? '' : 'hidden', 'md:block']">
                <li class="text-gray-700 font-bold ">
                    <a href="#" class="px-4 flex justify-end border-r-4 border-r-primary">
                        <span>Home</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke-width="1.5" stroke="currentColor" class="size-6 ml-2">
                            <path stroke-linecap="round" stroke-linejoin="round" 
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                          </svg>
                          
                    
                    </a>
                </li>
                <li class="py-1">
                    <a href="#" class="px-4 flex justify-end border-r-4 border-r-white">
                        <span>About</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 ml-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                          </svg>
                          
                     
                    </a>
                </li>
                <li class="py-1">
                    <a href="#" class="px-4 flex justify-end border-r-4 border-r-white">
                        <span>Contact</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6  ml-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                          </svg>
                          
                      
                    </a>
                </li>
               
            </ul>
        </nav>
    </div>
    <main class="px-16 py-6 bg-gray-100 col-span-2">
        <div class="flex justify-center md:justify-end ">
            <a href="#" class="text-primary btn border-primery md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Log in</a>
            <a href="#" class="text-primary ml-2 btn border-primery md:border-2  hover:bg-primary hover:text-white transition ease-out duration-500">Sign UP</a>
        </div>
        <header>
            <h2 class="text-gray-700 text-5xl fint-semibold">Recipes</h2>
            <h2 class="text-2xl font-semibold">For Ninjas</h2>
        </header>
        <div>
            <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">Latest Reciept</h4>
            <div class="mt-8 grid lg:grid-cols-3 gap-5">
                <div class="card hover:shadow-lg">
                    <img src="/src/assets/food1.jpg" alt="" class="min-w-full h-32 sm:h-48 object-cover">
                <div class="m-4">
                    <span class="font-bold">5 Bean Chili Stew</span>
                    <span class="block"> Reciep By Mario</span>
                </div>
                <div class="badge">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      
                    <span>25 min</span> </div>
                </div>
                <div class="card hover:shadow-lg">
                    <img src="/src/assets/food2.jpg" alt="" class="min-w-full h-32 sm:h-48 object-cover">
                <div class="m-4">
                    <span class="font-bold">5 Bean Chili Stew</span>
                    <span class="block"> Reciep By Mario</span>
                </div>
                <div class="badge">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <span>25 min</span> </div>
                </div>
                <div class="card hover:shadow-lg">
                    <img src="/src/assets/food1.jpg" alt="" class="min-w-full h-32 sm:h-48 object-cover">
                <div class="m-4">
                    <span class="font-bold">5 Bean Chili Stew</span>
                    <span class="block"> Reciep By Mario</span>
                </div>
                <div class="badge">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    <span>25 min</span> </div>
                </div>
            </div>
            <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>
            <div class="mt-8">
                
            </div>
            <div class="flex justify-center">
                <div class="bg-secondary-100 text-secondary-200 btn hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transiton ease-out duration-500">
                    Load more
                </div>
            </div>
        </div>
    </main>
 </div>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(false);
</script>

<style>

</style>