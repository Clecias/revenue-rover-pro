const faqs = [
  {
    q: "Funciona com a minha plataforma?",
    a: "Sim! Integramos com Shopify, WooCommerce, Nuvemshop, Tray, Yampi, Bagy, Bling, Tiny e as principais plataformas do mercado."
  },
  {
    q: "Quanto tempo leva para ver resultados?",
    a: "As primeiras vendas recuperadas acontecem nas primeiras 24-48 horas após a ativação. Nossos clientes recuperam em média R$ 1.800 a R$ 5.000 no primeiro mês."
  },
  {
    q: "É difícil de configurar?",
    a: "Não! Nossa equipe faz uma sessão de implementação guiada com você. Em menos de 1 hora está tudo funcionando."
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim, sem fidelidade. Você pode cancelar a qualquer momento. Mas tenho certeza que não vai querer quando ver os resultados."
  },
  {
    q: "E se não funcionar para mim?",
    a: "Garantia de 30 dias. Se não recuperar pelo menos R$ 119 em vendas, devolvemos 100% do seu dinheiro. Simples assim."
  }
];

export function FAQSection() {
  return (
    <section className="py-16 px-6 bg-card">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Perguntas Frequentes
        </h2>
        
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-muted p-6 rounded-lg border border-border">
              <h3 className="font-bold text-lg text-foreground mb-2">{faq.q}</h3>
              <p className="text-foreground/80">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}