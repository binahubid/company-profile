"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLegalModal } from "./legal-modal-context";
import { LEGAL_DOCUMENTS } from "@/data/legal-content";
import { LegalContentView } from "./legal-content-view";
import { useLocale } from "@/i18n/use-locale";

export function LegalModal() {
  const { modalType, closeModal } = useLegalModal();
  const locale = useLocale();
  const contentContainerRef = useRef<HTMLDivElement>(null);

  const isOpen = modalType !== null;
  const isEn = locale === "en";

  // Close on Escape key and prevent background scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, closeModal]);

  // Scroll to top whenever modal opens
  useEffect(() => {
    if (contentContainerRef.current) {
      contentContainerRef.current.scrollTop = 0;
    }
  }, [modalType]);

  if (!modalType) return null;

  const doc = LEGAL_DOCUMENTS[modalType];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/50"
            aria-hidden="true"
          />

          {/* Modal Container — Formal Professional Document Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-doc-title"
            className="relative flex flex-col w-full max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-2xl border border-gray-300 overflow-hidden z-10"
          >
            {/* Header: Formal & Professional */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 bg-white">
              <div>
                <h2
                  id="legal-doc-title"
                  className="text-base sm:text-lg font-bold text-gray-900 tracking-tight uppercase"
                >
                  {modalType === "privacy"
                    ? isEn
                      ? "PRIVACY POLICY"
                      : "KEBIJAKAN PRIVASI"
                    : isEn
                      ? "TERMS & CONDITIONS"
                      : "SYARAT & KETENTUAN PENGGUNAAN"}
                </h2>
                <p className="text-xs text-gray-500 font-normal mt-0.5">
                  PT BINAHUB SOLUSI TRANSFORMASI • Versi {doc.version} (Berlaku Efektif: {doc.effectiveDate})
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={closeModal}
                aria-label="Tutup dokumen"
                className="rounded p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Formal Document Content */}
            <div
              ref={contentContainerRef}
              className="flex-1 overflow-y-auto px-6 py-6 md:px-10 md:py-8 overscroll-contain select-text bg-white"
              style={{ scrollBehavior: "smooth" }}
            >
              <LegalContentView content={doc.contentId} />
            </div>

            {/* Footer: Formal & Professional */}
            <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-6 py-3">
              <span className="text-xs text-gray-500">
                PT Binahub Solusi Transformasi • Kontak:{" "}
                <a
                  href="mailto:info@binahub.id"
                  className="text-gray-700 underline hover:text-gray-900"
                >
                  info@binahub.id
                </a>
              </span>

              <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-100 hover:text-gray-900 transition-colors shadow-sm"
              >
                {isEn ? "Close Document" : "Tutup Dokumen"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
