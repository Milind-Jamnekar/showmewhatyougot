import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto space-y-3 text-center">
          <h3 className="text-yellow-600  font-semibold">404</h3>
          <p className="text-gray-800 dark:text-gray-400 text-4xl font-semibold sm:text-5xl"></p>
          <p className="text-gray-600 dark:text-gray-500">
            Bro i think you lost somewhere, let me hold your pp.. hmm.. i mean
            hand to get back your home... What ? you don`&apos;`t trust me ?
            fine click below it will teleport you to home, jeez.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="block py-2 px-4 text-white font-medium bg-yellow-700 duration-150 hover:bg-yellow-600 active:bg-yellow-700 rounded-lg"
            >
              My mums home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
