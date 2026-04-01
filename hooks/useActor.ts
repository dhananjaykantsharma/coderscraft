"use client";

type ContactActor = {
  submitContactForm: (name: string, email: string, message: string) => Promise<void>;
};

export function useActor(): { actor: ContactActor | null } {
  const actor: ContactActor = {
    async submitContactForm() {
      // Stub: replace with your backend later
    },
  };

  return { actor };
}

