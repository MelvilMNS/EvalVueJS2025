const factures = [
  {
    id: 1,
    date: '12/20/2021',
    description: 'Desc',
    client: 'Jean paul',
    prixht: '3400',
    prixttc: '3800',
    remise: '100',
    dejaPaye: '500',
    tva: '400',
    prestations: [
      {
        description: 'Consulting',
        quantite: 2,
        montantUnitaire: 1500,
        montantTotal: 3000
      }
    ]
  },
  {
    id: 2,
    date: '14/20/2021',
    description: 'Description',
    client: 'Jean jacques',
    prixht: '3600',
    prixttc: '3900',
    remise: '200',
    dejaPaye: '600',
    tva: '300',
    prestations: []
  },
  {
    id: 3,
    date: '12/20/2025',
    description: 'Seeds',
    client: 'Jean kevin',
    prixht: '4400',
    prixttc: '5800',
    remise: '0',
    dejaPaye: '0',
    tva: '600',
    prestations: [
      {
        description: 'Formation',
        quantite: 1,
        montantUnitaire: 4400,
        montantTotal: 4400
      }
    ]
  },
]

export default factures
