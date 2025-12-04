"use client";

import { CheckCircle2, Search, MapPinned, Users } from "lucide-react";

export default function CustomRealtorSection() {
  return (
    <section className="bg-neutral-950 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-neutral-800/80 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.9)] md:p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
            {/* LEFT: Copy */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-400">
                Custom Realtor & Brokerage Websites
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Feature-Rich Platforms
                <span className="block">Designed to Convert</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm text-neutral-400 md:text-base">
                We build bespoke real estate websites that are fast,
                mobile-responsive, and engineered for lead capture. Integrate
                seamlessly with IDX/MLS feeds to display live property data,
                advanced search filters, interactive maps, and secure client
                portals—everything your team needs in one modern interface.
              </p>

              <div className="mt-6 grid gap-3 text-sm text-neutral-200 sm:grid-cols-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
                  <div>
                    <p className="font-medium text-neutral-100">
                      IDX/MLS Integration
                    </p>
                    <p className="text-xs text-neutral-400">
                      Live listing data, synced feeds, and structured inventory
                      pages.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
                  <div>
                    <p className="font-medium text-neutral-100">
                      Advanced Search & Filters
                    </p>
                    <p className="text-xs text-neutral-400">
                      Price, beds/baths, neighborhood, lifestyle tags, and more.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
                  <div>
                    <p className="font-medium text-neutral-100">
                      Client Portals & Favorites
                    </p>
                    <p className="text-xs text-neutral-400">
                      Saved searches, favorited listings, and agent follow-up
                      tools.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
                  <div>
                    <p className="font-medium text-neutral-100">
                      CRM & Lead Routing
                    </p>
                    <p className="text-xs text-neutral-400">
                      Connect inquiries directly into your CRM or team inbox.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Stylized IDX mockup */}
            <div className="relative">
              {/* Glow */}
              <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-br from-emerald-500/25 via-transparent to-cyan-500/25 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/90">
                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-3">
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                    Active Listings
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-neutral-500">
                    <MapPinned className="h-3 w-3" />
                    Manhattan Beach • 3–5 Beds • $2.5M+
                  </div>
                </div>

                {/* Search + filters */}
                <div className="space-y-3 border-b border-neutral-800 px-4 py-3">
                  <div className="flex items-center gap-2 rounded-full border border-neutral-700/80 bg-neutral-900 px-3 py-1.5 text-xs text-neutral-400">
                    <Search className="h-3.5 w-3.5 text-neutral-500" />
                    <span className="truncate">
                      Search by address, MLS ID, or neighborhood…
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-[10px]">
                    <span className="rounded-full bg-neutral-900 px-3 py-1 text-neutral-300">
                      Price: $2.5M – $7M
                    </span>
                    <span className="rounded-full bg-neutral-900 px-3 py-1 text-neutral-300">
                      3–5 Beds
                    </span>
                    <span className="rounded-full bg-neutral-900 px-3 py-1 text-neutral-300">
                      Ocean View
                    </span>
                    <span className="rounded-full bg-neutral-900 px-3 py-1 text-neutral-300">
                      Open House This Week
                    </span>
                  </div>
                </div>

                {/* Property cards */}
                <div className="grid gap-3 px-4 py-4 text-xs text-neutral-200">
                  <div className="flex gap-3 rounded-xl border border-neutral-800 bg-neutral-900/80 p-3">
                    <div className="h-16 w-20 rounded-lg bg-gradient-to-br from-sky-500/50 via-emerald-500/30 to-neutral-900" />
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="font-medium text-neutral-50">
                          724 13th Street
                        </p>
                        <p className="text-[11px] text-neutral-400">
                          Manhattan Beach, CA • 6 bd • 7 ba • 4,844 sq ft
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] font-semibold text-emerald-300">
                          $5,999,000
                        </p>
                        <p className="text-[10px] text-neutral-400">
                          Lifestyle: Coastal • Luxury
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 rounded-xl border border-neutral-800/80 bg-neutral-900/60 p-3">
                    <div className="h-16 w-20 rounded-lg bg-gradient-to-br from-purple-500/35 via-sky-500/30 to-neutral-900" />
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="font-medium text-neutral-50">
                          Oceanview Terrace
                        </p>
                        <p className="text-[11px] text-neutral-400">
                          Hermosa Beach, CA • 4 bd • 4 ba
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] font-semibold text-emerald-300">
                          $3,450,000
                        </p>
                        <p className="text-[10px] text-neutral-400">
                          Hot listing • 12 saves
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom meta */}
                <div className="flex items-center justify-between border-t border-neutral-800 px-4 py-3 text-[10px] text-neutral-500">
                  <div className="flex items-center gap-1.5">
                    <Users className="h-3 w-3" />
                    <span>Agent workspace • Buyer portal • Team routing</span>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold text-emerald-300">
                    Built by Dev101Labs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
