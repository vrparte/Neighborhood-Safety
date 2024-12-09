<script>
    function handleEmergencyCall() {
      // Implement emergency call functionality
    }
  </script>
  
  <div class="bg-white rounded-xl shadow-lg p-6">
    <h2 class="text-2xl font-bold mb-4">Quick Actions</h2>
    
    <div class="grid grid-cols-2 gap-4">
      <button
        class="flex flex-col items-center justify-center p-4 bg-red-100 rounded-lg hover:bg-red-200 transition-colors"
        on:click={handleEmergencyCall}
      >
        <span class="text-3xl mb-2">🚨</span>
        <span class="font-medium">Emergency Call</span>
      </button>
      
      <button class="flex flex-col items-center justify-center p-4 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
        <span class="text-3xl mb-2">📋</span>
        <span class="font-medium">Report Incident</span>
      </button>
      
      <button class="flex flex-col items-center justify-center p-4 bg-green-100 rounded-lg hover:bg-green-200 transition-colors">
        <span class="text-3xl mb-2">📱</span>
        <span class="font-medium">Contact Directory</span>
      </button>
      
      <button class="flex flex-col items-center justify-center p-4 bg-purple-100 rounded-lg hover:bg-purple-200 transition-colors">
        <span class="text-3xl mb-2">ℹ️</span>
        <span class="font-medium">Safety Resources</span>
      </button>
    </div>
  </div>