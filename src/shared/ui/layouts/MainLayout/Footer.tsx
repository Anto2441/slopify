import { Button } from "@/shared/ui";

export function Footer() {
  return (
    <div className="m-2 flex justify-between gap-6 bg-gradient-to-r from-[#ae2896] to-[#4f9bf4] pb-2 pl-4 pr-6 pt-3">
      <div>
        <p className="text-sm font-bold">Extrait sur Slopify</p>
        <p className="font-semibold">
          Inscrivez-vous pour écouter titres et podcasts en illimité, avec
          quelques coupures pubs. Pas besoin de carte de crédit.
        </p>
      </div>
      <Button
        variant="secondary"
        className="hover:scale-105 xs:text-sm sm:text-base"
      >
        S'inscrire gratuitement
      </Button>
    </div>
  );
}
