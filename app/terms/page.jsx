"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FAF6F2] text-[#0F0C09]">
      <section className="pt-32 pb-16 px-6 sm:px-10 lg:px-24 border-b border-[#EBE6E0]">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#FA5B16] hover:opacity-80 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="mt-10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-[8px] bg-[#FA5B16] text-white flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>

            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#FA5B16]">
              Legal
            </span>
          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] leading-[1.02]">
            Terms of Service
          </h1>

          <p className="mt-5 max-w-2xl text-base sm:text-lg text-[#0F0C09]/65 leading-relaxed">
            These Terms of Service explain the terms and conditions governing
            your use of TalentHarbor's website and remote staffing services.
          </p>

          <p className="mt-6 text-sm text-[#0F0C09]/50">
            Last updated: September 2026
          </p>
        </div>
      </section>

      <section className="py-16 px-6 sm:px-10 lg:px-24">
        <div className="max-w-5xl mx-auto space-y-12">

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              1. About TalentHarbor
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              TalentHarbor provides managed remote staffing and operational
              support services to businesses seeking dedicated professionals
              based in Pakistan. Our services may include website development,
              e-commerce operations, customer support, administrative support,
              executive assistance, warehouse and inventory support, driver
              dispatch support, returns processing, and other business
              functions agreed with the client.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              2. Acceptance of These Terms
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              By accessing the TalentHarbor website, submitting an inquiry,
              requesting staffing services, entering into a service
              arrangement, or using our services, you acknowledge that you
              have read and agree to these Terms of Service.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              If you do not agree with these Terms, you should not use our
              website or services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              3. Our Services
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              TalentHarbor works with clients to identify staffing
              requirements, source suitable professionals, conduct screening
              and interviews, and coordinate onboarding. Where agreed,
              TalentHarbor may provide office facilities, operational
              management, administrative support, and other management
              services for assigned professionals.
            </p>

            <ul className="mt-5 space-y-3 text-[15px] leading-7 text-[#0F0C09]/70 list-disc pl-6">
              <li>Website development and maintenance</li>
              <li>E-commerce store management</li>
              <li>Customer live chat support</li>
              <li>Inbound call support</li>
              <li>Email and ticket management</li>
              <li>Driver and delivery support</li>
              <li>Warehouse and inventory operations</li>
              <li>Executive and administrative assistance</li>
              <li>Returns and RMA processing</li>
              <li>Other remote business support services agreed with the client</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              4. Talent Selection and Placement
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              TalentHarbor may source and screen professionals based on the
              requirements provided by the client. Clients may be given the
              opportunity to interview and select a preferred professional
              before the engagement begins.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              While TalentHarbor uses reasonable screening procedures, no
              representation is made that every candidate will be suitable for
              every business, role, project, or working environment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              5. Client Responsibilities
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              Clients are responsible for providing accurate role
              descriptions, technical requirements, working hours, required
              skills, business procedures, and other information necessary for
              TalentHarbor to provide the requested services.
            </p>

            <ul className="mt-5 space-y-3 text-[15px] leading-7 text-[#0F0C09]/70 list-disc pl-6">
              <li>Provide clear instructions and relevant business information.</li>
              <li>Provide necessary access to approved systems and platforms.</li>
              <li>Provide appropriate training and role-specific guidance.</li>
              <li>Maintain professional communication with assigned personnel.</li>
              <li>Notify TalentHarbor of material changes to the role or requirements.</li>
              <li>Pay all agreed invoices within the applicable payment period.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              6. Working Hours and Time Zones
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              Working hours, schedules, holidays, shifts, and time-zone
              requirements will be agreed between TalentHarbor and the client.
              TalentHarbor will make reasonable efforts to align assigned
              professionals with the agreed working schedule.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              7. Fees and Payments
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              Service fees are determined according to the role, working
              hours, required skills, service scope, management requirements,
              and other factors agreed with the client.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              Pricing, billing frequency, payment deadlines, and any applicable
              additional charges will be communicated to the client before or
              during onboarding.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              Late or unpaid invoices may result in suspension of services
              until the outstanding balance has been resolved.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              8. Trial Period
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              Where a trial period is offered, its duration and applicable
              terms will be communicated before the engagement begins. A trial
              period allows the client and TalentHarbor to evaluate whether the
              selected professional and service arrangement are suitable.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              Unless expressly stated otherwise in a written agreement, a
              trial period does not guarantee continued service after the trial
              ends.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              9. Confidentiality
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              TalentHarbor understands that clients may provide confidential
              business information, customer information, technical
              information, operational processes, credentials, and other
              commercially sensitive material.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              TalentHarbor will use reasonable measures to protect confidential
              information and will only use such information as reasonably
              necessary to provide the agreed services, subject to applicable
              agreements and law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              10. Account and System Access
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              Where a client provides access to third-party platforms,
              applications, websites, customer systems, or other business
              tools, the client is responsible for providing appropriate
              permissions and access levels.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              Clients should not provide unnecessary administrative access,
              payment credentials, or other sensitive information where such
              access is not required for the agreed services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              11. Intellectual Property
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              Unless otherwise agreed in writing, ownership of deliverables
              specifically created for a client will be determined by the
              applicable service agreement and payment terms.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              Pre-existing software, frameworks, templates, tools, processes,
              libraries, know-how, and other materials owned or licensed by
              TalentHarbor or third parties remain subject to their existing
              ownership and licensing rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              12. Acceptable Use
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              Clients must not use TalentHarbor services for unlawful,
              fraudulent, abusive, deceptive, or malicious activities.
            </p>

            <ul className="mt-5 space-y-3 text-[15px] leading-7 text-[#0F0C09]/70 list-disc pl-6">
              <li>Illegal activities or unlawful transactions</li>
              <li>Fraud, impersonation, or deceptive practices</li>
              <li>Unauthorized access to systems or data</li>
              <li>Activities designed to compromise or damage systems</li>
              <li>Harassment, discrimination, or abusive conduct</li>
              <li>Any activity that violates applicable law or third-party rights</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              13. Third-Party Platforms
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              Our professionals may work with third-party platforms such as
              Shopify, WordPress, WooCommerce, Magento, ShipStation, Zendesk,
              Freshdesk, HubSpot, Slack, Google Workspace, Microsoft Teams,
              ClickUp, Stripe, and other software selected by the client.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              TalentHarbor is not responsible for outages, changes, security
              incidents, pricing changes, account restrictions, or other
              issues caused by third-party platforms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              14. Service Availability
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              TalentHarbor will make reasonable efforts to provide agreed
              services consistently. However, service availability may be
              affected by circumstances outside our reasonable control,
              including internet outages, infrastructure failures, public
              emergencies, third-party service interruptions, power outages,
              or other unforeseen circumstances.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              15. Replacement of Assigned Professionals
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              If an assigned professional becomes unavailable or is determined
              to be unsuitable for the agreed role, TalentHarbor may work with
              the client to identify a replacement, subject to availability and
              the terms of the applicable service agreement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              16. Termination
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              Either party may terminate a service arrangement in accordance
              with the notice period and termination conditions agreed between
              the parties.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              TalentHarbor may suspend or terminate services where a client
              fails to make required payments, violates these Terms, engages in
              unlawful activity, or creates a material security or operational
              risk.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              17. Limitation of Liability
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              To the extent permitted by applicable law, TalentHarbor will not
              be liable for indirect, incidental, special, consequential, or
              loss-of-profit damages arising from the use of our services or
              from circumstances outside our reasonable control.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              Nothing in these Terms is intended to exclude or limit liability
              where such exclusion or limitation is prohibited by applicable
              law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              18. No Guarantee of Business Results
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              TalentHarbor provides staffing and operational support services.
              We do not guarantee specific revenue, sales, rankings,
              conversions, business growth, customer acquisition, or other
              commercial results unless expressly stated in a separate written
              agreement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              19. Changes to These Terms
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              TalentHarbor may update these Terms from time to time to reflect
              changes to our services, business operations, legal requirements,
              or other relevant circumstances.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              The updated version will be published on this page with a revised
              effective date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              20. Governing Law
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              These Terms shall be interpreted and applied in accordance with
              the laws applicable to TalentHarbor and the relevant service
              arrangement, subject to any separate written agreement between
              TalentHarbor and the client.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              21. Contact Us
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#0F0C09]/70">
              If you have questions about these Terms of Service or our
              services, please contact TalentHarbor.
            </p>

            <div className="mt-6 rounded-[10px] border border-[#EBE6E0] bg-white p-6">
              <p className="font-bold text-lg">TalentHarbor</p>

              <a
                href="mailto:business@talentharbor.net"
                className="inline-block mt-3 text-[#FA5B16] font-semibold hover:underline"
              >
                business@talentharbor.net
              </a>

              <p className="mt-2 text-sm text-[#0F0C09]/60">
                Lahore, Pakistan
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
