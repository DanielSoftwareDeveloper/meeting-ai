import AuthCard from "@/components/auth/AuthCard";
import PasswordForgotForm from "@/components/auth/PasswordForgotForm";

export default function ForgotPassword() {
  return (
    <AuthCard
      title="Forgot password"
      description="We are going to send you an email"
      authChangeButtonLabel="Remembered your password?"
      authChangeButtonLink="Login"
      authChangeButtonHref="/auth/sign-in"
    >
      <PasswordForgotForm />
    </AuthCard>
  );
}
