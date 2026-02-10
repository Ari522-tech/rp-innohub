import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Send, Facebook, Linkedin, X } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4 animate-slide-up">
          <h1 className="text-4xl font-bold text-slate-900">Get in Touch</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions about our innovation programs, training, or partnerships? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: Communication Channels */}
          <div className="md:col-span-1 space-y-6 animate-slide-up">
            
            {/* Contact Info Card */}
            <Card className="bg-rp-blue text-white shadow-xl border-none">
              <CardContent className="p-8 space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-4">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-rp-gold" />
                      </div>
                      <div>
                        <p className="font-semibold text-rp-gold">Visit Us</p>
                        <p className="text-slate-200 text-sm leading-relaxed">
                          RP InnoHub HQ,<br />
                          KK 15 Rd, Kigali,<br />
                          Rwanda
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-rp-gold" />
                      </div>
                      <div>
                        <p className="font-semibold text-rp-gold">Email Us</p>
                        <p className="text-slate-200 text-sm">info@rp.ac.rw</p>
                        <p className="text-slate-200 text-sm">partners@rp.ac.rw</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-white/10 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-rp-gold" />
                      </div>
                      <div>
                        <p className="font-semibold text-rp-gold">Call Us</p>
                        <p className="text-slate-200 text-sm">+250 791 100 954</p>
                        <p className="text-slate-200 text-sm">+250 731 100 954</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media Channels */}
                <div className="pt-4">
                  <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300">Follow Us</h4>
                  <div className="flex gap-4">
                    {/* X (formerly Twitter) */}
                    <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-rp-gold hover:text-rp-blue transition-colors group">
                      <X size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                    {/* LinkedIn */}
                    <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-rp-gold hover:text-rp-blue transition-colors group">
                      <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                    {/* Facebook */}
                    <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-rp-gold hover:text-rp-blue transition-colors group">
                      <Facebook size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* RIGHT COLUMN: Inquiry Form */}
          <div className="md:col-span-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <Card className="bg-white shadow-xl border border-slate-200 h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h3>
                <p className="text-slate-500 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-slate-700 font-medium">Your Name</Label>
                      <Input placeholder="John Doe" className="bg-white border-slate-300 text-slate-900 focus-visible:ring-rp-blue" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-slate-700 font-medium">Email Address</Label>
                      <Input type="email" placeholder="john@example.com" className="bg-white border-slate-300 text-slate-900 focus-visible:ring-rp-blue" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-slate-700 font-medium">Phone Number</Label>
                      <Input placeholder="+250 ..." className="bg-white border-slate-300 text-slate-900 focus-visible:ring-rp-blue" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-slate-700 font-medium">Subject</Label>
                      <Input placeholder="Partnership / Inquiry / Support" className="bg-white border-slate-300 text-slate-900 focus-visible:ring-rp-blue" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-slate-700 font-medium">Message</Label>
                    <textarea 
                      className="flex min-h-[150px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 ring-offset-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rp-blue disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div className="pt-2">
                    <Button className="w-full md:w-auto bg-rp-blue hover:bg-blue-900 text-white px-8 py-6 text-lg shadow-lg shadow-blue-900/10">
                      <Send className="mr-2 h-5 w-5" /> Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;