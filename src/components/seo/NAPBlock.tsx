import React from "react";
import { BUSINESS } from "@/lib/seo/business-data";
import { MapPin, Phone, MessageCircle, Camera } from "lucide-react";

export type NAPVariant = "footer" | "visit" | "support";

export function NAPBlock({
  variant = "footer",
  className = "",
}: {
  variant?: NAPVariant;
  className?: string;
}) {
  const isFooter = variant === "footer";

  return (
    <div
      className={`nap-block ${className}`}
      itemScope
      itemType="https://schema.org/Restaurant"
    >
      <meta itemProp="name" content={BUSINESS.name} />
      <meta itemProp="telephone" content={BUSINESS.phoneTel} />

      {/* GeoCoordinates Block */}
      <div
        itemProp="geo"
        itemScope
        itemType="https://schema.org/GeoCoordinates"
        className="hidden"
      >
        <meta itemProp="latitude" content={BUSINESS.latitude.toString()} />
        <meta itemProp="longitude" content={BUSINESS.longitude.toString()} />
      </div>

      <div
        itemProp="address"
        itemScope
        itemType="https://schema.org/PostalAddress"
        className={
          isFooter
            ? "text-brown-mid font-body text-[0.95rem] leading-[1.8]"
            : "flex flex-col gap-2.5"
        }
      >
        {isFooter ? (
          <div className="flex flex-col gap-3 mb-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
              <span className="font-bold text-sm text-charcoal">
                <span itemProp="streetAddress">{BUSINESS.street}</span>
                <br />
                <span itemProp="postalCode">{BUSINESS.postalCode}</span>{" "}
                <span itemProp="addressLocality">{BUSINESS.city}</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-terracotta shrink-0" />
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="font-bold text-sm text-charcoal hover:text-terracotta transition-colors"
              >
                {BUSINESS.phone}
              </a>
            </div>
          </div>
        ) : (
          <>
            {/* Visit / Support Variant */}
            <div className="bg-beige rounded-[15px] p-[13px_17px] flex gap-[13px] items-center">
              <div className="w-[38px] h-[38px] bg-terracotta rounded-full flex items-center justify-center shrink-0">
                <MapPin size={16} color="#fefefe" strokeWidth={2} />
              </div>
              <div>
                <div className="font-body font-black text-[0.74rem] text-bark-soft uppercase tracking-[0.8px] mb-[1px]">
                  Adresse
                </div>
                <span className="font-body font-bold text-[0.88rem] text-brown">
                  <span itemProp="streetAddress">{BUSINESS.street}</span>,{" "}
                  <span itemProp="postalCode">{BUSINESS.postalCode}</span>{" "}
                  <span itemProp="addressLocality">{BUSINESS.city}</span>
                </span>
              </div>
            </div>

            <div className="bg-beige rounded-[15px] p-[13px_17px] flex gap-[13px] items-center">
              <div className="w-[38px] h-[38px] bg-terracotta rounded-full flex items-center justify-center shrink-0">
                <Phone size={16} color="#fefefe" strokeWidth={2} />
              </div>
              <div>
                <div className="font-body font-black text-[0.74rem] text-bark-soft uppercase tracking-[0.8px] mb-[1px]">
                  Telefon
                </div>
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="font-body font-bold text-[0.88rem] text-brown no-underline"
                >
                  {BUSINESS.phone}
                </a>
              </div>
            </div>

            <div className="bg-beige rounded-[15px] p-[13px_17px] flex gap-[13px] items-center">
              <div className="w-[38px] h-[38px] bg-terracotta rounded-full flex items-center justify-center shrink-0">
                <MessageCircle size={16} color="#fefefe" strokeWidth={2} />
              </div>
              <div>
                <div className="font-body font-black text-[0.74rem] text-bark-soft uppercase tracking-[0.8px] mb-[1px]">
                  WhatsApp
                </div>
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp}`}
                  className="font-body font-bold text-[0.88rem] text-brown no-underline"
                >
                  {BUSINESS.whatsappDisplay}
                </a>
              </div>
            </div>

            <div className="bg-beige rounded-[15px] p-[13px_17px] flex gap-[13px] items-center">
              <div className="w-[38px] h-[38px] bg-terracotta rounded-full flex items-center justify-center shrink-0">
                <Camera size={16} color="#fefefe" strokeWidth={2} />
              </div>
              <div>
                <div className="font-body font-black text-[0.74rem] text-bark-soft uppercase tracking-[0.8px] mb-[1px]">
                  Instagram
                </div>
                <a
                  href={BUSINESS.instagramUrl}
                  className="font-body font-bold text-[0.88rem] text-brown no-underline"
                >
                  @{BUSINESS.instagram}
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
