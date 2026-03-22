import AuthCard from "@/components/auth/AuthCard";
import PasswordResetForm from "@/components/auth/PasswordResetForm";

export default function ForgotPassword() {
  return (
    <AuthCard title="Reset password" description="Please enter a new password">
      <PasswordResetForm />
    </AuthCard>
  );
}
