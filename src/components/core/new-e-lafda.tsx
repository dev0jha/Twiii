import React from "react";

import { SignInDialog } from "@/components/auth/sign-in-dialog";
import { Button } from "@/components/ui/button";

function NewELafda() {
  const signedIn = false;

  if (signedIn) {
    return <Button>Create New E-lafda</Button>;
  }

  return <SignInDialog triggerLabel="Create New E-lafda" />;
}
export { NewELafda };
