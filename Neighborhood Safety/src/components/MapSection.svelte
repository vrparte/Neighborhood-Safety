<script>
    import { onMount } from 'svelte';
    let isFilterOpen = false;
    let map;
  
    function toggleFilter() {
      isFilterOpen = !isFilterOpen;
    }
  
    onMount(() => {
      // Initialize map (replace with actual map implementation)
      map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
      });
    });
  </script>
  
  <div class="relative h-80 bg-gray-200 rounded-lg shadow-md overflow-hidden">
    <div id="map" class="absolute inset-0"></div>
  
    <button on:click={toggleFilter} class="absolute bottom-6 right-6 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center">
      <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
      Filter Incidents
    </button>
  
    {#if isFilterOpen}
      <div class="absolute bottom-20 right-6 w-72 bg-white rounded-lg shadow-xl p-6">
        <h3 class="font-bold text-lg mb-4">Filters</h3>
        <div class="space-y-4">
          <label class="flex items-center">
            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600">
            <span class="ml-2 text-gray-700">Crimes</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600">
            <span class="ml-2 text-gray-700">Hazards</span>
          </label>
          <label class="flex items-center">
            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600">
            <span class="ml-2 text-gray-700">Resolved</span>
          </label>
        </div>
        <div class="mt-6">
          <label class="block text-sm font-medium text-gray-700 mb-2">Radius</label>
          <input type="range" min="1" max="10" class="w-full">
        </div>
      </div>
    {/if}
  </div>