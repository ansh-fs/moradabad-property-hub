import skylineImg from "@/assets/property-skyline.jpg";
import greenValleyImg from "@/assets/property-greenvalley.jpg";
import heritageImg from "@/assets/property-heritage.jpg";
import gallery1 from "@/assets/gallery-building.jpg";
import gallery4 from "@/assets/gallery-security.jpg";
import gallery5 from "@/assets/gallery-cleaning.jpg";
import gallery6 from "@/assets/gallery-inspection.jpg";

export interface Property {
  slug: string;
  title: string;
  type: string;
  status: "Featured" | "Upcoming" | "Available" | "Completed";
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

const baseGallery = [gallery1, gallery4, gallery5, gallery6];

export const properties: Property[] = [
  {
    slug: "shri-hari-vatika",
    title: "Shri Hari Vatika",
    type: "Residential Plots",
    status: "Completed",
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
];

export const getPropertyBySlug = (slug?: string) =>
  properties.find((p) => p.slug === slug);
