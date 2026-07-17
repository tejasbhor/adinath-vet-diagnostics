/**
 * Adinath Veterinary Products Pvt. Ltd.
 * Main Interactivity Script
 */

// ==========================================
// PRODUCT DATABASE (B2B Diagnostics & Lab Equipment)
// ==========================================
const productDatabase = [
  {
    id: "p1",
    name: "Avian Influenza Virus (AIV) Ag Rapid Test Kit",
    category: "rapid",
    species: "avian",
    brand: "Bionote",
    origin: "South Korea",
    desc: "For rapid detection of Avian Influenza Virus antigen (H5, H7, H9 subtypes) in avian feces, serum, or tracheal secretions. Ideal for poultry flock screening.",
    specifications: {
      format: "Lateral Flow Cassette",
      time: "10 Minutes",
      sample: "Tracheal/Cloacal Swab"
    }
  },
  {
    id: "p2",
    name: "Foot and Mouth Disease (FMD) NSP Ab ELISA Kit",
    category: "elisa",
    species: "bovine",
    brand: "Biostone",
    origin: "USA",
    desc: "Differentiates infected from vaccinated animals (DIVA) by detecting antibodies against non-structural proteins (NSP) of Foot and Mouth Disease Virus.",
    specifications: {
      format: "96-well Microwell Plate",
      time: "2.5 Hours",
      sample: "Serum / Plasma"
    }
  },
  {
    id: "p3",
    name: "African Swine Fever Virus (ASFV) DNA PCR Detection Kit",
    category: "pcr",
    species: "swine",
    brand: "Indical",
    origin: "Germany",
    desc: "Ultra-sensitive real-time PCR kit for qualitative detection of African Swine Fever Virus DNA in blood, serum, and tissue samples.",
    specifications: {
      format: "Real-time qPCR Mix",
      time: "75 Minutes",
      sample: "Whole Blood / Tissue"
    }
  },
  {
    id: "p4",
    name: "Newcastle Disease Virus (NDV) Ab ELISA Kit",
    category: "elisa",
    species: "avian",
    brand: "Bio-X Diagnostics",
    origin: "Belgium",
    desc: "Indirect ELISA kit for the evaluation of immune response to Newcastle Disease Virus vaccination and screen for field exposure in poultry.",
    specifications: {
      format: "96-well Microwell Plate",
      time: "2 Hours",
      sample: "Serum / Egg Yolk"
    }
  },
  {
    id: "p5",
    name: "Bovine Tuberculosis (bTB) Gamma Interferon ELISA",
    category: "elisa",
    species: "bovine",
    brand: "Thermo Fisher Scientific",
    origin: "USA",
    desc: "Gold standard diagnostic test evaluating cell-mediated immune responses (interferon-gamma release assay) for Bovine Tuberculosis eradication campaigns.",
    specifications: {
      format: "96-well ELISA Reader Kit",
      time: "3 Hours",
      sample: "Heparinized Whole Blood"
    }
  },
  {
    id: "p6",
    name: "Canine Parvovirus (CPV) / Coronavirus (CCV) Ag Rapid Kit",
    category: "rapid",
    species: "canine",
    brand: "Bionote",
    origin: "South Korea",
    desc: "One-step lateral flow chromatographic immunoassay for simultaneous qualitative detection of Canine Parvovirus and Canine Coronavirus antigen.",
    specifications: {
      format: "Dual Test Cassette",
      time: "5-10 Minutes",
      sample: "Feces / Vomitus"
    }
  },
  {
    id: "p7",
    name: "Feline Leukemia Virus (FeLV) Ag / FIV Ab Rapid Test",
    category: "rapid",
    species: "feline",
    brand: "VMRD",
    origin: "USA",
    desc: "Combined test cassette for high-specificity screening of Feline Leukemia Virus antigen and Feline Immunodeficiency Virus antibody in blood.",
    specifications: {
      format: "Dual Test Cassette",
      time: "10 Minutes",
      sample: "Serum / Plasma / Blood"
    }
  },
  {
    id: "p8",
    name: "Applied Biosystems QuantStudio 5 Real-Time PCR System",
    category: "equipment",
    species: "all",
    brand: "Thermo Fisher Scientific",
    origin: "USA",
    desc: "High-performance qPCR instrument with 96-well format, 6 decoupling filters, and cloud connectivity, perfect for veterinary molecular diagnostic labs.",
    specifications: {
      format: "Diagnostic Instrument",
      throughput: "96 Wells",
      channels: "6 Decoupled Channels"
    }
  },
  {
    id: "p9",
    name: "Bovine Viral Diarrhea Virus (BVDV) Real-Time RT-PCR Kit",
    category: "pcr",
    species: "bovine",
    brand: "Indical",
    origin: "Germany",
    desc: "Multiplex PCR assay for detection and differentiation of Bovine Viral Diarrhea Virus Type 1 and Type 2. Certified for ear notch, milk, and serum pools.",
    specifications: {
      format: "Real-time RT-PCR",
      time: "90 Minutes",
      sample: "Ear Notch / Serum / Milk"
    }
  },
  {
    id: "p10",
    name: "VacciCheck Canine Antibody Titer Test Kit",
    category: "rapid",
    species: "canine",
    brand: "Biogal",
    origin: "Israel",
    desc: "Semi-quantitative dot ELISA point-of-care kit checking antibody titers for CPV, CDV, and CAV in dog blood to verify vaccination immunity status.",
    specifications: {
      format: "Multi-dot Comb System",
      time: "20 Minutes",
      sample: "Whole Blood / Serum"
    }
  },
  {
    id: "p11",
    name: "Demeditec Progesterone ELISA Kit",
    category: "elisa",
    species: "bovine",
    brand: "Demeditec",
    origin: "Germany",
    desc: "High sensitivity enzyme immunoassay kit for diagnostic monitoring of bovine progesterone levels to evaluate cycle activity and pregnancy status.",
    specifications: {
      format: "96-well Microwell Plate",
      time: "1.5 Hours",
      sample: "Serum / Plasma"
    }
  },
  {
    id: "p12",
    name: "Thermo Fisher Multiskan SkyHigh Microplate Reader",
    category: "equipment",
    species: "all",
    brand: "Thermo Fisher Scientific",
    origin: "USA",
    desc: "UV/Vis microplate spectrophotometer for ELISA analysis, biochemical assays, nucleic acid and protein quantification. Operates on standalone touchscreen.",
    specifications: {
      format: "ELISA Spectrophotometer",
      wavelength: "200nm to 1000nm",
      plates: "6 to 384-well formats"
    }
  }
];

