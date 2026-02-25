'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, Linkedin, Github, Send, MapPin, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import SectionHeader from '@/components/shared/SectionHeader';
import GlassCard from '@/components/shared/GlassCard';
import { contactFormSchema, type ContactFormSchema } from '@/lib/validations';
import { contactInfo, socialLinks, contactSection } from '@/data/contact';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  Phone,
  Mail,
  Linkedin,
  MapPin,
  Github,
};

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-header',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.contact-content',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.contact-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: ContactFormSchema) => {
    setIsSubmitting(true);

    try {
      // Submit to Netlify Forms
      const formData = new FormData();
      formData.append('form-name', 'contact');
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('message', data.message);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast.success('Message sent successfully! I\'ll get back to you soon.');
      reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfoData = [
    {
      icon: 'Phone',
      label: 'Phone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\s/g, '')}`,
    },
    {
      icon: 'Mail',
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: 'Linkedin',
      label: 'LinkedIn',
      value: contactInfo.linkedin,
      href: `https://www.linkedin.com/in/${contactInfo.linkedin}/`,
    },
    {
      icon: 'MapPin',
      label: 'Location',
      value: contactInfo.location,
      href: '#',
    },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-6 relative bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <SectionHeader
          tag={contactSection.tag}
          title={contactSection.title}
          titleHighlight={contactSection.titleHighlight}
          subtitle={contactSection.subtitle}
          className="contact-header"
        />

        {/* Contact Grid */}
        <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="contact-content space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {contactSection.infoTitle}
              </h3>
              <p className="text-muted-foreground mb-8">{contactSection.infoSubtitle}</p>
            </div>

            <div className="space-y-4">
              {contactInfoData.map((item, index) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap];
                return (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 glass-card hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-foreground font-medium">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-3 rounded-xl border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-content">
            <GlassCard className="p-8">
              <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="space-y-6"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                {/* Hidden fields for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                <div className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl 
                             focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20
                             text-foreground placeholder:text-muted-foreground transition-all duration-300"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl 
                             focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20
                             text-foreground placeholder:text-muted-foreground transition-all duration-300"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message')}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl 
                             focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20
                             text-foreground placeholder:text-muted-foreground transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold
                           hover:shadow-lg hover:shadow-primary/30 transition-all duration-300
                           disabled:opacity-50 disabled:cursor-not-allowed
                           flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
