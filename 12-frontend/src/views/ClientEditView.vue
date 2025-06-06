<template>
  <div class="container mt-4">
    <h2>Modifier le client n°{{ clientId }}</h2>

    <form @submit.prevent="sauvegarderClient">
      <div class="mb-3">
        <label class="form-label">Date</label>
        <input type="date" v-model="client.date" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Nom du client</label>
        <input type="text" v-model="client.nom" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Entreprise</label>
        <input type="text" v-model="client.entreprise" class="form-control" />
      </div>

      <button type="submit" class="btn btn-primary">Sauvegarder</button>
      <button type="button" class="btn btn-secondary ms-2" @click="annuler">Annuler</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getClients, saveClients } from '@/services/clients-backend-service.js'

const $route = useRoute()
const $router = useRouter()

const clientId = $route.params.id

const client = ref({
  id: '',
  nom: '',
  entreprise: '',
  date: ''
})

onMounted(() => {
  const clients = getClients()
  const c = clients.find(f => f.id == clientId)
  if (c) {
    client.value = {
      ...c,
      date: c.date ? new Date(c.date).toISOString().split('T')[0] : ''
    }
  } else {
    $router.push('/client')
  }
})

const sauvegarderClient = () => {
  const clients = getClients()
  const index = clients.findIndex(f => f.id == clientId)
  if (index !== -1) {
    clients[index] = { ...client.value }
    saveClients(clients)
    $router.push('/clients')
  }
}

const annuler = () => {
  $router.push('/clients')
}
</script>
