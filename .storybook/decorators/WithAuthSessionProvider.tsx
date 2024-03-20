import { type Decorator } from "@storybook/react";

import { AuthSessionProvider } from "@/auth/providers/session-provider";

export const WithAuthSessionProvider: Decorator = (Story) => {
  return (
    <AuthSessionProvider>
      <Story />
    </AuthSessionProvider>
  );
};
