"use client";

import React from "react";
import Link from "next/link";
import { GoogleLogoIcon, XLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

function SignInDialog({ triggerLabel }: { triggerLabel: string }) {
  return (
    <Dialog>
      <DialogTrigger className={cn(buttonVariants({ variant: "default" }))}>
        {triggerLabel}
      </DialogTrigger>

      <DialogContent className="font-poppins rounded-none rounded-t-2xl px-0 sm:max-w-lg md:rounded-2xl">
        <DialogHeader className="px-6 pt-6 text-left">
          <DialogTitle className="font-semibold tracking-tight">
            Sign In to Continue
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-base">
            Access your account and create new e-lafdas.
          </DialogDescription>
        </DialogHeader>

        <div className="px-6 py-4">
          <div className="flex flex-col gap-4">
            <Button
              variant={"outline"}
              className="h-12 w-full justify-center rounded-md border-2 text-base font-semibold"
            >
              <GoogleLogoIcon weight="bold" className="size-4" />
              Continue with Google
            </Button>
            <div className="text-muted-foreground flex items-center gap-3 px-2 text-xs font-semibold tracking-tight uppercase">
              <span className="bg-border h-px flex-1" />
              or
              <span className="bg-border h-px flex-1" />
            </div>
            <Button
              variant={"outline"}
              className="h-12 w-full justify-center rounded-md border-2 text-base font-semibold"
            >
              <XLogoIcon weight="bold" className="size-4" />
              Continue with X
            </Button>
          </div>
        </div>

        <DialogFooter className="border-border/60 text-muted-foreground inline border-t px-6 pt-4 text-center text-sm text-pretty">
          By continuing, you agree to our{" "}
          <Link className="cursor-pointer font-medium underline" href="/terms">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            className="cursor-pointer font-medium underline"
            href="/privacy"
          >
            Privacy Policy
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export { SignInDialog };
