import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Footer } from "@/components/organisms/Footer";
import {
  TrendingUp,
  PieChart,
  Lightbulb,
  Shield,
  Smartphone,
  ArrowRight,
  BarChartBig as ChartBar,
  Wallet,
} from "lucide-react";
import { Logo } from "@/components/atoms/logo";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex gap-6 items-center">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Recursos
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Como Funciona
            </Link>
            <Link
              href="#benefits"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Benefícios
            </Link>
          </nav>
          <div className="flex gap-3">
            <Button variant="ghost" asChild>
              <Link href="/auth/login">Entrar</Link>
            </Button>
            <Button asChild className="gap-2">
              <Link href="/auth/signup">
                Cadastre-se
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
              Domine suas finanças com{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                inteligência
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl">
              Registre receitas e despesas, visualize gráficos e receba dicas
              personalizados para melhorar sua saúde financeira.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild className="gap-2">
                <Link href="/auth/signup">
                  Começar Agora
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-8 text-sm text-muted-foreground justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>100% Seguro</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full" />
            <div className="relative bg-card border rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-muted/50 border-b px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Saldo Total</p>
                    <p className="text-3xl font-bold text-primary">
                      R$ 12.450,00
                    </p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Wallet className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Receitas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xl font-bold text-green-600">
                        +R$ 15.000
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Despesas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xl font-bold text-red-600">
                        -R$ 2.550
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg flex items-end gap-2 p-4">
                  <div className="w-full h-12 bg-primary/60 rounded" />
                  <div className="w-full h-16 bg-primary/70 rounded" />
                  <div className="w-full h-24 bg-primary/80 rounded" />
                  <div className="w-full h-20 bg-primary rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="container mx-auto px-4 py-20 bg-muted/30 rounded-3xl my-20"
      >
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">
            Recursos disponíveis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tudo que você precisa para ter controle total sobre suas finanças em
            um só lugar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Registros</CardTitle>
              <CardDescription>
                Registre receitas e despesas rapidamente com categorização
                automática e histórico completo
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <PieChart className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Gráficos</CardTitle>
              <CardDescription>
                Visualize seus gastos por categoria com gráficos interativos e
                fáceis de entender
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Recomendações</CardTitle>
              <CardDescription>
                Receba dicas e alertas sobre pontos de atenção baseados nos seus
                hábitos financeiros
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <ChartBar className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Análise Mensal</CardTitle>
              <CardDescription>
                Acompanhe seu progresso mês a mês e identifique oportunidades de
                economia
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Segurança</CardTitle>
              <CardDescription>
                Seus dados financeiros protegidos com criptografia e
                autenticação segura
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Acesso Simplificado</CardTitle>
              <CardDescription>
                Plataforma que funciona perfeitamente em desktop, tablet e
                mobile.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section id="how-it-works" className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comece a controlar suas finanças em 3 passos simples
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative">
            <div className="absolute top-0 left-8 w-0.5 h-full bg-gradient-to-b from-primary to-transparent hidden md:block" />
            <Card className="relative z-10">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                  1
                </div>
                <CardTitle>Crie sua Conta</CardTitle>
                <CardDescription>
                  Cadastre-se gratuitamente em segundos. Não é necessário cartão
                  de crédito
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="relative">
            <div className="absolute top-0 left-8 w-0.5 h-full bg-gradient-to-b from-primary to-transparent hidden md:block" />
            <Card className="relative z-10">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                  2
                </div>
                <CardTitle>Registre suas Transações</CardTitle>
                <CardDescription>
                  Adicione suas receitas, despesas com categorias personalizadas
                  com base no seu perfil
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="relative">
            <Card className="relative z-10">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                  3
                </div>
                <CardTitle>Analise e Melhore</CardTitle>
                <CardDescription>
                  Veja gráficos, receba recomendações e tome decisões
                  financeiras mais inteligentes
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/20">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              Pronto para transformar suas finanças?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Junte-se ao Techfin e fique no controle do seu dinheiro
            </p>
            <Button size="lg" asChild className="gap-2">
              <Link href="/auth/signup">
                Cadastre-se
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
}
