<script>
  import { onMount } from 'svelte';

  let currentLocation = {
    neighborhood: "Clifton, Cincinnati",
    isSafe: false,
    incidentCount: 1,
    radius: 0.5
  };

  let urgentAlert = {
    title: "Accident reported",
    description: "0.5 miles away on Main St.",
    time: "10 minutes ago"
  };

  let recentIncidents = [
    { 
      type: "theft",
      title: "Bike stolen from garage",
      time: "1 hour ago",
      distance: "0.8 miles",
      icon: "🔒",
      bgColor: "bg-red-50"
    },
    { 
      type: "hazard",
      title: "Large pothole on 5th Ave",
      time: "2 hours ago",
      distance: "1.2 miles",
      icon: "⚠️",
      bgColor: "bg-yellow-50"
    },
    { 
      type: "suspicious",
      title: "Suspicious person loitering",
      time: "3 hours ago",
      distance: "0.3 miles",
      icon: "👁️",
      bgColor: "bg-blue-50"
    }
  ];

  // Report Incident State
  let currentStep = 1;
  let selectedType = null;
  let incidentDescription = "";
  let incidentLocation = "";
  let isAnonymous = false;
  
  let incidentTypes = [
    {
      id: 'theft',
      label: 'Theft',
      icon: '🔒',
      bgColor: 'bg-red-50'
    },
    {
      id: 'accident',
      label: 'Accident',
      icon: '🚗',
      bgColor: 'bg-red-50'
    },
    {
      id: 'hazard',
      label: 'Hazard',
      icon: '⚠️',
      bgColor: 'bg-yellow-50'
    },
    {
      id: 'suspicious',
      label: 'Suspicious Activity',
      icon: '👁️',
      bgColor: 'bg-blue-50'
    }
  ];

  function selectType(typeId) {
    selectedType = typeId;
  }

  function nextStep() {
    if (currentStep < 3) currentStep++;
  }

  function previousStep() {
    if (currentStep > 1) currentStep--;
  }

  function submitReport() {
    // Handle report submission
    console.log({
      type: selectedType,
      description: incidentDescription,
      location: incidentLocation,
      isAnonymous
    });
  }
</script>

