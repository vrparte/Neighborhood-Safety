<script>
    let incidents = [
      { id: 1, title: 'Suspicious Activity', description: 'Suspicious person seen near park', time: '2 hours ago' },
      { id: 2, title: 'Traffic Incident', description: 'Car accident on Main St', time: '5 hours ago' },
    ];
  </script>
  
  <ul class="space-y-4">
    {#each incidents as incident (incident.id)}
      <li class="border-l-4 border-blue-500 pl-4 py-2">
        <h3 class="font-semibold">{incident.title}</h3>
        <p class="text-sm text-gray-600">{incident.description}</p>
        <p class="text-xs text-gray-500 mt-1">{incident.time}</p>
      </li>
    {/each}
  </ul>