import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="p-6 md:p-10 max-w-5xl mx-auto space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Maria Siciliani</h1>
        <p className="text-xl text-muted-foreground">
          Senior Account Executive | SaaS Enterprise Sales | $1M+ Deals | LATAM · EMEA · U.S.
        </p>
        <div className="flex justify-center gap-4">
          <a href="mailto:mariqsici2323@gmail.com">
            <Button variant="outline"><Mail className="mr-2 h-4 w-4" />Email</Button>
          </a>
          <a href="https://www.linkedin.com/in/mariqsici2323">
            <Button variant="outline"><Linkedin className="mr-2 h-4 w-4" />LinkedIn</Button>
          </a>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p>
          Sales, for me, is about orchestrating real transformation. With over 6 years of experience
          closing complex, multi-year SaaS deals across the U.S., EMEA, and LATAM, I specialize in long-cycle
          enterprise sales, stakeholder engagement, and strategic negotiation. I’ve helped clients in freight,
          healthcare, tech, and education achieve scale with impact.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Resume Highlights</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Closed $1M+ multi-year SaaS deals with enterprise 3PL and freight clients</li>
          <li>Applied MEDDICC and Challenger methodologies to improve forecast and close rates</li>
          <li>Led stakeholder discovery across IT, Legal, Ops, and C-Suite for complex implementations</li>
          <li>Partnered with GSI and regional SIs to expand accounts and drive adoption</li>
          <li>Fluent in English and Spanish | Tools: Salesforce, HubSpot, Outreach, Apollo, ZoomInfo</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Testimonials</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="p-4">
              <p>“Maria is a force. She understands how to align technical depth with strategic value. Her ability to lead complex enterprise deals is unmatched.”</p>
              <p className="mt-2 font-semibold">— Former Manager, Green Light</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p>“I've seen few professionals handle enterprise discovery like Maria. She builds trust fast, asks sharp questions, and delivers ROI-driven proposals.”</p>
              <p className="mt-2 font-semibold">— Strategic Partner, Anchora</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Project Samples</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-4 space-y-2">
              <h3 className="text-lg font-bold">$1.2M Deal – Freight SaaS Platform</h3>
              <p>
                Led stakeholder mapping, ROI modeling, and partner collaboration to close a multi-year deal with a U.S. logistics firm. Created an upsell path to reach $2M TCV.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 space-y-2">
              <h3 className="text-lg font-bold">Workflow Automation for Healthcare</h3>
              <p>
                Navigated IT and compliance-heavy sales cycles to close $750K+ contracts with U.S. health systems. Delivered C-level business cases aligned to compliance and efficiency.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center pt-10">
        <p className="text-lg">Let’s drive growth together.</p>
        <a href="mailto:mariqsici2323@gmail.com">
          <Button className="mt-4">Get in Touch</Button>
        </a>
      </section>
    </main>
  );
}