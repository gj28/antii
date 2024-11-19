'use client'

import React, { useState } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import NavBar from "@/app/(components)/NavBar";

export default function CareerPosition() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_no: "",
    current_location: "",
    role: "",
    Resume: null as File | null,
  });
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({ ...prev, Resume: file }));
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        submitData.append(key, value);
      }
    });

    try {
      const response = await axios.post("https://aws.antiai.ltd/api/applyJobProfile", submitData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast({
        title: "Application Submitted",
        description: "Your job application has been successfully submitted.",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-background text-foreground flex justify-between mx-auto py-10 px-12">
        <div className="mt-[10%] w-1/2 h-full">
          <h1 className="text-white text-4xl font-bold mb-6">Open Positions</h1>
          <p className="text-white  mb-4">
            We at Anti.ai are always on the lookout for bright minds to join our
            team and help us in our mission. If you think you'll be a great
            addition to our team, please fill out the form below.
          </p>
          <ul className="text-white list-disc list-inside space-y-2">
            <li>You can thoroughly absorb new technology and its impact on security</li>
            <li>You have strong problem-solving skills and ability to think creatively</li>
            <li>You are fascinated by new technical ideas</li>
            <li>You are detail-oriented and have excellent communication skills</li>
            <li>You are a team player</li>
            <li>You are familiar with various Machine Learning/Artificial Intelligence or Full Stack Web Development</li>
            <li>You love solving challenges and problems</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl w-1/2 bg-gray-900 p-8 rounded-lg">
          <div>
            <label htmlFor="name" className="text-white block mb-2">Full name</label>
            <input className="w-full p-2 rounded-lg bg-transparent ring-1 ring-white" name="name" placeholder="John Doe" required onChange={handleInputChange} value={formData.name} />
          </div>
          <div>
            <label htmlFor="email" className="text-white block mb-2">Email</label>
            <input className="w-full p-2 rounded-lg bg-transparent ring-1 ring-white" name="email" type="email" placeholder="john@example.com" required onChange={handleInputChange} value={formData.email} />
          </div>
          <div>
            <label htmlFor="contact_no" className="text-white block mb-2">Mobile number</label>
            <input className="w-full p-2 rounded-lg bg-transparent ring-1 ring-white" name="contact_no" type="tel" placeholder="+1 (555) 000-0000" required onChange={handleInputChange} value={formData.contact_no} />
          </div>
          <div>
            <label htmlFor="current_location" className="text-white block mb-2">Current Location</label>
            <input className="w-full p-2 rounded-lg bg-transparent ring-1 ring-white" name="current_location" placeholder="e.g. New York, USA" required onChange={handleInputChange} value={formData.current_location} />
          </div>
          <div>
            <label htmlFor="role" className="text-white block mb-2">Desired position</label>
            <input className="w-full p-2 rounded-lg bg-transparent ring-1 ring-white" name="role" placeholder="e.g. Full Stack Developer" required onChange={handleInputChange} value={formData.role} />
          </div>
          <div className="relative">
            <label htmlFor="Resume" className="block mb-2 text-sm font-medium text-gray-300">Upload Resume</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-gray-600 items-center">
                  <label htmlFor="file-upload" className=" p-2 relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <span>{fileName || "Upload a file"}</span>
                    <input id="file-upload" name="Resume" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf , .doc , .docx" required />
                  </label>
                  <p className="text-white pl-1">or drag and drop</p>
                </div>
                {fileName && <p className="text-xs text-gray-500 mt-2">{fileName}</p>}
                <p className="text-white text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="terms" className="text-white mr-2" required />
            <label htmlFor="terms">I accept the terms and conditions</label>
          </div>
          <button type="submit" className="text-white w-full bg-black py-2 rounded-md hover:bg-slate-800" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "SUBMIT"}
          </button>
        </form>
      </div>
    </>
  );
}
