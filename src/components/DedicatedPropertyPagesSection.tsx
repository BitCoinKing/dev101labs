"use client";

import { MousePointerClick, Video, MapPinned, Activity } from "lucide-react";

export default function DedicatedPropertyPagesSection() {
  return (
    <section className="bg-neutral-950 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            Dedicated Property Marketing Pages
          </h2>
          <p className="mx-auto max-w-3xl text-center text-sm text-neutral-400 md:text-base">
            Give every listing its own high-converting digital home. We design
            cinematic landing pages that showcase the story, lifestyle, and
            stats behind each property—all wired for lead capture.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* LEFT: Property landing page mockup */}
          <div className="relative">
            {/* Glow */}
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-500/25 via-transparent to-cyan-500/25 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950/95 shadow-[0_24px_60px_rgba(15,23,42,0.95)]">
              {/* Top "cover" image area */}
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-sky-500/50 via-indigo-500/40 to-neutral-950 sm:h-48 md:h-56">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(255,255,255,0.25)_0,transparent_40%),radial-gradient(circle_at_90%_100%,rgba(56,189,248,0.65)_0,transparent_55%)] mix-blend-screen" />
                <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-end justify-between gap-3 text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-emerald-300">
                      For Sale • Coastal Residence
                    </p>
                    <p className="mt-1 text-xl font-semibold sm:text-2xl">
                      724 13th Street
                    </p>
                    <p className="text-[11px] text-neutral-100/85">
                      Manhattan Beach, California
                    </p>
                  </div>
                  <div className="text-right text-xs">
                    <p className="text-[11px] font-semibold text-emerald-300">
                      $5,999,000
                    </p>
                    <p className="text-[11px] text-neutral-100/85">
                      6 Beds • 7 Baths • 4,844 Sq Ft
                    </p>
                    <p className="mt-1 rounded-full bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-amber-300">
                      Request Private Showing
                    </p>
                  </div>
                </div>
              </div>

              {/* Body content mock */}
              <div className="grid gap-6 border-t border-neutral-800 bg-neutral-950 px-5 py-5 sm:px-6 sm:py-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
                    Lifestyle Snapshot
                  </p>
                  <p className="text-sm text-neutral-300">
                    In the heart of the Manhattan Beach hill section, this
                    newly built coastal home blends modern design with refined
                    craftsmanship, elevator access on all levels, and sweeping
                    ocean views designed for effortless entertaining.
                  </p>

                  <div className="mt-3 grid grid-cols-2 gap-3 text-[11px] text-neutral-300">
                    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 px-3 py-2">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                        Residence
                      </p>
                      <p className="mt-1 font-medium">
                        Single-family • Three levels & elevator
                      </p>
                    </div>
                    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 px-3 py-2">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                        Lot & Location
                      </p>
                      <p className="mt-1 font-medium">
                        Approx. 2,999 sq ft • Walk to schools & beach
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
                    Conversion Blocks
                  </p>
                  <div className="space-y-2 text-[11px] text-neutral-200">
                    <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/80 px-3 py-2">
                      <span>Schedule a Private Tour</span>
                      <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold text-emerald-300">
                        Primary CTA
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/80 px-3 py-2">
                      <span>Download Property Brochure (PDF)</span>
                      <span className="rounded-full bg-cyan-500/10 px-2 py-1 text-[10px] font-semibold text-cyan-300">
                        Lead Capture
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/80 px-3 py-2">
                      <span>Share with Buyer</span>
                      <span className="rounded-full bg-neutral-800 px-2 py-1 text-[10px] font-semibold text-neutral-300">
                        Easy Share Link
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer strip */}
              <div className="flex items-center justify-between border-t border-neutral-800 bg-neutral-950/95 px-5 py-3 text-[10px] text-neutral-500">
                <span>Sample property experience designed by Dev101Labs</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold text-emerald-300">
                  Single-Listing Microsite
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Copy + bullets */}
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-3xl">
              High-Converting Pages for Every Listing
            </h3>
            <p className="mt-4 text-sm text-neutral-400 md:text-base">
              Drive targeted traffic and capture high-intent leads with custom
              landing pages built for individual properties. Designed for
              maximum conversion, these pages combine cinematic visuals, clear
              property storytelling, and frictionless calls to action.
            </p>

            <div className="mt-6 space-y-4 text-sm text-neutral-200">
              <div className="flex items-start gap-3">
                <MousePointerClick className="mt-0.5 h-5 w-5 text-emerald-400" />
                <div>
                  <p className="font-medium text-neutral-100">
                    Single Property Websites
                  </p>
                  <p className="text-xs text-neutral-400">
                    Give each listing its own URL, brand, and funnel instead of
                    burying it on a generic listings page.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Video className="mt-0.5 h-5 w-5 text-cyan-400" />
                <div>
                  <p className="font-medium text-neutral-100">
                    Integrated Media & Virtual Tours
                  </p>
                  <p className="text-xs text-neutral-400">
                    Embed cinematic video, Matterport, virtual walkthroughs,
                    and drone footage—no weird iframes or broken layouts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPinned className="mt-0.5 h-5 w-5 text-sky-400" />
                <div>
                  <p className="font-medium text-neutral-100">
                    Neighborhood & Lifestyle Context
                  </p>
                  <p className="text-xs text-neutral-400">
                    Map highlights, walk scores, school info, and lifestyle
                    tags that help buyers picture themselves in the home.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Activity className="mt-0.5 h-5 w-5 text-amber-400" />
                <div>
                  <p className="font-medium text-neutral-100">
                    Performance Analytics
                  </p>
                  <p className="text-xs text-neutral-400">
                    Track visits, click-throughs, and form submissions so your
                    sellers see the marketing impact in real time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
