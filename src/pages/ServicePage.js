// src/pages/ServicePage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { FaTools, FaRulerCombined, FaBroom, FaCheckCircle, FaArrowLeft,FaFileInvoice } from 'react-icons/fa';
import '../styles/service.css';
import Footer from '../components/Footer';

const serviceDetails = {
  reblocking: {
    title: "Reblocking",
    description: "Reblocking involves replacing deteriorated stumps under your home to restore structural integrity and ensure level floors.",
    beforeImage: '/images/reblocking-before.jpg',
    afterImage: '/images/reblocking-after.jpg',
    detailedDescription: `Over time, timber stumps—especially old red gum stumps begin to rot, shift, or sink due to ground moisture and aging. Our reblocking process starts with the removal of the plinth boards and a full underfloor clean-out to create a safe, accessible workspace for our team. We assess all stumps — timber, concrete, or otherwise — and safely lift the structure using hydraulic jacks. All deteriorated red gum stumps are replaced with high-quality concrete or galvanized steel stumps to prevent future rot or termite issues.

If the property already has concrete stumps, we inspect and retain those in good condition. Additional stumps are strategically installed in high-load areas to ensure optimal stability. Once the structure is leveled using our Nivcomp NI0SD1-H25 altimeter, we properly pack any gaps between the bearer and stump with durable, load-rated packers. This ensures millimeter-accurate leveling across the home, providing both structural safety and comfort underfoot.`,
    process: [
      "Removal of plinth boards and site clean-up",
      "Full inspection of foundation and existing stumps",
      "Safe lifting of structure using hydraulic jacks",
      "Removal of red gum stumps and cleaning footings",
      "Installation of new steel or concrete stumps",
      "Placement of additional support stumps as needed",
      "Packing between bearers and stumps with load-rated packers",
      "Nivcomp-assisted leveling to ensure millimeter precision",
      "Final inspection and complete site cleaning"
    ],
    benefits: [
      "Corrects uneven and sloping floors",
      "Improves structural longevity and safety",
      "Replaces decayed timber stumps with modern materials",
      "Adds support where needed for long-term stability",
      "Professional clean-up and attention to detail"
    ],
    faq: [
      { q: "Do you replace old red gum stumps?", a: "Yes, we remove and replace all red gum stumps with stronger, more durable concrete or steel options." },
      { q: "What if my house already has some concrete stumps?", a: "We inspect and retain any sound concrete stumps, and install new ones only where necessary." },
      { q: "Do you clean under the house before starting?", a: "Absolutely. Safety and cleanliness are priorities — we clear the area for worker access and tidy up after." }
    ],
    gallery: [
      '/images/reblocking1.jpg',
      '/images/bearer.jpg',
      '/images/reblocking-restump.jpg',
      '/images/steelStump.jpg'
    ]
  },
  restumping: {
    title: "Restumping",
    description: "Restumping is the replacement of house stumps due to wear, rot, or termite damage — often carried out during renovations or extensions.",
    beforeImage: '/images/restumping-before.jpg',
    afterImage: '/images/restumping-after.jpg',
    detailedDescription: `Restumping is typically undertaken when a house requires partial stump replacement — often due to specific areas showing signs of damage or instability. Unlike full reblocking, restumping targets only the affected stumps, making it ideal for extensions, partial renovations, or cost-effective structural improvements.

Our team performs restumping using top-tier steel or concrete stumps, ensuring they integrate perfectly with your home's existing structure. Before we begin, we carefully inspect all stump areas and use hydraulic jacks to raise only the affected section. If needed, we also adjust existing stumps and re-pack to maintain even flooring. Every step is measured using our Nivcomp leveling device to ensure perfect alignment.`,
    process: [
      "Site inspection and identification of compromised stumps",
      "Partial raising of structure using jacks",
      "Removal of damaged stumps (typically timber)",
      "Replacement using concrete or galvanized steel stumps",
      "Re-packing of surrounding stumps to re-align flooring",
      "Precision leveling using Nivcomp",
      "Area cleanup and final inspection"
    ],
    benefits: [
      "Cost-effective alternative to full reblocking",
      "Targets and resolves specific structural issues",
      "Great for extensions and partial repairs",
      "Restores floor evenness and home safety",
      "Minimal disruption and faster turnaround"
    ],
    faq: [
      { q: "How is restumping different from reblocking?", a: "Reblocking usually replaces all stumps, while restumping targets specific sections or stumps that are faulty or damaged." },
      { q: "Is restumping more affordable?", a: "Yes — it’s typically less expensive as fewer stumps are replaced, ideal for localized issues or renovations." },
      { q: "Can I restump just one side of my house?", a: "Yes — our team will assess and restump only the necessary sections to restore balance and support." }
    ],
    gallery: [
      '/images/reblocking1.jpg',
      '/images/reblocking-restump.jpg',
      '/images/re.jpg',
      '/images/re2.jpg'
    ]
  },
  underpinning: {
    title: "Underpinning",
    description: "Underpinning stabilizes and strengthens existing foundations by extending their depth or base.",
    afterImage: '/images/underpinning-after.jpeg',
    beforeImage: '/images/underpinning-before.jpeg',
   
    detailedDescription: `Our underpinning service is designed for homes suffering from sinking, cracked, or unstable foundations. Using techniques such as pit excavation and additional concrete footing installation, we reinforce the foundation from underneath. Each site is carefully analyzed by our structural experts before planning begins. We prioritize both safety and precision, especially on sloped or moisture-affected land.

Our use of advanced laser leveling and Nivcomp altimeters ensures accurate load transfer and minimal disruption to your structure. This service is ideal for correcting foundation settlement, preventing future movement, and preparing a property for additional storeys or renovations.`,
    process: [
      "Full foundation survey and structural assessment",
      "Excavation under footing sections needing support",
      "Installation of steel reinforcement bars",
      "Pouring new concrete footings to extend foundation depth",
      "Leveling using Nivcomp and laser systems",
      "Monitoring settlement over 24–48 hours",
      "Final patchwork and landscape reinstatement"
    ],
    benefits: [
      "Stops existing foundation movement",
      "Reinforces your structure for future additions",
      "Fixes cracked walls and sloping floors",
      "Prevents further structural damage",
      "Ideal for older homes or flood-prone areas"
    ],
    faq: [
      { q: "How do I know if my home needs underpinning?", a: "Cracks in walls, doors not closing properly, or noticeable floor dips can indicate settlement issues." },
      { q: "Will this damage my landscaping?", a: "Minimal impact — our team carefully excavates and restores areas post-work." },
      { q: "Can I renovate after underpinning?", a: "Yes! In fact, it's recommended to stabilize your home before extensions or second-storey additions." }
    ],
    gallery: [
      '/images/under.jpg',
      '/images/reblocking2.jpg',
      '/images/reblocking3.jpg',
      '/images/reblocking4.jpg'
    ]
  },
  'floor-levelling': {
    title: "Floor Levelling",
    description: "We correct uneven or sloped floors using leveling compounds and laser precision techniques.",
    beforeImage: '/images/level.jpg',
    afterImage: '/images/level2.jpg',
    detailedDescription: `Floor levelling is essential in homes with aging structures or shifting foundations that result in dips or slants across your floors. We begin with a full site inspection, identifying slope gradients and problem zones. After preparing the surface, we apply self-leveling compounds or raise structural sections underneath to correct the imbalance.

Our crew uses tools like the Nivcomp NI0SD1-H25 altimeter to measure every degree of slope and ensure total accuracy. This service provides a solid, even base for laying floorboards, tiles, or other flooring types. It also improves safety and appearance inside your home.`,
    process: [
      "Full assessment of floor heights using leveling tools",
      "Identifying cause (foundation shift or surface wear)",
      "Surface cleaning and preparation",
      "Application of self-leveling concrete or subfloor adjustment",
      "Curing and polishing process",
      "Post-level inspection using Nivcomp"
    ],
    benefits: [
      "Eliminates trip hazards from uneven floors",
      "Perfect for floorboard or tile installation",
      "Improves aesthetics and property value",
      "Reduces creaking and movement sounds",
      "Ideal for both old and newly built homes"
    ],
    faq: [
      { q: "Can floor levelling fix all dips and slopes?", a: "Yes — we correct both surface-level and subfloor issues, depending on your needs." },
      { q: "How long before we can walk on the floor?", a: "Typically 24–48 hours after compound application, depending on weather and humidity." }
    ],
    gallery: [
      '/images/level2.jpg',
      '/images/level.jpg',
      '/images/level3.jpg',
      '/images/level4.jpg'
    ]
  },
  "partial-restumping": {
    title: "Partial Restumping",
    beforeImage: '/images/reblocking-before.jpg',
    afterImage: '/images/reblocking-after.jpg',
    description: "Targeted stump replacement for localized damage.",
    detailedDescription: `Instead of replacing every stump, we identify and replace only those that show signs of deterioration or failure. This is a cost-effective solution for homes with localized issues.`,
    process: [
      "Inspection to locate failing stumps",
      "Hydraulic lifting in affected zones",
      "Removal and replacement of damaged stumps",
      "Repacking and levelling around the area",
      "Clean-up and final checks"
    ],
    benefits: [
      "Less disruption to your home",
      "Reduces cost",
      "Effective for isolated damage",
      "Speeds up project time"
    ],
    faq: [
      { q: "Is this suitable for home extensions?", a: "Yes, especially when only a portion of the house is involved." },
      { q: "How do I know if I need partial restumping?", a: "We assess your home and recommend the best option based on damage." }
    ]
  },

  "relevelling-no-replacement": {
    title: "Relevelling Without Stump Replacement",
    description: "Adjust home levels without replacing stumps.",
    detailedDescription: `In cases where stumps are still structurally sound but have caused uneven floors due to shifting, we can relevel the home using jacks and precision packing without replacing the stumps.`,
    process: [
      "Precision assessment with laser and altimeter",
      "Hydraulic lifting where needed",
      "Packing adjustments between stumps and bearers",
      "Verification and inspection"
    ],
    benefits: [
      "Avoids full stump replacement",
      "Quick turnaround",
      "Improves flooring evenness",
      "Cost-effective"
    ],
    faq: [
      { q: "Does this method damage the stumps?", a: "No, we ensure all packing is done with minimal impact and high-quality materials." }
    ]
  },

  "termite-repair": {
    title: "Termite-Damaged Timber Replacement",
    description: "Replace structural timber damaged by pests.",
    afterImage: '/images/level.jpg',
    beforeImage: '/images/level3.jpg',
    detailedDescription: `We carefully remove and replace timber members under your home that have been affected by termites. All replacements use treated timber or steel to prevent future damage.`,
    
    process: [
      "Assessment of termite damage",
      "Removal of infested timber",
      "Replacement with treated timber or steel",
      "Optional termite barrier installation",
      "Clean-up and monitoring"
    ],
    benefits: [
      "Stops ongoing structural weakening",
      "Long-term pest resistance",
      "Improves load-bearing capacity",
      "Peace of mind for homeowners"
    ],
    faq: [
      { q: "Can you repair floors too?", a: "Yes, we can repair or replace affected subfloor structures." }
    ]
  },

  "site-clearing": {
    title: "Site Clearing Under House",
    description: "Remove debris and prepare underfloor areas.",
    detailedDescription: `We clean and clear under your house to prepare the site for structural work, insulation, or general maintenance access. This includes rubbish removal, cobweb clearing, and leveling.`,
    process: [
      "Access planning",
      "Debris and waste removal",
      "Cobwebs and vegetation clearing",
      "Surface levelling where needed"
    ],
    benefits: [
      "Improves safety and visibility",
      "Prepares site for work",
      "Easier future access",
      "Professional disposal included"
    ],
    faq: [
      { q: "Can you do this before inspections?", a: "Yes, we often clear sites before pest or building inspections." }
    ]
  },

  "access-panels": {
    title: "Subfloor Access Panel Installation",
    description: "Install hatches for easy subfloor access.",
    detailedDescription: `We install timber or metal access panels under the house for tradespeople, maintenance, or ventilation needs. These panels are secure, discreet, and built to last.`,
    process: [
      "Inspection of suitable panel locations",
      "Cutting and framing panel entry",
      "Installation and sealing",
      "Testing and finishing"
    ],
    benefits: [
      "Provides legal subfloor access",
      "Improves airflow and access",
      "Neat and secure solution"
    ],
    faq: [
      { q: "Are these panels lockable?", a: "Yes, we offer lockable options upon request." }
    ],
    gallery: [
      '/images/sub floor pannel.jpg'
    ]
  },

  "permit-assistance": {
    title: "Council Permit Assistance",
    description: "Help with permits and compliance paperwork.",
    detailedDescription: `We guide you through permit applications, structural engineer approvals, and documentation needed for council compliance. Let us handle the red tape.`,
    process: [
      "Initial scope review",
      "Document preparation",
      "Coordination with council",
      "Follow-ups and updates"
    ],
    benefits: [
      "Saves time and stress",
      "Ensures legal compliance",
      "Experienced with local councils"
    ],
    faq: [
      { q: "Can you help with urgent permits?", a: "Yes — we work with urgency when project deadlines are tight." }
    ]
  },

  "decking": {
    title: "Decking",
    description: "Design and build beautiful outdoor decks.",
    detailedDescription: `Whether it’s a new deck or replacing an old one, we design and build timber decks tailored to your lifestyle. Choose from hardwood, composite, or treated pine options.`,
    process: [
      "Consultation and design planning",
      "Material selection",
      "Construction and finishing",
      "Optional staining or sealing"
    ],
    benefits: [
      "Enhances outdoor living",
      "Custom-built for your space",
      "Increases property value"
    ],
    faq: [
      { q: "Can I choose materials?", a: "Yes — we provide a range of timber and composite options." }
    ],
    gallery: [
      '/images/Background.jpg'
      
    ]
  },

  "underfloor-insulation": {
    title: "Underfloor Insulation",
    description: "Improve energy efficiency with insulation.",
    afterImage: '/images/insulation after.jpg',
    beforeImage: '/images/insulation before.jpg',
    detailedDescription: `Installing insulation beneath your home reduces heat loss and improves comfort. We use high-grade reflective or bulk insulation suited for Australian climates.`,
    process: [
      "Site inspection and insulation planning",
      "Clearing underfloor access",
      "Fitting insulation securely",
      "Sealing and final review"
    ],
    benefits: [
      "Lowers energy bills",
      "Improves comfort year-round",
      "Sustainable home improvement"
    ],
    faq: [
      { q: "Will it reduce drafts and cold floors?", a: "Yes — underfloor insulation is especially effective in winter." }
    ]
  },
  
};

