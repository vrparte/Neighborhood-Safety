<script>
  import Navbar from './components/Navbar.svelte';
  import Dashboard from './components/Dashboard.svelte';
</script>

<div class="min-h-screen w-full flex flex-col bg-gray-100 dark:bg-gray-900">
  <Navbar />
  <main class="flex-grow w-full">
    <Dashboard />
  </main>
</div>