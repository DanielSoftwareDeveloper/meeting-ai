import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AuthChangeButton from "./AuthChangeButton";
import AuthSeparator from "./AuthSeparator";
import AuthSocial from "./AuthSocial";

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
  authChangeButtonLabel?: string;
  authChangeButtonLink?: string;
  authChangeButtonHref?: string;
  showSocial?: boolean;
  showSeparator?: boolean;
}

function AuthCard({
  children,
  title,
  description,
  authChangeButtonLabel,
  authChangeButtonLink,
  authChangeButtonHref,
  showSocial = false,
  showSeparator = false,
}: Props) {
  return (
    <Card className="bg-background py-5 gap-y-5">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {children}
        {showSeparator && <AuthSeparator />}
        {showSocial && <AuthSocial />}
      </CardContent>
      {authChangeButtonLabel &&
        authChangeButtonLink &&
        authChangeButtonHref && (
          <CardFooter className="text-center">
            <AuthChangeButton
              label={authChangeButtonLabel}
              link={authChangeButtonLink}
              href={authChangeButtonHref}
            />
          </CardFooter>
        )}
    </Card>
  );
}
export default AuthCard;
