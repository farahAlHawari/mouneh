export const ROUTES = {
  product: (id: string) => `/products/${id}`,
  grandma: (id: string) => `/grandmas/${id}`,
  box: (id: string) => `/boxes/${id}`,
} as const