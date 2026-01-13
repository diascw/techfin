import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Timeline() {
  const steps = [
    {
      n: 1,
      t: "Crie sua Conta",
      d: "Cadastre-se gratuitamente em segundos. Não é necessário cartão de crédito.",
    },
    {
      n: 2,
      t: "Registre suas transações",
      d: "Adicione suas receitas e despesas com categorias personalizadas",
    },
    {
      n: 3,
      t: "Análises financeiras",
      d: "Veja gráficos e tome decisões financeiras mais inteligentes.",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-border z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.n} className="relative flex flex-col items-center">
                <div className="w-16 h-16 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-6 shadow-lg ring-4 ring-background">
                  {step.n}
                </div>

                <Card className="w-full">
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg">{step.t}</CardTitle>
                    <CardDescription className="text-sm">
                      {step.d}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
