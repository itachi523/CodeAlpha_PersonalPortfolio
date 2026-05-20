import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ExternalLink, GitBranch, Code2, Loader, Star } from 'lucide-react';

const ProjectPanels = () => {
  const containerRef = useRef(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch GitHub Repos
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/itachi523/repos?sort=updated&per_page=10');
        const data = await response.json();
        // Map GitHub data to our format
        const formattedProjects = data.map(repo => ({
          id: repo.id,
          title: repo.name,
          description: repo.description || "System protocol module. Documentation pending.",
          url: repo.html_url,
          homepage: repo.homepage,
          stars: repo.stargazers_count,
          watchers: repo.watchers_count,
          language: repo.language || 'Unknown'
        }));
        setProjects(formattedProjects);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repos:', error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  useEffect(() => {
    if (!loading && containerRef.current) {
      const items = containerRef.current.children;
      gsap.fromTo(
        items,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
      );
    }
  }, [loading]);

  return (
    <div className="flex flex-col gap-4" ref={containerRef}>
      <h2 className="font-orbitron font-bold text-xl tracking-[0.2em] border-b border-hud-cyan/30 pb-2 mb-2">
        ACTIVE_PROJECTS_ARCHIVE
      </h2>

      {loading ? (
        <div className="flex items-center justify-center p-8">
          <Loader className="w-8 h-8 text-hud-cyan animate-spin" />
          <span className="ml-4 font-mono text-sm text-hud-cyan animate-pulse">FETCHING_GITHUB_DATA...</span>
        </div>
      ) : (
        projects.map((project) => (
          <div key={project.id} className="hud-panel p-4 group hover:bg-hud-cyan/5 transition-colors cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-hud-cyan scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
            
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="p-2 border border-hud-cyan/30 rounded bg-hud-cyan/5">
                  <Code2 className="w-5 h-5 text-hud-cyan" />
                </div>
                <h3 className="font-orbitron font-bold tracking-wider text-base md:text-lg truncate max-w-[200px]" title={project.title}>
                  {project.title}
                </h3>
              </div>
              <div className="flex gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <GitBranch className="w-5 h-5 hover:text-white transition-colors" />
                </a>
                {project.homepage && (
                  <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 hover:text-white transition-colors" />
                  </a>
                )}
              </div>
            </div>
            
            <p className="font-mono text-xs text-hud-cyan/70 mb-4 line-clamp-2">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2 py-1 bg-hud-cyan/10 border border-hud-cyan/20 rounded text-hud-cyan/80">
                {project.language}
              </span>
              <span className="px-2 py-1 bg-hud-cyan/10 border border-hud-cyan/20 rounded text-hud-cyan/80 flex items-center gap-1">
                <Star className="w-3 h-3" /> {project.stars}
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProjectPanels;
