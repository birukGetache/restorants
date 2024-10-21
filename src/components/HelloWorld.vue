<script setup>

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h1 class="w-fit mx-auto -my-5 bg-green-500 flex items-center px-5 z-10">screen</h1>
  <form class="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md ">
    <div class="mb-4">
      <label for="username" class="block text-sm font-medium text-gray-700 font-Roboto">Your Name</label>
      <input 
        type="text" 
        name="username" 
        placeholder="Enter username" 
        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2"
      >
    </div>
    
    <div class="mb-4">
      <label for="password" class="block text-sm font-medium text-gray-700">Your Password</label>
      <input 
        type="password" 
        placeholder="Enter your password" 
        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2"
      >
    </div>
    
    <div class="mb-4">
      <label for="email" class="block text-sm font-medium text-gray-700">Your Email</label>
      <input 
        type="email" 
        name="email" 
        placeholder="Enter your Email" 
        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2 color:blue"
      >
    </div>
    
    <button 
      type="submit" 
      class="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
    >
      Submit
    </button>
  </form>
  
</template>

