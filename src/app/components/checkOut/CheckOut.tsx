"use client";
import React, { useState } from "react";
import cartData from "@/app/cartData.json";
import Link from "next/link";

const CheckOut = () => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "Srilanka",
    streetAddress: "",
    townCity: "",
    province: "",
    zipCode: "",
    phone: "",
    email: "",
    additionalInfo: "",
  });

  // Payment method state
  const [activeMethod, setActiveMethod] = useState("cod");

  // Form validation state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Calculate totals
  const totalMoney = cartData
    .map((Data) => Number(Data.price))
    .reduce((acc, curr) => acc + curr, 0)
    .toLocaleString();

  // Country-Province mapping
  const countryProvinceMap: Record<string, string[]> = {
    Srilanka: [
      "Western Province",
      "Central Province",
      "Southern Province",
      "Uva Province",
      "Sabaragamuwa Province",
    ],
    "Hong Kong": ["Hong Kong Island", "Kowloon", "New Territories"],
    Bangladesh: [
      "Dhaka Division",
      "Chittagong Division",
      "Rajshahi Division",
      "Khulna Division",
    ],
    India: [
      "Maharashtra",
      "Tamil Nadu",
      "Karnataka",
      "Uttar Pradesh",
      "Gujarat",
    ],
    Nepal: ["Province 1", "Province 2", "Bagmati Province", "Gandaki Province"],
    Bhutan: ["Paro", "Thimphu", "Punakha", "Bumthang"],
    Pakistan: ["Punjab", "Sindh", "Khyber Pakhtunkhwa", "Balochistan"],
    Afghanistan: ["Kabul", "Herat", "Balkh", "Kandahar"],
    China: ["Beijing", "Shanghai", "Guangdong", "Sichuan"],
    Russia: [
      "Moscow Oblast",
      "Saint Petersburg",
      "Krasnodar Krai",
      "Sverdlovsk Oblast",
    ],
  };

  // Handle payment method change
  const handleMethodChange = (method: string) => {
    setActiveMethod(method);
  };

  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.streetAddress)
      newErrors.streetAddress = "Street address is required";
    if (!formData.townCity) newErrors.townCity = "Town/City is required";
    if (!formData.province) newErrors.province = "Province is required";
    if (!formData.zipCode) newErrors.zipCode = "Zip code is required";

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle place order
  const handlePlaceOrder = () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Create order object with payment method
    const order = {
      billingDetails: formData,
      products: cartData.map((item) => ({
        id: item.id,
        name: item.title,
        quantity: item.quantity,
        price: item.price,
      })),
      paymentMethod: activeMethod, // Include payment method
      subtotal: totalMoney,
      total: totalMoney,
    };

    console.log("Order placed:", order);

    // In a real app, you would send this to your backend
    // Example:
    // fetch('/api/orders', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(order)
    // })

    // Reset form after submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Order placed successfully!");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        companyName: "",
        country: "Srilanka",
        streetAddress: "",
        townCity: "",
        province: "",
        zipCode: "",
        phone: "",
        email: "",
        additionalInfo: "",
      });
    }, 1000);
  };

  // Check if form is valid
  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.streetAddress &&
      formData.townCity &&
      formData.province &&
      formData.zipCode &&
      formData.phone &&
      formData.email
    );
  };

  return (
    <div className="max-w-[1136px] mx-auto px-3 md:px-5 lg:px-0 mt-3 mb-5 md:my-10 lg:my-16 lg:mb-[120px]">
      <h2 className=" text-[24px] md:text-[30px] lg:text-[36px] font-semibold md:my-3 lg:my-6">
        Billing details
      </h2>
      <div className="flex flex-col md:flex-row gap-4 md:gap-24 lg:gap-32 ">
        <div className="basis-6/13 lg:space-y-5">
          {/* First Name */}
          <div className="flex gap-2 md:gap-5 lg:gap-10 items-center justify-between">
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend md:text-[16px] font-medium">
                First Name
              </legend>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`input w-full lg:h-[75px] lg:mt-5 lg:min-w-[211px] ${
                  errors.firstName ? "border-red-500" : ""
                }`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
              )}
            </fieldset>

            {/* Last Name */}
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend md:text-[16px] font-medium">
                Last Name
              </legend>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`input w-full lg:h-[75px] lg:mt-5 lg:min-w-[211px] ${
                  errors.lastName ? "border-red-500" : ""
                }`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
              )}
            </fieldset>
          </div>

          {/* Company Name (Optional) */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend md:text-[16px] font-medium">
              Company Name (Optional)
            </legend>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="input w-full lg:h-[75px] lg:mt-5"
            />
          </fieldset>

          {/* Country / Region */}
          <div>
            <legend className="fieldset-legend text-[12px] md:text-[16px] font-medium lg:mb-5 mb-1">
              Country / Region
            </legend>
            <label className="select w-full lg:h-[75px]">
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full h-full pl-4"
              >
                {Object.keys(countryProvinceMap).map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Street Address */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend md:text-[16px] font-medium">
              Street Address
            </legend>
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleInputChange}
              className={`input w-full lg:h-[75px] lg:mt-5 ${
                errors.streetAddress ? "border-red-500" : ""
              }`}
            />
            {errors.streetAddress && (
              <p className="text-red-500 text-xs mt-1">
                {errors.streetAddress}
              </p>
            )}
          </fieldset>

          {/* Town / City */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend md:text-[16px] font-medium">
              Town / City
            </legend>
            <input
              type="text"
              name="townCity"
              value={formData.townCity}
              onChange={handleInputChange}
              className={`input w-full lg:h-[75px] lg:mt-5 ${
                errors.townCity ? "border-red-500" : ""
              }`}
            />
            {errors.townCity && (
              <p className="text-red-500 text-xs mt-1">{errors.townCity}</p>
            )}
          </fieldset>

          {/* Province */}
          <div>
            <legend className="fieldset-legend text-[12px] md:text-[16px] font-medium lg:mb-5 mb-1">
              Province
            </legend>
            <label className="select w-full lg:h-[75px]">
              <select
                name="province"
                value={formData.province}
                onChange={handleInputChange}
                className={`w-full h-full pl-4 ${
                  errors.province ? "border-red-500" : ""
                }`}
              >
                <option value="" disabled>
                  Select a province
                </option>
                {formData.country &&
                  countryProvinceMap[formData.country]?.map((province) => (
                    <option key={province} value={province}>
                      {province}
                    </option>
                  ))}
              </select>
            </label>
            {errors.province && (
              <p className="text-red-500 text-xs mt-1">{errors.province}</p>
            )}
          </div>

          {/* Zip Code */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend md:text-[16px] font-medium">
              Zip Code
            </legend>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              className={`input w-full lg:h-[75px] lg:mt-5 ${
                errors.zipCode ? "border-red-500" : ""
              }`}
            />
            {errors.zipCode && (
              <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>
            )}
          </fieldset>

          {/* Phone */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend md:text-[16px] font-medium">
              Phone
            </legend>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`input w-full lg:h-[75px] lg:mt-5 ${
                errors.phone ? "border-red-500" : ""
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </fieldset>

          {/* Email */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend md:text-[16px] font-medium">
              Email
            </legend>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`input w-full lg:h-[75px] lg:mt-5 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </fieldset>

          {/* Additional information */}
          <fieldset className="fieldset mt-4">
            <input
              type="text"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              className="input w-full lg:h-[75px] lg:mt-10"
              placeholder="Additional information"
            />
          </fieldset>
        </div>

        <div className="basis-7/13 border-gray-400 border-t-[1.7px] md:border-none pt-4 mt-4 md:pt-0 md:mt-0">
          <div className=" flex justify-between">
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-[18px] md:text-[21px] lg:text-[24px] font-medium">
                Product
              </h3>
              <div className="grid grid-cols-1 pt-2 gap-2">
                {cartData.map((data) => (
                  <p className="flex gap-4  items-center" key={data.id}>
                    <span className="text-[#9f9f9f]">{data.title}</span>{" "}
                    <span className="text-[12px] font-medium">X</span>{" "}
                    <span className="text-[12px] font-medium">
                      {data.quantity}
                    </span>{" "}
                  </p>
                ))}
              </div>
              <p>Subtotal</p>
              <p className="pt-1">Total</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <h3 className="text-[18px] md:text-[21px] lg:text-[24px] font-medium">
                Subtotal
              </h3>
              <div className="grid grid-cols-1 pt-2 gap-2">
                {cartData.map((data) => (
                  <p className="font-light" key={data.id}>
                    Rs. {Number(data.price).toLocaleString()}.000
                  </p>
                ))}
              </div>
              <p>Rs.{totalMoney}.000</p>
              <p className="text-[18px] md:text-[21px] lg:text-[24px] font-bold text-[#d1a054] ">
                Rs.{totalMoney}.000
              </p>
            </div>
          </div>

          {/* Payment Section (Restored) */}
          <div className="w-full space-y-3 border-t-[1.7px] border-gray-400 mt-6 pt-4 ">
            {/* Direct Bank Transfer */}
            <div className="collapse !border-0 p-0">
              <input
                type="radio"
                className="radio-xs"
                name="payment-method"
                checked={activeMethod === "bank"}
                onChange={() => handleMethodChange("bank")}
              />
              <div
                className="collapse-title flex items-center gap-2 cursor-pointer p-0"
                onClick={() => handleMethodChange("bank")}
              >
                <input
                  type="radio"
                  name="radio"
                  className="radio radio-xs checked:bg-black"
                  checked={activeMethod === "bank"}
                  readOnly
                />
                <span className="text-[16px] font-normal">
                  Direct Bank Transfer
                </span>
              </div>
              <div
                className={`collapse-content text-[#9f9f9f] text-[16px] font-light p-0 ${
                  activeMethod === "bank" ? "block" : "hidden"
                }`}
              >
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </div>
            </div>

            {/* Cash On Delivery */}
            <div className="collapse !border-0 p-0">
              <input
                type="radio"
                className="radio-xs"
                name="payment-method"
                checked={activeMethod === "cod"}
                onChange={() => handleMethodChange("cod")}
              />
              <div
                className="collapse-title flex items-center gap-2 cursor-pointer p-0"
                onClick={() => handleMethodChange("cod")}
              >
                <input
                  type="radio"
                  name="radio"
                  className="radio radio-xs checked:bg-black"
                  checked={activeMethod === "cod"}
                  readOnly
                />
                <span className="text-[16px] font-normal">
                  Cash On Delivery
                </span>
              </div>
              <div
                className={`collapse-content text-[#9f9f9f] text-[16px] font-light p-0 ${
                  activeMethod === "cod" ? "block" : "hidden"
                }`}
              >
                Cash on Delivery allows you to pay for your order in cash when
                it is delivered to your doorstep. This method ensures you only
                pay after receiving your product.
              </div>
            </div>
            <p className="text-[16px] font-light">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <Link href={"#"}>
                <span className="font-medium">privacy policy</span>
              </Link>
              .
            </p>
          </div>

          <div className="flex items-center justify-center mt-8">
            <button
              className={`text-[20px] border-[2px] border-gray-400 px-20 py-3 rounded-xl cursor-pointer ${
                !isFormValid() || isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-600 hover:text-white active:bg-[#d1a054] active:text-white transition-colors"
              }`}
              onClick={handlePlaceOrder}
              disabled={!isFormValid() || isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Place order"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
