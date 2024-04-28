"use client";
import React from "react";
// import React, { useState } from "react";
// import { Loader2, Sparkles, Zap } from "lucide-react";
import { Icons } from "./Icons";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useProModal } from "@/hooks/use-pro-modal";
import Link from "next/link";
import { Shell } from "lucide-react";
// import { useToast } from "./ui/use-toast";
// import axios from "axios";

const Sidebar = ({ isPro }: { isPro: boolean }) => {
  const router = useRouter();
  const pathname = usePathname();
  const proModal = useProModal();
  // const { toast } = useToast();
  // const [loading, setLoading] = useState(false);

  const onNavigate = (url: string, pro: boolean) => {
    if (pro && !isPro) {
      return proModal.onOpen();
    }
    return router.push(url);
  };

  const routes = [
    {
      icon: <Icons.explore />,
      label: "Dashboard",
      path: "/dashboard",
      pro: false,
    },
    {
      icon: <Icons.create />,
      label: "Create",
      path: "/companion/create",
      pro: true,
    },
    {
      icon: <Icons.billing />,
      label: "Billing",
      path: "/billing",
      pro: false,
    },
  ];

  // const onClick = async () => {
  //   try {
  //     setLoading(true);

  //     const response = await axios.get("/api/stripe");

  //     window.location.href = response.data.url;
  //   } catch (error) {
  //     toast({
  //       description: "Something went wrong",
  //       variant: "destructive",
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <aside className="fixed inset-0 z-40 flex h-screen w-fit flex-col border-r bg-white">
      <div className="mx-4 my-6">
        <Link href="/">
          <Shell className="size-11" />
        </Link>

        <ul className="mt-28 space-y-2">
          {routes.map((route, idx) => (
            <div onClick={() => onNavigate(route.path, route.pro)} key={idx}>
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "flex items-center rounded-lg transition-colors p-4 leading-none hover:bg-accent cursor-pointer",
                  pathname === route.path && "bg-accent"
                )}
              >
                <AnimatePresence>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    {route.icon}
                  </motion.span>
                </AnimatePresence>
              </motion.li>
            </div>
          ))}
        </ul>
      </div>
    </aside>
    // <aside className="flex h-screen w-fit flex-col items-center space-y-32 border-r p-4">
    //   <Link href="/">
    //     <Icons.logo className="size-12" />
    //   </Link>

    //   <ul className="space-y-2">
    //     {routes.map((route, idx) => (
    //       <div onClick={() => onNavigate(route.path, route.pro)} key={idx}>
    //         <motion.li
    //           whileHover={{ scale: 1.05 }}
    //           whileTap={{ scale: 0.95 }}
    //           className={cn(
    //             "flex items-center rounded-lg transition-colors p-4 leading-none hover:bg-accent cursor-pointer",
    //             pathname === route.path && "bg-accent"
    //           )}
    //         >
    //           <AnimatePresence>
    //             <motion.span
    //               initial={{ scale: 0 }}
    //               animate={{ scale: 1 }}
    //               exit={{ scale: 0 }}
    //             >
    //               {route.icon}
    //             </motion.span>
    //           </AnimatePresence>
    //         </motion.li>
    //       </div>
    //     ))}
    //   </ul>
    // </aside>
  );
};

export default Sidebar;
