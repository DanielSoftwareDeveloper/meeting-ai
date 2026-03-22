import AuthCard from "@/components/auth/AuthCard";
import SignInForm from "@/components/auth/SignInForm";

export default function SignInPage() {
  return (
    <AuthCard
      title="Login"
      description="Login to your account"
      authChangeButtonLabel="Don't have an account?"
      authChangeButtonLink="Register"
      authChangeButtonHref="/auth/sign-up"
      showSeparator={true}
      showSocial={true}
    >
      <SignInForm />
    </AuthCard>
  );
}
