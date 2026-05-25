"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { Tag } from "@/components/ui/tag";
import { PixelIcon } from "@/components/pixel-icon";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Nama lengkap wajib diisi";
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Pesan wajib diisi";
    } else if (formData.message.length < 5) {
      newErrors.message = "Pesan minimal harus 5 karakter";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setServerMessage(data.message || "Pesan Anda berhasil dikirim!");
        setFormData({ name: "", email: "", whatsapp: "", message: "" });
      } else {
        setStatus("error");
        setServerMessage(data.error || "Terjadi kesalahan saat mengirim pesan.");
      }
    } catch (error) {
      console.error("[Submit Contact Error]", error);
      setStatus("error");
      setServerMessage("Gagal terhubung ke server. Silakan coba kembali.");
    }
  };

  return (
    <div className="bg-[#F5F7FA] min-h-screen pt-28 pb-20 px-6 md:px-12 lg:px-16">
      {/* Decorative Glow Ambient Orbs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#D9A441]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-[#3B82F6]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Hero Section */}
        <div className="mb-16 text-left max-w-3xl">
          <div className="mt-2">
            <Tag>HUBUNGI KAMI</Tag>
          </div>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#0B2C6B] leading-[1.1]">
            Mari Berdiskusi Mengenai <br />
            <span className="font-semibold text-[#0B2C6B]">Transformasi Organisasi Anda</span>
          </h1>
          <p className="mt-6 text-lg text-black/45 leading-relaxed font-light">
            Tim konsultan ahli BinaHub siap mendengarkan tantangan bisnis Anda, merancang ekosistem pembelajaran strategis, dan mengakselerasi masa depan kapabilitas tim Anda.
          </p>
        </div>

        {/* main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact Cards & Map */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            
            {/* Info Badges Card */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.02)] flex flex-col gap-6">
              <h2 className="text-xl font-bold text-[#0B2C6B] tracking-tight mb-2">Informasi Kontak</h2>
              
              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-2xl bg-[#D9A441]/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#D9A441]" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-[#0B2C6B]/40 uppercase tracking-widest mb-1">Lokasi Kantor</span>
                  <p className="text-[#0B2C6B]/70 leading-relaxed text-sm font-light">
                    Kencana Tower, Level Mezzanine<br />
                    Jl. Raya Meruya Ilir No. 88, Business Park Kebon Jeruk<br />
                    Meruya Utara, Kembangan, Jakarta Barat 11620
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-2xl bg-[#D9A441]/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[#D9A441]" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-[#0B2C6B]/40 uppercase tracking-widest mb-1">Email Pertanyaan</span>
                  <a href="mailto:info@binahub.id" className="text-[#0B2C6B] hover:text-[#D9A441] transition-colors font-medium text-sm">
                    info@binahub.id
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-2xl bg-[#D9A441]/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[#D9A441]" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-[#0B2C6B]/40 uppercase tracking-widest mb-1">Telepon</span>
                  <a href="tel:02129601514" className="text-[#0B2C6B] hover:text-[#D9A441] transition-colors font-medium text-sm">
                    021-29601514
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/50 bg-white/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.02)] h-[280px] lg:h-full min-h-[250px]">
              <iframe
                title="BinaHub Office - Kencana Tower, Business Park Kebon Jeruk, Jakarta Barat"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7963243964685!2d106.74600407586469!3d-6.193820660990527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7b2e93a0f5b%3A0x3c8b7c4f2d1a5e9c!2sJl.%20Raya%20Meruya%20Ilir%20No.88%2C%20Meruya%20Utara%2C%20Kembangan%2C%20Jakarta%20Barat!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Column: Inquiry Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white/90 backdrop-blur-2xl border border-white rounded-3xl p-8 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.03)] h-full flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-12 px-4 h-full"
                  >
                    <CheckCircle2 size={64} className="text-emerald-500 mb-6" />
                    <h2 className="text-2xl font-bold text-[#0B2C6B] tracking-tight mb-4">Pesan Berhasil Terkirim!</h2>
                    <p className="text-black/45 text-sm max-w-md leading-relaxed mb-8">
                      {serverMessage} Tim konsultan strategis kami akan meninjau inquiry Anda dan merespons dalam waktu 1x24 jam kerja.
                    </p>
                    
                    {/* Secondary Direct WA Option */}
                    <div className="bg-[#F5F7FA] rounded-2xl p-6 border border-black/[0.04] w-full max-w-sm">
                      <p className="text-[11px] font-bold text-[#0B2C6B]/40 uppercase tracking-widest mb-3">Butuh Respons Cepat?</p>
                      <p className="text-xs text-black/60 mb-4 leading-relaxed">
                        Anda juga dapat langsung menghubungi kami melalui telepon atau email resmi.
                      </p>
                      <a 
                        href="tel:02129601514"
                        className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl bg-[#0B2C6B] text-white font-bold text-xs hover:bg-[#0a2255] transition-colors shadow-[0_4px_12px_rgba(11,44,107,0.2)] mb-2"
                      >
                        021-29601514
                      </a>
                    </div>

                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-8 text-xs font-bold text-[#0B2C6B]/60 hover:text-[#0B2C6B] underline tracking-widest uppercase transition-colors"
                    >
                      Kirim Formulir Baru
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-6"
                  >
                    <div>
                      <h2 className="text-xl font-bold text-[#0B2C6B] tracking-tight mb-1">Formulir Pertanyaan</h2>
                      <p className="text-xs text-black/40">Lengkapi formulir di bawah ini untuk memulai kolaborasi.</p>
                    </div>

                    {/* Server Error Alert */}
                    {status === "error" && (
                      <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-100 rounded-xl text-rose-800 text-xs">
                        <AlertCircle size={18} className="shrink-0 text-rose-500" />
                        <p>{serverMessage}</p>
                      </div>
                    )}

                    {/* Name Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[10px] font-bold text-[#0B2C6B]/60 tracking-wider uppercase">
                        Nama Lengkap <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Contoh: Budi Santoso"
                        className={`w-full px-4 py-3 rounded-xl border bg-black/[0.01] text-sm text-[#0B2C6B] outline-none transition-all duration-300 ${
                          errors.name 
                            ? "border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500" 
                            : "border-black/[0.08] focus:border-[#D9A441] focus:ring-1 focus:ring-[#D9A441]"
                        }`}
                      />
                      {errors.name && <span className="text-[10px] text-rose-500 font-medium">{errors.name}</span>}
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[10px] font-bold text-[#0B2C6B]/60 tracking-wider uppercase">
                        Email Kerja <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Contoh: budi@perusahaan.com"
                        className={`w-full px-4 py-3 rounded-xl border bg-black/[0.01] text-sm text-[#0B2C6B] outline-none transition-all duration-300 ${
                          errors.email 
                            ? "border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500" 
                            : "border-black/[0.08] focus:border-[#D9A441] focus:ring-1 focus:ring-[#D9A441]"
                        }`}
                      />
                      {errors.email && <span className="text-[10px] text-rose-500 font-medium">{errors.email}</span>}
                    </div>

                    {/* WhatsApp Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="whatsapp" className="text-[10px] font-bold text-[#0B2C6B]/60 tracking-wider uppercase">
                        Nomor WhatsApp <span className="text-black/30 font-normal">(Opsional)</span>
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        placeholder="Contoh: 0812XXXXXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-black/[0.08] bg-black/[0.01] text-sm text-[#0B2C6B] outline-none focus:border-[#D9A441] focus:ring-1 focus:ring-[#D9A441] transition-all duration-300"
                      />
                    </div>

                    {/* Message Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-[10px] font-bold text-[#0B2C6B]/60 tracking-wider uppercase">
                        Pesan Anda <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tuliskan tantangan, kebutuhan, atau pertanyaan mengenai organisasi Anda secara lengkap..."
                        className={`w-full px-4 py-3 rounded-xl border bg-black/[0.01] text-sm text-[#0B2C6B] outline-none resize-none transition-all duration-300 ${
                          errors.message 
                            ? "border-rose-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500" 
                            : "border-black/[0.08] focus:border-[#D9A441] focus:ring-1 focus:ring-[#D9A441]"
                        }`}
                      />
                      {errors.message && <span className="text-[10px] text-rose-500 font-medium">{errors.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="mt-4 inline-flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl bg-[#0B2C6B] text-white font-bold text-sm hover:bg-[#D9A441] hover:text-[#0B2C6B] transition-all duration-300 disabled:bg-[#0B2C6B]/40 disabled:cursor-not-allowed group shadow-[0_4px_16px_rgba(11,44,107,0.15)]"
                    >
                      {status === "loading" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sedang Mengirim Pesan...</span>
                        </>
                      ) : (
                        <>
                          <span>Kirim Inquiry Sekarang</span>
                          <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>

                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
