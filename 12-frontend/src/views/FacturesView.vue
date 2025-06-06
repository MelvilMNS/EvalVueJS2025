<template>
  <div class="container-fluid">
    <div class="row mt-2">
      <div class="col">
        <h1>
          Liste des factures
        </h1>
      </div>
      <div class="col d-flex justify-content-end align-items-center">
        <BButton iconLeft="" variant="success" class="" @click="$router.push('/facture/create')">
          <i class="fa-solid fa-plus me-2"></i>Ajouter une nouvelle facture
        </BButton>
      </div>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Numéro</th>
              <th scope="col">Nom du client</th>
              <th scope="col">Prix HT</th>
              <th scope="col">Prix TTC</th>
              <th scope="col" class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr v-for="facture in facturesList" :key="facture.id">
              <th scope="row">{{ facture.date }}</th>
              <td>{{ facture.description }}</td>
              <td>{{ facture.id }}</td>
              <td>{{ facture.client }}</td>
              <td>{{ facture.prixht }}€</td>
              <td>{{ facture.prixttc }}€</td>
              <td>
                <div class="row">
                  <div class="col">
                    <BButton iconLeft="" variant="primary" class="w-100" @click="detaillerFacture(facture.id)">Modifier
                    </BButton>
                  </div>
                  <div class="col">
                    <BButton iconLeft="" variant="danger" class="w-100" @click="supprimerFacture(facture.id)">Supprimer
                    </BButton>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getFactures, saveFactures } from '@/services/factures-backend-service.js'

const $router = useRouter()

const facturesList = ref(getFactures())

const detaillerFacture = (id) => {
  $router.push({
    name: 'facture',
    params: {
      id
    },
  })
}

const supprimerFacture = (id) => {
  facturesList.value = facturesList.value.filter(facture => facture.id !== id)
  saveFactures(facturesList.value)
}


</script>