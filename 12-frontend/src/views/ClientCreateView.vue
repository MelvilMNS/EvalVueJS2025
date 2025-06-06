<template>
  <div class="container mt-4">
    <h2>Créer un nouveau client</h2>

    <form class="mb-3" @submit.prevent="creerClient">
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
