"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type FranchiseModalContextValue = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const FranchiseModalContext = createContext<FranchiseModalContextValue | null>(
  null
);

export function FranchiseModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FranchiseModalContext.Provider
      value={{
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
    </FranchiseModalContext.Provider>
  );
}

export function useFranchiseModal() {
  const ctx = useContext(FranchiseModalContext);
  if (!ctx) {
    throw new Error(
      "useFranchiseModal must be used within a FranchiseModalProvider"
    );
  }
  return ctx;
}
