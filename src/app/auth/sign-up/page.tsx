import AuthCard from "@/components/auth/AuthCard";
import SignUpForm from "@/components/auth/SignUpForm";

export default function SignUpPage() {
  return (
    <AuthCard
      title="Register"
      description="Register a new account"
      authChangeButtonLabel="Already have an account?"
      authChangeButtonLink="Login"
      authChangeButtonHref="/auth/sign-in"
      showSeparator={true}
      showSocial={true}
    >
      <SignUpForm />
    </AuthCard>
  );
}
