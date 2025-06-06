<template>
  <div class="container mt-4">
    <h2>Modifier le client n°{{ clientId }}</h2>

    <form class="mb-3" @submit.prevent="sauvegarderClient">
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

      <div class="mb-3">
        <label class="form-label">Fonction</label>
        <input type="text" v-model="client.fonction" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Téléphone</label>
        <input type="text" v-model="client.telephone" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" v-model="client.email" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Adresse 1</label>
        <input type="text" v-model="client.adresse1" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Adresse 2</label>
        <input type="text" v-model="client.adresse2" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Code Postal</label>
        <input type="text" v-model="client.codePostal" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Ville</label>
        <input type="text" v-model="client.ville" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Pays</label>
        <input type="text" v-model="client.pays" class="form-control" />
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
  date: '',
  fonction: '',
  telephone: '',
  email: '',
  adresse1: '',
  adresse2: '',
  codePostal: '',
  ville: '',
  pays: ''
})

onMounted(() => {
  const clients = getClients()
  const c = clients.find(f => f.id == clientId)
  if (c) {
    client.value = {
      ...c,
      date: c.date ? new Date(c.date).toISOString().split('T')[0] : '',
      fonction: c.fonction || '',
      telephone: c.telephone || '',
      email: c.email || '',
      adresse1: c.adresse1 || '',
      adresse2: c.adresse2 || '',
      codePostal: c.codePostal || '',
      ville: c.ville || '',
      pays: c.pays || ''
    }
  } else {
    $router.push('/clients')
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
