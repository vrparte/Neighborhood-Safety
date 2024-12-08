<script>
  function reportIncident() {
    console.log('Report Incident');
  }

  function viewSafetyMap() {
    console.log('View Safety Map');
  }
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <button on:click={reportIncident} class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded transition duration-300">
    Report Incident
  </button>
  <button on:click={viewSafetyMap} class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded transition duration-300">
    View Safety Map
  </button>
</div>