<script>
    let isDarkMode = false;
    let userName = "John Doe";
  
    function toggleTheme() {
      isDarkMode = !isDarkMode;
      document.body.classList.toggle('dark-mode', isDarkMode);
    }
  </script>
  
  <nav class="fixed top-0 left-0 right-0 bg-indigo-600 dark:bg-indigo-900 text-white shadow-md z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <span class="text-xl font-bold">StreetWatch</span>
        <div class="flex items-center space-x-4">
          <button on:click={toggleTheme} class="p-2 rounded-md text-indigo-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
            {#if isDarkMode}
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            {:else}
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            {/if}
          </button>
          <span class="text-indigo-100">{userName}</span>
        </div>
      </div>
    </div>
  </nav>