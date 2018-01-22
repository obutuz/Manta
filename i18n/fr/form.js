export default {
  header: {
    name: 'Créer une nouvelle facture',
    btns: {
      clear: 'Effacer',
      update: 'Mettre à jour',
      saveAndPreview: 'Sauvegarder & Aperçu',
    },
  },
  settings: {
    name: 'Réglage du formulaire',
    hint: 'Appuyer pour Afficher/Masquer un champ de donnée.',
  },
  fields: {
    items: {
      name: 'Produit/Service',
      description: 'Description',
      price: 'Prix',
      quantity: 'Quantité',
      add: 'Ajouter un nouvel article',
    },
    recipient: {
      name: 'Titulaire',
      select: 'Sélectionner',
      add: 'Créer un nouveau contact',
      fullname: 'Nom et prénom',
      company: 'Compagnie',
      email: 'Email',
      phone: 'Numéro de téléphone',
    },
    discount: {
      name: 'Remise',
      percentage: 'Pourcentage',
      flat: 'Remise directe',
    },
    dueDate: {
      name: "Échéance",
      placeHolder: 'Sélectionner une date',
    },
    tax: {
      name: 'Taxe',
      id: 'Numéro fiscal',
      method: 'Méthode',
      reverse: 'Autoliquidation',
    },
    note: {
      name: 'Remarque',
    },
    currency: {
      name: 'Devise',
    },
  },
  common: {
    default: 'Par défaut',
    amount: 'Montant',
    saveAsDefault: 'Sauvegarder par défaut?',
  },
};