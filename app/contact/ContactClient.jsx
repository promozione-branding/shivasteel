"use client";

import { useState } from "react";
import axios from "axios";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [place, setplace] = useState("");
  const [requirement, setRequirement] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const formData = {
        platform: "Shiva Steel Fabricator Contact page form",
        platformEmail: "shivasteel2019@gmail.com",
        name,
        phone,
        email,
        place,
        product: requirement,
        message,
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData,
      );

      if (data?.success) {
        setStatus("success");

        // const whatsappText = `Hi, I am ${name}.
        //   Email: ${email}
        //   Product: ${requirement}
        //   City: ${place}
        //   Message: ${message}
        //   Contact: ${phone}`;

        // setTimeout(() => {
        //   window.open(
        //     `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(
        //       whatsappText
        //     )}`,
        //     "_blank"
        //   );
        // }, 1000);

        setName("");
        setPhone("");
        setEmail("");
        setplace("");
        setRequirement("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log(error);

      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section
        style={{ backgroundImage: "url('/bg3.webp')" }}
        className="w-full h-[55vh] md:h-[80vh] bg-cover bg-center relative flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative mt-20 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Shiva Steel Fabricator
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Your Trusted Partner for Quality Steel Products & Fabrication Solutions
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="bg-gray-100 py-10 md:py-16 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-9 md:mb-16">
          {/* Phone */}
          <div className="bg-[#1b3583] text-white p-6 md:p-8 rounded-2xl shadow-lg text-center">
            <Phone size={40} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-lg">+91-97165 21402</p>
            <p className="text-lg">+91-9810057441</p>
            <p className="text-lg">+91-98736 56785</p>
          </div>

          {/* Email */}
          <div className="bg-white border-2 border-[bg-[#1b3583]] p-6 md:p-8 rounded-2xl shadow-lg text-center">
            <Mail size={40} className="mx-auto mb-4 text-[bg-[#1b3583]]" />
            <h3 className="text-xl font-bold text-[bg-[#1b3583]] mb-2">
              Email Address
            </h3>
            <p className="text-gray-800 text-lg">shivasteel2019@gmail.com</p>
          </div>

          {/* Address */}
          <div className="bg-[#1b3583] text-white p-6 md:p-8 rounded-2xl shadow-lg text-center">
            <MapPin size={40} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Factory Address</h3>
            <p>
              X-43, Loha Mandi, Block X, Naraina Industrial Area Phase 1, Naraina, New Delhi, Delhi, 110028
            </p>
          </div>
        </div>

        {/* FORM + MAP */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* FORM */}
          <div className="bg-white p-5 md:p-10 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Send Us Your Requirement
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="border rounded-lg px-4 py-3 w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="tel"
                  required
                  maxLength={10}
                  pattern="[0-9]{10}"
                  placeholder="Phone Number"
                  className="border rounded-lg px-4 py-3 w-full"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="border rounded-lg px-4 py-3 w-full"
                  value={place}
                  onChange={(e) => setplace(e.target.value)}
                />

                <select
                  className="border rounded-lg px-4 py-3 w-full bg-[#1b3583] text-white font-semibold"
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                >
                  <option value="">Select Product</option>
                  <option value="GI Sheet">
                    GI Sheet
                  </option>
                  <option value="Mild Steel Pipe">
                    Mild Steel Pipe
                  </option>
                  <option value="MS Plates">
                    MS Plates
                  </option>
                  <option value="GP Sheets">
                    MS Sheets
                  </option>
                  <option value="Mild Steel Bars">
                    Mild Steel Bars
                  </option>
                  <option value="Metal Coil">
                   Metal Coil
                  </option>
                  <option value="Mild Steel Angle">
                    Mild Steel Angle
                  </option>
                  <option value="TMT Bars">
                   TMT Bars
                  </option>
                  <option value="Cable Tray">
                   Cable Tray
                  </option>
                  <option value="TMT Bars">
                   TMT Bars
                  </option>
                </select>
              </div>

              <input
                type="email"
                required
                placeholder="Email Address"
                className="border rounded-lg px-4 py-3 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <textarea
                rows={4}
                placeholder="Message"
                className="border rounded-lg px-4 py-3 w-full"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-[#1b3583] hover:bg-blue-800 transition text-white px-6 py-3 rounded-lg font-semibold w-full"
              >
                {loading ? "Submitting..." : "Submit Inquiry"}
              </button>

              {status === "success" && (
                <p className="text-blue-600 font-semibold mt-2">
                  Thank you! Our team will contact you shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 font-semibold mt-2">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* map */}
          <div className="mt-5">
            <iframe
              src="https://maps.google.com/maps?q=Shiva%20Steel%20Fabricator%2C%20X-43%2C%20Loha%20Mandi%2C%20Block%20X%2C%20Naraina%20Industrial%20Area%20Phase%201%2C%20Naraina%2C%20New%20Delhi%2C%20Delhi%2C%20110028&t=m&z=10&output=embed&iwloc=near"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-130"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
