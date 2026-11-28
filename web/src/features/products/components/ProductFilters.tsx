import { Funnel } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  AVAILABILITY_OPTIONS,
  CATEGORY_OPTIONS,
  GRANDMA_OPTIONS,
  SEASON_OPTIONS,
} from "../data"
import type { FiltersState, Option, ProductAvailability } from "../types"

const sectionClass = "border-t border-brand-sand pt-4"
const legendClass = "mb-2 p-0 text-sm font-bold text-brand-ink"
const optionClass = "flex items-center gap-2 text-sm text-brand-ink"
const inputClass = "size-4 accent-brand-burgundy"

type FilterSelectProps = {
  id: string
  label: string
  allLabel: string
  options: readonly Option[]
  value: string
  onChange: (value: string) => void
}

function FilterSelect({
  id,
  label,
  allLabel,
  options,
  value,
  onChange,
}: FilterSelectProps) {
  return (
    <div className={sectionClass}>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-bold text-brand-ink"
      >
        {label}
      </label>
      <Select dir="rtl" value={value} onValueChange={onChange}>
        <SelectTrigger
          id={id}
          className="w-full rounded-lg bg-white data-[size=default]:h-10"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent dir="rtl" position="popper">
          <SelectItem value="all">{allLabel}</SelectItem>
          {options.map((option) => (
            <SelectItem key={option.id} value={option.id}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

type ProductFiltersProps = {
  value: FiltersState
  onChange: (patch: Partial<FiltersState>) => void
  onApply: () => void
  onReset: () => void
}

export function ProductFilters({
  value,
  onChange,
  onApply,
  onReset,
}: ProductFiltersProps) {
  function toggleAvailability(id: ProductAvailability) {
    const next = value.availability.includes(id)
      ? value.availability.filter((item) => item !== id)
      : [...value.availability, id]
    onChange({ availability: next })
  }

  return (
    <aside
      aria-labelledby="filters-title"
      className="rounded-2xl border border-brand-sand bg-white/60 p-4"
    >
      <div className="flex items-center justify-between">
        <h2
          id="filters-title"
          className="text-lg font-bold text-brand-burgundy"
        >
          تصفية المنتجات
        </h2>
        <Funnel aria-hidden="true" className="size-4 text-brand-burgundy" />
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault()
          onApply()
        }}
        className="mt-4 flex flex-col gap-4"
      >
        <fieldset>
          <legend className={legendClass}>التصنيف</legend>
          <div className="flex flex-col gap-2">
            {CATEGORY_OPTIONS.map((option) => (
              <label key={option.id} className={optionClass}>
                <input
                  type="radio"
                  name="category"
                  checked={value.category === option.id}
                  onChange={() => onChange({ category: option.id })}
                  className={inputClass}
                />
                {option.label}
              </label>
            ))}
          </div>
        </fieldset>

        <FilterSelect
          id="filter-grandma"
          label="الجدة"
          allLabel="كل الجدّات"
          options={GRANDMA_OPTIONS}
          value={value.grandmaId}
          onChange={(grandmaId) => onChange({ grandmaId })}
        />

        <FilterSelect
          id="filter-season"
          label="الموسم"
          allLabel="كل المواسم"
          options={SEASON_OPTIONS}
          value={value.seasonId}
          onChange={(seasonId) => onChange({ seasonId })}
        />

        <fieldset className={sectionClass}>
          <legend className={legendClass}>حالة التوفر</legend>
          <div className="flex flex-col gap-2">
            {AVAILABILITY_OPTIONS.map((option) => (
              <label key={option.id} className={optionClass}>
                <input
                  type="checkbox"
                  checked={value.availability.includes(option.id)}
                  onChange={() => toggleAvailability(option.id)}
                  className={inputClass}
                />
                {option.label}
              </label>
            ))}
          </div>
        </fieldset>

        <div className={`${sectionClass} flex flex-col gap-2`}>
          <Button type="submit" className="h-10 w-full rounded-lg text-sm font-bold">
            تطبيق الفلاتر
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={onReset}
            className="h-10  w-full rounded-lg bg-white text-sm font-bold text-brand-ink"
          >
            إعادة التعيين
          </Button>
        </div>
      </form>
    </aside>
  )
}