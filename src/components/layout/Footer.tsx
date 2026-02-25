import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {new Date().getFullYear()} Dasari Sriharikrishna. All rights reserved.</span>
          </div>


          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>using Next.js & GSAP</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
