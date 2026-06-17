import Image from "next/image";
import {
  UserRoundCheck,
  Lock,
  Stethoscope,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { whyChoose } from "@/data/clinic";

const iconMap = {
  "user-round-check": UserRoundCheck,
  lock: Lock,
  stethoscope: Stethoscope,
  "heart-handshake": HeartHandshake,
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-sand/40">
      <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left image */}
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-card ring-1 ring-sand">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
              alt="Compassionate consultation"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
          </div>
          <div className="absolute -bottom-6 -right-3 sm:right-6 rounded-2xl bg-white p-5 shadow-card ring-1 ring-sand max-w-[15rem]">
            <div className="flex items-center gap-2 text-primary-700">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-[family-name:var(--font-jakarta)] font-bold">
                Trusted Care
              </span>
            </div>
            <p className="mt-1.5 text-sm text-primary-900/60">
              Trusted by patients across Delhi NCR.
            </p>
          </div>
        </div>

        {/* Right content */}
        <div className="order-1 lg:order-2">
         <SectionHeading
            eyebrow="Why Choose Us"
            title="Care where you are truly heard"
            align="left"
          />
          <div className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-7">
            {whyChoose.map((item) => {
              const Icon = iconMap[item.icon] || HeartHandshake;
              return (
                <div key={item.title} className="flex gap-4">
                  <span className="grid place-items-center h-12 w-12 shrink-0 rounded-xl bg-white text-primary-700 ring-1 ring-primary-100 shadow-soft">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-primary-950">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-primary-900/60">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}