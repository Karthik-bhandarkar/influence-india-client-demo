import React from "react";

export interface IISLogoProps {
  /** Size preset or numeric width in pixels */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | number;
  /** Custom additional className */
  className?: string;
  /** Priority loading flag */
  priority?: boolean;
  /** Custom style overrides */
  style?: React.CSSProperties;
  /** Optional click handler */
  onClick?: () => void;
}

const SIZE_MAP: Record<"xs" | "sm" | "md" | "lg" | "xl", number> = {
  xs: 72,
  sm: 110,
  md: 160,
  lg: 240,
  xl: 360,
};

// Aspect ratio of the master 1600 x 1081 asset
export const IIS_LOGO_ASPECT_RATIO = 1600 / 1081; // ~1.4801

/**
 * IISLogo
 * 
 * Authoritative, isolated logo component for Influence India Services.
 * Faithfully renders the 1600x1081 high-resolution transparent master asset
 * preserving the exact emblem, human silhouettes, and custom typography.
 */
export const IISLogo = React.memo(function IISLogo({
  size = "md",
  className = "",
  priority = false,
  style,
  onClick,
}: IISLogoProps) {
  const pixelWidth = typeof size === "number" ? size : SIZE_MAP[size] ?? 160;
  const pixelHeight = Math.round(pixelWidth / IIS_LOGO_ASPECT_RATIO);

  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={{
        width: pixelWidth,
        height: pixelHeight,
        aspectRatio: `${IIS_LOGO_ASPECT_RATIO}`,
        ...style,
      }}
      onClick={onClick}
    >
      <img
        src="/images/influence-india-logo.png"
        alt="Influence India Services"
        width={pixelWidth}
        height={pixelHeight}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="w-full h-full object-contain pointer-events-none"
      />
    </div>
  );
});

export default IISLogo;
