import { Section } from "@/components/section";
import { FadeIn } from "@/components/animations";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions d'Utilisation | Casa Web",
};

export default function TermsPage() {
  return (
    <>
      <div className="pt-24 pb-8 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="font-display font-bold text-3xl text-slate-900">
            Conditions d&apos;utilisation
          </h1>
          <p className="text-slate-500 mt-2">Dernière mise à jour : Août 2025</p>
        </div>
      </div>
      <Section>
        <div className="max-w-3xl mx-auto prose prose-slate">
          <FadeIn>
            <h2>1. Acceptation des conditions</h2>
            <p>
              En accédant et en utilisant le site web de Casa Web (casa-web.ma), vous acceptez d&apos;être lié par ces conditions d&apos;utilisation. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser notre site.
            </p>

            <h2>2. Services proposés</h2>
            <p>
              Casa Web propose des services de développement web et mobile, référencement SEO, maintenance de sites web et hébergement VPS. Les détails de chaque prestation sont définis dans un contrat signé entre les deux parties.
            </p>

            <h2>3. Propriété intellectuelle</h2>
            <p>
              Sauf accord contraire stipulé dans le contrat de prestation, le code source, les designs et tous les livrables créés par Casa Web pour un client deviennent propriété du client après paiement intégral de la prestation.
            </p>
            <p>
              Le contenu du site casa-web.ma (textes, images, logo, code) est protégé par les droits d&apos;auteur et appartient à Casa Web.
            </p>

            <h2>4. Limitation de responsabilité</h2>
            <p>
              Casa Web s&apos;engage à livrer des prestations de qualité professionnelle. Toutefois, nous ne pouvons être tenus responsables des pertes indirectes, de perte de revenus ou de données résultant de l&apos;utilisation de nos services.
            </p>

            <h2>5. Délais et paiement</h2>
            <p>
              Les délais de livraison sont définis dans le contrat de prestation. Un acompte de 40% est généralement requis à la signature du contrat, le solde étant dû à la livraison finale. Tout retard de paiement supérieur à 15 jours entraîne des pénalités de 1.5% par mois.
            </p>

            <h2>6. Modifications</h2>
            <p>
              Casa Web se réserve le droit de modifier ces conditions à tout moment. Les modifications entrent en vigueur dès leur publication sur ce site.
            </p>

            <h2>7. Droit applicable</h2>
            <p>
              Ces conditions sont régies par le droit marocain. Tout litige sera soumis à la juridiction compétente de Casablanca, Maroc.
            </p>

            <h2>8. Contact</h2>
            <p>
              Pour toute question : <a href="mailto:contact@casa-web.ma">contact@casa-web.ma</a>
            </p>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
