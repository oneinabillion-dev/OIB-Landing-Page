import { useSearchParams } from "react-router-dom";

const Chat = () => {
  const [searchParams] = useSearchParams();
  const prompt = searchParams.get("prompt") || "";

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">My OIB Chat</h1>
      <p className="text-muted-foreground mb-8">Your conversation space with My OIB. {prompt ? `Starting with: "${prompt}"` : ""}</p>
      
      <section className="rounded-2xl border border-border p-6 bg-background/50">
        <p className="text-sm text-muted-foreground">Chat interface coming soon.</p>
      </section>
    </main>
  );
};

export default Chat;
