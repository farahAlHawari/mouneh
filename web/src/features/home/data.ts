import { ASSETS } from "@/lib/assets"

/* ---------- Features strip ---------- */

export type FeatureItem = {
  id: string
  title: string
  description: string
}

export const FEATURES: readonly FeatureItem[] = [
  {
    id: "real-grandmas",
    title: "بلادي جدات حقيقيات",
    description: "وصفات تراثية أصيلة 100%",
  },
  {
    id: "voice-message",
    title: "رسالة صوتية مع كل صندوق",
    description: "عبر رمز QR مكتوب على البطاقة",
  },
  {
    id: "seasonal",
    title: "مونة موسمية طازجة",
    description: "تحضر في وقتها ومكوناتها بلدية",
  },
  {
    id: "delivery",
    title: "توصيل محلي وشحن للمغتربين",
    description: "توصيل آمن ومحكم لكل مكان",
  },
]

/* ---------- Categories ---------- */

export type CategoryItem = {
  id: string
  title: string
  description: string
  href: string
  /** خلفية البطاقة ولون النص */
  className: string
  /** لون السهم داخل الدائرة البيج (نفس لون البطاقة) */
  arrowClassName: string
}

export const CATEGORIES: readonly CategoryItem[] = [
  {
    id: "cooked",
    title: "طبخات",
    description:
      "طبخات بيتية على نار هادية، بتنعمل بالطلب لتوصلك طازجة.",
    href: "/products?category=cooked",
    className: "bg-brand-burgundy text-brand-cream",
    arrowClassName: "text-brand-burgundy",
  },
  {
    id: "meals",
    title: "وجبات",
    description:
      "اختار وجبتك لليوم، وخلي حنية إيدين جداتنا تكمل سفرتك.",
    href: "/products?category=meals",
    className: "bg-brand-olive text-brand-cream",
    arrowClassName: "text-brand-olive",
  },
  {
    id: "boxes",
    title: "صناديق",
    description:
      "هدايا ومواسم بتحكي قصة، مليانة بركة ورسالة صوتية بتلمس القلب.",
    href: "/boxes",
    className: "bg-brand-orange text-brand-cream",
    arrowClassName: "text-brand-orange",
  },
]

/* ---------- Best sellers ---------- */

export type ProductAvailability = "available" | "preorder"

export type Product = {
  id: string
  name: string
  grandmaName: string
  rating: number
  price: string
  unit: string
  availability: ProductAvailability
  image: string
}

export const BEST_SELLERS: readonly Product[] = [
  {
    id: "warak-enab",
    name: "ورق عنب",
    grandmaName: "أم خالد",
    rating: 4.9,
    price: "520,000 ل.س",
    unit: "مرطبان (800 غ)",
    availability: "preorder",
    image: ASSETS.dishWarakEnab,
  },
  {
    id: "apricot-jam",
    name: "مربى مشمش",
    grandmaName: "أم خالد",
    rating: 4.9,
    price: "125,000 ل.س",
    unit: "مرطبان (800 غ)",
    availability: "available",
    image: ASSETS.mounehApricotJam,
  },
  {
    id: "maamoul-pistachio",
    name: "معمول بالفستق",
    grandmaName: "أم خالد",
    rating: 4.9,
    price: "520,000 ل.س",
    unit: "مرطبان (800 غ)",
    availability: "preorder",
    image: ASSETS.dishMaamoul,
  },
  {
    id: "kibbeh-fried",
    name: "كبة مقلية",
    grandmaName: "أم خالد",
    rating: 4.9,
    price: "460,000 ل.س",
    unit: "كيلو",
    availability: "available",
    image: ASSETS.dishKibbeh,
  },
]

/* ---------- Gift CTA ---------- */

export const GIFT_CTA = {
  title: "بعيد عن البيت ؟ التيتة مابتنساك",
  description:
    "من وين ما كنت، ابعت لإمك صينية ورق عنب يوم الجمعة. بتختار من عناوين أهلك، بتكتب رسالتك، وحدا من أهلك بسوريا بيدفع بالمحفظة، أو بيدفعوا عند الاستلام.",
  buttonLabel: "ابعت هدية لأهلك",
  href: "/boxes",
} as const

/* ---------- Grandmas ---------- */

export type Grandma = {
  id: string
  name: string
  description: string
  rating: number
  productsCount: number
}

export const GRANDMAS: readonly Grandma[] = [
  {
    id: "um-ahmad-1",
    name: "تيتة أم أحمد",
    description: "الأكل من إيدين تيتة أم أحمد إلو لذة خاصة",
    rating: 4.9,
    productsCount: 26,
  },
  {
    id: "um-ahmad-2",
    name: "تيتة أم أحمد",
    description: "الأكل من إيدين تيتة أم أحمد إلو لذة خاصة",
    rating: 4.9,
    productsCount: 26,
  },
  {
    id: "um-ahmad-3",
    name: "تيتة أم أحمد",
    description: "الأكل من إيدين تيتة أم أحمد إلو لذة خاصة",
    rating: 4.9,
    productsCount: 26,
  },
  {
    id: "um-ahmad-4",
    name: "تيتة أم أحمد",
    description: "الأكل من إيدين تيتة أم أحمد إلو لذة خاصة",
    rating: 4.9,
    productsCount: 26,
  },
]

export const GRANDMA_OF_THE_MONTH = {
  name: "تيتة أم أحمد",
  rating: 4.9,
  story:
    "تستيقظ الجدة أم أحمد مع الفجر لتفقد مرطبانات المكدوس ومربى الورد في شرفة بيتها بالزبداني. بعد تقاعدها وزواج أبنائها وسفرهم، وجدت في «مونة الجدّات» عائلة كبيرة تشتاق لنفسها في الطبخ، وتنتظر رسائلها الصوتية مع كل صندوق",
  image: ASSETS.grandmaKitchen,
  href: "/grandmas",
} as const

/* ---------- Season boxes ---------- */

export type SeasonBox = {
  id: string
  title: string
  grandmaName: string
  rating: number
  price: string
  tags: readonly string[]
  description: string
}

export const SEASON_BOXES: readonly SeasonBox[] = [1, 2, 3, 4].map((n) => ({
    id: `winter-box-${n}`,
    title: "صندوق شتاء الشام",
    grandmaName: "تيتة أم أحمد",
    rating: 4.9,
    price: "$45",
    tags: ["متوفر", "موسم نشط"],
    description: "كل ما تحتاجه سفرتك بالشتا: مربى، زعتر، زيت، زيتون مخلل، كعك.",
}))

/* ---------- Promo banners ---------- */

export const SHIPPING_BANNER = {
    badge: "الشحن الخارجي",
    title: "طعم البيت بيسافر معك",
    description:
        "وين ماكنت بالدنيا ، مربى التيتة ودبسها وزعترها بيوصلوا لبابك بعلبة مغلفة ومعها حكايتها.",
    buttonLabel: "تصفح منتجات الشحن",
    href: "/shipping",
} as const

export const EVENTS_BANNER = {
    badge: "المناسبات (أعياد - أعراس)",
    title: "كل فرحة، إلها سفرة جدّة",
    description:
        "صواني وضيافة وحلويات من مطابخ جدّاتنا. قلنا كم ضيف، وإحنا بنجهز الباقي بحب.",
    buttonLabel: "اطلب صندوق الفرح",
    href: "/events",
} as const