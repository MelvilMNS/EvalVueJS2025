<template>
  <div class="container-fluid">
    <div class="row mt-2">
      <div class="col">
        <h1>
          Liste des clients
        </h1>
      </div>
      <div class="col d-flex justify-content-end align-items-center">
        <BButton iconLeft="" variant="success" class="" @click="$router.push('/client/create')">
          <i class="fa-solid fa-plus me-2"></i>Ajouter un nouveau client
        </BButton>
      </div>
      <div class="table-responsive mt-3">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Nom</th>
              <th scope="col">Entreprise</th>
              <th scope="col">Date</th>
              <th scope="col">Fonction</th>
              <th scope="col">Téléphone</th>
              <th scope="col">Email</th>
              <th scope="col">Ville</th>
              <th scope="col">Pays</th>
              <th scope="col" class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr v-for="client in clientsList" :key="client.id">
              <th scope="row">{{ client.nom }}</th>
              <td>{{ client.entreprise }}</td>
              <td>{{ client.date }}</td>
              <td>{{ client.fonction }}</td>
              <td>{{ client.telephone }}</td>
              <td>{{ client.email }}</td>
              <td>{{ client.ville }}</td>
              <td>{{ client.pays }}</td>
              <td>
                <div class="row">
                  <div class="col mb-1">
                    <BButton iconLeft="" variant="primary" class="w-100" @click="detaillerClient(client.id)">Modifier
                    </BButton>
                  </div>
                  <div class="col">
                    <BButton iconLeft="" variant="danger" class="w-100" @click="supprimerClient(client.id)">Supprimer
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
import { getClients, saveClients } from '@/services/clients-backend-service.js'

const $router = useRouter()

const clientsList = ref(getClients())

const detaillerClient = (id) => {
  $router.push({
    name: 'client',
    params: {
      id
    },
  })
}

const supprimerClient = (id) => {
  clientsList.value = clientsList.value.filter(client => client.id !== id)
  saveClients(clientsList.value)
}
</script>
