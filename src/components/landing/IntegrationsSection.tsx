import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';

const integrations = [
  {
    title: 'Plataformas de loja (catálogo e pedidos)',
    items: ['Shopify', 'WooCommerce', 'Nuvem Shop (com checkout nativo)', 'LPQV (com checkout nativo)'],
  },
  {
    title: 'Checkouts (tela de pagamento)',
    items: ['ÚnicoPag (recomendado)', 'Yever', 'Yampi', 'CartPanda'],
    note: 'Para Nuvem Shop e LPQV, utilizamos o checkout nativo da própria plataforma.',
  },
  {
    title: 'Gateways (banco)',
    description:
      'Compatível com os principais gateways disponíveis no seu checkout. Basta preencher as credenciais.',
    items: ['Mercado Pago', 'App Max', 'ÚnicoPag (recomendado)'],
  },
  {
    title: 'Infoprodutos e outros',
    items: ['Kiwify', 'Hotmart', 'Kirvano', 'Braip', 'Ticto', 'Eduzz', 'Monetizze', 'Pepper', 'Lastlink'],
  },
  {
    title: 'Ads',
    items: ['Facebook', 'Google', 'TikTok', 'Taboola'],
  },
  {
    title: 'Rastreio e logística',
    items: [
      'Shopee',
      'Loggi',
      'Correios',
      'Cainiao',
      'Jadlog',
      'Kangu',
      'Melhor Envio',
      'Outras transportadoras também (sob consulta)',
    ],
  },
];

export function IntegrationsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">Integrações</h2>
            <p className="text-base text-muted-foreground">
              Todas as integrações necessárias para crescer o seu negócio
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((section) => (
              <div
                key={section.title}
                className="h-full rounded-2xl border border-border bg-background/60 p-6"
              >
                <h3 className="text-base font-bold text-foreground mb-3">{section.title}</h3>
                {section.description && (
                  <p className="text-sm text-muted-foreground mb-3">{section.description}</p>
                )}
                <ul className="flex flex-wrap gap-2 text-sm text-foreground/90">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border/60 bg-background px-3 py-1 text-sm break-words"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                {section.note && (
                  <p className="text-xs text-muted-foreground mt-4">{section.note}</p>
                )}
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
