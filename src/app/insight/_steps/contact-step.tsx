import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, Send, ShieldCheck } from "lucide-react";
import { FormData } from "../_types";
import { useLocale } from "@/i18n/use-locale";
import { useLegalModal } from "@/components/legal";

interface ContactStepProps {
  formData: FormData;
  onChange: (data: Partial<FormData>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onPrev: () => void;
  isSubmitting: boolean;
}

const COPY = {
  id: {
    title: "Konfirmasi Kontak",
    subtitle: "Pastikan email dan WhatsApp aktif agar laporan diagnostik dapat dikirim dengan benar.",
    email: "Email Profesional *",
    whatsapp: "WhatsApp Aktif *",
    emailPlaceholder: "email@perusahaan.com",
    whatsappPlaceholder: "0812xxxx",
    back: "Kembali",
    processing: "Memproses Data...",
    submit: "Submit & Selesai",
    legalConsentTitle: "Persetujuan & Kebijakan Privasi",
    agreeTermsPrivacy: "Saya telah membaca dan menyetujui",
    termsLink: "Syarat & Ketentuan",
    andText: "serta memahami",
    privacyLink: "Kebijakan Privasi",
    binahubText: "BinaHub.",
    agreeDiagnosis: "Saya memberikan persetujuan kepada PT Binahub Solusi Transformasi untuk memproses data asesmen ini untuk keperluan Diagnosa Performa.",
    agreeMarketing: "(Opsional) Saya bersedia menerima insight strategis, riset transformasi, dan penawaran program BinaHub melalui Email / WhatsApp.",
    requiredNotice: "* Wajib disetujui untuk melanjutkan pengiriman laporan.",
  },
  en: {
    title: "Contact Confirmation",
    subtitle: "Make sure your email and WhatsApp are active so the diagnostic report can be delivered correctly.",
    email: "Professional Email *",
    whatsapp: "Active WhatsApp *",
    emailPlaceholder: "name@company.com",
    whatsappPlaceholder: "+62 812xxxx",
    back: "Back",
    processing: "Processing Data...",
    submit: "Submit & Finish",
    legalConsentTitle: "Consent & Privacy Policy",
    agreeTermsPrivacy: "I have read and agree to the",
    termsLink: "Terms & Conditions",
    andText: "and understand the",
    privacyLink: "Privacy Policy",
    binahubText: "of BinaHub.",
    agreeDiagnosis: "I consent to PT Binahub Solusi Transformasi processing this assessment data for the purpose of Performance Diagnosis.",
    agreeMarketing: "(Optional) I would like to receive strategic leadership insights, transformation research, and program updates via Email / WhatsApp.",
    requiredNotice: "* Required to proceed with diagnostic report generation.",
  },
};

export function ContactStep({
  formData,
  onChange,
  onSubmit,
  onPrev,
  isSubmitting,
}: ContactStepProps) {
  const locale = useLocale();
  const copy = COPY[locale];
  const { openPrivacyModal, openTermsModal } = useLegalModal();

  const [agreeTermsPrivacy, setAgreeTermsPrivacy] = useState(false);
  const [agreeDiagnosis, setAgreeDiagnosis] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);

  const canSubmit = agreeTermsPrivacy && agreeDiagnosis && !isSubmitting;

  const inputClass =
    "w-full rounded-[12px] border border-black/10 bg-black/[0.02] px-5 py-4 text-base font-medium text-[#0B2C6B] placeholder:text-black/14 transition-all focus:border-[#0B2C6B] focus:bg-white focus:outline-none";
  const labelClass =
    "flex items-center gap-2 text-[10px] font-medium tracking-widest text-[#0B2C6B]/60 mb-2.5 uppercase";

