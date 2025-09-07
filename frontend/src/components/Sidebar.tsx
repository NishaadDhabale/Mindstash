import { Logo } from '../icons/Logo';
import { TwitterIcon } from '../icons/TwitterIcon';
import { YoutubeIcon } from '../icons/YoutubeIcon';
import { SidebarItem } from './SidebarItem';
import { ToggleSwitch } from './Toggle';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';
interface SidebarProps {
  shared: boolean;
  onshared: (value: boolean) => void;
}

export function Sidebar({ shared, onshared }: SidebarProps) {
  const navigate = useNavigate();
  function isToggled(toggled: boolean) {
    const ishared = !toggled;
    onshared(ishared);
  }

  return (
    <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
      <div className="flex text-2xl pt-8 items-center">
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
        <div className="pt-8 pl-4   ">
          {shared && (
            <ToggleSwitch
              text="Disable sharing"
              onclick={isToggled}
            ></ToggleSwitch>
          )}
        </div>
        <div className="pt-8 pl-4">
          <Button
            onClick={() => {
              localStorage.removeItem('token');
              navigate('/signin');
            }}
            loading={false}
            variant="danger"
            text="Logout"
            fullWidth={true}
          />
        </div>
      </div>
    </div>
  );
}
