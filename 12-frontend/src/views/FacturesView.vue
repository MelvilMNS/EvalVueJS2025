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
            <tr>
              <th scope="row">12/20/2021</th>
              <td>Desc</td>
              <td>0000</td>
              <td>Jean paul</td>
              <td>3400,00€</td>
              <td>4800,00€</td>
              <td>
                <div class="row">
                  <div class="col">
                    <BButton iconLeft="" variant="primary" class="w-100" @click="$router.push('/facture/patch')">Modifier
                    </BButton>
                  </div>
                  <div class="col">
                    <BButton iconLeft="" variant="danger" class="w-100" @click="$router.push('/facture/delete')">Supprimer
                    </BButton>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">12/20/2021</th>
              <td>Desc</td>
              <td>0000</td>
              <td>Jean paul</td>
              <td>3400,00€</td>
              <td>4800,00€</td>
              <td>
                <div class="row">
                  <div class="col">
                    <BButton iconLeft="" variant="primary" class="w-100" @click="$router.push('/facture/patch')">Modifier
                    </BButton>
                  </div>
                  <div class="col">
                    <BButton iconLeft="" variant="danger" class="w-100" @click="$router.push('/facture/delete')">Supprimer
                    </BButton>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">12/20/2021</th>
              <td>Desc</td>
              <td>0000</td>
              <td>Jean paul</td>
              <td>3400,00€</td>
              <td>4800,00€</td>
              <td>
                <div class="row">
                  <div class="col">
                    <BButton iconLeft="" variant="primary" class="w-100" @click="$router.push('/facture/patch')">Modifier
                    </BButton>
                  </div>
                  <div class="col">
                    <BButton iconLeft="" variant="danger" class="w-100" @click="$router.push('/facture/delete')">Supprimer
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