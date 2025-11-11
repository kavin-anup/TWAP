import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  testimonial: string;
  outcome: string;
  avatar: string;
  companyLogo: string;
  rating: number;
  serviceType: 'App Submission' | 'Automation Services';
}

export default function TestimonialsSection() {
  const [testimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: "Alex Thompson",
      title: "Founder & CEO",
      company: "TaskFlow Pro",
      testimonial: "The app submission process was seamless. Within 2 weeks, TaskFlow Pro was featured on multiple platforms and our downloads increased by 300%. The team's expertise in app store optimization is unmatched.",
      outcome: "300% increase in downloads, Featured placement",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20male%20founder%20headshot%2C%20confident%20tech%20entrepreneur%2C%20modern%20startup%20office%20background%2C%20business%20casual%20attire%2C%20warm%20smile%2C%20clean%20corporate%20portrait%2C%20professional%20lighting%2C%20innovative%20leader&width=200&height=200&seq=testimonial-alex&orientation=squarish",
      companyLogo: "https://readdy.ai/api/search-image?query=Modern%20tech%20company%20logo%20design%20for%20TaskFlow%20Pro%2C%20minimalist%20productivity%20app%20logo%2C%20clean%20geometric%20design%2C%20blue%20and%20orange%20color%20scheme%2C%20professional%20brand%20identity%2C%20simple%20icon%20style&width=120&height=120&seq=logo-taskflow&orientation=squarish",
      rating: 5,
      serviceType: 'App Submission'
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      title: "Operations Director",
      company: "GreenTech Solutions",
      testimonial: "Their AI automation transformed our customer service completely. Response times dropped from hours to minutes, and customer satisfaction scores improved by 45%. The ROI was evident within the first month.",
      outcome: "45% improvement in satisfaction, 80% faster response",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20Hispanic%20female%20executive%20headshot%2C%20confident%20business%20leader%2C%20modern%20corporate%20office%20background%2C%20professional%20attire%2C%20warm%20expression%2C%20clean%20corporate%20photography%2C%20innovative%20director&width=200&height=200&seq=testimonial-maria&orientation=squarish",
      companyLogo: "https://readdy.ai/api/search-image?query=Green%20technology%20company%20logo%20design%20for%20GreenTech%20Solutions%2C%20eco-friendly%20business%20logo%2C%20leaf%20and%20tech%20elements%2C%20green%20and%20blue%20color%20scheme%2C%20professional%20environmental%20brand%2C%20clean%20modern%20design&width=120&height=120&seq=logo-greentech&orientation=squarish",
      rating: 5,
      serviceType: 'Automation Services'
    },
    {
      id: 3,
      name: "David Park",
      title: "Co-founder",
      company: "FinanceAI",
      testimonial: "From concept to app store success in record time. Their submission strategy got FinanceAI into the top 10 finance apps within 3 months. The ongoing support and optimization recommendations have been invaluable.",
      outcome: "Top 10 ranking, 500K+ downloads in 3 months",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20Asian%20male%20co-founder%20headshot%2C%20tech%20entrepreneur%20portrait%2C%20modern%20fintech%20office%20environment%2C%20confident%20expression%2C%20business%20casual%20shirt%2C%20clean%20corporate%20photography%2C%20innovative%20startup%20leader&width=200&height=200&seq=testimonial-david&orientation=squarish",
      companyLogo: "https://readdy.ai/api/search-image?query=Modern%20fintech%20company%20logo%20design%20for%20FinanceAI%2C%20financial%20technology%20logo%2C%20AI%20and%20money%20elements%2C%20blue%20and%20gold%20color%20scheme%2C%20professional%20finance%20brand%2C%20clean%20sophisticated%20design&width=120&height=120&seq=logo-financeai&orientation=squarish",
      rating: 5,
      serviceType: 'App Submission'
    }
  ]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <div key={index} className="w-4 h-4 flex items-center justify-center">
        <i className={`ri-star-${index < rating ? 'fill' : 'line'} text-yellow-400`}></i>
      </div>
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2853] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
            What Our Clients Say About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Real results from founders who trusted us with their app submissions and automation needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gradient-to-br from-[#f7f5ef] to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
              <div className="p-8">
                {/* Service Type Badge */}
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-[#f25a1a] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.serviceType}
                  </span>
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="mb-6">
                  <div className="w-8 h-8 flex items-center justify-center text-[#f25a1a] mb-4">
                    <i className="ri-double-quotes-l text-2xl"></i>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {testimonial.testimonial}
                  </p>
                </div>

                {/* Outcome */}
                <div className="bg-white/80 rounded-lg p-4 mb-6 border border-[#f25a1a]/20">
                  <h4 className="text-sm font-semibold text-[#1F2853] mb-2" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Key Results:
                  </h4>
                  <p className="text-[#f25a1a] font-medium text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {testimonial.outcome}
                  </p>
                </div>

                {/* Client Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#f25a1a] mr-4">
                      <img 
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-[#1F2853] font-bold text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 text-xs" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  
                  {/* Company Logo */}
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                    <img 
                      src={testimonial.companyLogo}
                      alt={`${testimonial.company} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div className="mt-3 text-center">
                  <span className="text-gray-500 text-xs font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#1F2853] to-[#2a3a6b] rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-lg mb-6 opacity-90" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Let us help you achieve similar results with your app or automation project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#f25a1a] hover:bg-[#d14815] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Submit Your App
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Get Automation Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}