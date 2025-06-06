import seeds from '@/seeds/clients.js'

const STORAGE_KEY = 'clients'

// Si localStorage vide, initialisation avec seeds sinon on charge les clients depuis localStorage
export function getClients() {
  const stored = localStorage.getItem(STORAGE_KEY)

  if (stored) {
    try {
      return JSON.parse(stored)
    } catch (e) {
      console.error('Erreur parsing localStorage clients:', e)
      return []
    }
  } else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seeds))
    return seeds
  }
}

// Fonction pour ajouter une client
export function saveClients(clients) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(clients))
}