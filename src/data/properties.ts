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
    slug: "skyline-residency",
    title: "Skyline Residency",
    type: "3 BHK Apartment",
    status: "Featured",
    price: "45 Lakh",
    location: "Prime Location",
    beds: 3,
    area: "1250 sq.ft",
    cover: skylineImg,
    gallery: [skylineImg, ...baseGallery],
    parking: "2 Covered",
    security: "24x7 Guard",
    water: "24 Hours",
    power: "Full Backup",
    description: "A premium 3 BHK apartment in the heart of the city offering modern amenities and excellent connectivity.",
  },
  {
    slug: "green-valley-villas",
    title: "Green Valley Villas",
    type: "Independent House",
    status: "Upcoming",
    price: "78 Lakh",
    location: "Gated Community",
    beds: 4,
    area: "2100 sq.ft",
    cover: greenValleyImg,
    gallery: [greenValleyImg, ...baseGallery],
    parking: "3 Open + Covered",
    security: "Gated Society",
    water: "Borewell + Municipal",
    power: "Full Backup",
    description: "Spacious independent villas inside a gated community with lush greenery and premium amenities.",
  },
  {
    slug: "royal-heights",
    title: "Royal Heights",
    type: "2 BHK Flat",
    status: "Featured",
    price: "32 Lakh",
    location: "Near Market",
    beds: 2,
    area: "980 sq.ft",
    cover: gallery1,
    gallery: [gallery1, ...baseGallery.slice(1)],
    parking: "1 Covered",
    security: "CCTV + Guard",
    water: "24 Hours",
    power: "Common Area Backup",
    description: "Affordable 2 BHK flats located near the main market with excellent daily-need accessibility.",
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
