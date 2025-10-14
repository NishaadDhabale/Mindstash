import { useEffect, useState } from 'react';
//import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { CreateContentModal } from '../components/CreateContentModal';

import { useShare } from '../hooks/useShare';
import { Logo } from '../icons/Logo';
import { TwitterIcon } from '../icons/TwitterIcon';
import { YoutubeIcon } from '../icons/YoutubeIcon';
//import { PlusIcon } from '../icons/PlusIcon';
//import { ShareIcon } from '../icons/ShareIcon';
//import axios from 'axios';
//import { BACKEND_URL } from '../config';
import { SidebarItem } from '../components/SidebarItem';
import { useNavigate } from 'react-router-dom';
export function Share() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useShare();

  useEffect(() => {
    refresh();
  }, [modalOpen]);

  return (
    <div>
      <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
        <div
          onClick={() => {
            navigate('/');
          }}
          className="flex cursor-pointer text-2xl pt-8 items-center"
        >
          <div className="pr-2 text-purple-600">
            <Logo />
          </div>
          MindStash
        </div>
        <div className=" h-full ">
          <div className="pt-8 pl-4">
            <SidebarItem text="Twitter" icon={<TwitterIcon />} />
            <span className="text-sm text-gray-500 mr-4 p-4 flex">
              twitter contents may load slower <br />
              Due to API Limitations
            </span>

            <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
          </div>
        </div>
      </div>

      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="flex justify-end gap-4">
          {/*<Button
              onClick={() => {
                setModalOpen(true);
              }}
              variant="primary"
              text="Add content"
              startIcon={<PlusIcon />}
            ></Button>*/}
          {/*<Button
              onClick={async () => {
                const response = await axios.post(
                  `${BACKEND_URL}/api/v1/brain/share`,
                  {
                    share: true,
                  },
                  {
                    headers: {
                      Authorization: localStorage.getItem('token'),
                    },
                  }
                );
                //@ts-ignore
                const shareUrl = `${FRONTENDURL}/share/${response.data.hash}`;
                alert(shareUrl + 'has been copied to your clipboard');
                navigator.clipboard.writeText(shareUrl);
              }}
              variant="secondary"
              text="Share brain"
              startIcon={<ShareIcon />}
            ></Button>*/}
        </div>

        <div className="flex gap-4 flex-wrap">
          {contents.length === 0 ? (
            <div className="font-semibold">Oops :( this link is not valid</div>
          ) : (
            contents.map(({ type, link, title }) => (
              <Card
                key={link}
                type={type}
                link={link}
                title={title}
                share={true}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
