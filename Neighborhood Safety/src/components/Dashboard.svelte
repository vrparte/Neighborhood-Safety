<script>
  import { onMount } from 'svelte';

  let currentLocation = {
    neighborhood: "Downtown, Springfield",
    isSafe: true,
    incidentCount: 0,
    radius: 0.5
  };

  let urgentAlert = {
    title: "Accident reported",
    description: "0.5 miles away on Main St.",
    time: "10 minutes ago"
  };

  let recentIncidents = [
    { type: "theft", description: "Bike stolen from garage", time: "1 hour ago", distance: "0.8 miles" },
    { type: "hazard", description: "Large pothole on 5th Ave", time: "2 hours ago", distance: "1.2 miles" },
    { type: "suspicious", description: "Suspicious person loitering", time: "3 hours ago", distance: "0.3 miles" }
  ];

  onMount(() => {
    // Simulating dynamic update of safety status
    setTimeout(() => {
      currentLocation.isSafe = false;
      currentLocation.incidentCount = 1;
    }, 5000);
  });

  function viewIncidentDetails(incident) {
    console.log("View details for:", incident);
    // Implement view details functionality
  }
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
    <!-- Current Location/Safety Status Tile -->
    <div class="md:w-1/2 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02]"
         class:bg-green-100={currentLocation.isSafe}
         class:bg-red-100={!currentLocation.isSafe}>
      <h2 class="text-xl font-bold mb-2">Current Neighborhood</h2>
      <p class="text-lg mb-4">{currentLocation.neighborhood}</p>
      <div class="flex items-center justify-center mb-4">
        {#if currentLocation.isSafe}
          <svg class="h-12 w-12 text-green-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        {:else}
          <svg class="h-12 w-12 text-red-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        {/if}
        <span class="text-3xl font-bold">{currentLocation.isSafe ? 'Safe' : 'Caution'}</span>
      </div>
      <p class="text-center">
        {currentLocation.isSafe
          ? `No incidents reported within ${currentLocation.radius} miles.`
          : `${currentLocation.incidentCount} incident${currentLocation.incidentCount > 1 ? 's' : ''} reported within ${currentLocation.radius} miles.`}
      </p>
    </div>

    <div class="md:w-1/2 space-y-4">
      <!-- Urgent Alert Tile -->
      <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02]">
        <div class="flex items-center mb-2">
          <svg class="h-8 w-8 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h2 class="text-xl font-bold">{urgentAlert.title}</h2>
        </div>
        <p class="text-lg mb-2">{urgentAlert.description}</p>
        <p class="text-sm mb-4">{urgentAlert.time}</p>
        <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out">
          View Details
        </button>
      </div>

      <!-- Recent Incidents Tile -->
      <div class="bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02]">
        <h2 class="text-xl font-bold mb-4">Recent Incidents</h2>
        <ul class="space-y-4">
          {#each recentIncidents as incident}
            <li class="border-b pb-2 last:border-b-0">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <span class="text-2xl mr-3">
                    {#if incident.type === 'theft'}
                      🚨
                    {:else if incident.type === 'hazard'}
                      ⚠️
                    {:else}
                      👀
                    {/if}
                  </span>
                  <div>
                    <h3 class="font-semibold">{incident.description}</h3>
                    <p class="text-sm text-gray-600">{incident.time} • {incident.distance}</p>
                  </div>
                </div>
                <button on:click={() => viewIncidentDetails(incident)} class="text-blue-500 hover:text-blue-600">
                  Details
                </button>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>