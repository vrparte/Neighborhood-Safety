<script>
  let incidents = [
    { type: 'theft', description: 'Bike stolen from garage', time: '1 hour ago', distance: '0.8 miles', severity: 'high' },
    { type: 'hazard', description: 'Large pothole on 5th Ave', time: '2 hours ago', distance: '1.2 miles', severity: 'medium' },
    { type: 'suspicious', description: 'Suspicious person loitering', time: '3 hours ago', distance: '0.3 miles', severity: 'low' }
  ];

  let selectedFilter = 'all';
</script>

<div class="bg-white rounded-xl shadow-lg p-6">
  <div class="flex justify-between items-center mb-6">
    <h2 class="text-2xl font-bold">Recent Incidents</h2>
    <div class="flex space-x-2">
      <button class="px-3 py-1 rounded-full bg-gray-100 text-sm" class:bg-blue-500={selectedFilter === 'all'} class:text-white={selectedFilter === 'all'} on:click={() => selectedFilter = 'all'}>All</button>
      <button class="px-3 py-1 rounded-full bg-gray-100 text-sm" class:bg-red-500={selectedFilter === 'high'} class:text-white={selectedFilter === 'high'} on:click={() => selectedFilter = 'high'}>High Priority</button>
      <button class="px-3 py-1 rounded-full bg-gray-100 text-sm" class:bg-yellow-500={selectedFilter === 'medium'} class:text-white={selectedFilter === 'medium'} on:click={() => selectedFilter = 'medium'}>Medium</button>
    </div>
  </div>

  <div class="space-y-4">
    {#each incidents.filter(i => selectedFilter === 'all' || i.severity === selectedFilter) as incident}
      <div class="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <span class="text-2xl mr-3">
              {#if incident.type === 'theft'}🚨
              {:else if incident.type === 'hazard'}⚠️
              {:else}👀{/if}
            </span>
            <div>
              <h3 class="font-semibold">{incident.description}</h3>
              <p class="text-sm text-gray-600">{incident.time} • {incident.distance}</p>
            </div>
          </div>
          <button class="text-blue-500 hover:text-blue-600">Details</button>
        </div>
      </div>
    {/each}
  </div>
</div>