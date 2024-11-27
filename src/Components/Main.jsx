import Preview from './Preview'

function Main() {
  return (
    <div id="main">
      <Preview 
        index='0' 
        title="Wall Art Works" 
        technos={['Ruby', 'Rails', 'PostgreSQL', 'pagy', 'geocoder', 'devise', 'omniauth', 'pg_search', 'rails_admin', 'stripe', 'cloudinary', 'ransack', 'bootstrap', 'docker', 'ovh', 'ngrok', 'scss' ]} 
        description="Commencé comme un projet visant à créer un modèle e-commerce personnalisable, ce projet a évolué pour devenir un site web marchand spécialisé dans la vente de tableaux générés par intelligence artificielle. Temporairement hébergée sur un VPS après la dockerisation, l'application, une fois en ligne, a été négligée en termes de suivi et de maintenance. Les contraintes techniques liées à la pixelisation des images générées à cette période ont provisoirement mis fin à cette aventure. Notre objectif n'était pas de commercialiser des œuvres dont la résolution DPI serait insuffisante une fois imprimée en grand format." 
        inclus={["CRUD Complet", "Hebergement d'image dans le cloud", "Authentification (notamment via omniAuth google facebook)", "Stripe", "barre de recherche", "tableau de bord administrateur", "formulaire de contact", "geolocalisation", "previsualisation virtuelle d'environnement", "gestion du panier", "interface de paiement externalisé"]} 
        gitlink='https://github.com/marionrobert/waw'/>

      <Preview 
        index='1' 
        title="Events Billetterie" 
        technos={['React', 'Node', 'Javascript', 'SQL', 'vite', 'redux', 'stripe', 'axios', 'qrcode', 'lazyloading', 'leaflet', 'scss', 'bcrypt', 'nodemailer', 'mysql']} 
        description="Ce projet a été réalisé dans le cadre d'une soutenance pour l'obtention d'une certification RNCP. Cette application permet à un administrateur, reconnu par un système d'authentification, de proposer des événements tels que des spectacles, des concerts en intérieur, et de vendre un certain nombre de places pour différentes dates. L'utilisateur, quant à lui, a la possibilité de choisir sur un plan de salle le ou les sièges qui lui conviennent, tout en étant informé en temps réel des sièges déjà achetés par d'autres clients. Une fois l'achat confirmé, le client reçoit un mail automatique contenant un lien et un QRCode généré automatiquement, lui permettant de le présenter à l'entrée de l'événement pour le contrôle. L'administrateur, quant à lui, a accès à un lecteur de QRCode directement relié à la base de données, avec différents types de scans possibles. Il lui est notamment possible de vérifier si le QRCode est viable, falsifié, ou s'il a déjà été précédemment scanné, évitant ainsi qu'il ne soit utilisé deux fois."  
        inclus={["Gestion des utilisateurs", "Zone administrateur", "CRUD Complet", "gestion du panier via localstorage", "base de donnée Node/SQL hebergé sur PhpMyAdmin", "lecteur intégré de QRcode", "generateur de QRcode unique", "interface de paiement intégrée à l'application", "geolocalisation", "affichage dynamique" ]} 
        gitlink='https://github.com/AurelienPREVOST/billetterie_front'/>
      
      <Preview  
        index='2'  
        title="Unreal Engine Projects"   
        technos={['Unreal Engine 4.27.2', 'Unreal Engine 5.2.3']}   
        description="Puisque le développement ne se limite pas au Web et ne se réduit pas au ''simple'' codage, j'ai décidé d'apprendre l'Unreal Engine à travers ses versions 4 et 5. Ce moteur graphique est actuellement l'un des logiciels les plus puissants et polyvalents au monde, couvrant les domaines d'application tels que le jeu vidéo, la conception 3D, l'architecture 3D, le cinéma et l'animation. Devenant de plus en plus incontournable, sa technologie de code Low-Code, qui permet la manipulation via des nœuds de briques de code préétablies en C++, en fait un outil de développement rapide, fiable et extrêmement puissant."     
        inclus={['TopDownShooter', 'Multijoueur', 'VR', '2d/3d Plateforme']}/>
    
      <Preview  
        index='3'  
        title="Crèche Petidum"   
        technos={['HTML5', 'CSS', 'FileZilla', 'OVH']}  
        description="Création d’un site web léger et intuitif, conçu pour être facilement maintenable par les employés, même en mon absence. Le site met en avant une présentation de l’établissement, une galerie photo et un encart de contact. Réalisé bénévolement, ce projet a été pensé pour offrir une solution accessible et durable, adaptée aux besoins spécifiques de la crèche."   
        inclus={[]}   
        gitlink='https://github.com/AurelienPREVOST/petidum_WIP'/>

      <Preview  
        index='4'  
        title="Logiciel CRM"   
        technos={['Angular', 'Koa']}  
        description="Dans le cadre d’un projet professionnel, j’ai participé au développement d’un logiciel CRM responsive conçu pour intégrer divers tableaux de bord interactifs. L'objectif était de fournir une vue d'ensemble des retours clients au travers de statistiques collectées lors des interactions avec un réseau de points de vente internationaux. Le logiciel permettait de visualiser les données sous forme de tableaux et de graphiques, facilitant ainsi l'analyse des tendances et des retours. Bien que le projet n'ait pas abouti à une mise en production en raison de l'absence d'accord commercial, il a permis d'explorer des technologies avancées pour la gestion de données en temps réel et l’analyse d'interactions clients. Notez que je ne peux pas partager de visuels ou d'exemples de ce projet en raison de la propriété intellectuelle associée."   
        inclus={['chart.js']}   
        gitlink=''/>

      <Preview  
        index='5'  
        title="Survey Builder and Reader"   
        technos={['NodeJS', 'Koa']}  
        description="Travaux réalisé dans un cadre professionel. Aucun visuels communicable car non détenteur de la propriété intelectuelle. Logiciel de création rapide d'enquête de satisfaction transmis par mail facilement configurable avec une dizaine de type de reponses possibles (simple / multiples / humeurs / verbatim / notation / range / curseur /double receuil : verbatim+note etc...)"   
        inclus={[]}   
        gitlink=''/>
      
      <Preview 
        index='6' 
        title="User input tracking" 
        technos={['HTML5', 'CSS', 'JS']} 
        description="Script à injecter permettant de traquer les actions de l'utilisateur. Pas très RGPD-friendly voir pas du tout, mais c'était pour le challenge. Possibilité de fetch les data vers un backend." 
        inclus={[]} 
        gitlink='https://github.com/AurelienPREVOST/TrackYourUser'/>

      <Preview 
        index='7' 
        title="Work In Progress - Boutique e-commerce configurable via fichier tiers " 
        technos={['KOA']} 
        description="L'idée du projet est de créer une application e-commerce similaire à Wix, mais spécifiquement conçue pour la vente de produits préconfigurés. Cette application serait dotée d'une base de données PostgreSQL et offrirait une solution rapide et flexible d'instanciation, permettant à chaque utilisateur de déployer facilement sa propre boutique. Le processus d'installation serait automatisé à l'aide d'un fichier de configuration JSON tiers, permettant de définir les paramètres nécessaires à l'instanciation d'une nouvelle boutique.
        L'architecture du projet repose sur plusieurs technologies :
        Docker pour l'isolation et la portabilité de l'application.
        VPS pour l’hébergement, avec déploiement automatisé sur une machine virtuelle (VM).
        NGINX comme serveur web pour rediriger les requêtes HTTP en fonction du nom de domaine vers la bonne instance de l'application.
        Cette approche permettrait d'offrir une solution clé en main pour déployer rapidement des boutiques e-commerce indépendantes, tout en assurant une gestion centralisée et flexible des configurations et des mises à jour.
        Pour des raisons budgétaire (1€HT/mois) Ionos a été choisi pour les premières experimentation." 
        inclus={['PUG','Stripe','NGINX','Docker', 'Ionos']} 
        gitlink='https://github.com/AurelienPREVOST/TrackYourUser'/>

      <Preview 
        index='8' 
        title="Pâques Quest" 
        technos={['HTML5', 'CSS', 'JS']} 
        description="Développé très rapidement pour faire sourire ma fille lors d'une promenade. Déclenche un évènement selon la geolocalisation comme l'apparition d'un animal par exemple" 
        inclus={["Géolocation"]} 
        gitlink='https://github.com/AurelienPREVOST/paques_geoloc_game'/>

      <Preview 
        index='9' 
        title="Tunnel de vente" 
        technos={['HTML5', 'CSS', 'JS']} 
        description="Tunnel de vente simple permettant d'avoir une landing page et de récolter des fonds/dons" 
        inclus={["Géolocation", "Paypal"]} 
        gitlink='https://github.com/AurelienPREVOST/TunnelVenteSimple'/>

      <Preview 
        index='10' 
        title="POC - OCR carte grise parser" 
        technos={['Node JS']} 
        description="Création d’un Proof of Concept pour simplifier les démarches de cession de véhicule à partir d’une simple photo de carte grise. Utilisation de Tesseract (OCR) pour extraire les données textuelles et les intégrer dans les formulaires CERFA nécessaires. Face aux limites techniques de l’OCR (qualité des photos et précision des champs), Puppeteer a été ajouté pour compléter les données via du web scraping. Le projet a été abandonné en raison des contraintes liées à la fiabilité des données extraites, mais il m’a permis d’approfondir mes compétences en OCR et automatisation. Une solution basée sur l’API OCR de Google pourrait être une piste d’amélioration future." 
        inclus={["tesseract", 'puppeteer']} 
        gitlink=''/>

      <Preview 
        index='11' 
        title="Power BI" 
        technos={['PowerBI']} 
        description="Dans le cadre de mes travaux professionnels, j'ai acquis une expertise avancée en Power BI ainsi qu'en Power Query, l'outil intégré pour le traitement et la transformation des données. Je suis capable de nettoyer, transformer et préparer les données grâce aux fonctionnalités de Power Query, notamment la manipulation de grands ensembles de données provenant de multiples sources.
        Concevoir des modèles de données optimisés pour l’analyse. Aussi je peux créer des rapports dynamiques et des tableaux de bord interactifs en Power BI, intégrant des visualisations avancées et des mesures personnalisées grâce au langage DAX. Cette maîtrise me permet de transformer des données brutes en informations exploitables pour accompagner efficacement les prises de décision." 
        inclus={["Data analyse", "modelisation"]} 
        gitlink='https://github.com/AurelienPREVOST/TunnelVenteSimple'/>

      <Preview 
        index='12' 
        title="JobTalend et scripting" 
        technos={['JobTalend', 'script: bash', 'script: shell', 'script: powerShell']} 
        description="Développement de nombreux scripts Bash, Shell et PowerShell pour divers besoins, notamment l’automatisation de tâches répétitives et la gestion de processus. Expérience avec Talend pour concevoir des jobs d’insertion en base de données et de collecte de logs. Ces scripts étaient exécutés régulièrement grâce à la mise en place de cron jobs, garantissant une exécution automatisée et fiable des workflows. Cette expérience m’a permis d’allier compétences en scripting et en ETL pour optimiser les processus d’intégration et de gestion des données. JobTalend a le mérite de généré du code optimisé en Java sans avoir à en coder." 
        inclus={["Data analyse", "modelisation"]} 
        gitlink=''/>

      <Preview 
        index='13' 
        title="Générateur de facture" 
        technos={['HTML5', 'CSS', 'JS']} 
        description="Outil simple et rapide permettant de généré des facture rapidement via des entrée dans le navigateur." 
        inclus={["pdf-lib"]} 
        gitlink='https://github.com/AurelienPREVOST/Invoice_easy'/>

      <Preview 
        index='14' 
        title="Pdf inputs creator" 
        technos={['SSR', 'JS', 'KOA']} 
        description="Modifiez vos PDF en y incorporant des zone de texte et/ou checkboxes de taille variable remplissable à posteriori via une visualiseuse ou via Node JS" 
        inclus={["pdf-lib"]} 
        gitlink='https://github.com/AurelienPREVOST/pdfFiller'/>


      <Preview 
        index='15' 
        title="Animaux en Realité augmenté" 
        technos={['AR JS', 'Node JS', 'express']} 
        description="Réalisation d'un livre à destination de mes filles dans lequel un scan de la trame graphique fait apparaitre sur l'ecran un animal en 3D" 
        inclus={["réalité augmenté"]} 
        gitlink='https://github.com/AurelienPREVOST/KidsAnimalsDiscover_AR'/>

      <Preview 
        index='16' 
        title="PDF toolBox" 
        technos={['AR JS', 'Node JS', 'express']} 
        description="Rapide frontend permettant de réaliser quelques operation courante avec un PDF (signature, fusion, transformation en JPEG...)" 
        inclus={["pdf-lib"]} 
        gitlink='https://github.com/AurelienPREVOST/ToolBox_PDF'/>

    </div>
  )
}

export default Main


 