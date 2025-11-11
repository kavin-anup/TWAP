
export default function StatsSection() {
  const stats = [
    { number: '2,500+', label: 'AI Tools Listed', icon: 'ri-apps-line' },
    { number: '150K+', label: 'Monthly Users', icon: 'ri-user-line' },
    { number: '50K+', label: 'Reviews Written', icon: 'ri-star-line' },
    { number: '95%', label: 'User Satisfaction', icon: 'ri-thumb-up-line' }
  ];

  return (
    <div className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Trusted by Developers Worldwide
          </h2>
          <p className="text-blue-100 text-lg">
            Join thousands of developers who rely on our curated AI tool directory
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <i className={`${stat.icon} text-3xl text-orange-400`}></i>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
