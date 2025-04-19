import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, Calendar } from "lucide-react";

export default function SaanviHomeClinics() {
  const [activeTab, setActiveTab] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Injection",
    date: "",
    time: "",
    message: ""
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    {
      id: "injection",
      title: "Injection",
      description: "Safe administration of prescribed medications through injections by our qualified nurses",
      details: "Our trained nurses provide safe and professional injection services in the comfort of your home. We follow all medical protocols to ensure proper administration of medications.",
      image: "/images/injection.jpg"
    },
    {
      id: "antibiotics",
      title: "Antibiotics Injection",
      description: "Specialized injection service for antibiotic medications requiring professional administration",
      details: "Antibiotic injections require precision and care. Our nurses are experienced in administering antibiotic injections with minimal discomfort while ensuring proper dosage.",
      image: "/images/antibiotics.jpg"
    },
    {
      id: "bp",
      title: "BP Checkup",
      description: "Regular blood pressure monitoring by experienced healthcare professionals",
      details: "Regular blood pressure monitoring is essential for managing various health conditions. Our nurses provide accurate readings using calibrated equipment and maintain detailed records of your readings over time.",
      image: "/images/bp-checkup.jpg"
    },
    {
      id: "fluid",
      title: "Fluid and Injection",
      description: "Administration of IV fluids and required injections for patients needing hydration or medication",
      details: "For patients requiring intravenous fluids, our skilled nurses can set up and monitor IV fluid administration along with any necessary injections in your home environment.",
      image: "/images/iv-fluid.jpg"
    },
    {
      id: "cannulation",
      title: "Cannulation",
      description: "Professional insertion and management of cannulas for medication administration",
      details: "Our nurses are skilled in cannula insertion with minimal discomfort. We ensure proper placement, care, and monitoring of the cannula site to prevent complications.",
      image: "/images/cannulation.jpg"
    },
    {
      id: "dressing",
      title: "Dressing",
      description: "Wound care and dressing changes performed with sterile techniques",
      details: "Proper wound care is crucial for healing. Our nurses provide professional dressing changes using sterile techniques to prevent infection and promote healing of wounds, surgical sites, or pressure ulcers.",
      image: "/images/dressing.jpg"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real application, you would send this data to a server
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "Injection",
        date: "",
        time: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-teal-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="text-3xl font-bold">Saanvi Home Clinics</div>
          </div>
          
          <nav className="flex space-x-1 md:space-x-4">
            <button 
              onClick={() => setActiveTab("home")}
              className={`px-3 py-2 rounded-md ${activeTab === "home" ? "bg-teal-700" : "hover:bg-teal-700"}`}
            >
              Home
            </button>
            <button 
              onClick={() => setActiveTab("services")}
              className={`px-3 py-2 rounded-md ${activeTab === "services" ? "bg-teal-700" : "hover:bg-teal-700"}`}
            >
              Services
            </button>
            <button 
              onClick={() => setActiveTab("book")}
              className={`px-3 py-2 rounded-md ${activeTab === "book" ? "bg-teal-700" : "hover:bg-teal-700"}`}
            >
              Book Service
            </button>
            <button 
              onClick={() => setActiveTab("contact")}
              className={`px-3 py-2 rounded-md ${activeTab === "contact" ? "bg-teal-700" : "hover:bg-teal-700"}`}
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Home Tab */}
        {activeTab === "home" && (
          <div className="space-y-8">
            <section className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h1 className="text-4xl font-bold text-teal-600 mb-4">Professional Home Care Nursing Services</h1>
                  <p className="text-gray-600 mb-6">
                    Saanvi Home Clinics brings professional healthcare to your doorstep. 
                    Our team of qualified nurses provides a range of medical services in the comfort of your home.
                  </p>
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => setActiveTab("services")}
                      className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition flex items-center"
                    >
                      Our Services <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => setActiveTab("book")}
                      className="border border-teal-600 text-teal-600 px-6 py-3 rounded-md hover:bg-teal-50 transition"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
                <div className="md:w-1/2 bg-teal-100 flex items-center justify-center p-8">
                  <div className="text-center">
                    <img src="/images/home-nursing.jpg" alt="Home nursing care" className="rounded-lg shadow-md" />
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-teal-600 mb-6">Why Choose Saanvi Home Clinics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-teal-600 mb-2">Experienced Staff</h3>
                  <p className="text-gray-600">Our team consists of certified nurses with years of experience in home healthcare.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-teal-600 mb-2">Convenient Care</h3>
                  <p className="text-gray-600">Receive professional medical care without leaving the comfort of your home.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-teal-600 mb-2">Affordable Services</h3>
                  <p className="text-gray-600">Quality healthcare at competitive prices with transparent billing.</p>
                </div>
              </div>
            </section>

            <section className="mt-12 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-teal-600 mb-6">Our Featured Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.slice(0, 3).map(service => (
                  <div key={service.id} className="border border-gray-200 rounded-lg p-4 hover:border-teal-500 transition">
                    <div className="mb-3 overflow-hidden rounded-md">
                      <img src={service.image} alt={service.title} className="w-full h-40 object-cover hover:scale-105 transition duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-teal-600 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <button 
                      onClick={() => setActiveTab("services")}
                      className="text-teal-600 font-medium flex items-center hover:text-teal-700"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <button 
                  onClick={() => setActiveTab("services")}
                  className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition"
                >
                  View All Services
                </button>
              </div>
            </section>

            <section className="mt-12 bg-teal-50 p-8 rounded-lg">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-teal-600 mb-2">Ready to book a service?</h2>
                <p className="text-gray-600 mb-6">Our professional nurses are ready to assist you with your healthcare needs.</p>
                <button 
                  onClick={() => setActiveTab("book")}
                  className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition"
                >
                  Book Appointment
                </button>
              </div>
            </section>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === "services" && (
          <div>
            <h1 className="text-3xl font-bold text-teal-600 mb-8">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map(service => (
                <div key={service.id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-2/5">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-48 object-cover rounded-md shadow-sm"
                      />
                    </div>
                    <div className="md:w-3/5">
                      <h2 className="text-xl font-bold text-teal-600 mb-2">{service.title}</h2>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="bg-teal-50 p-4 rounded-md">
                        <h3 className="font-medium text-teal-700 mb-2">What we provide:</h3>
                        <p className="text-gray-600 text-sm">{service.details}</p>
                      </div>
                      <button 
                        onClick={() => setActiveTab("book")}
                        className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition flex items-center text-sm"
                      >
                        Book This Service <ArrowRight className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Book Service Tab */}
        {activeTab === "book" && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-teal-600 mb-8">Book a Service</h1>
            
            {submitSuccess ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Your appointment request has been submitted successfully! We'll contact you shortly to confirm.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">Full Name*</label>
                    <input 
                      id="name"
                      name="name"
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number*</label>
                    <input 
                      id="phone"
                      name="phone"
                      type="tel" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="service">Select Service*</label>
                  <select 
                    id="service"
                    name="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                  >
                    {services.map(service => (
                      <option key={service.id} value={service.title}>{service.title}</option>
                    ))}
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="date">Preferred Date*</label>
                    <input 
                      id="date"
                      name="date"
                      type="date" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="time">Preferred Time*</label>
                    <input 
                      id="time"
                      name="time"
                      type="time" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="message">Additional Information</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows="4" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please share any specific requirements or medical conditions we should be aware of"
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <button 
                    type="submit"
                    className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition flex items-center"
                  >
                    Book Appointment <Calendar className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === "contact" && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-teal-600 mb-8">Contact Us</h1>
            
            <div className="md:flex gap-8">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-xl font-semibold text-teal-600 mb-4">Get in Touch</h2>
                <p className="text-gray-600 mb-6">
                  Have questions about our services? Contact our friendly team for more information or to discuss your specific healthcare needs.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-teal-600 mr-3" />
                    <div>
                      <p className="font-medium">Call us</p>
                      <p className="text-gray-600">+91 7794062634</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-teal-600 mr-3" />
                    <div>
                      <p className="font-medium">Email us</p>
                      <p className="text-gray-600">info@saanvihomeclinics.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-teal-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Office Address</p>
                      <p className="text-gray-600">C-1207, Urbanrise spring is in the air, Srivani nagar,<br />Ameenpur, Hyderabad - 502032</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-teal-600 mr-3" />
                    <div>
                      <p className="font-medium">Operating Hours</p>
                      <p className="text-gray-600">Monday to Saturday: 8:00 AM - 8:00 PM<br />Sunday: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-teal-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-teal-600 mb-4">Send us a Message</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="contact-name">Your Name</label>
                    <input 
                      id="contact-name"
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="contact-email">Email Address</label>
                    <input 
                      id="contact-email"
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="contact-message">Message</label>
                    <textarea 
                      id="contact-message"
                      rows="4" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button 
                      type="submit"
                      className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="md:flex justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Saanvi Home Clinics</h2>
              <p className="text-teal-200 max-w-md">
                Professional home care nursing services bringing quality healthcare to your doorstep.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2">
                  <li><button onClick={() => setActiveTab("home")} className="text-teal-200 hover:text-white">Home</button></li>
                  <li><button onClick={() => setActiveTab("services")} className="text-teal-200 hover:text-white">Services</button></li>
                  <li><button onClick={() => setActiveTab("book")} className="text-teal-200 hover:text-white">Book Service</button></li>
                  <li><button onClick={() => setActiveTab("contact")} className="text-teal-200 hover:text-white">Contact</button></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Services</h3>
                <ul className="space-y-2">
                  {services.slice(0, 4).map(service => (
                    <li key={service.id}>
                      <button 
                        onClick={() => setActiveTab("services")} 
                        className="text-teal-200 hover:text-white"
                      >
                        {service.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-teal-200">
                    <Phone className="h-4 w-4 mr-2" />
                    +91 7794062634
                  </li>
                  <li className="flex items-center text-teal-200">
                    <Mail className="h-4 w-4 mr-2" />
                    info@saanvihomeclinics.com
                  </li>
                  <li className="flex items-start text-teal-200">
                    <MapPin className="h-4 w-4 mr-2 mt-1" />
                    <span>C-1207, Urbanrise spring is in the air, Ameenpur, Hyderabad</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-teal-700 mt-8 pt-6 text-center text-teal-200">
            <p>&copy; {new Date().getFullYear()} Saanvi Home Clinics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
