<script>
    let incidentTypes = [
      { icon: '🚨', name: 'Theft' },
      { icon: '🚗', name: 'Accident' },
      { icon: '👀', name: 'Suspicious Activity' },
      { icon: '⚠️', name: 'Hazard' }
    ];
    let selectedType = '';
    let description = '';
    let location = 'Current Location';
    let isAnonymous = false;
    let currentStep = 1;
  
    function nextStep() {
      if (currentStep < 3) currentStep++;
    }
  
    function prevStep() {
      if (currentStep > 1) currentStep--;
    }
  
    function submitReport() {
      console.log('Report submitted:', { selectedType, description, location, isAnonymous });
      // Implement report submission logic
    }
  </script>
  
  <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="bg-white shadow-lg rounded-lg p-8">
      <h2 class="text-2xl font-bold mb-6">Report an Incident</h2>
      <div class="mb-6">
        <div class="flex justify-between">
          {#each [1, 2, 3] as step}
            <div class={`w-1/3 text-center ${currentStep >= step ? 'text-blue-600' : 'text-gray-400'}`}>
              Step {step}
            </div>
          {/each}
        </div>
        <div class="flex h-2 mb-4">
          <div class={`w-1/3 ${currentStep >= 1 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
          <div class={`w-1/3 ${currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
          <div class={`w-1/3 ${currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
        </div>
      </div>
  
      {#if currentStep === 1}
        <div>
          <h3 class="text-lg font-semibold mb-4">Step 1: Select Incident Type</h3>
          <div class="grid grid-cols-2 gap-4">
            {#each incidentTypes as type}
              <button
                on:click={() => selectedType = type.name}
                class={`p-4 border rounded-lg flex items-center ${selectedType === type.name ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
              >
                <span class="text-2xl mr-3">{type.icon}</span>
                <span>{type.name}</span>
              </button>
            {/each}
          </div>
        </div>
      {:else if currentStep === 2}
        <div>
          <h3 class="text-lg font-semibold mb-4">Step 2: Provide Details</h3>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
              Description
            </label>
            <textarea 
              bind:value={description} 
              id="description" 
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              rows="4"
            ></textarea>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="location">
              Location
            </label>
            <input 
              type="text" 
              bind:value={location} 
              id="location" 
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
          </div>
        </div>
      {:else if currentStep === 3}
        <div>
          <h3 class="text-lg font-semibold mb-4">Step 3: Review and Submit</h3>
          <div class="mb-4">
            <p><strong>Incident Type:</strong> {selectedType}</p>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Location:</strong> {location}</p>
          </div>
          <div class="mb-4">
            <label class="flex items-center">
              <input 
                type="checkbox" 
                bind:checked={isAnonymous} 
                class="form-checkbox h-5 w-5 text-blue-600"
              >
              <span class="ml-2 text-gray-700">Submit anonymously</span>
            </label>
          </div>
        </div>
      {/if}
  
      <div class="flex justify-between mt-6">
        {#if currentStep > 1}
          <button 
            on:click={prevStep}
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          >
            Previous
          </button>
        {:else}
          <div></div>
        {/if}
        
        {#if currentStep < 3}
          <button 
            on:click={nextStep}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
          >
            Next
          </button>
        {:else}
          <button 
            on:click={submitReport}
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit Report
          </button>
        {/if}
      </div>
    </div>
  </div>