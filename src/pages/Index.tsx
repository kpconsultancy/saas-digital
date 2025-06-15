
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
const ProductShowcase = () => <section id="platform" className="pt-12 lg:pt-20 pb-0">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-primary font-thin text-xl my-[22px]">PLATFORM</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">Command Center</h2>
        <p className="mt-4 text-base text-white">Your marketing, content, and insights — all in one intuitive dashboard.</p>
      </div>
      <div className="mt-8">
        <img src="/lovable-uploads/4f3c6b33-3e2d-4af2-affc-821751dcbf9c.png" alt="Product dashboard" className="w-3/5 mx-auto h-auto object-cover rounded-lg border shadow-sm" />
      </div>
    </div>
  </section>;
const ContentRevolution = () => {
  const items = [{
    icon: "globe",
    title: "Multilingual Content",
    description: "Reach global markets with smart, culturally tuned translations."
  }, {
    icon: "share-2",
    title: "Social Post Builder",
    description: "Research, design, and publish thumb-stopping social content."
  }, {
    icon: "file-text",
    title: "Blog Assistant",
    description: "Accelerate your publishing with guided drafts and AI suggestions tailored to your tone."
  }];
  return <section id="services" className="py-20 lg:py-32">
            <div className="container mx-auto px-4 text-center">
                <p className="text-primary my-[22px] text-xl font-thin">SERVICES</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">Content. Precision. Scale. Powered by AI.</h2>
                <p className="mt-4 max-w-3xl mx-auto text-base font-light text-white">From blog posts to global campaigns, BrightForge delivers precise, impactful content that resonates with your audience wherever they are.</p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {items.map(item => <Card key={item.title} className="bg-primary/5 border-primary/20">
                            <CardHeader>
                                <Icon iconName={item.icon as any} className="w-8 h-8 text-primary mb-2 mx-auto" />
                                <CardTitle className="text-base">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-white">{item.description}</p>
                            </CardContent>
                        </Card>)}
                </div>
            </div>
        </section>;
};
const FinalCTA = () => <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-background"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(120,40,200,0.2),transparent_60%)]"></div>
      </div>
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter">Empower Your Marketing with AI-Driven Intelligence</h2>
        <p className="mt-6 max-w-2xl mx-auto text-white text-lg">BrightForge helps you build faster, smarter, and with more clarity. Join thousands using AI to power their marketing edge.</p>
        <div className="mt-8">
            <Button size="lg" className="font-bold">Get Started Today</Button>
        </div>
      </div>
    </section>;
const Index = () => {
  return <div className="flex flex-col min-h-screen bg-background font-sans">
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
    </div>;
};
export default Index;
