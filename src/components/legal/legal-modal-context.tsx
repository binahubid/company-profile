"use client";

import React, { createContext, useContext, useState, useCallback, useMemo, ReactNode } from "react";

export type LegalModalType = "privacy" | "terms" | null;

interface LegalModalContextType {
  modalType: LegalModalType;
  openPrivacyModal: () => void;
  openTermsModal: () => void;
  closeModal: () => void;
}

const LegalModalContext = createContext<LegalModalContextType | undefined>(undefined);

export function LegalModalProvider({ children }: { children: ReactNode }) {
  const [modalType, setModalType] = useState<LegalModalType>(null);

  const openPrivacyModal = useCallback(() => {
    setModalType("privacy");
  }, []);

  const openTermsModal = useCallback(() => {
    setModalType("terms");
  }, []);

  const closeModal = useCallback(() => {
    setModalType(null);
  }, []);

  const value = useMemo(
    () => ({
      modalType,
      openPrivacyModal,
      openTermsModal,
      closeModal,
    }),
    [modalType, openPrivacyModal, openTermsModal, closeModal]
  );

  return <LegalModalContext.Provider value={value}>{children}</LegalModalContext.Provider>;
}

export function useLegalModal(): LegalModalContextType {
  const context = useContext(LegalModalContext);
  if (!context) {
    throw new Error("useLegalModal must be used within a LegalModalProvider");
  }
  return context;
}
