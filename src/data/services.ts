import {
  Building2,
  Home,
  Users,
  Wrench,
  TrendingUp,
  Wallet,
  FileBarChart,
  MapPin,
  type LucideIcon,
} from "lucide-react";

export interface ServiceDetail {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  subtitle: string;
  overview: string;
  overviewHighlights: string[];
  whatWeProvide: string[];
  process: { title: string; desc: string }[];
  benefits: string[];
}

export const services: ServiceDetail[] = [
  {
    slug: "society-property-management",
    icon: Building2,
    title: "Society Property Management",
    shortDesc:
      "Complete management of residential societies including maintenance, security, and daily operations.",
    subtitle:
      "End-to-end housing society management with transparent operations, vendor coordination, and resident-first service.",
    overview:
      "We provide complete society property management services for residential complexes, apartments, and gated communities across India. Our team coordinates with the managing committee, handles all vendor operations, plans periodic maintenance, and manages legal and statutory documentation — so the society runs smoothly without burdening the committee members.",
    overviewHighlights: [
      "Managing committee coordination & support",
      "Vendor management (security, housekeeping, lift, gardening)",
      "Preventive & corrective maintenance planning",
      "Society bye-laws, AGM minutes & legal documentation",
    ],
    whatWeProvide: [
      "24x7 security supervision and guard deployment",
      "Daily housekeeping and common area cleaning",
      "Lift, generator, water tank & STP maintenance",
      "Society accounting, billing and dues collection",
      "AGM, committee meetings & resident communication",
      "Vendor onboarding and quality audits",
      "Statutory compliance and registration support",
    ],
    process: [
      { title: "Property Assessment", desc: "We visit the society, review existing operations and identify improvement areas." },
      { title: "Planning", desc: "Custom management plan with SLAs, vendor list, budget and reporting structure." },
      { title: "Execution", desc: "Deploy trained staff and vendors, take over daily operations seamlessly." },
      { title: "Monitoring", desc: "On-ground supervisors and digital tracking ensure consistent service quality." },
      { title: "Reporting", desc: "Monthly transparent reports shared with the managing committee." },
    ],
    benefits: [
      "Professional, accountable management",
      "Timely preventive maintenance",
      "Transparent financial reporting",
      "Reduced burden on committee members",
      "Higher resident satisfaction",
    ],
  },
  {
    slug: "rental-management",
    icon: Home,
    title: "Rental Management",
    shortDesc:
      "Find quality tenants, handle agreements, and manage your rental property end-to-end.",
    subtitle:
      "Hassle-free rental management for property owners — from finding tenants to renewing leases.",
    overview:
      "Renting out a flat involves much more than finding a tenant. From verification, agreements, registration, periodic inspections to renewals and exits — we handle the complete lifecycle so your property generates consistent rental income without you spending time on coordination.",
    overviewHighlights: [
      "Society NOC and move-in coordination",
      "Vendor & broker network management",
      "Annual maintenance planning between tenancies",
      "Registered rent agreement & legal handling",
    ],
    whatWeProvide: [
      "Tenant sourcing through verified channels",
      "Background and police verification",
      "Registered rent agreement drafting",
      "Move-in and move-out coordination",
      "Periodic property inspections with photo reports",
      "Lease renewal and rent revision support",
      "Coordination with society for NOC & approvals",
    ],
    process: [
      { title: "Property Assessment", desc: "Site visit, market rent benchmarking and listing preparation." },
      { title: "Planning", desc: "Marketing strategy across portals, brokers and our network." },
      { title: "Execution", desc: "Tenant shortlisting, verification, agreement and move-in." },
      { title: "Monitoring", desc: "Quarterly inspections and continuous tenant relationship management." },
      { title: "Reporting", desc: "Monthly status, rent receipts and inspection reports to the owner." },
    ],
    benefits: [
      "Verified, quality tenants",
      "Zero paperwork hassle for owner",
      "Higher occupancy and timely rent",
      "Property protected through inspections",
      "Complete peace of mind",
    ],
  },
  {
    slug: "tenant-management",
    icon: Users,
    title: "Tenant Management",
    shortDesc:
      "Screen tenants, manage complaints, and ensure smooth landlord-tenant relationships.",
    subtitle:
      "Professional tenant relationship management — verification, communication, and dispute resolution.",
    overview:
      "We act as the single point of contact between owners and tenants. From thorough screening at onboarding to managing day-to-day complaints, maintenance requests and exit formalities, our tenant management service ensures both parties have a smooth, transparent experience.",
    overviewHighlights: [
      "Society rules orientation for new tenants",
      "Vendor coordination for tenant requests",
      "Scheduled inspections & maintenance planning",
      "Notice, agreement & legal documentation",
    ],
    whatWeProvide: [
      "Detailed tenant background screening",
      "Police verification assistance",
      "Onboarding and society induction",
      "Single-window complaint resolution",
      "Maintenance request coordination",
      "Notice handling and dispute mediation",
      "Move-out inspection and security deposit settlement",
    ],
    process: [
      { title: "Property Assessment", desc: "Understand owner expectations and tenant profile requirements." },
      { title: "Planning", desc: "Define screening criteria, communication SOPs and escalation matrix." },
      { title: "Execution", desc: "Onboard tenant, set up communication channels and house rules." },
      { title: "Monitoring", desc: "Track requests, complaints and rent compliance regularly." },
      { title: "Reporting", desc: "Share tenant feedback and incident logs with the owner monthly." },
    ],
    benefits: [
      "Verified, reliable tenants",
      "Faster complaint resolution",
      "Clear documentation for every interaction",
      "Reduced disputes and legal risk",
      "Long, stable tenancies",
    ],
  },
  {
    slug: "property-maintenance",
    icon: Wrench,
    title: "Property Maintenance",
    shortDesc:
      "Regular upkeep, repairs, and maintenance to keep your property in top condition.",
    subtitle:
      "Preventive and on-demand maintenance to protect and grow your property value.",
    overview:
      "A well-maintained property retains tenants longer and commands higher rent. Our maintenance team handles plumbing, electrical, civil, painting and appliance servicing through a vetted vendor network. Whether it's a routine check or an emergency repair, we respond quickly and bill transparently.",
    overviewHighlights: [
      "Society approval coordination for major work",
      "Vetted vendor network across trades",
      "Scheduled preventive maintenance plans",
      "Bills, warranties & vendor records management",
    ],
    whatWeProvide: [
      "Plumbing and electrical repairs",
      "Painting, polishing and minor civil work",
      "Pest control and deep cleaning",
      "Appliance installation and servicing",
      "Emergency repairs with quick turnaround",
      "Annual maintenance contracts (AMC)",
      "Pre-tenancy refurbishment",
    ],
    process: [
      { title: "Property Assessment", desc: "Inspect property and prepare a maintenance checklist." },
      { title: "Planning", desc: "Schedule preventive tasks and budget for the year." },
      { title: "Execution", desc: "Skilled technicians handle work with quality checks." },
      { title: "Monitoring", desc: "Post-work verification and tenant feedback collection." },
      { title: "Reporting", desc: "Detailed work logs, invoices and photos shared with owner." },
    ],
    benefits: [
      "Property value preserved and grown",
      "No surprise breakdowns",
      "Vendor accountability and quality",
      "Transparent, audited billing",
      "Happier tenants, longer stays",
    ],
  },
  {
    slug: "flat-sale-resale-support",
    icon: TrendingUp,
    title: "Flat Sale & Resale Support",
    shortDesc:
      "Expert guidance and support for buying, selling, or reselling flats at the best value.",
    subtitle:
      "Get the best market value for your flat with end-to-end sale and resale support.",
    overview:
      "Selling or reselling a flat in India involves valuation, buyer sourcing, legal due diligence, society NOC, and registration. We guide owners through every step — from listing the property at the right price to handing over keys to the new buyer — making the process smooth and profitable.",
    overviewHighlights: [
      "Society NOC and share certificate transfer",
      "Buyer-side broker & channel management",
      "Pre-sale repair and staging planning",
      "Sale deed, agreement & registration support",
    ],
    whatWeProvide: [
      "Accurate property valuation",
      "Professional photos and listing creation",
      "Buyer sourcing and shortlisting",
      "Documentation review and due diligence",
      "Negotiation and offer management",
      "Sale agreement and registration support",
      "Society share transfer and handover",
    ],
    process: [
      { title: "Property Assessment", desc: "Valuation, document audit and market positioning." },
      { title: "Planning", desc: "Pricing strategy, marketing plan and buyer targeting." },
      { title: "Execution", desc: "Listing, site visits, negotiation and offer closure." },
      { title: "Monitoring", desc: "Coordinate buyer financing, NOCs and approvals." },
      { title: "Reporting", desc: "Sale closure, registration and final handover report." },
    ],
    benefits: [
      "Best possible market value",
      "Verified, serious buyers only",
      "Zero documentation worries",
      "Faster, cleaner closures",
      "Trusted end-to-end partner",
    ],
  },
  {
    slug: "rent-collection-support",
    icon: Wallet,
    title: "Rent Collection Support",
    shortDesc:
      "Timely rent collection, follow-ups, and transparent financial reporting.",
    subtitle:
      "Never chase rent again — we ensure on-time collection and transparent reporting.",
    overview:
      "Late or missed rent payments are a major pain point for property owners. Our rent collection service ensures monthly rent is collected on time, defaulters are followed up professionally, and detailed receipts and statements are shared with the owner — so cash flow is predictable and stress-free.",
    overviewHighlights: [
      "Society dues coordination if applicable",
      "Vendor escrow & utility payment support",
      "Annual rent revision and escalation handling",
      "Notice, recovery & legal coordination",
    ],
    whatWeProvide: [
      "Monthly rent collection from tenant",
      "Multiple payment mode support",
      "Automatic reminders and follow-ups",
      "Receipts and TDS coordination",
      "Defaulter notice and recovery support",
      "Monthly settlement transfer to owner",
      "Annual rent revision support",
    ],
    process: [
      { title: "Property Assessment", desc: "Review rent agreement, due dates and payment terms." },
      { title: "Planning", desc: "Set up reminders, payment channels and escalation rules." },
      { title: "Execution", desc: "Collect rent, issue receipts and transfer to owner." },
      { title: "Monitoring", desc: "Track defaulters and trigger follow-ups proactively." },
      { title: "Reporting", desc: "Monthly statement with collection, dues and TDS details." },
    ],
    benefits: [
      "Predictable monthly cash flow",
      "No awkward tenant conversations",
      "Complete financial transparency",
      "Faster default recovery",
      "Tax-ready records every month",
    ],
  },
  {
    slug: "owner-reporting",
    icon: FileBarChart,
    title: "Owner Reporting",
    shortDesc:
      "Detailed monthly reports on property status, finances, and tenant updates.",
    subtitle:
      "Stay informed about your property with structured monthly reports and live updates.",
    overview:
      "Whether you live in another city or abroad, our owner reporting keeps you fully informed about your property. Monthly reports include financial summaries, maintenance logs, tenant interactions, photos and market updates — giving you complete visibility and control without lifting a finger.",
    overviewHighlights: [
      "Society circulars & notices forwarded",
      "Vendor invoices and approvals tracking",
      "Maintenance schedule and completion logs",
      "Legal notices & document archive",
    ],
    whatWeProvide: [
      "Monthly financial summary (income & expense)",
      "Maintenance work logs with photos",
      "Tenant interaction and feedback notes",
      "Inspection reports with images",
      "Society notices and updates",
      "Local market and rental trend updates",
      "Annual property performance review",
    ],
    process: [
      { title: "Property Assessment", desc: "Define what the owner wants to see and how often." },
      { title: "Planning", desc: "Build a custom reporting template and channel (email / WhatsApp)." },
      { title: "Execution", desc: "Collect data on-ground throughout the month." },
      { title: "Monitoring", desc: "Quality-check every report before it's sent." },
      { title: "Reporting", desc: "Deliver on a fixed date with a follow-up call if needed." },
    ],
    benefits: [
      "Total visibility from anywhere",
      "Data-driven property decisions",
      "Zero information gaps",
      "Audit-ready financial records",
      "Confidence and peace of mind",
    ],
  },
  {
    slug: "site-visit-support",
    icon: MapPin,
    title: "Site Visit Support",
    shortDesc:
      "Scheduled property visits, inspections, and on-ground support when you need it.",
    subtitle:
      "On-ground eyes and hands at your property — for owners, NRIs, and remote landlords.",
    overview:
      "Whether you need a quarterly inspection, a quick check before a buyer visit, or someone present during repair work, our site visit support gives you a reliable on-ground partner. Every visit is documented with photos, videos and a detailed report.",
    overviewHighlights: [
      "Society entry and visitor coordination",
      "Vendor supervision during work",
      "Pre-tenancy and exit inspections",
      "Document pickup, drop and verification",
    ],
    whatWeProvide: [
      "Scheduled quarterly inspections",
      "On-demand emergency visits",
      "Photo and video walkthrough reports",
      "Vendor supervision during repairs",
      "Tenant verification visits",
      "Buyer and broker site visit support",
      "Document collection and delivery",
    ],
    process: [
      { title: "Property Assessment", desc: "Understand visit objective and checklist." },
      { title: "Planning", desc: "Schedule visit, coordinate with tenant or society." },
      { title: "Execution", desc: "Trained team conducts the visit per checklist." },
      { title: "Monitoring", desc: "Capture photos, videos and observations on-site." },
      { title: "Reporting", desc: "Detailed report shared within 24 hours." },
    ],
    benefits: [
      "Reliable on-ground presence",
      "Visual proof of property condition",
      "Ideal for NRI and outstation owners",
      "Faster issue detection",
      "Professional vendor supervision",
    ],
  },
];

export const getServiceBySlug = (slug?: string) =>
  services.find((s) => s.slug === slug);
