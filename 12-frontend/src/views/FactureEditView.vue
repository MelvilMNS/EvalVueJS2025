<!-- src/views/FactureEdit.vue -->
<template>
  <div class="container mt-4">
    <h2>Modifier la facture n°{{ factureId }}</h2>

    <form class="mb-3" @submit.prevent="sauvegarderFacture">
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

      <button type="submit" class="btn btn-primary">Sauvegarder</button>
      <button type="button" class="btn btn-secondary ms-2" @click="annuler">Annuler</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getFactures, saveFactures } from '@/services/factures-backend-service.js'

const $route = useRoute()
const $router = useRouter()

const factureId = $route.params.id

const facture = ref({
  id: '',
  date: '',
  description: '',
  client: '',
  prixht: 0,
  prixttc: 0
})

onMounted(() => {
  const factures = getFactures()
  const f = factures.find(f => f.id == factureId)
  if (f) {
    facture.value = {
      ...f,
      date: f.date ? new Date(f.date).toISOString().split('T')[0] : '',
      prixht: Number(f.prixht) || 0,
      prixttc: Number(f.prixttc) || 0
    }
  } else {
    $router.push('/facture')
  }
})

const sauvegarderFacture = () => {
  const factures = getFactures()
  const index = factures.findIndex(f => f.id == factureId)
  if (index !== -1) {
    factures[index] = { ...facture.value }
    saveFactures(factures)
    $router.push('/')
  }
}

const annuler = () => {
  $router.push('/')
}
</script>