import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
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
} from "lucide-react";
import { Logo } from "@/components/atoms/logo";
import Timeline from "@/components/organisms/Timeline";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white from-background via-background to-muted/20 scroll-smooth">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <Logo />
          <nav className="hidden md:flex gap-6 items-center">
            <Link
              href="#recursos"
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group py-2"
            >
              Recursos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="#como-funciona"
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group py-2"
            >
              Como Funciona
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="#beneficios"
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group py-2"
            >
              Benefícios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full" />
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

      <section className="container mx-auto px-4 md:py-10">
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
              personalizadas para melhorar sua saúde financeira.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild className="gap-2">
                <Link href="/auth/signup">
                  Cadastre-se
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

            <div className="relative flex items-center justify-center lg:-mt-10">
              <img
                src="/images/mockup-0.png"
                alt="Demon"
                className="w-full h-auto max-w-[600px] drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="container mx-auto px-4 py-10 bg-white rounded-3xl my-10"
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
          {[
            {
              icon: TrendingUp,
              title: "Registros",
              desc: "Registre receitas e despesas rapidamente com categorização automática e histórico completo",
            },
            {
              icon: PieChart,
              title: "Gráficos",
              desc: "Visualize seus gastos por categoria com gráficos interativos e fáceis de entender",
            },

            {
              icon: Shield,
              title: "Segurança",
              desc: "Seus dados financeiros protegidos com criptografia e autenticação segura",
            },
          ].map((feature, i) => (
            <Card
              key={i}
              className="border-2 hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <div className="w-7 h-7 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col gap-1">
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.desc}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section id="home" className="container mx-auto px-4 py-15">
        <Timeline />
      </section>

      <Footer />
    </div>
  );
}
