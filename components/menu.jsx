import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import Button from '@/components/ui/button';
import { MenuIcon, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Menu = ({ data }) => {
  const pathname = usePathname();
  const router = useRouter();
  const routes = data.map((route) => ({
    href: `/category/${route._id}`,
    label: route.name,
    active: pathname === `/category/${route._id}`,
  }));

  return (
    <Drawer>
      <DrawerTrigger>
        <Button className="flex md:hidden items-center rounded-full bg-black p-2">
          <MenuIcon size={20} color="white" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Browse Categories</DrawerTitle>
          <DrawerDescription>
            <div className="flex gap-4 py-4 items-center justify-center">
              {routes.map((route) => (
                <DrawerClose key={route.href}>
                  <Button
                    onClick={() => router.push(route.href)}
                    className={cn(
                      `text-sm font-medium transition-colors px-4 py-2 rounded-full `,
                      !route.active && 'bg-white text-neutral-700 border border-neutral-700',
                    )}
                  >
                    {route.label}
                  </Button>
                </DrawerClose>
              ))}
            </div>
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button className="rounded-full bg-black p-2">
              <X size={20} color="white" />
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Menu;
