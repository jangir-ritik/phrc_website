"use client";
import React, { useState } from "react";
import styles from "@/styles/contact/SectionOneConnect.module.css";
import Image from "next/image";
import Button from "../Button";
import connect from "@/public/contact/connect.png";

function SectionOneConnect() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    concern: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className={styles.section1_connect}>
      <div className={styles.container}>
        <div className={styles.form_container}>
          <h1 className={styles.title}>Let's Connect.</h1>
          <p className={styles.subtitle}>Your Wellness Starts Here.</p>
          <p className={styles.description}>
            We're Listening... How Can We Help?
          </p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.name_group}>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />

            <div className={styles.phone_group}>
              <div className={styles.country_code}>+91</div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Number"
                required
              />
            </div>

            <textarea
              name="concern"
              value={formData.concern}
              onChange={handleChange}
              placeholder="Describe your concern..."
              rows={4}
              required
            />

            <Button type="submit">Submit</Button>
          </form>
        </div>

        <div className={styles.image_container}>
          <Image
            src={connect}
            alt="Healthcare professional"
            width={520}
            height={600}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

export default SectionOneConnect;
