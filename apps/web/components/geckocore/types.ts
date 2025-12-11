import { LucideIcon } from "lucide-react";

export type ProductStatus = "live" | "coming";

export interface Product {
  id: string;
  name: string;
  status: ProductStatus;
  color: string;
  icon: LucideIcon;
  description: string;
  launchQuarter?: string; // For "coming" products
  href: string;
}

export interface Position {
  x: number;
  y: number;
}

export interface EcosystemCanvasProps {
  animationsEnabled?: boolean;
  onProductClick?: (productId: string) => void;
}

export interface CentralHubProps {
  size: number;
  animationsEnabled?: boolean;
}

export interface ProductNodeProps {
  product: Product;
  position: Position;
  size: number;
  onHover?: (productId: string | null) => void;
  onClick?: (productId: string) => void;
  isActive?: boolean;
  animationsEnabled?: boolean;
}

export interface ConnectionLineProps {
  start: Position;
  end: Position;
  color: string;
  isActive: boolean;
  showParticles: boolean;
  animationsEnabled?: boolean;
}

export interface ProductTooltipProps {
  product: Product;
  position: Position;
  isVisible: boolean;
}
