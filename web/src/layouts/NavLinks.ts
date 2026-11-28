export type NavLinkItem = {
  to: string
  label: string
  end?: boolean
}

export const NAV_LINKS: readonly NavLinkItem[] = [
  { to: "/", label: "الرئيسية", end: true },
  { to: "/products", label: "المنتجات" },
  { to: "/grandmas", label: "جداتنا" },
  { to: "/subscriptions", label: "الاشتراكات" },
  { to: "/boxes", label: "الصناديق" },
]