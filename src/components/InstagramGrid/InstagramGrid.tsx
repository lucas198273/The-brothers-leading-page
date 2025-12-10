import { Play } from "lucide-react";

type InstaItem = {
  thumbnail: string;
  url: string;
  isVideo?: boolean;
};

const items: InstaItem[] = [
  {
    thumbnail: "/assets/insta/1.png",
    url: "https://www.instagram.com/reel/C7ZvvEbJH2A/",
    isVideo: true,
  },
  {
    thumbnail: "assets/insta/2.png",
    url: "https://www.instagram.com/reel/C77-BNDtXJi/",
    isVideo: true,
  },
  {
    thumbnail: "/assets/insta/3.png",
    url: "https://www.instagram.com/reel/C4i0e_vplRw/",
    isVideo:true,
  },
  {
    thumbnail: "/assets/insta/4.png",
    url: "https://www.instagram.com/reel/C5irBSjrJok/",
    isVideo: true,
  },

 
 

];

export default function InstagramGrid() {
  return (
    <section  className="w-full py-10 bg-black">
     <h2
  className="
    text-center text-red-600 opacity-90 font-black tracking-wide mb-16
    text-4xl sm:text-4xl md:text-4xl lg:text-4xl
  "
>
  MAIS SOBRE NÓS
</h2>


      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
          >
            <img
              src={item.thumbnail}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              alt="Instagram post"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Play Icon (if video) */}
            {item.isVideo && (
              <Play
                size={60}
                className="absolute text-white inset-0 m-auto drop-shadow-xl opacity-90 group-hover:scale-110 transition-transform"
              />
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
