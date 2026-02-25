'use client';

import Link from 'next/link';
import { ArrowLeft, Download, Mail, Phone, MapPin, ExternalLink, Github, Linkedin } from 'lucide-react';
import { resumeData } from '@/data/resume';
import GlassCard from '@/components/shared/GlassCard';

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="print:hidden">
        <section className="py-12 relative">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex items-center justify-between mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>

              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Resume Content */}
      <section className="pb-20 print:py-0">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-background print:bg-white print:text-black">
            {/* Header */}
            <div className="mb-12 print:mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground print:text-black mb-2">
                {resumeData.personalInfo.name}
              </h1>
              <p className="text-xl text-primary print:text-gray-700 mb-6">
                {resumeData.personalInfo.title}
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground print:text-gray-600">
                <a href={`mailto:${resumeData.personalInfo.email}`} className="flex items-center gap-2 hover:text-primary print:hover:text-gray-900">
                  <Mail className="w-4 h-4" />
                  {resumeData.personalInfo.email}
                </a>
                <a href={`tel:${resumeData.personalInfo.phone}`} className="flex items-center gap-2 hover:text-primary print:hover:text-gray-900">
                  <Phone className="w-4 h-4" />
                  {resumeData.personalInfo.phone}
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {resumeData.personalInfo.location}
                </span>
                <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary print:hover:text-gray-900">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary print:hover:text-gray-900">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-10 print:mb-6">
              <h2 className="text-2xl font-bold text-foreground print:text-black mb-4 pb-2 border-b-2 border-primary print:border-gray-800">
                Professional Summary
              </h2>
              <p className="text-muted-foreground print:text-gray-700 leading-relaxed">
                {resumeData.summary}
              </p>
            </div>

            {/* Experience */}
            <div className="mb-10 print:mb-6">
              <h2 className="text-2xl font-bold text-foreground print:text-black mb-4 pb-2 border-b-2 border-primary print:border-gray-800">
                Work Experience
              </h2>
              <div className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="print:break-inside-avoid">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground print:text-black">
                          {exp.title}
                        </h3>
                        <p className="text-primary print:text-gray-700 font-medium">
                          {exp.company} • {exp.location}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground print:text-gray-600 whitespace-nowrap">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground print:text-gray-700">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-10 print:mb-6">
              <h2 className="text-2xl font-bold text-foreground print:text-black mb-4 pb-2 border-b-2 border-primary print:border-gray-800">
                Education
              </h2>
              <div className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="print:break-inside-avoid">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground print:text-black">
                          {edu.degree} in {edu.field}
                        </h3>
                        <p className="text-primary print:text-gray-700">
                          {edu.institution} • {edu.location}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground print:text-gray-600 whitespace-nowrap">
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                    {edu.gpa && (
                      <p className="text-muted-foreground print:text-gray-700">GPA: {edu.gpa}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="mb-10 print:mb-6">
              <h2 className="text-2xl font-bold text-foreground print:text-black mb-4 pb-2 border-b-2 border-primary print:border-gray-800">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(resumeData.skills).map(([category, skills]) => (
                  <div key={category} className="print:break-inside-avoid">
                    <h3 className="font-semibold text-foreground print:text-black mb-2">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 print:bg-gray-100 print:text-gray-800 print:border-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="mb-10 print:mb-6">
              <h2 className="text-2xl font-bold text-foreground print:text-black mb-4 pb-2 border-b-2 border-primary print:border-gray-800">
                Featured Projects
              </h2>
              <div className="space-y-4">
                {resumeData.projects.map((project, index) => (
                  <div key={index} className="print:break-inside-avoid">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-lg font-semibold text-foreground print:text-black">
                        {project.name}
                      </h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary print:text-gray-700 text-sm hover:underline print:hidden"
                        >
                          View Project →
                        </a>
                      )}
                    </div>
                    <p className="text-muted-foreground print:text-gray-700 mb-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded text-xs font-medium bg-secondary/50 text-foreground print:bg-gray-100 print:text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
