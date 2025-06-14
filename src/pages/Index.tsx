import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Solutions from "@/components/Solutions";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/Icon";

const ProductShowcase = () => (
  <section className="py-20 lg:py-32">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <p className="text-primary font-semibold">PRODUCT</p>
      </div>
      <div className="mt-8">
        <Card className="overflow-hidden">
          <CardHeader className="p-2 bg-card/50 border-b flex-row items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </CardHeader>
          <CardContent className="p-0">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072" alt="Product dashboard" className="w-full h-auto object-cover" />
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const ContentRevolution = () => {
    const items = [
        { icon: "link", title: "Global Translations", description: "Seamlessly connect with an international audience through accurate and culturally sensitive translations." },
        { icon: "link", title: "Social Media Creator", description: "Design, research, and create engaging social media posts that stand out in crowded digital spaces." },
        { icon: "file-text", title: "Blog Post Managing", description: "Streamline your blog writing process with AI-powered drafts and creative insights to help you connect with your readers." },
    ]
    return (
        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4 text-center">
                <p className="text-primary font-semibold">SERVICES</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">Revolutionize Your Content with AI Precision</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">Elevate your brand with responsive copywriting. From creating campaigns to providing social content and blogs, our AI is key to ensuring your message resonates with your audience, anywhere.</p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {items.map(item => (
                        <Card key={item.title} className="bg-primary/5 border-primary/20">
                            <CardHeader>
                                <Icon iconName={item.icon as any} className="w-8 h-8 text-primary mb-2" />
                                <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

const FinalCTA = () => (
    <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-background"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(120,40,200,0.2),transparent_60%)]"></div>
      </div>
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter">Empower Your Vision with <br/> Smarter AI Solutions</h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">Unleash the power of AI to drive your workflows. Our creativity and data-driven solutions let us cater to every customer's needs, ensuring efficiency and excellence.</p>
        <div className="mt-8">
            <Button size="lg" className="font-bold">Join the Revolution</Button>
        </div>
      </div>
    </section>
)

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductShowcase />
        <Features />
        <Solutions />
        <ContentRevolution />
        <Pricing />
        <Testimonials />
        <Faq />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
