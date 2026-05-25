import React, { useState, useEffect, memo, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const menuItems = [
  { name: "Home", path: "/" },
  {
    name: "Visa",
    path: "/visa",
    dropdown: [
      { name: "Tourist Visa",                   path: "/visa485"                    },
      { name: "Student Visa Subclass",           path: "/visa486"                    },
      { name: "Family Visa",                     path: "/familyvisa"                 },
      { name: "Student Skill Visa",              path: "/studentskillvisa"           },
      { name: "Skill Nominated Visa",            path: "/skillNominatedvisa"         },
      { name: "Skill Regional Visa",             path: "/skillRegionalvisa"          },
      { name: "Skill Work Visa",                 path: "/skillWorkvisa"              },
      { name: "Employee Work Visa",              path: "/employeevisa"               },
      { name: "Parents Visa",                    path: "/parentevisa"                },
      { name: "Child Visa",                      path: "/childvisa"                  },
      { name: "Global Talent Program",           path: "/globalTalentProgram"        },
      { name: "Training Visa",                   path: "/trainingVisa"               },
      { name: "Temporary Skill Shortage Visa",   path: "/temporarySkillShortageVisa" },
      { name: "Temporary Graduate Visa",         path: "/temporaryGraduateVisa"      },
      { name: "Partner Visa Page",               path: "/partnerVisaPage"            },
      { name: "Partner Visa 820 and 801",        path: "/partnerVisa820and801"       },
      { name: "Employer Nomination Visa 186",    path: "/employerNominationVisa186"  },
    ],
  },
  {
    name: "Student Services",
    path: "/Student",
    dropdown: [
      { name: "Health Insurance",          path: "/student"             },
      { name: "Professional Year Program", path: "/ProfessionalYear"    },
      { name: "NaatlCCL",                  path: "/naatl"               },
      { name: "PTE Preparation",           path: "/ptePrepration"       },
      { name: "Accommodation",             path: "/studentAccomodation" },
      { name: "OBA",                       path: "/oba"                 },
      { name: "Skill Assessment",          path: "/skillassessment"     },
      { name: "Tax Return",                path: "/taxReturn"           },
    ],
  },
  { name: "Admission", path: "/addmission" },
  { name: "Skill",     path: "/skill"      },
  { name: "Blog",      path: "/blog"       },
  { name: "About Us",  path: "/about"      },
];

const visaIcons = {
  "Tourist Visa":                 "ti-beach",
  "Student Visa Subclass":        "ti-school",
  "Family Visa":                  "ti-heart",
  "Student Skill Visa":           "ti-certificate",
  "Skill Nominated Visa":         "ti-award",
  "Skill Regional Visa":          "ti-map-pin",
  "Skill Work Visa":              "ti-briefcase",
  "Employee Work Visa":           "ti-building",
  "Parents Visa":                 "ti-users",
  "Child Visa":                   "ti-baby-carriage",
  "Global Talent Program":        "ti-star",
  "Training Visa":                "ti-clipboard",
  "Temporary Skill Shortage Visa":"ti-clock",
  "Temporary Graduate Visa":      "ti-school",
  "Partner Visa Page":            "ti-heart-handshake",
  "Partner Visa 820 and 801":     "ti-rings-wedding",
  "Employer Nomination Visa 186": "ti-building-skyscraper",
};

const studentIcons = {
  "Health Insurance":          "ti-shield-heart",
  "Professional Year Program": "ti-briefcase",
  "NaatlCCL":                  "ti-language",
  "PTE Preparation":           "ti-pencil",
  "Accommodation":             "ti-home",
  "OBA":                       "ti-chart-bar",
  "Skill Assessment":          "ti-certificate",
  "Tax Return":                "ti-receipt-tax",
};

// ── Plain desktop nav link ─────────────────────────────────────────────────
const NavLink = memo(({ item, isActive }) => (
  <Link
    to={item.path}
    style={{
      fontSize: "15px",
      fontWeight: 500,
      textDecoration: "none",
      whiteSpace: "nowrap",
      transition: "color 0.2s ease",
      color: isActive ? "#DC2626" : "#1e293b",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.color = "#DC2626")}
    onMouseLeave={(e) =>
      (e.currentTarget.style.color = isActive ? "#DC2626" : "#1e293b")
    }
  >
    {item.name}
  </Link>
));
NavLink.displayName = "NavLink";

// ── Desktop dropdown nav link ──────────────────────────────────────────────
const DropdownNavLink = memo(({ item, isActive }) => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(null);

  const enter = () => { clearTimeout(timerRef.current); setOpen(true); };
  const leave = () => { timerRef.current = setTimeout(() => setOpen(false), 120); };

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const isVisaMenu    = item.name === "Visa";
  const isStudentMenu = item.name === "Student Services";
  const isGridMenu    = isVisaMenu || isStudentMenu;

  // Visa: 3 cols wide panel; Student: 2 cols narrower panel
  const panelMinWidth  = isVisaMenu ? "520px" : isStudentMenu ? "420px" : "200px";
  const gridCols       = isVisaMenu ? "repeat(3, 1fr)" : "repeat(2, 1fr)";
  const panelLeft      = isGridMenu ? "-120px" : "50%";
  const panelTransform = isGridMenu ? "none" : "translateX(-50%)";
  const caretLeft      = isGridMenu ? "140px" : "50%";
  const caretTransform = isGridMenu ? "rotate(45deg)" : "translateX(-50%) rotate(45deg)";

  const iconMap = isVisaMenu ? visaIcons : studentIcons;
  const categoryLabel = isVisaMenu ? "Visa Categories" : "Student Services";

  return (
    <div style={{ position: "relative" }} onMouseEnter={enter} onMouseLeave={leave}>

      {/* trigger button */}
      <button
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          fontSize: "15px",
          fontWeight: 500,
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          whiteSpace: "nowrap",
          color: isActive ? "#DC2626" : "#1e293b",
          transition: "color 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#DC2626")}
        onMouseLeave={(e) =>
          (e.currentTarget.style.color = isActive ? "#DC2626" : "#1e293b")
        }
      >
        {item.name}
        <ChevronDown
          size={14}
          style={{
            transition: "transform 0.2s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      {/* dropdown panel */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 14px)",
            left: panelLeft,
            transform: panelTransform,
            background: "#ffffff",
            border: "1px solid rgba(2,34,121,0.10)",
            borderRadius: "12px",
            boxShadow: "0 8px 28px rgba(2,34,121,0.12)",
            minWidth: panelMinWidth,
            zIndex: 100,
            overflow: "hidden",
            animation: "hdrFadeDown 0.15s ease",
            padding: isGridMenu ? "8px" : "0",
          }}
        >
          {/* caret arrow */}
          <div
            style={{
              position: "absolute",
              top: "-6px",
              left: caretLeft,
              transform: caretTransform,
              width: "11px",
              height: "11px",
              background: "#ffffff",
              border: "1px solid rgba(2,34,121,0.10)",
              borderBottom: "none",
              borderRight: "none",
            }}
          />

          {isGridMenu ? (
            /* ── Grid layout for Visa & Student Services ── */
            <>
              <p
                style={{
                  fontSize: "10.5px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "#94a3b8",
                  textTransform: "uppercase",
                  padding: "8px 12px 4px",
                  margin: 0,
                }}
              >
                {categoryLabel}
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: gridCols,
                  gap: "2px",
                }}
              >
                {item.dropdown.map((child) => (
                  <Link
                    key={child.path}
                    to={child.path}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "9px 14px",
                      fontSize: "13.5px",
                      fontWeight: 500,
                      color: "#1e293b",
                      textDecoration: "none",
                      borderRadius: "7px",
                      transition: "background 0.13s, color 0.13s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(2,34,121,0.06)";
                      e.currentTarget.style.color = "#022279";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#1e293b";
                    }}
                  >
                    <i
                      className={`ti ${iconMap[child.name] || "ti-file"}`}
                      aria-hidden="true"
                      style={{ fontSize: "15px", color: "#DC2626", flexShrink: 0 }}
                    />
                    {child.name}
                  </Link>
                ))}
              </div>
            </>
          ) : (
            /* ── Original single-column list for other dropdowns ── */
            item.dropdown.map((child, ci) => (
              <Link
                key={child.path}
                to={child.path}
                style={{
                  display: "block",
                  padding: "10px 18px",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#1e293b",
                  textDecoration: "none",
                  transition: "background 0.15s, color 0.15s",
                  borderBottom:
                    ci < item.dropdown.length - 1
                      ? "1px solid rgba(2,34,121,0.05)"
                      : "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(2,34,121,0.05)";
                  e.currentTarget.style.color = "#022279";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#1e293b";
                }}
              >
                {child.name}
              </Link>
            ))
          )}
        </div>
      )}

      <style>{`
        @keyframes hdrFadeDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>
    </div>
  );
});
DropdownNavLink.displayName = "DropdownNavLink";

// ── Main Header ────────────────────────────────────────────────────────────
const Header = () => {
  const [isOpen, setIsOpen]                   = useState(false);
  const [scrolled, setScrolled]               = useState(false);
  const [mobileOpenPath, setMobileOpenPath]   = useState(null);
  const location                              = useLocation();

  const isActive = useCallback(
    (path) => location.pathname === path,
    [location.pathname]
  );

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setMobileOpenPath(null);
  }, []);

  const toggleMobileAccordion = useCallback((path) => {
    setMobileOpenPath((prev) => (prev === path ? null : path));
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Tabler Icons CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.33.0/dist/tabler-icons.min.css"
      />

      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          width: "100%",
          transition: "background 0.3s ease, box-shadow 0.3s ease",
          background: scrolled ? "#ffffff" : "transparent",
          boxShadow: scrolled ? "0 1px 6px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "20px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
              textDecoration: "none",
            }}
          >
            <img
              src="https://i.ibb.co/3QsSryV/logo.png"
              alt="Sky Consultants Logo"
              style={{
                height: "40px",
                width: "auto",
                display: "block",
                objectFit: "contain",
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex"
            style={{ alignItems: "center", gap: "32px" }}
          >
            {menuItems.map((item) =>
              item.dropdown ? (
                <DropdownNavLink
                  key={item.path}
                  item={item}
                  isActive={isActive(item.path)}
                />
              ) : (
                <NavLink
                  key={item.path}
                  item={item}
                  isActive={isActive(item.path)}
                />
              )
            )}

            <Button
              asChild
              style={{
                background: "#8B1A1A",
                color: "#fff",
                padding: "9px 24px",
                fontSize: "14px",
                fontWeight: 500,
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
                flexShrink: 0,
                letterSpacing: "0.01em",
              }}
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </nav>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  style={{
                    padding: "8px",
                    borderRadius: "6px",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  aria-label="Open menu"
                >
                  <Menu
                    style={{ width: "24px", height: "24px", color: "#022279" }}
                  />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                style={{
                  background: "#ffffff",
                  borderLeft: "1px solid rgba(0,0,0,0.08)",
                  width: "280px",
                  padding: "0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    padding: "28px 20px 32px",
                  }}
                >
                  {/* Sidebar Logo */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "28px",
                    }}
                  >
                    <img
                      src="https://i.ibb.co/3QsSryV/logo.png"
                      alt="Sky Consultants"
                      style={{
                        height: "42px",
                        width: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  {/* Divider */}
                  <div
                    style={{
                      height: "1px",
                      background: "rgba(2,34,121,0.15)",
                      marginBottom: "16px",
                    }}
                  />

                  {/* Sidebar Links */}
                  <nav
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                      flex: 1,
                      overflowY: "auto",
                    }}
                  >
                    {menuItems.map((item) => {
                      const active        = isActive(item.path);
                      const accordionOpen = mobileOpenPath === item.path;

                      /* ── accordion for dropdown items ── */
                      if (item.dropdown) {
                        const iconMap =
                          item.name === "Visa"
                            ? visaIcons
                            : item.name === "Student Services"
                            ? studentIcons
                            : {};

                        return (
                          <div key={item.path}>
                            <button
                              onClick={() => toggleMobileAccordion(item.path)}
                              style={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                color: "#022279",
                                padding: "10px 12px",
                                borderRadius: "6px",
                                background: accordionOpen
                                  ? "rgba(2,34,121,0.06)"
                                  : "transparent",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "15px",
                                fontWeight: "600",
                                textAlign: "left",
                                transition: "background 0.2s ease",
                              }}
                            >
                              {item.name}
                              <ChevronDown
                                size={15}
                                style={{
                                  flexShrink: 0,
                                  transition: "transform 0.2s ease",
                                  transform: accordionOpen
                                    ? "rotate(180deg)"
                                    : "rotate(0deg)",
                                }}
                              />
                            </button>

                            {accordionOpen && (
                              <div
                                style={{
                                  marginLeft: "12px",
                                  borderLeft: "2px solid rgba(2,34,121,0.15)",
                                  paddingLeft: "10px",
                                  marginTop: "2px",
                                  marginBottom: "4px",
                                }}
                              >
                                {item.dropdown.map((child) => (
                                  <Link
                                    key={child.path}
                                    to={child.path}
                                    onClick={closeMenu}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "8px",
                                      color: "#022279",
                                      padding: "8px 10px",
                                      borderRadius: "6px",
                                      textDecoration: "none",
                                      fontSize: "14px",
                                      fontWeight: "500",
                                      transition: "background 0.15s ease",
                                    }}
                                    onMouseEnter={(e) =>
                                      (e.currentTarget.style.background =
                                        "rgba(2,34,121,0.06)")
                                    }
                                    onMouseLeave={(e) =>
                                      (e.currentTarget.style.background =
                                        "transparent")
                                    }
                                  >
                                    {iconMap[child.name] && (
                                      <i
                                        className={`ti ${iconMap[child.name]}`}
                                        aria-hidden="true"
                                        style={{ fontSize: "14px", color: "#DC2626", flexShrink: 0 }}
                                      />
                                    )}
                                    {child.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      }

                      /* ── regular link ── */
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={closeMenu}
                          style={{
                            color: "#022279",
                            padding: "10px 12px",
                            borderRadius: "6px",
                            textDecoration: "none",
                            display: "block",
                            fontSize: "15px",
                            fontWeight: active ? "600" : "500",
                            background: active
                              ? "rgba(2,34,121,0.10)"
                              : "transparent",
                            transition: "all 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                              "rgba(2,34,121,0.06)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = active
                              ? "rgba(2,34,121,0.10)"
                              : "transparent";
                          }}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </nav>

                  {/* Divider */}
                  <div
                    style={{
                      height: "1px",
                      background: "rgba(2,34,121,0.15)",
                      margin: "20px 0",
                    }}
                  />

                  {/* Sidebar CTA */}
                  <Button
                    asChild
                    style={{
                      background: "#022279",
                      color: "#ffffff",
                      width: "100%",
                      padding: "11px 0",
                      fontSize: "15px",
                      fontWeight: 500,
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                      letterSpacing: "0.01em",
                    }}
                  >
                    <Link to="/contact" onClick={closeMenu}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default memo(Header);