import { Logo } from '../icons/Logo';
import { TwitterIcon } from '../icons/TwitterIcon';
import { YoutubeIcon } from '../icons/YoutubeIcon';
import { SidebarItem } from './SidebarItem';
import { ToggleSwitch } from './Toggle';
import { Button } from './Button';
export function Sidebar() {
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
          <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
        </div>
        <div className="pt-8 pl-4   ">
          <ToggleSwitch text="HEyy"></ToggleSwitch>
        </div>
        <div className="pt-8 pl-4">
          <Button
            onClick={() => {
              localStorage.removeItem('token');
              window.location.href = '/signin';
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
