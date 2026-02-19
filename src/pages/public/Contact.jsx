import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/components/ui/field';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { MapPin, Phone, Mail, Send, Twitter, Linkedin, Facebook } from 'lucide-react';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (e.g. fetching contact details or form config)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16 lg:py-20">
        {/* Header */}
        <div className="mb-14 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-5">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Have questions about publishing innovations, applying to calls, training opportunities, 
            partnerships or platform features? Our team is here to help.
          </p>
        </div>

        <Separator className="mb-12 md:mb-16" />

        <div className="grid md:grid-cols-5 gap-10 lg:gap-14">
          {/* Contact Information */}
          <div className="md:col-span-2 space-y-10">
            <div>
              <h2 className="text-xl font-medium text-slate-900 mb-6">
                Contact Details
              </h2>

              {isLoading ? (
                <div className="space-y-6">
                  <Skeleton className="h-28 w-full rounded-md" />
                  <Skeleton className="h-28 w-full rounded-md" />
                </div>
              ) : (
                <Card className="border-neutral-200">
                  <CardContent className="p-6 md:p-8 space-y-8">
                    <div className="space-y-7 text-sm">
                      <div className="flex items-start gap-4">
                        <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium text-slate-900">Location</p>
                          <p className="text-neutral-700 mt-1 leading-relaxed">
                            RP Center for Technologies and Innovations<br />
                            Rwanda Polytechnic – Kigali Campus<br />
                            KK 15 Road, Kigali, Rwanda
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium text-slate-900">Email</p>
                          <div className="mt-1 space-y-1">
                            <a
                              href="mailto:info@rp.ac.rw"
                              className="text-neutral-700 hover:text-primary transition-colors block"
                            >
                              info@rp.ac.rw
                            </a>
                            <a
                              href="mailto:innovation@rp.ac.rw"
                              className="text-neutral-700 hover:text-primary transition-colors block"
                            >
                              innovation@rp.ac.rw
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium text-slate-900">Phone</p>
                          <p className="text-neutral-700 mt-1">
                            +250 791 100 954<br />
                            +250 731 100 954
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <h4 className="text-sm font-medium text-slate-900 mb-4">
                        Social Channels
                      </h4>
                      <div className="flex gap-5">
                        <a
                          href="#"
                          className="text-neutral-600 hover:text-primary transition-colors"
                          aria-label="Twitter"
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                        <a
                          href="#"
                          className="text-neutral-600 hover:text-primary transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                          href="#"
                          className="text-neutral-600 hover:text-primary transition-colors"
                          aria-label="Facebook"
                        >
                          <Facebook className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <Card className="border-neutral-200 h-full">
              <CardContent className="p-6 md:p-8 lg:p-10">
                <h2 className="text-xl font-medium text-slate-900 mb-2">
                  Send a Message
                </h2>
                <p className="text-sm text-neutral-600 mb-8">
                  Our team typically responds within 24–48 hours during working days.
                </p>

                {isLoading ? (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Skeleton className="h-10 w-full" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Skeleton className="h-10 w-full" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                    <Skeleton className="h-40 w-full" />
                    <div className="flex gap-4">
                      <Skeleton className="h-11 w-36" />
                      <Skeleton className="h-11 w-28" />
                    </div>
                  </div>
                ) : (
                  <form className="space-y-7">
                    <FieldGroup>
                      <FieldSet>
                        <FieldGroup className="grid md:grid-cols-2 gap-6">
                          <Field>
                            <FieldLabel htmlFor="name">Full Name</FieldLabel>
                            <Input
                              id="name"
                              placeholder="Enter your full name"
                              required
                            />
                          </Field>

                          <Field>
                            <FieldLabel htmlFor="email">Email Address</FieldLabel>
                            <Input
                              id="email"
                              type="email"
                              placeholder="your.email@example.com"
                              required
                            />
                          </Field>
                        </FieldGroup>

                        <FieldGroup className="grid md:grid-cols-2 gap-6">
                          <Field>
                            <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                            <Input
                              id="phone"
                              placeholder="+250 7XX XXX XXX"
                            />
                            <FieldDescription className="text-xs mt-1.5">
                              Include country code if international
                            </FieldDescription>
                          </Field>

                          <Field>
                            <FieldLabel htmlFor="subject">Subject</FieldLabel>
                            <Input
                              id="subject"
                              placeholder="e.g. Partnership, Platform Issue, Training Inquiry"
                            />
                          </Field>
                        </FieldGroup>

                        <Field>
                          <FieldLabel htmlFor="message">Message</FieldLabel>
                          <Textarea
                            id="message"
                            placeholder="Please describe your inquiry or question in detail..."
                            className="min-h-[160px] resize-none"
                            required
                          />
                          <FieldDescription className="text-xs mt-1.5">
                            The more details you provide, the faster we can assist you.
                          </FieldDescription>
                        </Field>
                      </FieldSet>

                      <div className="pt-5 flex flex-col sm:flex-row gap-4">
                        <Button
                          type="submit"
                          className="bg-primary hover:bg-primary-700 text-white min-w-[160px]"
                        >
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </Button>

                        <Button
                          type="button"
                          variant="outline"
                          className="border-neutral-300 min-w-[160px]"
                        >
                          Cancel
                        </Button>
                      </div>
                    </FieldGroup>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;