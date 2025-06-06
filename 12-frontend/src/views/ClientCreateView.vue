<template>
  <div class="container mt-4">
    <h2>Créer un nouveau client</h2>

    <form @submit.prevent="creerClient">
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

      <button type="submit" class="btn btn-primary">Créer</button>
      <button type="button" class="btn btn-secondary ms-2" @click="annuler">Annuler</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getClients, saveClients } from '@/services/clients-backend-service.js'

const $router = useRouter()

const client = ref({
  id: '',
  nom: '',
  entreprise: '',
  date: ''
})

const creerClient = () => {
  const clients = getClients()

  client.value.id = clients.length ? Math.max(...clients.map(f => Number(f.id))) + 1 : 1

  clients.push({ ...client.value })

  saveClients(clients)

  $router.push('/clients')
}

const annuler = () => {
  $router.push('/clients')
}
</script>
