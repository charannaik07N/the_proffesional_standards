"use client";

import Button from "@/components/Button";
import Card from "@/components/Card";
import Counter from "@/components/Counter";
import Input from "@/components/Input";
import UserList from "@/components/UserList";

export default function ComponentShowcase() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Button</h2>
        <div className="mt-4">
          <Button text="Click Me" onClick={() => {}} />
        </div>
      </section>

      <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Card</h2>
        <div className="mt-4">
          <Card title="Test Card" description="Card description" />
        </div>
      </section>

      <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Input</h2>
        <div className="mt-4">
          <Input value="" onChange={() => {}} />
        </div>
      </section>

      <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Counter</h2>
        <div className="mt-4">
          <Counter />
        </div>
      </section>

      <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm sm:col-span-2">
        <h2 className="text-lg font-semibold">User List (Mocked Fetch)</h2>
        <div className="mt-4">
          <UserList />
        </div>
      </section>
    </div>
  );
}
