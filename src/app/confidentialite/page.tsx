import { RESTAURANT_CONFIG } from '@/lib/constants';

export default function ConfidentialitePage() {
  return (
    <div className="pt-24 pb-16 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-playfair text-4xl text-[#1A1A1A] mb-8">
          Politique de Confidentialité
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-[#666666] mb-8">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              1. Introduction
            </h2>
            <p className="text-[#666666]">
              {RESTAURANT_CONFIG.name} s'engage à protéger la vie privée des
              utilisateurs de son site internet. Cette politique de confidentialité
              explique comment nous collectons, utilisons et protégeons vos données
              personnelles conformément au Règlement Général sur la Protection des
              Données (RGPD).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              2. Responsable du traitement
            </h2>
            <p className="text-[#666666]">
              Le responsable du traitement des données personnelles est :
              <br />
              {RESTAURANT_CONFIG.name}
              <br />
              {RESTAURANT_CONFIG.address.street}
              <br />
              {RESTAURANT_CONFIG.address.postalCode}{' '}
              {RESTAURANT_CONFIG.address.city}
              <br />
              Email : {RESTAURANT_CONFIG.email}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              3. Données collectées
            </h2>
            <p className="text-[#666666] mb-4">
              Nous collectons les données suivantes :
            </p>
            <ul className="text-[#666666] space-y-2 list-disc list-inside">
              <li>
                <strong>Données d'identification :</strong> nom, prénom, adresse
                email, numéro de téléphone
              </li>
              <li>
                <strong>Données de réservation :</strong> date, heure, nombre de
                couverts, préférences alimentaires, demandes spéciales
              </li>
              <li>
                <strong>Données de navigation :</strong> adresse IP, type de
                navigateur, pages visitées, durée de visite
              </li>
              <li>
                <strong>Données de communication :</strong> messages envoyés via
                le formulaire de contact
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              4. Finalités du traitement
            </h2>
            <p className="text-[#666666] mb-4">
              Vos données sont utilisées pour :
            </p>
            <ul className="text-[#666666] space-y-2 list-disc list-inside">
              <li>Gérer vos réservations et confirmations</li>
              <li>Répondre à vos demandes de contact</li>
              <li>
                Envoyer des communications marketing (uniquement avec votre
                consentement)
              </li>
              <li>Améliorer nos services et votre expérience utilisateur</li>
              <li>Analyser la fréquentation de notre site</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              5. Base légale du traitement
            </h2>
            <p className="text-[#666666]">
              Nous traitons vos données sur les bases légales suivantes :
            </p>
            <ul className="text-[#666666] space-y-2 list-disc list-inside mt-4">
              <li>
                <strong>Exécution d'un contrat :</strong> pour la gestion des
                réservations
              </li>
              <li>
                <strong>Consentement :</strong> pour l'envoi de newsletters et
                communications marketing
              </li>
              <li>
                <strong>Intérêt légitime :</strong> pour l'amélioration de nos
                services
              </li>
              <li>
                <strong>Obligation légale :</strong> pour la conservation des
                données comptables
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              6. Durée de conservation
            </h2>
            <p className="text-[#666666]">
              Nous conservons vos données personnelles pendant les durées
              suivantes :
            </p>
            <ul className="text-[#666666] space-y-2 list-disc list-inside mt-4">
              <li>
                <strong>Données de réservation :</strong> 3 ans après la dernière
                réservation
              </li>
              <li>
                <strong>Données de newsletter :</strong> jusqu'à votre
                désinscription
              </li>
              <li>
                <strong>Données de contact :</strong> 3 ans après le dernier
                contact
              </li>
              <li>
                <strong>Données de navigation :</strong> 13 mois maximum
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              7. Vos droits
            </h2>
            <p className="text-[#666666] mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="text-[#666666] space-y-2 list-disc list-inside">
              <li>
                <strong>Droit d'accès :</strong> obtenir une copie de vos données
              </li>
              <li>
                <strong>Droit de rectification :</strong> corriger vos données
                inexactes
              </li>
              <li>
                <strong>Droit à l'effacement :</strong> demander la suppression de
                vos données
              </li>
              <li>
                <strong>Droit à la limitation :</strong> restreindre le traitement
                de vos données
              </li>
              <li>
                <strong>Droit à la portabilité :</strong> recevoir vos données
                dans un format structuré
              </li>
              <li>
                <strong>Droit d'opposition :</strong> vous opposer au traitement
                de vos données
              </li>
              <li>
                <strong>Droit de retirer votre consentement :</strong> à tout
                moment
              </li>
            </ul>
            <p className="text-[#666666] mt-4">
              Pour exercer ces droits, contactez-nous à :{' '}
              {RESTAURANT_CONFIG.email}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              8. Cookies
            </h2>
            <p className="text-[#666666] mb-4">
              Notre site utilise des cookies pour :
            </p>
            <ul className="text-[#666666] space-y-2 list-disc list-inside">
              <li>Assurer le bon fonctionnement du site (cookies techniques)</li>
              <li>Mesurer l'audience (cookies analytiques)</li>
              <li>
                Personnaliser votre expérience (cookies de préférences)
              </li>
            </ul>
            <p className="text-[#666666] mt-4">
              Vous pouvez gérer vos préférences de cookies à tout moment via le
              bandeau de consentement ou les paramètres de votre navigateur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              9. Sécurité
            </h2>
            <p className="text-[#666666]">
              Nous mettons en œuvre des mesures techniques et organisationnelles
              appropriées pour protéger vos données contre tout accès non autorisé,
              modification, divulgation ou destruction. Notre site utilise le
              protocole HTTPS pour sécuriser les échanges de données.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              10. Transferts de données
            </h2>
            <p className="text-[#666666]">
              Vos données peuvent être transférées vers des sous-traitants situés
              en dehors de l'Union Européenne. Dans ce cas, nous nous assurons que
              des garanties appropriées sont mises en place (clauses contractuelles
              types, certification Privacy Shield, etc.).
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              11. Contact et réclamation
            </h2>
            <p className="text-[#666666]">
              Pour toute question concernant cette politique ou pour exercer vos
              droits, contactez-nous à : {RESTAURANT_CONFIG.email}
              <br />
              <br />
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez
              introduire une réclamation auprès de la CNIL (Commission Nationale de
              l'Informatique et des Libertés).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
