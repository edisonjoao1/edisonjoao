import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  message: z.string().min(10, "Tell me more about your project"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data: ContactForm) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "I'll get back to you soon.",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center bg-white pt-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Get in Touch</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.95] tracking-tight">
              Let's build
              <br />
              <span className="italic font-light">something</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Have a project in mind? Let's talk.
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                Whether you need an AI product, iOS app, or full-stack solution,
                I'm here to help bring your vision to life.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Email</p>
                  <a href="mailto:edison@ai4u.space" className="text-xl font-bold hover:underline">edison@ai4u.space</a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Studio</p>
                  <a href="https://ai4u.space" target="_blank" className="text-xl font-bold hover:underline">ai4u.space</a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Social</p>
                  <div className="flex gap-4">
                    <a href="#" className="text-lg hover:underline">Twitter</a>
                    <a href="#" className="text-lg hover:underline">LinkedIn</a>
                    <a href="#" className="text-lg hover:underline">GitHub</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {isSubmitted ? (
                <div className="bg-zinc-50 rounded-3xl p-12 text-center">
                  <CheckCircle2 className="w-16 h-16 mx-auto mb-6 text-emerald-500" />
                  <h3 className="text-2xl font-display font-bold mb-4">Message Sent!</h3>
                  <p className="text-muted-foreground">I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="bg-zinc-50 rounded-3xl p-8 md:p-12 space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-widest">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              className="border-0 border-b border-black/10 rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-black"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-widest">Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="your@email.com" 
                              className="border-0 border-b border-black/10 rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-black"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-widest">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell me about your project..."
                              rows={5}
                              className="border-0 border-b border-black/10 rounded-none bg-transparent px-0 focus-visible:ring-0 focus-visible:border-black resize-none"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <button
                      type="submit"
                      className="w-full py-4 bg-black text-white rounded-full font-bold uppercase tracking-wider hover:bg-black/90 transition-all flex items-center justify-center gap-2 group"
                    >
                      Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </Form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
