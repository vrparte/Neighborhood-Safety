<script>
  import { createEventDispatcher } from 'svelte';
  import { addToast } from 'as-toast';
  
  export let scrollToSection;
  let isSettingsOpen = false;
  let alertPreferences = true;
  let isDarkTheme = false;
  let isMenuOpen = false;

  const dispatch = createEventDispatcher();

  function toggleSettings() {
    isSettingsOpen = !isSettingsOpen;
    isMenuOpen = false;
  }

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    isSettingsOpen = false;
  }

  function toggleAlertPreferences() {
    alertPreferences = !alertPreferences;
    const message = alertPreferences ? "Notifications enabled" : "Notifications disabled";
    addToast(message, alertPreferences ? 'info' : 'warn');
  }

  function toggleDarkTheme() {
    isDarkTheme = !isDarkTheme;
    dispatch('themeChange', isDarkTheme);
  }

  function handleNavClick(section) {
    scrollToSection(section);
    isMenuOpen = false;
  }
</script>

<nav class="fixed top-0 left-0 right-0 bg-[#2563eb] shadow-lg z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <!-- Logo -->
      <div class="flex-shrink-0 flex items-center">
        <span class="text-2xl font-bold text-white tracking-tight ml-0">SafeNeighborhood</span>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-6">
        <button 
          on:click={() => handleNavClick('dashboard')} 
          class="text-white hover:bg-white/10 px-4 py-2 rounded-md text-sm font-medium transition-colors"
        >
          Dashboard
        </button>
        <button 
          on:click={() => handleNavClick('report')} 
          class="text-white hover:bg-white/10 px-4 py-2 rounded-md text-sm font-medium transition-colors"
        >
          Report Incident
        </button>

        <!-- Settings Button -->
        <div class="relative">
          <button 
            on:click={toggleSettings}
            class="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Settings"
          >
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>

          <!-- Settings Dropdown -->
          {#if isSettingsOpen}
            <div class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
              <div class="px-4 py-2 text-sm text-gray-700 flex justify-between items-center">
                Notifications
                <button 
                  on:click={toggleAlertPreferences} 
                  class="relative inline-flex h-6 w-11 rounded-full transition-colors {alertPreferences ? 'bg-[#2563eb]' : 'bg-gray-200'}"
                >
                  <span class="inline-block w-4 h-4 transform bg-white rounded-full shadow transition-transform duration-200 ease-in-out {alertPreferences ? 'translate-x-6' : 'translate-x-1'}" />
                </button>
              </div>
              <div class="px-4 py-2 text-sm text-gray-700 flex justify-between items-center">
                Dark Mode
                <button 
                  on:click={toggleDarkTheme} 
                  class="relative inline-flex h-6 w-11 rounded-full transition-colors {isDarkTheme ? 'bg-[#2563eb]' : 'bg-gray-200'}"
                >
                  <span class="inline-block w-4 h-4 transform bg-white rounded-full shadow transition-transform duration-200 ease-in-out {isDarkTheme ? 'translate-x-6' : 'translate-x-1'}" />
                </button>
              </div>
            </div>
          {/if}
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button 
          on:click={toggleMenu}
          class="p-2 rounded-md hover:bg-white/10 transition-colors"
          aria-label="Menu"
        >
          <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if isMenuOpen}
    <div class="md:hidden bg-[#2563eb] border-t border-white/10">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <button 
          on:click={() => handleNavClick('dashboard')} 
          class="block w-full text-left px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md transition-colors"
        >
          Dashboard
        </button>
        <button 
          on:click={() => handleNavClick('report')} 
          class="block w-full text-left px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md transition-colors"
        >
          Report Incident
        </button>
      </div>
    </div>
  {/if}
</nav>