import { RESTAURANT_CONFIG } from '@/lib/constants';

export default function CGVPage() {
  return (
    <div className="pt-24 pb-16 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-playfair text-4xl text-[#1A1A1A] mb-8">
          Conditions Générales de Vente et de Réservation
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-[#666666] mb-8">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              Article 1 - Objet
            </h2>
            <p className="text-[#666666]">
              Les présentes conditions générales de vente et de réservation
              régissent les relations entre {RESTAURANT_CONFIG.name} et toute
              personne effectuant une réservation ou un achat de prestation
              auprès de notre établissement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              Article 2 - Réservations
            </h2>
            <h3 className="font-semibold text-[#1A1A1A] mb-2">
              2.1 Modalités de réservation
            </h3>
            <p className="text-[#666666] mb-4">
              Les réservations peuvent être effectuées :
            </p>
            <ul className="text-[#666666] space-y-2 list-disc list-inside mb-4">
              <li>Via notre site internet</li>
              <li>Par téléphone au {RESTAURANT_CONFIG.phone}</li>
              <li>Par email à {RESTAURANT_CONFIG.email}</li>
            </ul>

            <h3 className="font-semibold text-[#1A1A1A] mb-2">
              2.2 Confirmation de réservation
            </h3>
            <p className="text-[#666666] mb-4">
              Toute réservation est confirmée par l'envoi d'un email comportant un
              numéro de confirmation. La réservation n'est effective qu'après
              réception de cet email de confirmation.
            </p>

            <h3 className="font-semibold text-[#1A1A1A] mb-2">
              2.3 Groupes
            </h3>
            <p className="text-[#666666]">
              Pour les réservations de plus de 12 personnes, veuillez nous
              contacter directement. Des conditions particulières peuvent
              s'appliquer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              Article 3 - Politique d'annulation
            </h2>
            <h3 className="font-semibold text-[#1A1A1A] mb-2">
              3.1 Annulation par le client
            </h3>
            <ul className="text-[#666666] space-y-2 list-disc list-inside mb-4">
              <li>
                <strong>Plus de 24h avant :</strong> annulation gratuite
              </li>
              <li>
                <strong>Moins de 24h avant :</strong> des frais d'annulation de
                50€ par personne pourront être appliqués
              </li>
              <li>
                <strong>Non-présentation (no-show) :</strong> facturation
                intégrale du menu précommandé ou d'un forfait de 75€ par personne
              </li>
            </ul>

            <h3 className="font-semibold text-[#1A1A1A] mb-2">
              3.2 Modification de réservation
            </h3>
            <p className="text-[#666666]">
              Toute modification (date, heure, nombre de couverts) doit être
              communiquée au moins 24h à l'avance. Au-delà, elle sera traitée
              comme une annulation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              Article 4 - Retard
            </h2>
            <p className="text-[#666666]">
              En cas de retard prévisible, nous vous prions de bien vouloir nous
              prévenir. Au-delà de 15 minutes de retard sans nouvelles de votre
              part, nous nous réservons le droit de disposer de votre table.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              Article 5 - Prix et paiement
            </h2>
            <h3 className="font-semibold text-[#1A1A1A] mb-2">5.1 Prix</h3>
            <p className="text-[#666666] mb-4">
              Les prix indiqués sur notre carte sont en euros TTC. Ils sont
              susceptibles d'être modifiés à tout moment. Les prix applicables
              sont ceux en vigueur au jour de la prestation.
            </p>

            <h3 className="font-semibold text-[#1A1A1A] mb-2">
              5.2 Modes de paiement
            </h3>
            <p className="text-[#666666]">
              Nous acceptons les modes de paiement suivants :
            </p>
            <ul className="text-[#666666] space-y-2 list-disc list-inside">
              <li>Cartes bancaires (Visa, Mastercard, American Express)</li>
              <li>Espèces</li>
              <li>Tickets restaurant (dans la limite légale)</li>
              <li>Chèques (avec pièce d'identité)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              Article 6 - Privatisation
            </h2>
            <p className="text-[#666666] mb-4">
              Pour toute demande de privatisation de nos espaces, un devis
              personnalisé sera établi. Les conditions suivantes s'appliquent :
            </p>
            <ul className="text-[#666666] space-y-2 list-disc list-inside">
              <li>
                Acompte de 30% exigé à la confirmation de la réservation
              </li>
              <li>Solde à régler le jour de l'événement</li>
              <li>
                Annulation à moins de 7 jours : acompte non remboursable
              </li>
              <li>
                Annulation à moins de 48h : facturation de 50% du montant total
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              Article 7 - Allergies et régimes spéciaux
            </h2>
            <p className="text-[#666666]">
              Il appartient au client de signaler ses allergies ou intolérances
              alimentaires lors de la réservation ou, au plus tard, à son arrivée.
              Notre équipe fera son possible pour adapter les plats, mais ne peut
              garantir l'absence totale de traces d'allergènes dans nos
              préparations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              Article 8 - Comportement
            </h2>
            <p className="text-[#666666]">
              Nous nous réservons le droit de refuser l'accès ou de demander à
              quitter l'établissement à toute personne dont le comportement serait
              jugé inapproprié ou susceptible de nuire au confort des autres
              clients.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              Article 9 - Propriété des biens
            </h2>
            <p className="text-[#666666]">
              Tout objet appartenant à l'établissement (vaisselle, mobilier,
              décoration) ne peut être emporté. En cas de dégradation ou de vol,
              le client sera tenu pour responsable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              Article 10 - Réclamations
            </h2>
            <p className="text-[#666666]">
              Toute réclamation doit être formulée pendant le repas auprès de
              notre équipe ou, au plus tard, dans les 48 heures suivant la
              prestation par email à {RESTAURANT_CONFIG.email}.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              Article 11 - Droit applicable et litiges
            </h2>
            <p className="text-[#666666]">
              Les présentes conditions sont régies par le droit français. En cas
              de litige, une solution amiable sera recherchée avant toute action
              judiciaire. À défaut, les tribunaux de Paris seront seuls
              compétents.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              Article 12 - Contact
            </h2>
            <p className="text-[#666666]">
              Pour toute question relative aux présentes conditions, vous pouvez
              nous contacter :
              <br />
              <br />
              {RESTAURANT_CONFIG.name}
              <br />
              {RESTAURANT_CONFIG.address.street}
              <br />
              {RESTAURANT_CONFIG.address.postalCode}{' '}
              {RESTAURANT_CONFIG.address.city}
              <br />
              Téléphone : {RESTAURANT_CONFIG.phone}
              <br />
              Email : {RESTAURANT_CONFIG.email}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
