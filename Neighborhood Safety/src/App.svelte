<script>
  import Navbar from './components/Navbar.svelte';
  import Toast from './components/Toast.svelte';
  import Dashboard from './components/Dashboard.svelte';
  import MapSection from './components/MapSection.svelte';
  import ReportIncident from './components/ReportIncident.svelte';
  import { onMount } from 'svelte';

  let sections = {};
  let isDarkTheme = false;
  let toastMessage = '';
  let toastType = 'info';

  onMount(() => {
    sections = {
      dashboard: document.getElementById('dashboard'),
      map: document.getElementById('map'),
      report: document.getElementById('report')
    };
  });

  function scrollToSection(sectionId) {
    sections[sectionId].scrollIntoView({ behavior: 'smooth' });
  }

  function handleThemeChange(event) {
    isDarkTheme = event.detail;
  }

  function handleToast(event) {
    toastMessage = event.detail.message;
    toastType = event.detail.type;
  }
</script>

<main class="{isDarkTheme ? 'dark' : ''} bg-white dark:bg-gray-900 min-h-screen">
  <Navbar 
    {scrollToSection} 
    on:themeChange={handleThemeChange}
    on:toast={handleToast}
  />

  {#if toastMessage}
    <Toast 
      message={toastMessage} 
      type={toastType} 
      duration={3000} 
      on:close={() => toastMessage = ''}
    />
  {/if}
  
  <div class="pt-16"> <!-- Add padding to account for fixed navbar -->
    <section id="dashboard" class="text-gray-900 dark:text-white">
      <Dashboard />
    </section>

    <section id="map">
      <MapSection />
    </section>

    <section id="report" class="text-gray-900 dark:text-white">
      <ReportIncident />
    </section>
  </div>
</main>

<style>
  :global(body) {
    @apply m-0 p-0 font-sans;
  }
</style>