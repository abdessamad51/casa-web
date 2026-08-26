import { Section } from "@/components/section";
import { FadeIn } from "@/components/animations";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Casa Web",
};

export default function PrivacyPage() {
  return (
    <>
      <div className="pt-24 pb-8 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="font-display font-bold text-3xl text-slate-900">
            Politique de confidentialité
          </h1>
          <p className="text-slate-500 mt-2">Dernière mise à jour : Août 2025</p>
        </div>
      </div>
      <Section>
        <div className="max-w-3xl mx-auto prose prose-slate">
          <FadeIn>
            <h2>1. Collecte des données</h2>
            <p>
              Casa Web collecte uniquement les données personnelles que vous nous fournissez volontairement via notre formulaire de contact : nom, adresse email, numéro de téléphone et message. Ces données sont utilisées exclusivement pour répondre à vos demandes.
            </p>

            <h2>2. Utilisation des données</h2>
            <p>
              Les données collectées sont utilisées pour :
            </p>
            <ul>
              <li>Répondre à vos demandes de contact ou de devis</li>
              <li>Améliorer nos services et votre expérience utilisateur</li>
              <li>Analyser le trafic du site (via Google Analytics, de manière anonymisée)</li>
            </ul>

            <h2>3. Cookies</h2>
            <p>
              Notre site utilise des cookies de performance (Google Analytics) pour comprendre comment les visiteurs interagissent avec notre site. Ces cookies ne stockent aucune information personnellement identifiable. Vous pouvez refuser les cookies via notre bandeau de consentement.
            </p>

            <h2>4. Partage des données</h2>
            <p>
              Nous ne vendons, ne louons ni ne partageons vos données personnelles avec des tiers, sauf obligation légale ou pour les prestataires de services essentiels (hébergement, envoi d'emails) qui sont soumis à des engagements de confidentialité stricts.
            </p>

            <h2>5. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.
            </p>

            <h2>6. Vos droits</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et aux lois marocaines applicables, vous avez le droit d&apos;accéder, de corriger ou de supprimer vos données personnelles. Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@casa-web.ma">contact@casa-web.ma</a>
            </p>

            <h2>7. Contact</h2>
            <p>
              Pour toute question relative à cette politique de confidentialité, contactez-nous :<br />
              Email : contact@casa-web.ma<br />
              Adresse : Casablanca, Maroc
            </p>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
