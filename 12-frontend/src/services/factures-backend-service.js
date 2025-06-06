import seeds from '@/seeds/factures.js'

const STORAGE_KEY = 'factures'

// Si localStorage vide, initialisation avec seeds sinon on charge les factures depuis localStorage
export function getFactures() {
  const stored = localStorage.getItem(STORAGE_KEY)

  if (stored) {
    try {
      return JSON.parse(stored)
    } catch (e) {
      console.error('Erreur parsing localStorage factures:', e)
      return []
    }
  } else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seeds))
    return seeds
  }
}

// Fonction pour ajouter une facture
export function saveFactures(factures) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(factures))
}