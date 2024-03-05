import { Button } from "@/shared/ui";

export function Footer() {
  return (
    <div className="flex justify-between gap-spacing-looser bg-gradient-to-r from-[#ae2896] to-[#4f9bf4] pb-spacing-tighter-2 pl-spacing-base pr-spacing-looser pt-spacing-tighter">
      <div>
        <p className="text-text-size-smaller font-bold">Extrait sur Slopify</p>
        <p className="font-semibold">
          Inscrivez-vous pour écouter titres et podcasts en illimité, avec
          quelques coupures pubs. Pas besoin de carte de crédit.
        </p>
      </div>
      <Button theme="inverted-light" className="hover:scale-105">
        S&apos;inscrire gratuitement
      </Button>
    </div>
  );
}
