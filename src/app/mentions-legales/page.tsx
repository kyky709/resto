import { RESTAURANT_CONFIG } from '@/lib/constants';

export default function MentionsLegalesPage() {
  return (
    <div className="pt-24 pb-16 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-playfair text-4xl text-[#1A1A1A] mb-8">
          Mentions Légales
        </h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              1. Éditeur du site
            </h2>
            <p className="text-[#666666] mb-4">
              Le site {RESTAURANT_CONFIG.name} est édité par :
            </p>
            <ul className="text-[#666666] space-y-2">
              <li>
                <strong>Raison sociale :</strong> {RESTAURANT_CONFIG.name} SAS
              </li>
              <li>
                <strong>Siège social :</strong>{' '}
                {RESTAURANT_CONFIG.address.street},{' '}
                {RESTAURANT_CONFIG.address.postalCode}{' '}
                {RESTAURANT_CONFIG.address.city}
              </li>
              <li>
                <strong>Téléphone :</strong> {RESTAURANT_CONFIG.phone}
              </li>
              <li>
                <strong>Email :</strong> {RESTAURANT_CONFIG.email}
              </li>
              <li>
                <strong>SIRET :</strong> 123 456 789 00012
              </li>
              <li>
                <strong>RCS :</strong> Paris B 123 456 789
              </li>
              <li>
                <strong>TVA Intracommunautaire :</strong> FR 12 345678901
              </li>
              <li>
                <strong>Directeur de la publication :</strong> Pierre Dubois
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              2. Hébergement
            </h2>
            <p className="text-[#666666]">
              Le site est hébergé par :
              <br />
              Vercel Inc.
              <br />
              340 S Lemon Ave #4133
              <br />
              Walnut, CA 91789
              <br />
              États-Unis
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              3. Propriété intellectuelle
            </h2>
            <p className="text-[#666666] mb-4">
              L'ensemble des éléments composant ce site (textes, graphismes,
              logiciels, photographies, images, sons, plans, logos, marques, etc.)
              sont la propriété exclusive de {RESTAURANT_CONFIG.name} ou de ses
              partenaires.
            </p>
            <p className="text-[#666666]">
              Toute reproduction, représentation, modification, publication ou
              adaptation de tout ou partie des éléments du site, quel que soit le
              moyen ou le procédé utilisé, est interdite, sauf autorisation écrite
              préalable de {RESTAURANT_CONFIG.name}.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              4. Limitation de responsabilité
            </h2>
            <p className="text-[#666666] mb-4">
              {RESTAURANT_CONFIG.name} s'efforce d'assurer au mieux de ses
              possibilités l'exactitude et la mise à jour des informations
              diffusées sur ce site.
            </p>
            <p className="text-[#666666]">
              Toutefois, {RESTAURANT_CONFIG.name} ne peut garantir l'exactitude, la
              précision ou l'exhaustivité des informations mises à disposition sur
              ce site et décline toute responsabilité pour toute imprécision,
              inexactitude ou omission portant sur des informations disponibles sur
              ce site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              5. Liens hypertextes
            </h2>
            <p className="text-[#666666]">
              Le site peut contenir des liens hypertextes vers d'autres sites
              internet. {RESTAURANT_CONFIG.name} n'exerce aucun contrôle sur ces
              sites et décline toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              6. Droit applicable
            </h2>
            <p className="text-[#666666]">
              Les présentes mentions légales sont régies par le droit français. En
              cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl text-[#1A1A1A] mb-4">
              7. Crédits
            </h2>
            <p className="text-[#666666]">
              <strong>Conception et développement :</strong> [Nom de l'agence]
              <br />
              <strong>Photographies :</strong> [Nom du photographe]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
