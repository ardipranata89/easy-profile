import { footerConfig as footer } from "../../Data/config";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-xl px-2 py-4 absolute inset-x-0">
      <div className="flex justify-center mt-4">
        <p className="text-base tracking-wide dark:text-stone-400">{footer.text}</p>
      </div>
    </footer>
  );
}
