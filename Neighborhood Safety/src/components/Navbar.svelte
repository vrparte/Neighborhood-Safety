<script>
    import { createEventDispatcher } from 'svelte';
    import { addToast } from 'as-toast';
    
    export let scrollToSection;
    let isSettingsOpen = false;
    let alertPreferences = true;
    let isDarkTheme = false;
  
    const dispatch = createEventDispatcher();
  
    function toggleSettings() {
      isSettingsOpen = !isSettingsOpen;
    }
  
    function toggleAlertPreferences() {
    alertPreferences = !alertPreferences;
    const message = alertPreferences 
      ? "Notifications have been turned on." 
      : "Notifications have been turned off.";
    const type = alertPreferences ? 'info' : 'warn';
    addToast(message, type);
  }
  
    function toggleDarkTheme() {
      isDarkTheme = !isDarkTheme;
      dispatch('themeChange', isDarkTheme);
    }
  </script>
  
  <nav class="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg z-50 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex-shrink-0 flex items-center">
          <span class="text-2xl font-extrabold">SafeNeighborhood</span>
        </div>
        <div class="flex items-center space-x-4">
          <button on:click={() => scrollToSection('dashboard')} class="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-150 ease-in-out">Dashboard</button>
          <button on:click={() => scrollToSection('map')} class="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-150 ease-in-out">Map</button>
          <button on:click={() => scrollToSection('report')} class="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-150 ease-in-out">Report Incident</button>
          <div class="relative ml-3">
            <button on:click={toggleSettings} class="bg-blue-400 p-2 rounded-full hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-white">
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            {#if isSettingsOpen}
              <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                <div class="px-4 py-2 text-sm text-gray-700 flex justify-between items-center">
                  Alert Preferences
                  <button on:click={toggleAlertPreferences} class="relative inline-flex items-center h-6 rounded-full w-11 {alertPreferences ? 'bg-blue-600' : 'bg-gray-200'}" role="switch" aria-checked={alertPreferences}>
                    <span class="sr-only">Toggle alert preferences</span>
                    <span class="translate-x-0 inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out {alertPreferences ? 'translate-x-5' : ''}"></span>
                  </button>
                </div>
                <div class="px-4 py-2 text-sm text-gray-700 flex justify-between items-center">
                  Dark Theme
                  <button on:click={toggleDarkTheme} class="relative inline-flex items-center h-6 rounded-full w-11 {isDarkTheme ? 'bg-blue-600' : 'bg-gray-200'}" role="switch" aria-checked={isDarkTheme}>
                    <span class="sr-only">Toggle dark theme</span>
                    <span class="translate-x-0 inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out {isDarkTheme ? 'translate-x-5' : ''}"></span>
                  </button>
                </div>
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </nav>