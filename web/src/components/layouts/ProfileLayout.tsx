import { Component, JSX } from "solid-js";

import Navbar from "@components/shared/Navbar";
import Button from "@components/ui/Button";
import MenuItem from "@components/ProfileLayout/MenuItem";

interface ProfileLayoutProps extends JSX.HTMLAttributes<HTMLElement> {}

const ProfileLayout: Component<ProfileLayoutProps> = (props) => {
  return (
    <>
      <Navbar/>

      <div class="flex flex-1 w-full">

        <aside class="w-64 border-r border-gray-300 p-8 flex flex-col gap-6">
          <h2 class="text-2xl font-bold mb-4">Menu</h2>
          
          <div class="flex flex-col gap-2">
            <MenuItem href="/profile">Profile</MenuItem>
          </div>

          <div class="flex flex-col gap-2">
            <h3 class="font-bold text-sm mb-1">Sell</h3>
            <div class="flex flex-col gap-2 pl-2 text-sm">
              <MenuItem href="/profile/active-listings">Active Listings</MenuItem>
              <MenuItem href="/profile/received-orders">Received Orders</MenuItem>
              <MenuItem href="/profile/history">Listings History</MenuItem>
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <h3 class="font-bold text-sm mb-1">Buy</h3>
            <div class="flex flex-col gap-2 pl-2 text-sm">
              <MenuItem href="/profile/active-orders">Active Orders</MenuItem>
              <MenuItem href="/profile/orders">Orders History</MenuItem>
            </div>
          </div>

          <Button variant="primary" class="absolute bottom-8 left-8">Log Out</Button>
        </aside>

        <main class="flex-1 p-8">
          {props.children}
        </main>

      </div>
    </>
  );
};

export default ProfileLayout;
