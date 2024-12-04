<script>
    import QuickActions from './QuickActions.svelte';
    import IncidentFeed from './IncidentFeed.svelte';
  </script>
  
  <nav class="bg-blue-600 p-4">
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold text-white">Neighborhood Safety Alert</h1>
    </div>
  </nav>
  
  <main class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="md:col-span-2 space-y-6">
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4">Quick Actions</h2>
          <QuickActions />
        </section>
        
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4">Recent Incidents</h2>
          <IncidentFeed />
        </section>
      </div>
      
      <div class="space-y-6">
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4">Emergency Contact</h2>
          <button class="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded transition duration-300">
            Call Emergency Services
          </button>
        </section>
        
        <section class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4">Safety Tips</h2>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>Keep doors and windows locked</li>
            <li>Be aware of your surroundings</li>
            <li>Report suspicious activity</li>
            <li>Know your neighbors</li>
          </ul>
        </section>
      </div>
    </div>
  </main>