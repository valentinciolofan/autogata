// Redirect /contract → /contract/step-1
import { redirect } from "next/navigation";

export default function ContractIndexPage() {
  redirect("/contract/step-1");
}
