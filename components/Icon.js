"use client";
import {
  FiSearch, FiUserCheck, FiFileText, FiUsers, FiMessageCircle, FiShield,
  FiMapPin, FiBookOpen, FiBriefcase, FiPhone, FiGlobe, FiArrowUp,
} from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const map = {
  search: FiSearch,
  userCheck: FiUserCheck,
  fileText: FiFileText,
  users: FiUsers,
  message: FiMessageCircle,
  shield: FiShield,
  pin: FiMapPin,
  book: FiBookOpen,
  briefcase: FiBriefcase,
  phone: FiPhone,
  globe: FiGlobe,
  up: FiArrowUp,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
};

export default function Icon({ name, size = 18, ...rest }) {
  const C = map[name];
  return C ? <C size={size} aria-hidden="true" {...rest} /> : null;
}
