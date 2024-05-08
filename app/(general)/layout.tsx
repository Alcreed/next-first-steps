import { Navbar } from "@/components/navbar/Navbar";

// lrc -> shortcut
export default function GeneralLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola mundo</span>
        {children}
      </main>
    </div>
  );
}