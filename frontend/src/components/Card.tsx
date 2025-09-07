import axios from 'axios';
import { ShareIcon } from '../icons/ShareIcon';
import { useEffect, useState } from 'react';
import { SpaceIcon } from 'lucide-react';
import { CrossIcon } from '../icons/CrossIcon';
import { Logo } from '../icons/Logo';
import { BACKEND_URL } from '../config';

interface CardProps {
  title: string;
  link: string;
  type: 'twitter' | 'youtube' | 'website';
  content?: () => void;
  contentid?: string;
  share: boolean
}

export function Card({ title, link, type, content, contentid,share }: CardProps) {
   const [imageaddress, setImageaddress] = useState<string>('/Loading.jpg');
    if(!share){
  useEffect(() => {
    if (type === 'website') {
      async function fetching() {
        interface Response {
          data: {
            image: string;
          };
        }
        const response: Response = await axios.get(
          `https://api.linkpreview.net/?q=${link}`,
          {
            headers: {
              'X-Linkpreview-Api-Key': 'ad989b96186bf536d4e6e979c4f8466f',
            },
          }
        );
        const add = response.data.image.replace(/^"|"$/g, '');

        setImageaddress(add);
      }
      fetching();
    }
  }, [type]);

}
  return (
    <div>
      <div className="p-4 bg-white rounded-md border-gray-200 max-w-72  border min-h-48 min-w-72">
        <div className="flex justify-between">
          <div className="flex items-center text-md">
            <div className="text-gray-500 pr-2">
              <Logo />
            </div>
            {type === 'website' ? (
              <span>{title} website</span>
            ) : (
              <span> {title}</span>
            )}
          </div>
          <div className="flex items-center">
            <div className="pr-2 text-gray-500">
              <a href={link} target="_blank">
                <ShareIcon />
              </a>
            </div>
            {!share &&(
            <div
              onClick={async function a() {
                const res = await axios.delete(
                  `${BACKEND_URL}/api/v1/content`,
                  {
                    data: {
                      contentId: contentid,
                    },
                    headers: {
                      Authorization: localStorage.getItem('token'),
                    },
                  }
                );
                {content &&
                content();}
              }}
              className="text-gray-500 cursor-pointer hover:text-gray-800"
            >
              <CrossIcon />
            </div>)}
          </div>
        </div>

        <div className="pt-4">
          {type === 'youtube' && (
            <iframe
              className="w-full"
              src={link
                .replace('watch', 'embed')
                .replace('?v=', '/')
                .replace('youtu.be/', 'youtube.com/embed/')}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {type === 'twitter' && (
            <blockquote className="twitter-tweet">
              <a href={link.replace('x.com', 'twitter.com')}></a>
            </blockquote>
          )}

          {type === 'website'&& imageaddress && (
            <div>
              <img
                onClick={() => {
                  window.location.href = link;
                }}
                className="w-full h-40 object-cover"
                src={imageaddress}
                alt="Website Preview"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
