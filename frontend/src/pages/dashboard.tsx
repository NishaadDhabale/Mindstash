import { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { CreateContentModal } from '../components/CreateContentModal';
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { Sidebar } from '../components/Sidebar';
import { useContent } from '../hooks/useContent';
import { BACKEND_URL, FRONTEND_URL } from '../config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useContent();
  const [shared,setShared]= useState(false);
  const navigate = useNavigate();

  function checkShared(value:boolean){
    setShared(value);
  }

  useEffect(() => {
    let temptoken: string | null = '';
    const interval = setInterval(() => {
      temptoken = localStorage.getItem('token');
      if (temptoken === null || temptoken === '') {
        alert('it seems we have lost you pls signin again');
        navigate('/signin');
      }
    }, 1000 * 60 * 10); //checks every10mins whether user is signed in
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    refresh();
  }, [modalOpen]);

  return (
    <div>
      <Sidebar
      shared={shared}
      onshared={checkShared}
      />
      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="flex justify-end gap-4">
          <Button
            onClick={() => {
              setModalOpen(true);
            }}
            variant="primary"
            text="Add content"
            startIcon={<PlusIcon />}
          ></Button>
          <Button
            onClick={async () => {
              checkShared(true);
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
              const shareUrl = `${FRONTEND_URL}/brain/${response.data.hash}`;
              alert(shareUrl + 'has been copied to your clipboard');
              navigator.clipboard.writeText(shareUrl);
            }}
            variant="secondary"
            text="Share brain"
            startIcon={<ShareIcon />}
          ></Button>
        </div>
        <div>



        </div>
        <div className="flex gap-4 flex-wrap">

          {contents.map(({ _id,type, link, title,}) => (
            <Card  title={title} type={type} link={link} contentid={_id} content={refresh} share={false}/>
          ))}
        </div>
      </div>
    </div>
  );
}
