import AuthCard from "@/components/auth/AuthCard";
import MessageResetLink from "@/components/auth/EmailResetPassword";

export default function ResetLinkSent() {
  return (
    <AuthCard
      title="Check your email"
      description="We've sent you a link to reset your password."
    >
      <MessageResetLink />
    </AuthCard>
  );
}
