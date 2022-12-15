import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { TbBrandTelegram } from "react-icons/tb";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_khs695w",
      "template_yty02bo",
      form.current,
      "g26k-o6WeWr9ZSnri"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rezzyn21@gmail.com</h5>
            <a href="">send a message</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>081215567552</h5>
            <a href="">send a message</a>
          </article>
          <article className="contact__option">
            <TbBrandTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>@rezzyn21</h5>
            <a href="">send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            type="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