const ServicePage = () => {
  const { serviceName } = useParams();
  const service = serviceDetails[serviceName];

  if (!service) return <div className="not-found">Service not found.</div>;

  return (
    <div className="glass-wrapper">
      <div className="service-page glass-card">
        <Helmet>
          <title>{service.title} | East to West Reblocking</title>
          <meta name="description" content={`Learn more about ${service.title} services.`} />
        </Helmet>

        <div className="back-button-wrapper sticky-back">
          <Link to="/service" className="back-to-services">
            <FaArrowLeft /> Back to Services
          </Link>
        </div>

        <section className="service-header">
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </section>

        {service.beforeImage && service.afterImage ? (
          // Case 1: Show comparison slider
          <section className="image-comparison">
            <ReactCompareSlider
              className="custom-slider"
              itemOne={<ReactCompareSliderImage src={service.beforeImage} alt="Before" />}
              itemTwo={<ReactCompareSliderImage src={service.afterImage} alt="After" />}
              position={50}
            />
          </section>
        ) : service.gallery?.[0] ? (
          // Case 2: Show single image (from gallery)
          <section className="static-hero-image">
            <img
              src={service.gallery[0]}
              alt={`${service.title} visual`}
              className="static-service-image"
            />
          </section>
        ) : (
          // Case 3: No images available — fallback placeholder
          <section className="static-hero-image">
            <img
              src="/images/no-img.png" 
              alt="Visual not available"
              className="static-service-image"
            />
          </section>
        )}

        

       
          <div className="section-grid-three stretch-cols">
            <div className="grid-card">
              <h2>About the Service</h2>
              <p>{service.detailedDescription}</p>

              <h3><FaRulerCombined /> Why We Use Nivcomp</h3>
              <p>
                To ensure pinpoint leveling, we rely on the Nivcomp NI0SD1-H25 — a German-engineered precision altimeter.
              </p>

              <h3><FaBroom /> Clean Site Guarantee</h3>
              <p>
                Our team ensures your space is spotless before we leave.
              </p>
            </div>

            <div className="grid-card">
              <h3><FaTools /> Our Process</h3>
              <ul className="process-list">
                {service.process.map((step, idx) => (
                  <li key={idx}><FaCheckCircle className="icon" /> {step}</li>
                ))}
              </ul>
            </div>

            <div className="grid-card">
              <h3>Benefits</h3>
              <ul className="benefits-list">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx}><FaCheckCircle className="icon" /> {benefit}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="faq-gallery-grid">
            <div className="faq-section">
              <h3>Common Questions</h3>
              {service.faq.map((item, idx) => (
                <div key={idx} className="faq-item">
                  <strong>Q: {item.q}</strong>
                  <p>A: {item.a}</p>
                </div>
              ))}
            </div>

            {['reblocking', 'restumping', 'underpinning'].includes(serviceName) &&
  service.gallery &&
  service.gallery.length > 0 && (
    <div>
      <h3>Project Gallery</h3>
      <div className="gallery-grid">
        {service.gallery.map((imgSrc, idx) => (
          <img key={idx} src={imgSrc} alt={`Project gallery ${idx + 1}`} />
        ))}
      </div>
    </div>
)}

          </div>

      </div>
      
          <Link to="/quote-request" className="floating-quote-button" aira-label="Request a Quote">
          <FaFileInvoice style={{color: "white" }} className='icon'/> Get Quote
          </Link>
        
     
      <Footer />
    </div>
  );
};

export default ServicePage;


