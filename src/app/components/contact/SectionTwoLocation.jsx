import React from "react";
import styles from "@/styles/contact/SectionTwoLocation.module.css";
import Link from "next/link";

function SectionTwoLocation() {
  return (
    <section className={styles.section2_location}>
      <div className={styles.container}>
        <div className={styles.contact_info}>
          <div className={styles.info_group}>
            <h3>Landline</h3>
            <Link href="tel:020-41070697">020-41070697</Link>
          </div>

          <div className={styles.info_group}>
            <h3>Mobile</h3>
            <Link href="tel:+919112229434">+91 91122 29434</Link>
          </div>

          <div className={styles.info_group}>
            <h3>Email</h3>
            <Link href="mailto:info@phrclife.com">info@phrclife.com</Link>
          </div>

          <div className={styles.info_group}>
            <h3>Address</h3>
            <p>CWX8+4X2, Wadachi Wadi Rd,</p>
            <p>Undri, Pune,</p>
            <p>Maharashtra 412308</p>
          </div>
        </div>

        <div className={styles.map_container}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d945.8673098344657!2d73.93399336959636!3d18.46725099871401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb9a76325f07%3A0x7cc72d18d8f4d20!2sPHRC%20Lifespace%20Organisation!5e0!3m2!1sen!2sin!4v1710472714346!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PHRC Location Map"
            className={styles.map}
          />
        </div>
      </div>
    </section>
  );
}

export default SectionTwoLocation;
