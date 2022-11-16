import { Link } from "@remix-run/react";

export default function Parent() {
  return (
    <main>
      <Link
        to="/parent/child"
        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
      >
        View Child
      </Link>
    </main>
  );
}
