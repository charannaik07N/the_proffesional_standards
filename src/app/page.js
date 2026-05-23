import ComponentShowcase from "@/components/ComponentShowcase";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 py-16 text-zinc-900">
      <main className="w-full max-w-4xl">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight">
            Component Test Harness
          </h1>
          <p className="mt-2 text-zinc-600">
            Live preview for the components used in the test suite.
          </p>
        </header>

        <ComponentShowcase />
      </main>
    </div>
  );
}
