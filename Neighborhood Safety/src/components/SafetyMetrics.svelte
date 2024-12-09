<script>
    export let safetyScore;
    export let trendData;
  
    $: scoreColor = safetyScore > 80 ? 'green' : safetyScore > 60 ? 'yellow' : 'red';
  </script>
  
  <div class="bg-white rounded-xl shadow-lg p-6">
    <h2 class="text-2xl font-bold mb-4">Neighborhood Safety Score</h2>
    
    <div class="flex items-center justify-center mb-6">
      <div class="relative w-48 h-48">
        <svg class="transform -rotate-90" viewBox="0 0 100 100">
          <circle
            class="text-gray-200"
            stroke-width="8"
            stroke="currentColor"
            fill="transparent"
            r="44"
            cx="50"
            cy="50"
          />
          <circle
            class="text-{scoreColor}-500"
            stroke-width="8"
            stroke="currentColor"
            fill="transparent"
            r="44"
            cx="50"
            cy="50"
            stroke-dasharray={`${safetyScore * 2.76} 276`}
          />
        </svg>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold">
          {safetyScore}
        </div>
      </div>
    </div>
  
    <div class="grid grid-cols-2 gap-4">
      <div class="p-4 bg-gray-50 rounded-lg">
        <h3 class="font-semibold mb-2">Daily Trend</h3>
        <!-- Add trend visualization here -->
      </div>
      <div class="p-4 bg-gray-50 rounded-lg">
        <h3 class="font-semibold mb-2">Weekly Summary</h3>
        <!-- Add weekly summary here -->
      </div>
    </div>
  </div>