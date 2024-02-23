"use client";

import { Button } from "@/shared/ui/button";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-8" variant="primary" type="submit">
      {pending ? "Loading" : "Submit"}
    </Button>
  );
};

export default SubmitButton;
