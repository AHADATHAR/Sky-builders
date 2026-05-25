import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ctaLabels = [
  "contact now",
  "contact us",
  "contact us today",
  "contact for consultation",
  "contact for consultation!",
  "contact our consultant",
  "contact sky consultant",
  "contact sky consultant now",
  "connect with us",
  "connect with us now",
  "connect with sky consultant today",
  "connect with sky consultant",
  "get started today",
  "get started with sky consultant",
  "get free consultation now",
  "schedule your consultation",
  "plan your next step",
];

const normalize = (value) => value.replace(/\s+/g, " ").trim().toLowerCase();

const ContactCtaRouter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target.closest("a, button");
      if (!target) return;

      const href = target.getAttribute("href");
      const label = normalize(target.textContent || "");
      const routesToContact = href === "#contact" || ctaLabels.some((text) => label.includes(text));

      if (!routesToContact) return;

      event.preventDefault();
      navigate("/contact");
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [navigate]);

  return null;
};

export default ContactCtaRouter;
