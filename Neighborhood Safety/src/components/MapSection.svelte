<script>
  import { onMount } from 'svelte';
  let isFilterOpen = false;
  let map;
  let markers = [];
  let searchBox;
  let selectedIncidentType = 'all';
  let searchRadius = 5;
  
  // Sample incident data - replace with your actual data
  const incidents = [
    { type: 'crime', position: { lat: 39.1031, lng: -84.5120 }, title: 'Bike theft', description: 'Bike stolen from garage' },
    { type: 'hazard', position: { lat: 39.1051, lng: -84.5140 }, title: 'Road hazard', description: 'Large pothole' },
    { type: 'suspicious', position: { lat: 39.1071, lng: -84.5160 }, title: 'Suspicious activity', description: 'Suspicious person loitering' }
  ];

  function toggleFilter() {
    isFilterOpen = !isFilterOpen;
  }

  function initMap() {
    // Cincinnati coordinates (Clifton area)
    const cincinnati = { lat: 39.1031, lng: -84.5120 };
    
    map = new google.maps.Map(document.getElementById('map'), {
      center: cincinnati,
      zoom: 14,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }]
        }
      ],
      mapTypeControl: false,
      streetViewControl: false
    });

    // Add search box
    const input = document.getElementById('pac-input');
    searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Add incidents to map
    addIncidentsToMap();

    // Search box listener
    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces();
      if (places.length === 0) return;
      
      const bounds = new google.maps.LatLngBounds();
      places.forEach(place => {
        if (!place.geometry) return;
        bounds.extend(place.geometry.location);
      });
      map.fitBounds(bounds);
    });
  }

  function addIncidentsToMap() {
    // Clear existing markers
    markers.forEach(marker => marker.setMap(null));
    markers = [];

    // Filter incidents based on selected type
    const filteredIncidents = selectedIncidentType === 'all' 
      ? incidents 
      : incidents.filter(incident => incident.type === selectedIncidentType);

    // Add filtered incidents to map
    filteredIncidents.forEach(incident => {
      const icon = {
        url: getIncidentIcon(incident.type),
        scaledSize: new google.maps.Size(30, 30)
      };

      const marker = new google.maps.Marker({
        position: incident.position,
        map: map,
        icon: icon,
        title: incident.title
      });

      // Add info window
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div class="p-2">
            <h3 class="font-bold">${incident.title}</h3>
            <p>${incident.description}</p>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      markers.push(marker);
    });
  }

  function getIncidentIcon(type) {
    switch(type) {
      case 'crime':
        return 'https://maps.google.com/mapfiles/ms/icons/red-dot.png';
      case 'hazard':
        return 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
      case 'suspicious':
        return 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png';
      default:
        return 'https://maps.google.com/mapfiles/ms/icons/red-dot.png';
    }
  }

  function handleIncidentTypeChange(type) {
    selectedIncidentType = type;
    addIncidentsToMap();
  }

  function handleRadiusChange(event) {
    searchRadius = event.target.value;
    // Implement radius-based filtering logic here
  }

  onMount(() => {
    // Load Google Maps API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);
  });
</script>

<div class="relative h-[600px] bg-gray-200 rounded-lg shadow-md overflow-hidden">
  <input id="pac-input" class="absolute z-10 top-4 left-4 w-60 px-4 py-2 bg-white rounded-md shadow-md" type="text" placeholder="Search location...">
  <div id="map" class="absolute inset-0"></div>

  <button on:click={toggleFilter} class="absolute bottom-6 right-6 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center">
    <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
    Filter Incidents
  </button>

  {#if isFilterOpen}
    <div class="absolute bottom-20 right-6 w-72 bg-white rounded-lg shadow-xl p-6">
      <h3 class="font-bold text-lg mb-4">Incident Types</h3>
      <div class="space-y-4">
        <label class="flex items-center">
          <input type="radio" name="incidentType" value="all" checked={selectedIncidentType === 'all'} on:change={() => handleIncidentTypeChange('all')} class="form-radio h-5 w-5 text-blue-600">
          <span class="ml-2 text-gray-700">All Incidents</span>
        </label>
        <label class="flex items-center">
          <input type="radio" name="incidentType" value="crime" checked={selectedIncidentType === 'crime'} on:change={() => handleIncidentTypeChange('crime')} class="form-radio h-5 w-5 text-blue-600">
          <span class="ml-2 text-gray-700">Crimes</span>
        </label>
        <label class="flex items-center">
          <input type="radio" name="incidentType" value="hazard" checked={selectedIncidentType === 'hazard'} on:change={() => handleIncidentTypeChange('hazard')} class="form-radio h-5 w-5 text-blue-600">
          <span class="ml-2 text-gray-700">Hazards</span>
        </label>
        <label class="flex items-center">
          <input type="radio" name="incidentType" value="suspicious" checked={selectedIncidentType === 'suspicious'} on:change={() => handleIncidentTypeChange('suspicious')} class="form-radio h-5 w-5 text-blue-600">
          <span class="ml-2 text-gray-700">Suspicious Activity</span>
        </label>
      </div>
      <div class="mt-6">
        <label class="block text-sm font-medium text-gray-700 mb-2">Search Radius: {searchRadius} miles</label>
        <input type="range" min="1" max="10" bind:value={searchRadius} on:change={handleRadiusChange} class="w-full">
      </div>
    </div>
  {/if}
</div>