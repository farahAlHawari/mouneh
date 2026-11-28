import { Container } from "@/components/shared/Container"

type PlaceholderPageProps = {
    title: string
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
    return (
        <Container className="py-24 text-center">
        <h1 className="text-3xl font-extrabold text-brand-burgundy">{title}</h1>
        <p className="mt-3 text-muted-foreground">هذه الصفحة قيد التجهيز.</p>
        </Container>
    )
}