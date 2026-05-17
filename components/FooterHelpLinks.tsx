import Link from "next/link";

export function FooterHelpLinks() {
  return (
    <div>
      <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
        Help
      </h3>
      <ul className="space-y-2">
        <li>
          <Link
            href="/contact"
            className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/faq"
            className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm"
          >
            FAQ
          </Link>
        </li>
        <li>
          <Link
            href="/privacy-policy"
            className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm"
          >
            Kebijakan Privasi
          </Link>
        </li>
      </ul>
    </div>
  );
}
