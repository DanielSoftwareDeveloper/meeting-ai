import AuthCard from "@/components/auth/AuthCard";
import EmailVerification from "@/components/auth/EmailVerification";

export default function VerifyEmailPage() {
  return (
    <AuthCard
      title="Confirm your email"
      description="A confirmation email has been sent. Click the link to complete your registration."
    >
      <EmailVerification />
    </AuthCard>
  );
}
