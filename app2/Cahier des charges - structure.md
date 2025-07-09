# **Cahier des Charges Ultime pour Agent IA – Site Web Noveo Logistics**

## **1\. Vision Stratégique & Concept Directeur**

* Concept Fondamental : "La Simplicité Sophistiquée".  
  Le site doit réaliser la fusion de deux identités :  
  1. **Modernité "Tech" (Inspiration Ovrsea) :** Interface épurée, expérience utilisateur fluide, mise en avant de la plateforme digitale.  
  2. **Confiance "Corporate" (Inspiration Kinaxis) :** Contenu riche, démonstration d'expertise, design structuré qui inspire la crédibilité.  
* Message Clé : "La Logistique Augmentée".  
  Le fil rouge narratif est la synergie parfaite entre une expertise humaine pointue et une technologie digitale puissante. La technologie n'est pas une fin, mais un amplificateur de l'intelligence métier. Ce message doit transparaître dans chaque page, visuel et texte.  
* **Objectif Principal :** Générer des leads B2B qualifiés en établissant Noveo comme une autorité crédible et un partenaire stratégique. Le design doit être au service de la conversion.

## **2\. Système de Design (Design System) \- Fondations Obligatoires**

Ce système doit être appliqué de manière rigoureuse sur l'ensemble du site pour garantir la cohérence.

### **a. Palette de Couleurs**

* **Primaire (Confiance, Stature) :** \#1D2F4E (Bleu Noveo). Usage : Titres H1, fonds de sections importantes (KPIs, footer), éléments structurants.  
* **Secondaire (Technologie, Modernité) :** \#96C2B8 (Teal Noveo). Usage : Sous-titres, icônes, arrière-plans de cartes de témoignages, éléments graphiques.  
* **Accent (Action, Conversion) :** \#EE9323 (Orange Vif). **Usage exclusif et impératif** pour les CTA principaux ("Demander un devis", "Envoyer") et les liens les plus importants pour un contraste maximal.  
* **Neutres (Clarté, Structure) :**  
  * Fond : \#F8FAFC (Blanc cassé).  
  * Texte courant : \#4A5568 (Gris foncé).  
  * Bordures / Séparateurs : \#EAEFF3 (Gris clair).

### **b. Système Typographique**

* **Police des Titres (H1-H4) : Poppins**. Graisses : Bold (700), SemiBold (600). Pour les titres, accroches, et chiffres clés (KPIs).  
* **Police du Corps de Texte : Inter**. Graisse : Regular (400). Pour les paragraphes, labels, et tout texte dense.  
* **Échelle Typographique (Exemple à suivre) :**  
  * H1 : 48px, Poppins Bold  
  * H2 : 36px, Poppins Bold  
  * H3 : 24px, Poppins SemiBold  
  * Corps de texte : 16px, Inter Regular  
  * Texte secondaire / Labels : 14px, Inter Regular

### **c. Iconographie & Visuels**

* **Icônes : Style "Line-art" (filaire)**. Fines, précises, géométriques. Renforce l'idée de technologie et de précision.  
* **Photographies (Direction Artistique) :**  
  1. **Infrastructures Modernes :** Photos lumineuses de ports, aéroports, porte-conteneurs.  
  2. **Humain Professionnel :** **Pas de photos de stock génériques.** Mettre en scène de vrais collaborateurs en situation de travail pour incarner "l'expertise humaine".  
  3. **Maquettes UI de la plateforme :** Visuels de haute qualité de l'interface digitale de Noveo. C'est un élément clé pour rendre la technologie tangible.

### **d. Éléments Globaux (Header & Footer)**

* **Header (En-tête) :**  
  * **Comportement : "Sticky"** (fixe en haut au défilement).  
  * **Structure :** Logo à gauche, navigation (Qui sommes-nous, Solutions, Industries, Blog) au centre, CTA principal **"Demander un devis"** (bouton orange) à droite.  
* **Footer (Pied de page) :**  
  * **Structure :** Riche, 4 colonnes (Logo/mission, Plan du site, Coordonnées des agences, Liens utiles/sociaux).  
  * **Élément de confiance obligatoire :** Une section dédiée en bas avec les logos des certifications : **OEA, IATA, RDE**.

## **3\. Instructions Détaillées par Page & Composant**

### **a. Page d'Accueil (Priorité Maximale)**

* **Section "Hero" (Bannière) :**  
  * **Titre (H1) :** "Optimisez vos flux. Dépensez moins. Agissez mieux."  
  * **CTA Principal :** "Demandez une étude gratuite de vos flux".  
  * **Visuel :** Vidéo de fond de haute qualité et discrète (ex: porte-conteneurs, avion-cargo) ou photo panoramique à fort impact.  