  return (
    <motion.div
      key="contact"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="w-full max-w-2xl px-4 py-12"
    >
      <form
        onSubmit={onSubmit}
        className="rounded-[16px] border border-black/[0.04] bg-white p-8 text-left shadow-[0_18px_54px_-44px_rgba(11,44,107,0.34)] md:p-12"
      >
        <div className="mb-9 text-center">
          <h2 className="text-3xl font-light leading-tight text-[#0B2C6B] md:text-4xl">{copy.title}</h2>
          <p className="mx-auto mt-4 max-w-md text-sm font-light leading-relaxed text-black/48">
            {copy.subtitle}
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className={labelClass}>
              <Mail size={14} className="text-[#D9A441]" /> {copy.email}
            </label>
            <input
              required
              type="email"
              placeholder={copy.emailPlaceholder}
              value={formData.email}
              onChange={(e) => onChange({ email: e.target.value })}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>
              <Phone size={14} className="text-[#D9A441]" /> {copy.whatsapp}
            </label>
            <input
              required
              type="tel"
              placeholder={copy.whatsappPlaceholder}
              value={formData.whatsapp}
              onChange={(e) => onChange({ whatsapp: e.target.value })}
              className={inputClass}
            />
          </div>
        </div>

        {/* Legal Consent Section (Unbundled Consent as per UU PDP) */}
        <div className="mt-8 rounded-xl border border-black/[0.06] bg-[#0B2C6B]/[0.02] p-5 space-y-3.5">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#0B2C6B]">
            <ShieldCheck className="h-3.5 w-3.5 text-[#D9A441]" />
            <span>{copy.legalConsentTitle}</span>
          </div>

          {/* Checkbox 1: Terms & Privacy (Required) */}
          <label className="flex items-start gap-3 text-xs leading-relaxed text-black/70 cursor-pointer select-none">
            <input
              type="checkbox"
              required
              checked={agreeTermsPrivacy}
              onChange={(e) => setAgreeTermsPrivacy(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-black/20 text-[#0B2C6B] focus:ring-[#0B2C6B] accent-[#0B2C6B] cursor-pointer"
            />
            <span>
              {copy.agreeTermsPrivacy}{" "}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  openTermsModal();
                }}
                className="font-semibold text-[#0B2C6B] underline hover:text-[#D9A441] transition-colors"
              >
                {copy.termsLink}
              </button>{" "}
              {copy.andText}{" "}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  openPrivacyModal();
                }}
                className="font-semibold text-[#0B2C6B] underline hover:text-[#D9A441] transition-colors"
              >
                {copy.privacyLink}
              </button>{" "}
              {copy.binahubText} <span className="text-rose-500 font-bold">*</span>
            </span>
          </label>

          {/* Checkbox 2: Diagnostic Data Processing Consent (Required) */}
          <label className="flex items-start gap-3 text-xs leading-relaxed text-black/70 cursor-pointer select-none">
            <input
              type="checkbox"
              required
              checked={agreeDiagnosis}
              onChange={(e) => setAgreeDiagnosis(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-black/20 text-[#0B2C6B] focus:ring-[#0B2C6B] accent-[#0B2C6B] cursor-pointer"
            />
            <span>
              {copy.agreeDiagnosis} <span className="text-rose-500 font-bold">*</span>
            </span>
          </label>

          {/* Checkbox 3: Marketing Insight Consent (Optional) */}
          <label className="flex items-start gap-3 text-xs leading-relaxed text-black/60 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={agreeMarketing}
              onChange={(e) => setAgreeMarketing(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-black/20 text-[#0B2C6B] focus:ring-[#0B2C6B] accent-[#0B2C6B] cursor-pointer"
            />
            <span>{copy.agreeMarketing}</span>
          </label>

          <p className="text-[10px] text-black/40 pt-1">
            {copy.requiredNotice}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-black/[0.05] pt-6 sm:flex-row">
          <button
            type="button"
            onClick={onPrev}
            className="flex h-14 flex-1 items-center justify-center gap-2 rounded-[12px] border border-[#0B2C6B]/10 bg-white text-[11px] font-bold uppercase tracking-widest text-[#0B2C6B]/60 transition-all hover:bg-black/[0.03] hover:text-[#0B2C6B]"
          >
            <ArrowLeft size={16} /> {copy.back}
          </button>
          <button
            type="submit"
            disabled={!canSubmit}
            className="group flex h-14 flex-[2] items-center justify-center gap-3 rounded-[12px] bg-[#0B2C6B] text-[11px] font-bold uppercase tracking-widest text-white shadow-lg shadow-[#0B2C6B]/10 transition-all hover:bg-black disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-3">
                {copy.processing}
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
              </span>
            ) : (
              <span className="flex items-center gap-3">
                {copy.submit} <Send size={16} />
              </span>
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
