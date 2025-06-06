<!-- src/views/FactureCreate.vue -->
<template>
  <div class="container mt-4">
    <h2>Créer une nouvelle facture</h2>

    <form class="mb-3" @submit.prevent="creerFacture">
      <!-- Champs de base -->

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
        <input type="number" v-model.number="facture.prixht" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Prix TTC</label>
        <input type="number" v-model.number="facture.prixttc" class="form-control" />
      </div>

      <!-- Champs ajoutés -->

      <div class="mb-3">
        <label class="form-label">Remise (€)</label>
        <input type="number" v-model.number="facture.remise" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Déjà payé (€)</label>
        <input type="number" v-model.number="facture.dejaPaye" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">TVA (€)</label>
        <input type="number" v-model.number="facture.tva" class="form-control" />
      </div>

      <!-- Prestations -->

      <h4>Prestations</h4>
      <div v-for="(prestation, index) in facture.prestations" :key="index" class="mb-3 border p-3 rounded">
        <div class="mb-2">
          <label class="form-label">Description</label>
          <input type="text" v-model="prestation.description" class="form-control" />
        </div>
        <div class="mb-2">
          <label class="form-label">Quantité</label>
          <input type="number" v-model.number="prestation.quantite" class="form-control" />
        </div>
        <div class="mb-2">
          <label class="form-label">Montant unitaire (€)</label>
          <input type="number" v-model.number="prestation.montantUnitaire" class="form-control" />
        </div>
        <div class="mb-2">
          <label class="form-label">Montant total (€)</label>
          <input
            type="number"
            :value="prestation.quantite * prestation.montantUnitaire"
            class="form-control"
            readonly
          />
        </div>
        <button type="button" class="btn btn-danger" @click="supprimerPrestation(index)">
          Supprimer cette prestation
        </button>
      </div>

      <button type="button" class="btn btn-secondary mb-3" @click="ajouterPrestation">
        Ajouter une prestation
      </button>

      <!-- Submit -->
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
  prixttc: 0,
  remise: 0,
  dejaPaye: 0,
  tva: 0,
  prestations: []
})

const ajouterPrestation = () => {
  facture.value.prestations.push({
    description: '',
    quantite: 1,
    montantUnitaire: 0,
    montantTotal: 0
  })
}

const supprimerPrestation = (index) => {
  facture.value.prestations.splice(index, 1)
}

const creerFacture = () => {
  const factures = getFactures()

  // Générer nouvel ID
  facture.value.id = factures.length ? Math.max(...factures.map(f => Number(f.id))) + 1 : 1

  // Recalculer montantTotal pour chaque prestation
  facture.value.prestations = facture.value.prestations.map(prestation => ({
    ...prestation,
    montantTotal: prestation.quantite * prestation.montantUnitaire
  }))

  factures.push({ ...facture.value })

  saveFactures(factures)

  $router.push('/')
}

const annuler = () => {
  $router.push('/')
}
</script>
