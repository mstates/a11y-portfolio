// src/utils/content.ts
interface ContentVariants {
  default: string;
  airbnb: string;
}

export function getContent(variants: ContentVariants, variant: 'default' | 'airbnb' = 'default'): string {
  return variants[variant] || variants.default;
}
