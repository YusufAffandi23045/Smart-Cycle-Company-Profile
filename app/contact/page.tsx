"use client";

import Image from "next/image";
import { submitContact } from "./actions";
import SubmitButton from "./SubmitButton";
import { useActionState } from "react";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [state, formAction] = useActionState(submitContact, null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (state?.message) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  }, [state]);

  return (
    <div>
      {showPopup && (
        <div className={`popup ${state?.success ? "success" : "error"}`}>
          {state?.message}
        </div>
      )}

      <section className="contact-section">
        
        <div className="contact-left">
          <h1 className="contact-title">Contact Us</h1>

          <div className="contact-info">
            <p><strong>Email:</strong> smartcycle@gmail.com</p>
            <p><strong>Telepon:</strong> +62 812-3456-7890</p>
            <p><strong>Alamat:</strong> Sidoarjo, Jawa Timur, Indonesia</p>
          </div>

          <p className="contact-desc">
            Jika Anda memiliki pertanyaan atau ingin mengetahui lebih lanjut
            tentang layanan Smart Cycle, hubungi kami melalui email atau telepon.
            Kami siap membantu Anda!
          </p>

          <form action={formAction} className="contact-form">

            {/* NAME */}
            <div className="field-wrap">
              <input
                type="text"
                name="name"
                placeholder="Nama Anda"
                className={`contact-input ${state?.errors?.name ? "input-error" : ""}`}
              />
              {state?.errors?.name && (
                <p className="field-error">{state.errors.name}</p>
              )}
            </div>

            {/* EMAIL */}
            <div className="field-wrap">
              <input
                type="email"
                name="email"
                placeholder="Email Anda"
                className={`contact-input ${state?.errors?.email ? "input-error" : ""}`}
              />
              {state?.errors?.email && (
                <p className="field-error">{state.errors.email}</p>
              )}
            </div>

            {/* MESSAGE */}
            <div className="field-wrap">
              <textarea
                name="message"
                placeholder="Pesan Anda"
                rows={4}
                className={`contact-input ${state?.errors?.message ? "input-error" : ""}`}
              />
              {state?.errors?.message && (
                <p className="field-error">{state.errors.message}</p>
              )}
            </div>

            <SubmitButton />
          </form>
        </div>

        <div className="contact-right">
          <Image
            src="/images/Contact_Us.jpg"
            alt="Contact Smart Cycle"
            width={550}
            height={400}
            className="contact-img"
          />
        </div>

      </section>
    </div>
  );
}