import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';

const placeholderLogo = '/assets/integrations/placeholder.svg';

// TODO: substituir os placeholders em /public/assets/integrations pelos logos corretos.
const integrations = [
  { id: 'shopify', name: 'Shopify', logo: placeholderLogo, placeholder: true },
  { id: 'yampi', name: 'Yampi', logo: placeholderLogo, placeholder: true },
  { id: 'cartpanda', name: 'CartPanda', logo: placeholderLogo, placeholder: true },
  { id: 'woocommerce', name: 'WooCommerce', logo: placeholderLogo, placeholder: true },
  { id: 'lpqv', name: 'LPQV', logo: placeholderLogo, placeholder: true },
  { id: 'nuvem-shop', name: 'Nuvem Shop', logo: placeholderLogo, placeholder: true },
  { id: 'unicopag', name: 'ÚnicoPag', logo: placeholderLogo, placeholder: true },
  { id: 'yever', name: 'Yever', logo: placeholderLogo, placeholder: true },
  { id: 'mercado-pago', name: 'Mercado Pago', logo: placeholderLogo, placeholder: true },
  { id: 'appmax', name: 'AppMax', logo: placeholderLogo, placeholder: true },
  { id: 'kiwify', name: 'Kiwify', logo: placeholderLogo, placeholder: true },
  { id: 'hotmart', name: 'Hotmart', logo: placeholderLogo, placeholder: true },
  { id: 'kirvano', name: 'Kirvano', logo: placeholderLogo, placeholder: true },
  { id: 'braip', name: 'Braip', logo: placeholderLogo, placeholder: true },
  { id: 'ticto', name: 'Ticto', logo: placeholderLogo, placeholder: true },
  { id: 'eduzz', name: 'Eduzz', logo: placeholderLogo, placeholder: true },
  { id: 'monetizze', name: 'Monetizze', logo: placeholderLogo, placeholder: true },
  { id: 'pepper', name: 'Pepper', logo: placeholderLogo, placeholder: true },
  { id: 'lastlink', name: 'Lastlink', logo: placeholderLogo, placeholder: true },
  { id: 'facebook', name: 'Facebook', logo: placeholderLogo, placeholder: true },
  { id: 'google', name: 'Google', logo: placeholderLogo, placeholder: true },
  { id: 'tiktok', name: 'TikTok', logo: placeholderLogo, placeholder: true },
  { id: 'taboola', name: 'Taboola', logo: placeholderLogo, placeholder: true },
  { id: 'shopee', name: 'Shopee', logo: placeholderLogo, placeholder: true },
  { id: 'loggi', name: 'Loggi', logo: placeholderLogo, placeholder: true },
  { id: 'correios', name: 'Correios', logo: placeholderLogo, placeholder: true },
  { id: 'cainiao', name: 'Cainiao', logo: placeholderLogo, placeholder: true },
  { id: 'jadlog', name: 'Jadlog', logo: placeholderLogo, placeholder: true },
  { id: 'kangu', name: 'Kangu', logo: placeholderLogo, placeholder: true },
  { id: 'melhor-envio', name: 'Melhor Envio', logo: placeholderLogo, placeholder: true },
  { id: 'outras-transportadoras', name: 'Outras transportadoras', logo: placeholderLogo, placeholder: true },
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
          <div className="mt-8 space-y-6">
            {(() => {
              const midpoint = Math.ceil(integrations.length / 2);
              const rows = [integrations.slice(0, midpoint), integrations.slice(midpoint)];
              return rows.map((row, rowIndex) => (
                <div
                  key={`row-${rowIndex}`}
                  className={`integration-marquee ${rowIndex % 2 === 1 ? 'integration-marquee--reverse' : ''}`}
                >
                  <div
                    className={`integration-marquee__track ${
                      rowIndex % 2 === 1 ? 'integration-marquee__track--reverse' : ''
                    }`}
                  >
                    {[...row, ...row].map((item, index) => (
                      <div key={`${item.id}-${index}`} className="integration-marquee__item">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="h-6 w-6 flex-shrink-0 object-contain"
                          loading="lazy"
                          onError={(event) => {
                            const target = event.currentTarget;
                            if (target.src !== placeholderLogo) {
                              target.src = placeholderLogo;
                            }
                          }}
                        />
                        <span>{item.name}</span>
                        {item.placeholder && <span className="sr-only">TODO: substituir logo</span>}
                      </div>
                    ))}
                  </div>
                </div>
              ));
            })()}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
