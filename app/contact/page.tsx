"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, HelpCircle } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "For general inquiries",
      link: "mailto:support@privacygecko.com",
      linkText: "support@privacygecko.com",
    },
    {
      icon: MessageCircle,
      title: "Social",
      description: "Follow for updates",
      links: [
        { href: "https://twitter.com/privacygecko", text: "Twitter" },
        { href: "https://t.me/privacygecko", text: "Telegram" },
      ],
    },
    {
      icon: HelpCircle,
      title: "FAQ",
      description: "Quick answers",
      link: "/resources/faq",
      linkText: "View FAQ",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-4"
            >
              Contact
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-slate-900 mb-6"
            >
              Get in
              <br />
              <span className="text-blue-600">touch</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl text-slate-600 leading-relaxed"
            >
              Questions, feedback, or partnership ideas? We'd love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-3 gap-12"
          >
            {/* Contact Form */}
            <motion.div variants={fadeUp} className="lg:col-span-2">
              <Suspense fallback={
                <div className="bg-slate-50 rounded-2xl p-8 text-center text-slate-500">
                  Loading form...
                </div>
              }>
                <ContactForm />
              </Suspense>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeUp} className="space-y-6">
              {contactMethods.map((method) => (
                <div
                  key={method.title}
                  className="bg-slate-50 rounded-2xl p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                    <method.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 mb-1">
                    {method.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-3">{method.description}</p>

                  {method.link && (
                    <Link
                      href={method.link}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                    >
                      {method.linkText}
                    </Link>
                  )}

                  {method.links && (
                    <div className="flex gap-4">
                      {method.links.map((link) => (
                        <a
                          key={link.text}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Response Time */}
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <p className="text-sm font-semibold text-blue-900 mb-1">
                  Response time
                </p>
                <p className="text-sm text-blue-700">
                  We typically respond within 48 hours.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
