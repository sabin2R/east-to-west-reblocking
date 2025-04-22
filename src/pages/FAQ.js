// src/pages/FAQ.js
import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/style.css';
import '../styles/faq.css';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';


const faqSections = [
  {
    title: 'General Questions',
    items: [
      {
        question: 'What services do you offer?',
        answer: 'We offer reblocking, restumping, underpinning, and floor levelling services to ensure your property remains safe and structurally sound.'
      },
      {
        question: 'How can I request a quote?',
        answer: 'Simply click on the "Quote Request" link in the navigation or button on the homepage, fill out the form, and submit it.'
      },
      {
        question: 'Do you offer free consultations?',
        answer: 'Yes, we provide free consultations to assess your needs and offer the best solutions.'
      },
      {
        question: 'Where are you located?',
        answer: 'We are based in Coolaroo, VIC and serve all over Australia.'
      },
      {
        question: 'Are your quotes obligation-free?',
        answer: 'Yes, all our quotes are provided with no obligation or upfront cost.'
      },
      {
        question: 'What areas do you service?',
        answer: 'We service all metropolitan Melbourne suburbs and selected regional areas upon request.'
      },
      {
        question: 'Do you provide itemized quotes?',
        answer: 'Yes, all quotes are detailed with breakdowns for clarity and transparency.'
      }
    ]
  },
  {
    title: 'Service Details',
    items: [
      {
        question: 'How long does the reblocking process take?',
        answer: 'The reblocking timeline depends on the size of the house and extent of damage, but typically takes 5–10 days.'
      },
      {
        question: 'Do you handle permits and council approvals?',
        answer: 'Yes, we assist with all required permits and ensure our work complies with local regulations.'
      },
      {
        question: 'Is your work insured and guaranteed?',
        answer: 'Absolutely — we carry full insurance and offer a guarantee for all structural work we perform.'
      },
      {
        question: 'Can reblocking be done while I live in the house?',
        answer: 'In some cases, yes. However, temporary relocation may be recommended for safety.'
      },
      {
        question: 'Do you inspect existing concrete stumps?',
        answer: 'Yes, we retain all sound concrete stumps and only replace what’s necessary.'
      },
      {
        question: 'Do you offer floor leveling as a standalone service?',
        answer: 'Yes, floor leveling can be done independently, especially before flooring installations.'
      },
      {
        question: 'Can I combine reblocking and underpinning?',
        answer: 'Yes, we can tailor solutions to combine both processes depending on your foundation needs.'
      }
    ]
  },
  {
    title: 'Technical & Support',
    items: [
      {
        question: 'What materials do you use for stumps?',
        answer: 'We use concrete or galvanized steel stumps, depending on the project requirements.'
      },
      {
        question: 'Do you provide post-service support?',
        answer: 'Yes, we offer maintenance tips and follow-up inspections when required.'
      },
      {
        question: 'Can I schedule work during weekends?',
        answer: 'Yes, our team can work on weekends depending on availability and project urgency.'
      },
      {
        question: 'Do you use leveling equipment?',
        answer: 'Yes, we use German-engineered Nivcomp altimeters for millimeter-precision leveling.'
      },
      {
        question: 'What happens if additional damage is found?',
        answer: 'Our team will provide a transparent update and options before proceeding further.'
      },
      {
        question: 'How do I prepare my home for reblocking?',
        answer: 'We recommend removing heavy furniture from affected areas and securing valuables before the project begins.'
      },
      {
        question: 'Do I receive documentation after the work?',
        answer: 'Yes, we provide completion certificates and any compliance documentation needed for future references.'
      }
    ]
  }
];

const highlightText = (text, term) => {
  if (!term) return text;
  const regex = new RegExp(`(${term})`, 'gi');
  return text.split(regex).map((part, i) =>
    part.toLowerCase() === term.toLowerCase() ? <mark key={i}>{part}</mark> : part
  );
};

const FAQ = ({ previewCount = null }) => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const [openIndexes, setOpenIndexes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const isFullPageFAQ = location.pathname === '/faq';

  const handleToggle = (sectionIndex, itemIndex) => {
    const key = `${sectionIndex}-${itemIndex}`;
    setOpenIndexes((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  

  const filteredSections = faqSections.map((section, sIndex) => ({
    ...section,
    items: section.items.filter((item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  const visibleSections = previewCount
    ? [{
        title: faqSections[0].title,
        items: faqSections[0].items.slice(0, previewCount)
      }]
    : filteredSections;

  return (
    <Element name="faq">
      <section className="faq-section-universal">
      {isFullPageFAQ && (
        <Helmet>
        <title>FAQs | East to West Reblocking</title>
          <meta name="description" content="Frequently Asked Questions about our services." />
          <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqSections.flatMap(section =>
        section.items.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      )
    })}
  </script>
        </Helmet>
        )}
        <div className="faq-content" data-aos="fade-up">
          <h2 className="faq-title">Frequently Asked Questions</h2>

          {!previewCount && (
            <div className="faq-search-bar">
              <input
                type="text"
                className="faq-search"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button className="clear-search" onClick={handleClearSearch}>
                  ✕
                </button>
              )}
            </div>
          )}

{visibleSections.map((section, sIndex) => (
  <div key={sIndex} className="faq-section-group">
    {!previewCount && <h3 className="faq-subtitle">{section.title}</h3>}
    <div className="faq-grid">
      {section.items.map((faq, index) => {
        const key = `${sIndex}-${index}`;
        const isOpen = openIndexes.includes(key);
        return (
          <div key={index} className={`faq-card ${isOpen ? 'open' : ''}`}>
            <div
              className="faq-header side-by-side"
              onClick={() => handleToggle(sIndex, index)}
            >
              <h4 className="faq-question">{highlightText(faq.question, searchTerm)}</h4>
              <span className="faq-toggle">{isOpen ? '–' : '+'}</span>
            </div>
            <div
              className="faq-answer-wrapper"
              style={{
                maxHeight: isOpen ? '500px' : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.4s ease'
              }}
            >
              <p className="faq-answer">{highlightText(faq.answer, searchTerm)}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
))}

        </div>
        
      </section>
      {!previewCount && <Footer />}
    </Element>
  );
};

export default FAQ;
