import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactElement } from "react";
import SignUpForm from "./sign-up-form";

export function SignUpDialog({ trigger }: { trigger: ReactElement }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white !rounded-[10px] p-[15px] sm:p-[30px] flex flex-col gap-4">
        <DialogHeader className="flex flex-col gap-2">
          <DialogTitle className="text-primary-blue text-h2-mobile md:text-h2">
            Sign Up
          </DialogTitle>
          <DialogDescription className="textprimary-grey text-description">
            Sign up to receive updates and sneak peeks of upcoming features.
          </DialogDescription>
        </DialogHeader>
        <SignUpForm />
      </DialogContent>
    </Dialog>
  );
}
