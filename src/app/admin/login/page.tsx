import { redirect } from "next/navigation";

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://app.binahub.id";

export default function AdminLoginRedirectPage() {
  redirect(`${appUrl}/admin/login`);
}