* **Section "Notre Mission / Plateforme Digitale" (Section la plus importante) :**  
  * **Objectif :** Montrer la synergie "humain \+ digital".  
  * **Structure :** Layout en deux colonnes.  
    * **Gauche :** Texte expliquant comment la plateforme digitale soutient l'équipe d'experts, avec une liste à puces des bénéfices ("Visualisez vos flux", "Alertes proactives"...).  
    * **Droite :** **Maquette animée de l'interface de la plateforme Noveo.** C'est un élément visuel clé. L'animation doit montrer des actions simples (login, suivi de carte, etc.). Ne pas utiliser une simple image statique.  
* **Composant "KPI Dynamiques" :**  
  * **Objectif :** Renforcer la crédibilité avec des chiffres forts.  
  * **Fonctionnalité :** Utiliser des **compteurs animés en JavaScript** qui augmentent de 0 à la valeur finale lorsque la section devient visible à l'écran.  
  * **KPIs :** "+500 Ports", "25.000 tonnes de fret", "15 Minutes temps de réponse", "250 chargeurs".  
* **Section "Preuve Sociale" :**  
  * Combiner un carrousel de logos clients et 2-3 témoignages mis en avant dans des cartes au design soigné (fond Teal \#96C2B8).

### **b. Page "Qui sommes-nous"**

* **Composant "Notre Histoire" \- Timeline Interactive (Élément Clé) :**  
  * **Concept :** Présenter l'histoire de l'entreprise via une **timeline verticale interactive**.  
  * **Fonctionnement :** Au défilement, des points apparaissent sur une ligne centrale, déclenchant l'affichage de blocs de contenu (date, texte, image) sur les côtés. Cela transforme une lecture passive en exploration et démontre la maîtrise du digital.  
* **Section "Nos Piliers" & "Notre Équipe" :**  
  * Utiliser des grilles de cartes pour présenter les 3 piliers de l'expertise et les portraits des membres de l'équipe.

### **c. Modèles de Pages "Solutions" & "Industries"**

* **Structure de la Page de Détail :**  
  * Layout en deux colonnes.  
  * **Colonne principale (70%) :** Contenu riche de la page (description, atouts...).  
  * **Colonne latérale (30%) :** Panneau de contrôle avec un **CTA contextuel** ("Parler à un expert en logistique \[Secteur\]") et des liens vers d'autres services/industries pour encourager la navigation croisée.

### **d. Blog & Modèle d'Article**

* **Lisibilité :** Largeur de colonne de texte optimisée (max 800px) pour le confort de lecture.  
* **Intégration SEO Obligatoire :**  
  * Prévoir un composant **"FAQ"** à la fin de chaque article pour cibler les "featured snippets".  
  * Intégrer un **CTA final contextuel** en lien avec le sujet de l'article pour la conversion (ex: "Besoin d'aide pour vos Incoterms ? Contactez un expert.").

## **4\. Composants Interactifs & Animations**

* **Principe :** Les animations doivent être subtiles, servir un but (guider, informer) et renforcer la perception de "Simplicité Sophistiquée".  
* **Animations à Implémenter :**  
  * **Animations d'entrée au défilement :** Léger fondu \+ translation vers le haut (fade-in-up) pour les sections et les cartes.  
  * **Effets de survol (hover) :** Sur tous les éléments cliquables (boutons, cartes, liens) pour une meilleure réactivité (ex: léger agrandissement, changement de couleur).  
  * **Utiliser des fichiers Lottie (animations vectorielles légères) :** Pour expliquer des processus complexes (ex: transport multimodal, chaîne du froid). C'est une méthode très efficace pour visualiser des concepts abstraits sans alourdir la page.

## **5\. Fondations Techniques & SEO (Non Négociable)**

* **Performance :** Le site doit être extrêmement rapide.  
  * **Objectif :** Score Google PageSpeed Insights \> 90\.  
  * **Actions :** Optimisation des images (format WebP), minification CSS/JS, lazy loading.  
* **Responsive Design :** Expérience parfaite sur mobile, tablette et bureau (approche "mobile-first").  
* **Accessibilité :** Respecter les standards WCAG (contrastes, textes alternatifs alt pour toutes les images, navigation au clavier).  
* **Implémentation SEO On-Page :**  
  * **Structure HTML :** Un seul \<h1\> par page, contenant le mot-clé principal. Utilisation sémantique des balises \<h2\>, \<h3\>, etc.  
  * **Métadonnées :** Le CMS doit permettre de personnaliser les balises title et meta description pour chaque page.  
  * **Données Structurées (Schema.org) :** Implémenter le balisage suivant :  
    * Organization (sur tout le site).  
    * LocalBusiness (pour les agences de Paris, HK, Guangzhou sur la page contact).  
    * Service (pour chaque page de la section "Solutions").  
    * Article (pour chaque article de blog).  
    * FAQPage (pour les sections FAQ).  
      C'est crucial pour améliorer la visibilité sur Google.