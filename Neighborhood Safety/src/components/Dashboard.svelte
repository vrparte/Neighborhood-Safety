<script>
  import QuickActions from './QuickActions.svelte';
  import IncidentFeed from './IncidentFeed.svelte';

  let userLocation = "New York, NY";
  let safetyNotification = "No current safety alerts in your area.";
</script>

<div class="mt-16 w-full px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="md:col-span-3">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <div class="flex items-center">
            <svg class="h-6 w-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span class="text-lg font-semibold text-gray-700 dark:text-gray-300">{userLocation}</span>
          </div>
          <p class="mt-2 text-gray-600 dark:text-gray-400">{safetyNotification}</p>
        </div>
      </div>

      <div class="md:col-span-2 space-y-6">
        <section class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Quick Actions</h2>
          <QuickActions />
        </section>
        
        <section class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Recent Incidents</h2>
          <IncidentFeed />
        </section>
      </div>
      
      <div class="space-y-6">
        <section class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Emergency Contact</h2>
          <button class="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded transition duration-300">
            Call Emergency Services
          </button>
        </section>
        
        <section class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">Safety Tips</h2>
          <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Keep doors and windows locked</li>
            <li>Be aware of your surroundings</li>
            <li>Report suspicious activity</li>
            <li>Know your neighbors</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</div>