<template>
    <div class="project-card">
      <img :src="project.project_image" alt="Anteprima progetto" class="project-image">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <p>Data: {{ project.date }}</p>
      <p>Collaboratore: {{ project.author }}</p>
      <p>Tipologia: {{ project.type_name || 'N/A' }}</p>
      <div>
        <p>Tecnologia:</p>
        <ul>
          <li v-for="technology in project.technologies" :key="technology.id">{{ technology.name }}</li>
        </ul>
      </div>
      <!-- Pulsanti di azione -->
      <div class="project-actions">

        <button class="btn btn-primary">Visualizza</button>
     
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'ProjectCard',
    props: {
      project: {
        type: Object,
        required: true,
      },
    },
  }
  </script>
  
  <style >

</style>
