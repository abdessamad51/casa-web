import { redirect } from "next/navigation";

// The root page redirects to the default locale (fr)
export default function RootPage() {
  redirect("/fr");
}
