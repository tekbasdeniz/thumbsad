export default function ContactPageEn() {
  return (
    <div className="w-full min-h-[85vh] flex items-center justify-center bg-white px-6 py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black">
            Contact
          </h1>
          <div className="text-xl text-gray-500 leading-relaxed font-light mt-4">
            <p>
              For projects, partnerships, and growth initiatives, get in touch.
            </p>
          </div>
          
          <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl space-y-6 mt-4 shadow-sm">
            <div>
              <div className="text-xs text-gray-400 font-semibold uppercase mb-1">Email</div>
              <a href="mailto:info@thumbsad.com" className="text-gray-900 text-lg font-medium hover:text-blue-600 transition-colors">info@thumbsad.com</a>
            </div>
            <div>
              <div className="text-xs text-gray-400 font-semibold uppercase mb-1">Phone</div>
              <a href="tel:+902129550063" className="text-gray-900 text-lg font-medium hover:text-blue-600 transition-colors">+90 212 955 00 63</a>
            </div>
            <div>
              <div className="text-xs text-gray-400 font-semibold uppercase mb-1">Address</div>
              <div className="text-gray-900 font-medium">Esentepe Mah. Büyükdere Cad. Loft Residence No: 201 / 40 Şişli, Istanbul, Turkey</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-12 bg-black rounded-[3rem] text-center shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">Unlock Your Brand's Potential</h3>
          <p className="text-gray-400 mb-8 max-w-sm">
            Book your slot directly on our calendar. You’ll receive an instant confirmation with the meeting link.
          </p>
          <a
            href="https://calendar.app.google/hjAXB9fuz4cwxXfe7"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-5 rounded-full bg-[#0a246b] text-white font-semibold hover:bg-[#0a246b]/90 transition-colors flex items-center justify-center gap-3 text-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
