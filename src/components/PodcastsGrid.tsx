import React from 'react';
import LazyImage from './LazyImage';

interface Podcast {
  title: string;
  host: string;
  image: string;
  link: string;
}

interface PodcastsGridProps {
  podcasts: Podcast[];
  darkMode: boolean;
}

const PodcastsGrid: React.FC<PodcastsGridProps> = ({ podcasts, darkMode }) => {
  return (
    <section className={`py-20 ${darkMode ? 'bg-[#1a1a1a]' : 'bg-[#fef3e2]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-[#2a3a4a]'} mb-4 text-center animate-fadeInUp`}>Trusted by Top Podcasts</h2>
        <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} text-center mb-12 animate-fadeInUp delay-100`}>We've helped leading voices build, grow, and scale their shows</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {podcasts.map((podcast, index) => (
            <div 
              key={index}
              className={`${darkMode ? 'bg-[#2a2a2a]' : 'bg-white'} p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center group animate-fadeInUp`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <a
                href={podcast.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105">
                  <LazyImage
                    src={podcast.image}
                    alt={podcast.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-[#2a3a4a]'} mb-1 group-hover:text-[#fa812f] transition-colors duration-300`}>{podcast.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>with {podcast.host}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodcastsGrid;