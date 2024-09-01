import { Analytics } from "@/components/analytics";
import { CalendarForm } from "@/components/CalendarForm";
import { InputOTPForm } from "@/components/InputOtp";
import { Drawer } from "@/components/ui/drawer";

export default function Home() {
  return (
    <main className="p-40">
      <CalendarForm />
      <InputOTPForm />
    </main>
  );
}
