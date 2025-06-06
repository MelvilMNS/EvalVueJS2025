<!-- src/views/FactureCreate.vue -->
<template>
  <div class="container mt-4">
    <h2>Créer une nouvelle facture</h2>

    <form class="mb-3" @submit.prevent="creerFacture">
      <div class="mb-3">
        <label class="form-label">Date</label>
        <input type="date" v-model="facture.date" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Description</label>
        <input type="text" v-model="facture.description" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Nom du client</label>
        <input type="text" v-model="facture.client" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Prix HT</label>
        <input type="number" v-model="facture.prixht" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Prix TTC</label>
        <input type="number" v-model="facture.prixttc" class="form-control" />
      </div>

      <button type="submit" class="btn btn-primary">Créer</button>
      <button type="button" class="btn btn-secondary ms-2" @click="annuler">Annuler</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getFactures, saveFactures } from '@/services/factures-backend-service.js'

const $router = useRouter()

const facture = ref({
  id: '',
  date: '',
  description: '',
  client: '',
  prixht: 0,
  prixttc: 0
})

const creerFacture = () => {
  const factures = getFactures()

  facture.value.id = factures.length ? Math.max(...factures.map(f => Number(f.id))) + 1 : 1

  factures.push({ ...facture.value })

  saveFactures(factures)

  $router.push('/')
}

const annuler = () => {
  $router.push('/')
}
</script>
