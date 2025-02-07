import { WavyBackground } from "@/components/ui/wavy-background";


export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center bg-black">
      <WavyBackground className="absolute inset-0" />
    </main>
  );
}
