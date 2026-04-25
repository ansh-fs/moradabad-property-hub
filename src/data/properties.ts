import skylineImg from "@/assets/property-skyline.jpg";
import greenValleyImg from "@/assets/property-greenvalley.jpg";
import heritageImg from "@/assets/property-heritage.jpg";
import gallery1 from "@/assets/gallery-building.jpg";
import gallery2 from "@/assets/gallery-painting.jpg";
import gallery3 from "@/assets/gallery-maintenance.jpg";
import gallery4 from "@/assets/gallery-security.jpg";
import gallery5 from "@/assets/gallery-cleaning.jpg";
import gallery6 from "@/assets/gallery-inspection.jpg";

export interface Property {
  slug: string;
  title: string;
  type: string;
  status: "Featured" | "Upcoming" | "Available";
  price: string;
  location: string;
  beds: number;
  area: string;
  cover: string;
  gallery: string[];
  parking: string;
  security: string;
  water: string;
  power: string;
  description: string;
}

const baseGallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

export const properties: Property[] = [
  {
    slug: "shri-hari-vatika",
    title: "Shri Hari Vatika",
    type: "Residential Plots",
    status: "Featured",
    price: "Contact for Price",
    location: "Nawadiya Road, Milak",
    beds: 0,
    area: "Plots Available",
    cover: skylineImg,
    gallery: [skylineImg, ...baseGallery],
    parking: "Available",
    security: "Gated Community",
    water: "Available",
    power: "Full Backup",
    description: "Fully Completed Project. Residential plots available at prime location on Nawadiya Road, Milak.",
  },
  {
    slug: "shri-hari-vatika-phase-2",
    title: "Shri Hari Vatika Phase 2",
    type: "Residential Plots",
    status: "Available",
    price: "Contact for Price",
    location: "Dharampura Road, Milak",
    beds: 0,
    area: "100–250 sq/yard",
    cover: greenValleyImg,
    gallery: [greenValleyImg, ...baseGallery],
    parking: "Available",
    security: "Gated Community",
    water: "Available",
    power: "Full Backup",
    description: "Plots Available from 100 sq/yard to 250 sq/yard. Prime location on Dharampura Road, Milak.",
  },
  {
    slug: "shri-hari-vatika-phase-3",
    title: "Shri Hari Vatika Phase 3",
    type: "Residential Plots",
    status: "Available",
    price: "Contact for Price",
    location: "Dhaneli Uttari Road, Milak",
    beds: 0,
    area: "100–250 sq/yard",
    cover: heritageImg,
    gallery: [heritageImg, ...baseGallery],
    parking: "Available",
    security: "Gated Community",
    water: "Available",
    power: "Full Backup",
    description: "Plots Available from 100 sq/yard to 250 sq/yard. Premium location on Dhaneli Uttari Road, Milak.",
  },
  {
    slug: "palm-court-society",
    title: "Palm Court Society",
    type: "Society Flats",
    status: "Upcoming",
    price: "55 Lakh",
    location: "Premium Society",
    beds: 3,
    area: "1450 sq.ft",
    cover: gallery2,
    gallery: [gallery2, ...baseGallery.filter((_, i) => i !== 1)],
    parking: "2 Covered",
    security: "24x7 Multi-tier",
    water: "24 Hours",
    power: "Full Backup",
    description: "Elegant society flats with clubhouse, pool, gym, and landscaped gardens for a complete lifestyle.",
  },
  {
    slug: "sunrise-apartments",
    title: "Sunrise Apartments",
    type: "2 BHK Apartment",
    status: "Available",
    price: "28 Lakh",
    location: "Central Area",
    beds: 2,
    area: "900 sq.ft",
    cover: gallery3,
    gallery: [gallery3, ...baseGallery.filter((_, i) => i !== 2)],
    parking: "1 Open",
    security: "24x7 Guard",
    water: "Municipal",
    power: "Common Area Backup",
    description: "Move-in ready 2 BHK apartments in a central area with easy access to schools, hospitals, and offices.",
  },
  {
    slug: "heritage-homes",
    title: "Heritage Homes",
    type: "3 BHK Villa",
    status: "Upcoming",
    price: "92 Lakh",
    location: "Premium Locality",
    beds: 3,
    area: "1800 sq.ft",
    cover: heritageImg,
    gallery: [heritageImg, ...baseGallery],
    parking: "2 Covered + 1 Open",
    security: "Gated + CCTV",
    water: "24 Hours",
    power: "Full Backup",
    description: "Premium 3 BHK villas with classic architecture, private gardens, and top-tier amenities.",
  },
];

export const getPropertyBySlug = (slug?: string) =>
  properties.find((p) => p.slug === slug);
