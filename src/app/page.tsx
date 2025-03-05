import ClientTranslated from "@/components/client-translated";
import LocaleSelector from "@/components/locale-selector";
import { T } from "gt-next";
import Link from "next/link";

export default function Home() {
  return (
    <T>
      <main className="p-4 flex  flex-col space-y-5 items-center">
        <div className="flex space-x-3">
          <p>Select language:</p>
          <LocaleSelector />
        </div>
        <h1 className="text-2xl inline">{`What is General Translation? (translated into server component)`}</h1>
        <ClientTranslated />
        <Link
          href="https://generaltranslation.com/docs"
          className="hover:underline"
          target="_blank"
        >
          Please check the GT Docs!
        </Link>
      </main>
    </T>
  );
}