// ==========================================
// STATE MANAGEMENT
// ==========================================
const appState = {
  currentCategory: "all",
  currentSpecies: "all",
  searchQuery: ""
};

// ==========================================
// DOM ELEMENT REFERENCES
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  const tabBtns = document.querySelectorAll(".tab-btn");
  const searchInput = document.getElementById("searchInput");
  const filterTags = document.querySelectorAll(".filter-tag");
  const productsGrid = document.getElementById("productsGrid");
  const catalogEmpty = document.getElementById("catalogEmpty");

  const quoteForm = document.getElementById("webform1294520000001616627");
  const interestedProductSelect = document.getElementById("LEADCF5");
  const customSelectWrapper = document.getElementById("customProductSelectWrapper");
  const customSelectTrigger = document.getElementById("customProductSelectTrigger");
  const customOptions = document.querySelectorAll(".custom-option");
  const formFeedback = document.getElementById("formFeedback");

  // ==========================================
  // MOBILE MENU & STICKY HEADER
  // ==========================================
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("open");
      navMenu.classList.toggle("open");
    });
  }

  // Close mobile menu when nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navToggle?.classList.remove("open");
      navMenu?.classList.remove("open");
      
      // Update active state
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Sticky Header on Scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  // ==========================================
  // CUSTOM SELECT DROPDOWN LOGIC
  // ==========================================
  if (customSelectTrigger && customSelectWrapper && interestedProductSelect) {
    customSelectTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      customSelectWrapper.classList.toggle("open");
    });

    customOptions.forEach(option => {
      option.addEventListener("click", (e) => {
        e.stopPropagation();
        const value = option.getAttribute("data-value");
        const label = option.textContent;

        // Set value in the hidden native select
        interestedProductSelect.value = value;

        // Update trigger label
        customSelectTrigger.querySelector("span").textContent = label;
        customSelectWrapper.classList.remove("open");

        // Update selected class list
        customOptions.forEach(opt => opt.classList.remove("selected"));
        option.classList.add("selected");
      });
    });

    // Close options list if user clicks outside of select dropdown
    document.addEventListener("click", () => {
      customSelectWrapper.classList.remove("open");
    });
  }

  // ==========================================
  // PRODUCT CATALOG RENDERING & FILTERING
  // ==========================================
  function renderProducts() {
    if (!productsGrid) return;

    // Filter database based on current state
    const filteredProducts = productDatabase.filter(product => {
      const matchesCategory = appState.currentCategory === "all" || product.category === appState.currentCategory;
      const matchesSpecies = appState.currentSpecies === "all" || product.species === appState.currentSpecies || product.species === "all";
      const matchesSearch = product.name.toLowerCase().includes(appState.searchQuery.toLowerCase()) ||
                            product.brand.toLowerCase().includes(appState.searchQuery.toLowerCase()) ||
                            product.desc.toLowerCase().includes(appState.searchQuery.toLowerCase());
      
      return matchesCategory && matchesSpecies && matchesSearch;
    });

    // Handle Empty State
    if (filteredProducts.length === 0) {
      productsGrid.style.display = "none";
      if (catalogEmpty) catalogEmpty.style.display = "block";
      return;
    }

    productsGrid.style.display = "grid";
    if (catalogEmpty) catalogEmpty.style.display = "none";

    // Clear old products
    productsGrid.innerHTML = "";

    // Generate new cards
    filteredProducts.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card fade-in";
      
      // Determine species icon/label
      let speciesLabel = product.species.toUpperCase();
      if (product.species === "all") speciesLabel = "ALL SPECIES";

      // Render spec rows
      let specRows = "";
      Object.keys(product.specifications).forEach(key => {
        specRows += `
          <div class="spec-item">
            <span>${key.charAt(0).toUpperCase() + key.slice(1)}:</span>
            <span>${product.specifications[key]}</span>
          </div>
        `;
      });

      card.innerHTML = `
        <div class="product-badges">
          <span class="badge-brand">${product.brand}</span>
          <span class="badge-species">${speciesLabel}</span>
        </div>
        <h4 class="product-title">${product.name}</h4>
        <p class="product-desc">${product.desc}</p>
        <div class="product-specs">
          ${specRows}
        </div>
        <div class="product-action">
          <button class="btn btn-outline product-inquire-btn" data-product-name="${product.name}" style="width: 100%;">
            Inquire Product
          </button>
        </div>
      `;

      productsGrid.appendChild(card);
    });

    // Attach click events to the new Inquiry buttons
    attachInquiryButtonEvents();
  }

  // Category mapping function from website database to Zoho CRM picklist
  function mapCategoryToZoho(category) {
    const mapping = {
      'rapid': 'Rapid',
      'elisa': 'ELISA',
      'pcr': 'PCR',
      'equipment': 'PCR'
    };
    return mapping[category] || '';
  }

  // Attach dynamic click events to "Inquire" buttons
  function attachInquiryButtonEvents() {
    const inquireBtns = document.querySelectorAll(".product-inquire-btn");
    inquireBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        const productName = e.target.getAttribute("data-product-name");
        
        // Find product in database to get category for Zoho picklist mapping
        const product = productDatabase.find(p => p.name === productName);
        const zohoCategory = product ? mapCategoryToZoho(product.category) : '';

        // Auto fill form select
        if (interestedProductSelect) {
          interestedProductSelect.value = zohoCategory;
          
          // Update visible custom select UI
          if (customSelectTrigger) {
            const triggerSpan = customSelectTrigger.querySelector("span");
            if (triggerSpan) {
              triggerSpan.textContent = zohoCategory || "-- Select Product Category --";
            }
          }
          if (customOptions) {
            customOptions.forEach(opt => {
              if (opt.getAttribute("data-value") === zohoCategory) {
                opt.classList.add("selected");
              } else {
                opt.classList.remove("selected");
              }
            });
          }
        }

        // Add context to comments
        const commentsTextarea = document.getElementById("Description");
        if (commentsTextarea) {
          commentsTextarea.value = `I would like to request technical specifications, pricing, and availability details for the product: ${productName}${product ? ' (' + product.brand + ')' : ''}.`;
        }

        // Smooth scroll to contact form section
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  // Category Tab event listeners
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      appState.currentCategory = btn.getAttribute("data-category");
      renderProducts();
    });
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      appState.searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Species Tag Filter handler
  filterTags.forEach(tag => {
    tag.addEventListener("click", () => {
      filterTags.forEach(t => t.classList.remove("active"));
      tag.classList.add("active");
      
      appState.currentSpecies = tag.getAttribute("data-species");
      renderProducts();
    });
  });

  // ==========================================
  // ZOHO FORM RESET VISUAL INTEGRATION
  // ==========================================
  if (quoteForm) {
    quoteForm.addEventListener("reset", () => {
      // Reset visible custom select dropdown text
      if (customSelectTrigger) {
        const triggerSpan = customSelectTrigger.querySelector("span");
        if (triggerSpan) {
          triggerSpan.textContent = "-- Select Product Category --";
        }
      }
      if (customOptions) {
        customOptions.forEach(opt => opt.classList.remove("selected"));
      }
    });
  }

  function showFeedback(message, type) {
    if (!formFeedback) return;
    
    formFeedback.textContent = message;
    formFeedback.className = `form-feedback ${type}`;
    formFeedback.style.display = "block";

    // Auto clear after 10 seconds for success
    if (type === "success") {
      setTimeout(() => {
        formFeedback.style.display = "none";
      }, 10000);
    }
  }

  // Render initial product catalog
  renderProducts();

  // Handle turnkey button scroll
  const setupInquireBtn = document.getElementById("setupInquireBtn");
  if (setupInquireBtn) {
    setupInquireBtn.addEventListener("click", () => {
      if (interestedProductSelect) {
        interestedProductSelect.value = "PCR"; // Map turnkey lab setup to PCR category in Zoho
        
        // Update visible custom select UI
        if (customSelectTrigger) {
          const triggerSpan = customSelectTrigger.querySelector("span");
          if (triggerSpan) {
            triggerSpan.textContent = "PCR";
          }
        }
        if (customOptions) {
          customOptions.forEach(opt => {
            if (opt.getAttribute("data-value") === "PCR") {
              opt.classList.add("selected");
            } else {
              opt.classList.remove("selected");
            }
          });
        }
      }
      
      const commentsTextarea = document.getElementById("Description");
      if (commentsTextarea) {
        commentsTextarea.value = "I am interested in setting up a turnkey veterinary diagnostic laboratory. Please provide details regarding Thermo Fisher Scientific equipment integration and space design consulting.";
      }
      
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // ==========================================
  // COMPLIANCE MODALS & COOKIE BANNER ACTIONS
  // ==========================================
  
  // Modal Selectors
  const privacyModal = document.getElementById("privacyModal");
  const privacyFooterLink = document.getElementById("privacyFooterLink");
  const privacyFormLink = document.getElementById("privacyFormLink");
  const privacyModalClose = document.getElementById("privacyModalClose");
  const privacyModalBtnClose = document.getElementById("privacyModalBtnClose");

  const termsModal = document.getElementById("termsModal");
  const termsFooterLink = document.getElementById("termsFooterLink");
  const termsModalClose = document.getElementById("termsModalClose");
  const termsModalBtnClose = document.getElementById("termsModalBtnClose");

  const cookieModal = document.getElementById("cookieModal");
  const cookieSettingsLink = document.getElementById("cookieSettingsLink");
  const cookieModalClose = document.getElementById("cookieModalClose");
  const cookieSettingsCancelBtn = document.getElementById("cookieSettingsCancelBtn");
  const cookieSettingsSaveBtn = document.getElementById("cookieSettingsSaveBtn");

  const cookieBanner = document.getElementById("cookieBanner");
  const cookieAcceptBtn = document.getElementById("cookieAcceptBtn");
  const cookieRejectBtn = document.getElementById("cookieRejectBtn");
  const cookieManageBtn = document.getElementById("cookieManageBtn");

  const analyticsCookieToggle = document.getElementById("analyticsCookieToggle");
  const preferenceCookieToggle = document.getElementById("preferenceCookieToggle");

  // Helper functions for modals
  function openModal(modal) {
    if (!modal) return;
    modal.style.display = "flex";
    setTimeout(() => {
      modal.classList.add("open");
    }, 10);
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove("open");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  }

  // Trigger Privacy Modals
  if (privacyFooterLink) {
    privacyFooterLink.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(privacyModal);
    });
  }
  if (privacyFormLink) {
    privacyFormLink.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(privacyModal);
    });
  }
  [privacyModalClose, privacyModalBtnClose].forEach(btn => {
    btn?.addEventListener("click", () => closeModal(privacyModal));
  });

  // Trigger Terms Modals
  if (termsFooterLink) {
    termsFooterLink.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(termsModal);
    });
  }
  [termsModalClose, termsModalBtnClose].forEach(btn => {
    btn?.addEventListener("click", () => closeModal(termsModal));
  });

  // Trigger Cookie Settings Modals
  if (cookieSettingsLink) {
    cookieSettingsLink.addEventListener("click", (e) => {
      e.preventDefault();
      loadCookiePreferencesToSwitches();
      openModal(cookieModal);
    });
  }
  if (cookieManageBtn) {
    cookieManageBtn.addEventListener("click", () => {
      loadCookiePreferencesToSwitches();
      openModal(cookieModal);
    });
  }
  [cookieModalClose, cookieSettingsCancelBtn].forEach(btn => {
    btn?.addEventListener("click", () => closeModal(cookieModal));
  });

  // Close modals when clicking overlay backdrop
  [privacyModal, termsModal, cookieModal].forEach(modal => {
    modal?.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Load cookies preferences from localStorage
  function loadCookiePreferencesToSwitches() {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      if (analyticsCookieToggle) analyticsCookieToggle.checked = false;
      if (preferenceCookieToggle) preferenceCookieToggle.checked = false;
      return;
    }

    if (consent === "all") {
      if (analyticsCookieToggle) analyticsCookieToggle.checked = true;
      if (preferenceCookieToggle) preferenceCookieToggle.checked = true;
    } else if (consent === "necessary") {
      if (analyticsCookieToggle) analyticsCookieToggle.checked = false;
      if (preferenceCookieToggle) preferenceCookieToggle.checked = false;
    } else {
      try {
        const parsed = JSON.parse(consent);
        if (analyticsCookieToggle) analyticsCookieToggle.checked = !!parsed.analytics;
        if (preferenceCookieToggle) preferenceCookieToggle.checked = !!parsed.preferences;
      } catch (err) {
        if (analyticsCookieToggle) analyticsCookieToggle.checked = false;
        if (preferenceCookieToggle) preferenceCookieToggle.checked = false;
      }
    }
  }

  // Save cookie choices from switches
  if (cookieSettingsSaveBtn) {
    cookieSettingsSaveBtn.addEventListener("click", () => {
      const isAnalyticsChecked = analyticsCookieToggle ? analyticsCookieToggle.checked : false;
      const isPreferenceChecked = preferenceCookieToggle ? preferenceCookieToggle.checked : false;
      
      const choices = {
        necessary: true,
        analytics: isAnalyticsChecked,
        preferences: isPreferenceChecked
      };

      localStorage.setItem("cookieConsent", JSON.stringify(choices));
      
      closeModal(cookieModal);
      if (cookieBanner) {
        cookieBanner.style.display = "none";
      }

      console.log("Consent saved:", choices);
    });
  }

  // Cookie banner standard actions
  if (cookieAcceptBtn) {
    cookieAcceptBtn.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "all");
      if (cookieBanner) {
        cookieBanner.style.display = "none";
      }
      console.log("All cookies accepted");
    });
  }

  if (cookieRejectBtn) {
    cookieRejectBtn.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "necessary");
      if (cookieBanner) {
        cookieBanner.style.display = "none";
      }
      console.log("Optional cookies rejected");
    });
  }

  // Display cookie banner if consent not yet provided
  function initCookieConsent() {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent && cookieBanner) {
      setTimeout(() => {
        cookieBanner.style.display = "block";
      }, 1000);
    }
  }

  // Initialize
  initCookieConsent();
});