<!-- Main Dashboard Content -->
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <!-- Current Location and Urgent Alert Cards -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <!-- Current Location Status -->
    <div class="bg-red-50/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
      <h2 class="text-xl font-bold mb-4">Current Neighborhood</h2>
      <p class="text-lg mb-6">{currentLocation.neighborhood}</p>
      
      <div class="flex justify-center mb-8">
        <div class="bg-red-500 text-white px-8 py-3 rounded-full text-xl font-bold animate-pulse">
          CAUTION
        </div>
      </div>
      
      <p class="text-center mb-6">
        {currentLocation.incidentCount} incident reported within {currentLocation.radius} miles.
      </p>
      
      <div class="flex items-center space-x-4">
        <span class="text-sm">Safety Radius:</span>
        <input 
          type="range" 
          min="0.1" 
          max="5" 
          step="0.1" 
          value={currentLocation.radius}
          class="flex-grow"
        >
        <span class="text-sm">{currentLocation.radius} miles</span>
      </div>
    </div>

    <!-- Urgent Alert -->
    <div class="bg-red-50/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
      <div class="flex items-center mb-4">
        <svg class="h-6 w-6 text-red-600 mr-2 animate-pulse" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <h2 class="text-xl font-bold text-red-600">{urgentAlert.title}</h2>
      </div>
      <p class="text-red-600 mb-2">{urgentAlert.description}</p>
      <p class="text-red-600 mb-4">{urgentAlert.time}</p>
      
      <div class="bg-gray-100 rounded-lg mb-4 overflow-hidden">
        <img 
          src="/background.jpg" 
          alt="Map Preview" 
          class="w-full h-40 object-cover"
        />
      </div>
      
      <button class="w-full bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
        View Details
      </button>
    </div>
  </div>

  <!-- Recent Incidents -->
  <div class="mt-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
    <h2 class="text-xl font-bold mb-6">Recent Incidents</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      {#each recentIncidents as incident}
        <div class={`${incident.bgColor}/90 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300`}>
          <div class="flex items-center space-x-3">
            <span class="text-2xl">{incident.icon}</span>
            <div>
              <p class="font-semibold">{incident.title}</p>
              <p class="text-sm text-gray-600">{incident.time} • {incident.distance}</p>
            </div>
          </div>
          <button class="mt-4 w-full text-blue-600 hover:text-blue-700 text-sm font-medium py-2 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            View Details
          </button>
        </div>
      {/each}
    </div>
  </div>

  <!-- Report Incident Section -->
  <div class="mt-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
    <h2 class="text-xl font-bold mb-6">Report an Incident</h2>
    
    <!-- Progress Steps -->
    <div class="flex items-center justify-between mb-8">
      {#each ['Select Type', 'Location Details', 'Review'] as step, i}
        <div class="flex items-center">
          <div class="w-8 h-8 rounded-full flex items-center justify-center 
            {currentStep === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}">
            {i + 1}
          </div>
          <div class="ml-2 text-sm font-medium {currentStep === i + 1 ? 'text-blue-600' : 'text-gray-600'}">
            {step}
          </div>
          {#if i < 2}
            <div class="w-24 h-1 mx-4 {currentStep > i + 1 ? 'bg-blue-600' : 'bg-gray-200'}"></div>
          {/if}
        </div>
      {/each}
    </div>

    <!-- Step Content -->
    {#if currentStep === 1}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {#each incidentTypes as type}
          <button 
            class="p-4 rounded-lg border-2 transition-all duration-300
              {selectedType === type.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}"
            on:click={() => selectType(type.id)}
          >
            <div class="flex flex-col items-center text-center">
              <div class="p-3 rounded-full mb-2 {type.bgColor}">
                <span class="text-2xl">{type.icon}</span>
              </div>
              <span class="font-medium text-gray-800">{type.label}</span>
            </div>
          </button>
        {/each}
      </div>
    {:else if currentStep === 2}
      <div class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Incident Location</label>
          <input
            type="text"
            bind:value={incidentLocation}
            placeholder="Enter location"
            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            bind:value={incidentDescription}
            rows="4"
            placeholder="Describe the incident"
            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
      </div>
    {:else}
      <div class="space-y-6">
        <div class="bg-gray-50 p-4 rounded-lg">
          <h3 class="font-medium mb-2">Review Details</h3>
          <p><span class="font-medium">Type:</span> {selectedType}</p>
          <p><span class="font-medium">Location:</span> {incidentLocation}</p>
          <p><span class="font-medium">Description:</span> {incidentDescription}</p>
        </div>
        <div class="flex items-center">
          <input
            type="checkbox"
            bind:checked={isAnonymous}
            id="anonymous"
            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label for="anonymous" class="ml-2 text-sm text-gray-700">Submit Anonymously</label>
        </div>
      </div>
    {/if}

    <!-- Navigation Buttons -->
    <div class="flex justify-between mt-8">
      {#if currentStep > 1}
        <button 
          class="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
          on:click={previousStep}
        >
          Back
        </button>
      {:else}
        <div></div>
      {/if}
      
      {#if currentStep < 3}
        <button 
          class="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          on:click={nextStep}
        >
          Continue
        </button>
      {:else}
        <button 
          class="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          on:click={submitReport}
        >
          Submit Report
        </button>
      {/if}
    </div>
  </div>
</div>

<style>
  input[type="range"] {
    @apply h-2 rounded-lg appearance-none cursor-pointer bg-gray-200;
  }
  
  input[type="range"]::-webkit-slider-thumb {
    @apply appearance-none w-4 h-4 rounded-full bg-red-500 cursor-pointer;
  }
</style>