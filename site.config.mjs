/**
 * ============================================================
 *  CONFIGURATION DU SITE — à modifier pour chaque nouveau site
 * ============================================================
 */
const config = {
  // Identité
  name: 'YogaMalin',
  url: 'https://yoga-malin.fr',
  // Logo : partie principale + partie colorée (en terracotta)
  logoPrefix: 'Yoga',
  logoSuffix: 'Malin',
  description: "YogaMalin – Conseils yoga, méditation, respiration et bien-être pour tous les niveaux, du débutant au yogi confirmé.",

  // Réseaux sociaux (laisser vide '' si inexistant)
  socials: {
    instagram: '',
    pinterest: '',
  },

  // Catégories du blog (exactement 5 recommandé)
  categories: ['Postures', 'Méditation', 'Respiration', 'Nutrition', 'Bien-être'],

  // Génération d'articles IA
  article: {
    // Qui est ce site ? (utilisé dans le prompt Claude)
    context: "un site de référence français sur le yoga, la méditation et le bien-être au quotidien, pour tous les niveaux",
    // Thématique principale des articles
    theme: "le yoga, les postures (asanas), la méditation, la pleine conscience, la respiration (pranayama), la nutrition et le bien-être global",
    // CTA de fin d'article
    cta: "Rejoindre la communauté YogaMalin et recevoir nos conseils bien-être chaque semaine",
    // Auteur affiché dans le frontmatter
    author: "Équipe YogaMalin",
    // Mot-clé ajouté aux recherches Unsplash pour cadrer les images
    unsplashContext: "yoga meditation wellness",
  },

  // Boutique Snipcart (laisser publicKey vide '' pour désactiver la boutique)
  shop: {
    enabled: true,
    publicKey: 'MmEzOWY1N2YtNTY3Yi00NGRlLWJkY2EtOTYxNjg2YWZiYjY4NjM5MTIyODc4MDUwNjU5Mzkx',
    currency: 'EUR',
  },
};

export default config;
