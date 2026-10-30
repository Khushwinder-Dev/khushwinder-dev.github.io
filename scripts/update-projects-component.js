const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '..', 'components', 'portfolio', 'projects.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

const targetFunctionStart = 'function ProjectThumbnail({ project }: { project: Project }) {';
const targetFunctionEnd = 'export function Projects() {';

const newComponent = `function ProjectThumbnail({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const faviconUrl = \`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=\${encodeURIComponent(
    project.url
  )}&size=128\`

  const getGradient = (category: ProjectCategory) => {
    switch (category) {
      case 'shopify':
        return 'from-emerald-950/60 via-card to-emerald-900/20'
      case 'wordpress':
        return 'from-sky-950/60 via-card to-sky-900/20'
      case 'laravel':
        return 'from-rose-950/60 via-card to-rose-900/20'
    }
  }

  const getAccentColor = (category: ProjectCategory) => {
    switch (category) {
      case 'shopify':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
      case 'wordpress':
        return 'bg-sky-500/20 text-sky-400 border-sky-500/30'
      case 'laravel':
        return 'bg-rose-500/20 text-rose-400 border-rose-500/30'
    }
  }

  const hasImage = Boolean(project.image) && !imgError

  return (
    <div className="relative size-full overflow-hidden bg-card">
      {/* ----------------- BASE LAYER: WEBSITE UI MOCKUP ----------------- */}
      <div
        className={\`absolute inset-0 flex flex-col justify-between p-3.5 bg-gradient-to-br \${getGradient(
          project.category
        )}\`}
      >
        {/* Mockup header */}
        <div className="flex items-center justify-between gap-2 border-b border-border/40 pb-2">
          <div className="flex items-center gap-2">
            <div className="size-6 overflow-hidden rounded-full border border-border/60 bg-white/90 p-0.5 shadow-sm shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={faviconUrl}
                alt=""
                className="size-full object-contain"
                onError={(e) => {
                  ;(e.target as HTMLElement).style.display = 'none'
                }}
              />
            </div>
            <span className="text-[11px] font-semibold text-foreground truncate max-w-[130px]">
              {project.title}
            </span>
          </div>

          <span
            className={\`rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider \${getAccentColor(
              project.category
            )}\`}
          >
            {project.category}
          </span>
        </div>

        {/* Mockup visual body */}
        <div className="flex-1 flex flex-col justify-center py-2 space-y-1.5 opacity-80">
          <div className="h-2 w-3/4 rounded-full bg-foreground/20" />
          <div className="h-1.5 w-1/2 rounded-full bg-muted-foreground/30" />
          <div className="pt-2 flex items-center gap-2">
            <div className="h-5 w-16 rounded-md bg-primary/30 border border-primary/40" />
            <div className="h-5 w-12 rounded-md bg-secondary/50 border border-border/40" />
          </div>
        </div>

        {/* Mockup footer tag */}
        <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1 border-t border-border/30">
          <span className="truncate max-w-[180px]">{project.tag}</span>
          <span className="font-mono text-primary text-[9px] flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            live
          </span>
        </div>
      </div>

      {/* ----------------- TOP LAYER: LOCAL HIGH-SPEED SCREENSHOT IMAGE ----------------- */}
      {hasImage && project.image && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={\`\${project.title} live preview\`}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => setImgError(true)}
            className={\`absolute inset-0 size-full object-cover object-top transition-all duration-500 group-hover:scale-105 z-10 \${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }\`}
          />
        </>
      )}
    </div>
  )
}

`;

const startIdx = content.indexOf(targetFunctionStart);
const endIdx = content.indexOf(targetFunctionEnd);

if (startIdx !== -1 && endIdx !== -1) {
  content = content.substring(0, startIdx) + newComponent + content.substring(endIdx);
  fs.writeFileSync(targetFile, content, 'utf8');
  console.log('projects.tsx updated successfully!');
} else {
  console.error('Indices not found:', startIdx, endIdx);
}
