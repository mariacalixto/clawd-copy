import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-8">
      {/* HEADER */}
      <header className="flex items-center justify-between py-6">
        <span className="font-semibold">clawd</span>
        <Button variant="outline">Get started</Button>
      </header>

      {/* HERO */}
      <section className="flex flex-col items-center gap-6 py-24 text-center">
        <Badge>AI powered</Badge>

        <h1 className="text-5xl font-bold">
          Automate workflows with AI agents
        </h1>

        <Button size="lg">Start now</Button>
      </section>

      {/* FEATURES */}
      <section className="grid gap-6 md:grid-cols-3">
        {["Fast", "Secure", "Scalable"].map((item) => (
          <Card key={item}>
            <CardContent className="p-6">
              {item}
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}