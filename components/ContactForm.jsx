"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // 'success' | 'error' | ''

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const SERVICE_ID = "service_v1gq9ol";
    const TEMPLATE_ID = "template_va9ln2u";
    const PUBLIC_KEY = "BXjMISiTQJJuCQkEA";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setLoading(false);
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatus("error");
          console.error("FAILED...", error);
          // Check if it's likely a network/adblocker issue
          if (error.text === "Failed to fetch" || !error.text) {
            alert(
              "Failed to send: Network error. Please disable AdBlocker (uBlock, AdGuard, etc.) and try again, or check your internet connection.",
            );
          } else {
            alert(`Failed to send: ${error.text}`);
          }
        },
      );
  };

  return (
    <div className="contact-form-container" data-aos="fade-up">
      <h3 className="form-title">Send Me a Message</h3>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="user_name">Name</label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            className="form-input"
            required
            placeholder="Your Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="user_email">Email</label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            className="form-input"
            required
            placeholder="your@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className="form-textarea"
            required
            placeholder="Write your message here..."
            rows="6"
          />
        </div>

        <button
          type="submit"
          className="action-button action-button-primary submit-btn"
          disabled={loading}
        >
          {loading ? (
            "Sending..."
          ) : (
            <>
              <FaPaperPlane /> Send Message
            </>
          )}
        </button>

        {status === "success" && (
          <p className="status-success">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="status-error">
            Failed to send message. Please try again or use email directly.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
