import { ASSETS } from "@/lib/assets"
import type {
  CatalogProduct,
  CategoryFilter,
  Option,
  ProductAvailability,
} from "./types"

export const CATEGORY_OPTIONS: readonly Option<CategoryFilter>[] = [
  { id: "all", label: "الكل" },
  { id: "cooked", label: "طبخات" },
  { id: "mouneh", label: "مونة" },
  { id: "boxes", label: "صناديق" },
]

export const GRANDMA_OPTIONS: readonly Option[] = [
  { id: "um-ahmad", label: "أم أحمد" },
  { id: "um-khaled", label: "أم خالد" },
]

export const SEASON_OPTIONS: readonly Option[] = [
  { id: "winter", label: "شتاء الشام" },
  { id: "eid", label: "العيد" },
]

export const AVAILABILITY_OPTIONS: readonly Option<ProductAvailability>[] = [
  { id: "available", label: "متوفر" },
  { id: "preorder", label: "طلب مسبق" },
  { id: "unavailable", label: "غير متوفر" },
]

export const PRODUCTS: readonly CatalogProduct[] = [
  {
    id: "warak-enab",
    name: "ورق عنب",
    grandmaName: "أم أحمد",
    grandmaId: "um-ahmad",
    category: "cooked",
    rating: 4.9,
    price: "380,000 ل.س",
    unit: "كيلو",
    availability: "preorder",
    image: ASSETS.dishWarakEnab,
  },
  {
    id: "mouneh-shami-box",
    name: "صندوق مونة الشام",
    grandmaName: "أم خالد",
    grandmaId: "um-khaled",
    category: "boxes",
    seasonId: "winter",
    rating: 4.9,
    price: "400,000 ل.س",
    unit: "صندوق واحد",
    availability: "unavailable",
    image: ASSETS.giftBasketPickles,
  },
  {
    id: "apricot-jam",
    name: "مربى مشمش",
    grandmaName: "أم خالد",
    grandmaId: "um-khaled",
    category: "mouneh",
    rating: 4.9,
    price: "125,000 ل.س",
    unit: "مرطبان (800 غ)",
    availability: "available",
    image: ASSETS.mounehApricotJam,
  },
  {
    id: "black-olives",
    name: "زيتون اسود",
    grandmaName: "أم خالد",
    grandmaId: "um-khaled",
    category: "mouneh",
    rating: 4.9,
    price: "125,000 ل.س",
    unit: "مرطبان (800 غ)",
    availability: "available",
    image: ASSETS.mounehBlackOlives,
  },
  {
    id: "maamoul-pistachio",
    name: "معمول بالفستق",
    grandmaName: "أم خالد",
    grandmaId: "um-khaled",
    category: "mouneh",
    seasonId: "eid",
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
    grandmaId: "um-khaled",
    category: "cooked",
    rating: 4.9,
    price: "460,000 ل.س",
    unit: "كيلو",
    availability: "available",
    image: ASSETS.dishKibbeh,
  },
]