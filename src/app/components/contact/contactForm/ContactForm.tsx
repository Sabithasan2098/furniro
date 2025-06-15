"use client";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";

const ContactForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State for errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validate form
  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid - proceed with submission
      console.log("Form submitted:", formData);
      // Here you would typically make an API call

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="max-w-[1000px] mx-auto mb-5 md:mb-9 lg:mb-16">
      <div className="my-7 md:my-12 lg:my-20 max-w-[644px] mx-auto px-2 md:px-0">
        <h1 className="text-[22px] md:text-[28px] lg:text-[36px] font-semibold text-center">
          Get In Touch With Us
        </h1>
        <p className="text-xs md:text-[16px] text-[#9f9f9f] text-center pt-2">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="flex gap-3 md:gap-6 lg:gap-12 flex-col md:flex-row px-2 md:px-4 lg:px-0">
        <div className="basis-2/5 flex md:flex-col gap-4 md:gap-0 md:space-y-5 lg:space-y-8">
          <div className="flex items-center md:place-items-start flex-col md:flex-row gap-1 md:gap-4 lg:gap-6 w-full md:w-auto">
            <FaLocationDot className="md:mt-3 w-4 h-3 md:w-6 md:h-5" />
            <div className="flex flex-col items-center md:items-start justify-center md:justify-start">
              <h1 className="md:text-[24px] font-semibold md:font-medium">
                Address
              </h1>
              <p className="text-xs md:text-[16px] text-center md:text-start">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>
          <div className="flex items-center md:place-items-start flex-col md:flex-row gap-1 md:gap-4 lg:gap-6 w-full md:w-auto">
            <FaPhone className="md:mt-3 w-4 h-3 md:w-6 md:h-5" />
            <div className="flex flex-col items-center md:items-start justify-center md:justify-start">
              <h1 className="md:text-[24px] font-semibold md:font-medium">
                Phone
              </h1>
              <p className="text-xs md:text-[16px] text-center md:text-start">
                Mobile: +(84) 546-6789
              </p>
              <p className="text-xs md:text-[16px] text-center md:text-start">
                Hotline: +(84) 546-6789
              </p>
            </div>
          </div>
          <div className="flex items-center md:place-items-start flex-col md:flex-row gap-1 md:gap-4 lg:gap-6 w-full md:w-auto">
            <IoTime className="md:mt-3 w-4 h-3 md:w-6 md:h-5" />
            <div className="flex flex-col items-center md:items-start justify-center md:justify-start">
              <h1 className="md:text-[24px] font-semibold md:font-medium">
                Working Time
              </h1>
              <p className="text-xs md:text-[16px] text-center md:text-start">
                Monday-Friday: 9:00 - 22:00
              </p>
              <p className="text-xs md:text-[16px] text-center md:text-start">
                Monday-Friday: 9:00 - 22:00
              </p>
            </div>
          </div>
        </div>

        <div className="basis-3/5">
          <form onSubmit={handleSubmit} className="lg:space-y-5">
            {/* Name Field */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-sm md:text-[16px] font-normal md:font-medium">
                Name
              </legend>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`input w-full md:h-[60px] lg:h-[75px] pl-3 md:pl-5 lg:md:pl-7 md:rounded-md lg:rounded-lg lg:mt-2 ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder="ABC"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </fieldset>

            {/* Email Field */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-sm md:text-[16px] font-normal md:font-medium">
                Email
              </legend>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`input w-full md:h-[60px] lg:h-[75px] pl-3 md:pl-5 lg:md:pl-7 md:rounded-md lg:rounded-lg lg:mt-2 ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="ABC@gmail.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </fieldset>

            {/* Subject Field */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-sm md:text-[16px] font-normal md:font-medium">
                Subject
              </legend>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="input w-full md:h-[60px] lg:h-[75px] pl-3 md:pl-5 lg:md:pl-7 md:rounded-md lg:rounded-lg lg:mt-2"
                placeholder="This is an optional"
              />
            </fieldset>

            {/* Message Field */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-sm md:text-[16px] font-normal md:font-medium">
                Message
              </legend>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`textarea w-full min-h-[68px] md:min-h-[75px] lg:min-h-[95px] pl-3 md:pl-5 lg:md:pl-7 md:rounded-md lg:rounded-lg lg:mt-2 md:pt-3 lg:pt-4 ${
                  errors.message ? "border-red-500" : ""
                }`}
                placeholder="Your message here"
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </fieldset>

            <div className="flex justify-center md:justify-start mt-3 md:mt-5 lg:mt-10">
              <button
                type="submit"
                className="text-sm md:text-[16px] bg-[#b89028] px-10 md:px-16 py-2 md:py-3 text-white rounded-md cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
