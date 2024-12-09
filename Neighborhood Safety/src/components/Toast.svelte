<script>
    import { onMount } from 'svelte';
  
    export let message = '';
    export let type = 'info';
    export let duration = 3000;
  
    let visible = true;
  
    const typeStyles = {
      info: 'bg-blue-500',
      success: 'bg-green-500',
      warning: 'bg-yellow-500',
      error: 'bg-red-500'
    };
  
    onMount(() => {
      const timer = setTimeout(() => {
        visible = false;
      }, duration);
  
      return () => clearTimeout(timer);
    });
  </script>
  
  <div 
    class="fixed top-4 right-4 z-50 transform transition-all duration-300 ease-in-out 
           {visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
           {typeStyles[type]} text-white px-6 py-4 rounded-lg shadow-lg"
  >
    <div class="flex items-center">
      <span class="mr-4">{message}</span>
      <button on:click={() => visible = false} class="ml-auto">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  </div>