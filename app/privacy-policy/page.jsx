
"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen mt-[-100px] pt-[20px] bg-[#FAF6F2] text-[#0F0C09]">
      <section className="pt-32 pb-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#FA5B16] hover:opacity-80 transition"
            >
              ← Back to Home
            </Link>
          </div>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[7px] bg-[#FA5B16] text-white text-[11px] font-extrabold uppercase tracking-widest">
              Privacy Policy
            </span>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] leading-tight">
              Your Privacy Matters to TalentHarbor
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#0F0C09]/70 leading-relaxed max-w-3xl">
              TalentHarbor respects your privacy and is committed to protecting
              the personal information you provide when using our website,
              contacting our team, or exploring our remote staffing services.
            </p>

            <p className="mt-4 text-sm text-[#0F0C09]/55">
              Last Updated: September 2026
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[220px_1fr] gap-10">
            <aside className="hidden lg:block">
              <div className="sticky top-10 rounded-[10px] bg-white border border-[#EBE6E0] p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-[#FA5B16] mb-4">
                  Contents
                </p>

                <nav className="space-y-3 text-sm">
                  <a href="#information" className="block hover:text-[#FA5B16]">
                    Information We Collect
                  </a>
                  <a href="#use" className="block hover:text-[#FA5B16]">
                    How We Use Information
                  </a>
                  <a href="#sharing" className="block hover:text-[#FA5B16]">
                    Information Sharing
                  </a>
                  <a href="#cookies" className="block hover:text-[#FA5B16]">
                    Cookies
                  </a>
                  <a href="#security" className="block hover:text-[#FA5B16]">
                    Data Security
                  </a>
                  <a href="#retention" className="block hover:text-[#FA5B16]">
                    Data Retention
                  </a>
                  <a href="#rights" className="block hover:text-[#FA5B16]">
                    Your Rights
                  </a>
                  <a href="#third-party" className="block hover:text-[#FA5B16]">
                    Third-Party Services
                  </a>
                  <a href="#children" className="block hover:text-[#FA5B16]">
                    Children's Privacy
                  </a>
                  <a href="#changes" className="block hover:text-[#FA5B16]">
                    Policy Changes
                  </a>
                  <a href="#contact" className="block hover:text-[#FA5B16]">
                    Contact Us
                  </a>
                </nav>
              </div>
            </aside>

            <article className="bg-white border border-[#EBE6E0] rounded-[12px] p-6 sm:p-8 lg:p-10">
              <div className="flex items-start gap-4 p-5 rounded-[10px] bg-[#FAF6F2] border border-[#EBE6E0] mb-10">
                <div className="flex-shrink-0 w-10 h-10 rounded-[7px] bg-[#FA5B16] text-white flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>

                <div>
                  <h2 className="text-base font-bold mb-1">
                    Our Privacy Commitment
                  </h2>
                  <p className="text-sm text-[#0F0C09]/65 leading-relaxed">
                    We only collect information that is reasonably necessary
                    to communicate with you, understand your staffing
                    requirements, provide our services, and improve your
                    experience with TalentHarbor.
                  </p>
                </div>
              </div>

              <section id="information" className="scroll-mt-10 mb-10">
                <h2 className="text-2xl font-bold mb-4">
                  1. Information We Collect
                </h2>

                <p className="text-sm sm:text-base text-[#0F0C09]/70 leading-7 mb-4">
                  When you interact with TalentHarbor, we may collect
                  information that you voluntarily provide to us. This may
                  include:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#0F0C09]/70 leading-7">
                  <li>Your name and business or company name.</li>
                  <li>Email address and other contact information.</li>
                  <li>Your staffing requirements and role specifications.</li>
                  <li>Information about your preferred working hours or timezone.</li>
                  <li>Information you provide when requesting a consultation.</li>
                  <li>Information submitted through contact forms or email.</li>
                  <li>Other information you voluntarily provide to us.</li>
                </ul>

                <p className="text-sm sm:text-base text-[#0F0C09]/70 leading-7 mt-4">
                  We may also automatically collect limited technical
                  information when you visit our website, such as browser type,
                  device information, pages visited, approximate usage
                  information, and similar website analytics data.
                </p>
              </section>

              <section id="use" className="scroll-mt-10 mb-10">
                <h2 className="text-2xl font-bold mb-4">
                  2. How We Use Your Information
                </h2>

                <p className="text-sm sm:text-base text-[#0F0C09]/70 leading-7 mb-4">
                  TalentHarbor may use the information we collect for purposes
                  including:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#0F0C09]/70 leading-7">
                  <li>Responding to your inquiries and consultation requests.</li>
                  <li>Understanding your staffing and operational requirements.</li>
                  <li>Identifying suitable remote talent for requested roles.</li>
                  <li>Communicating with you regarding our services.</li>
                  <li>Providing onboarding and account support.</li>
                  <li>Improving our website, services, and customer experience.</li>
                  <li>Maintaining website security and preventing misuse.</li>
                  <li>Complying with applicable legal or regulatory obligations.</li>
                </ul>
              </section>

              <section id="sharing" className="scroll-mt-10 mb-10">
                <h2 className="text-2xl font-bold mb-4">
                  3. Information Sharing
                </h2>

                <p className="text-sm sm:text-base text-[#0F0C09]/70 leading-7 mb-4">
                  TalentHarbor does not sell your personal information.
                </p>

                <p className="text-sm sm:text-base text-[#0F0C09]/70 leading-7 mb-4">
                  We may share information when reasonably necessary to operate
                  our business and provide requested services. This may include
                  trusted service providers who assist with website hosting,
                  communications, analytics, technology, or other business
                  operations.
                </p>

                <p className="text-sm sm:text-base text-[#0F0C09]/70 leading-7">
                  Information may also be disclosed where required by law, to
                  protect our legal rights, to prevent fraud or abuse, or in
                  connection with a legitimate business transaction.
                </p>
              </section>

              <section id="cookies" className="scroll-mt-10 mb-10">
                <h2 className="text-2xl font-bold mb-4">
                  4. Cookies and Analytics
                </h2>

                <p className="text-sm sm:text-base text-[#0F0C09]/70 leading-7 mb-4">
                  TalentHarbor may use cookies and similar technologies to help
                  operate the website, understand website usage, remember
                  preferences, and improve website performance.
                </p>

                <p className="text-sm sm:text-base text-[#0F0C09]/70 leading-7">
                  Depending on the tools implemented on the website, third-party
                  analytics or service providers may process limited technical
                  information about website visitors.
                </p>
              </section>

              <section id="security" className="scroll-mt-10 mb-10">
                <h2 className="text-2xl font-bold mb-4">
                  5. Data Security
                </h2>

                <p className="text-sm sm:text-base text-[#0F0C09]/70 leading-7">
                  We take reasonable administrative, technical, and
                  organizational measures to protect personal information from
                  unauthorized access, misuse, alteration, disclosure, or
                  destruction. However, no method of transmission or electronic
                  storage can be guaranteed to be completely secure.
                </p>
              </section>

              <section id="retention" className="scroll-mt-10 mb-10">
                <h2 className="text-2xl font-bold mb-4">
                  6. Data Retention
                </h2>

                <p className="text-sm sm:text-base text-[#0F0C09]/70 leading-7">
                  We retain personal information only for as long as reasonably
                  necessary for the purposes described in this Privacy Policy,
                  including providing services, maintaining business records,
                  resolving disputes, enforcing agreements, and satisfying
                  applicable legal obligations.
                </p>
              </section>

              <section id="rights" className="scroll-mt-10 mb-10">
                <h2 className="text-2xl font-bold mb-4">
                  7. Your Privacy Rights
                </h2>

                <p className="text-sm sm:text-base text-[#0F0C09]/70 leading-7 mb-4">
                  Depending on your location and applicable law, you may have
                  rights regarding your personal information, including the
                  right to:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#0F0C09]/70 leading-7">
                  <li>Request access to personal information we hold about you.</li>
                  <li>Request correction of inaccurate information.</li>
                  <li>Request deletion of certain personal information.</li>
                  <li>Request information about how your data is processed.</li>
                  <li>Withdraw consent where processing is based on consent.</li>
                  <li>Object to certain forms of processing where permitted by law.</li>
                </ul>

                <p className="text-sm sm:text-base text-[#0F0C09]/70 leading-7 mt-4">
                  Requests can be submitted using the contact information
                  provided below. We may need to verify your identity before
                  completing certain requests.
                </p>
              </section>

              <section id="third-party" className="scroll-mt-10 mb-10">
                <h2 className="text-2xl font-bold mb-4">
                  8. Third-Party Services and Links
                </h2>

                <p className="text-sm sm:text-base text-[#0F0C09]/70 leading-7">
                  Our website may use third-party services or contain links to
                  external websites. These third parties operate under their
                  own privacy policies and terms. TalentHarbor is not
                  responsible for the privacy practices, content, or security of
                  third-party websites or services.
                </p>
              </section>

              <section id="children" className="scroll-mt-10 mb-10">
                <h2 className="text-2xl font-bold mb-4">
                  9. Children's Privacy
                </h2>

                <p className="text-sm sm:text-base text-[#0F0C09]/70 leading-7">
                  TalentHarbor's services are intended for businesses and
                  professional users. Our website is not directed toward
                  children, and we do not knowingly collect personal
                  information from children.
                </p>
              </section>

              <section id="international" className="scroll-mt-10 mb-10">
                <h2 className="text-2xl font-bold mb-4">
                  10. International Data Processing
                </h2>

                <p className="text-sm sm:text-base text-[#0F0C09]/70 leading-7">
                  TalentHarbor operates from Pakistan and works with businesses
                  and clients in different countries. As a result, information
                  you provide may be processed or stored in Pakistan or in other
                  countries where our service providers operate. By using our
                  website or contacting us, you acknowledge that such
                  international processing may occur, subject to applicable
                  privacy laws.
                </p>
              </section>

              <section id="changes" className="scroll-mt-10 mb-10">
                <h2 className="text-2xl font-bold mb-4">
                  11. Changes to This Privacy Policy
                </h2>

                <p className="text-sm sm:text-base text-[#0F0C09]/70 leading-7">
                  We may update this Privacy Policy from time to time to reflect
                  changes to our services, technology, business practices, or
                  applicable legal requirements. Any updated version will be
                  posted on this page with a revised "Last Updated" date.
                </p>
              </section>

              <section id="contact" className="scroll-mt-10">
                <h2 className="text-2xl font-bold mb-4">
                  12. Contact TalentHarbor
                </h2>

                <p className="text-sm sm:text-base text-[#0F0C09]/70 leading-7 mb-6">
                  If you have questions about this Privacy Policy, want to
                  request access to your personal information, or want to
                  exercise an applicable privacy right, please contact us.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <a
                    href="mailto:business@talentharbor.net"
                    className="flex items-center gap-3 p-4 rounded-[9px] bg-[#FAF6F2] border border-[#EBE6E0] hover:border-[#FA5B16] transition"
                  >
                    <div className="w-9 h-9 rounded-[7px] bg-[#FA5B16] text-white flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>

                    <div>
                      <p className="text-xs text-[#0F0C09]/50 mb-1">
                        Email
                      </p>
                      <p className="text-sm font-semibold">
                        business@talentharbor.net
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-4 rounded-[9px] bg-[#FAF6F2] border border-[#EBE6E0]">
                    <div className="w-9 h-9 rounded-[7px] bg-[#FA5B16] text-white flex items-center justify-center">
                      <MapPin className="w-4 h-4" />
                    </div>

                    <div>
                      <p className="text-xs text-[#0F0C09]/50 mb-1">
                        Location
                      </p>
                      <p className="text-sm font-semibold">
                        Lahore, Pakistan
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
