import { buttonVariants } from "../../inputs/Button/Button";
import { Link } from "../../navigation";

export function Footer() {
  return (
    <div className="flex justify-between gap-spacing-looser bg-gradient-to-r from-[#ae2896] to-[#4f9bf4] pb-spacing-tighter-2 pl-spacing-base pr-spacing-looser pt-spacing-tighter">
      <div>
        <p className="text-font-size-smaller font-bold">Extrait sur Slopify</p>

        <p className="font-semibold">
          Inscrivez-vous pour écouter titres et podcasts en illimité, avec
          quelques coupures pubs. Pas besoin de carte de crédit.
        </p>
      </div>

      <Link href="#" className={buttonVariants({ variant: "inverted-light" })}>
        S&apos;inscrire gratuitement
      </Link>
    </div>
  );
}
