"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { VscTools } from "react-icons/vsc";
import { RiPresentationFill } from "react-icons/ri";
import { FiCheckCircle } from "react-icons/fi";
import { VscGraph } from "react-icons/vsc";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Current Students",
    href: "/current-students",
    description:
      "Students currently embarking on a project",
  },
  {
    title: "Past Students",
    href: "/past-students",
    description:
      "Amazing students with some publications",
  },
];

export function Menu() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex">
              <ul className="grid p-2 md:w-[400px] dark:bg-[#151819] lg:w-[250px] hover:cursor-pointer border-r">
                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                  <VscTools className="text-2xl mr-2 text-red-600" />
                  <div className="">
                    <Link href="/ongoing-projects" className="">Ongoing Projects</Link>
                    <p className="text-gray-400 text-sm font-light">
                      View current active projects
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                  <FiCheckCircle className="text-2xl mr-2 text-blue-600" />
                  <div className="">
                    <Link href="/completed-projects" className="">Completed Projects</Link>
                    <p className="text-gray-400 text-sm font-light">
                      Enter the archives
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                  <RiPresentationFill className="text-2xl mr-2 text-yellow-600" />
                  <div className="">
                    <Link href="/publications" className="">Publications</Link>
                    <p className="text-gray-400 text-sm font-light">
                      Wonderful Presentations
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
                  <VscGraph className="text-2xl mr-2 text-purple-600" />
                  <div className="">
                    <Link href="/future-endeavours" className="">Future Endeavours</Link>
                    <p className="text-gray-400 text-sm font-light">
                      Long term goals
                    </p>
                  </div>
                </div>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Students</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] dark:bg-[#151819]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <Link href="/collaborators" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Collaborators
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

// <NavigationMenuItem>
//   <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
//   <NavigationMenuContent>
//     <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//       {components.map((component) => (
//         <ListItem
//           key={component.title}
//           title={component.title}
//           href={component.href}
//         >
//           {component.description}
//         </ListItem>
//       ))}
//     </ul>
//   </NavigationMenuContent>
// </NavigationMenuItem>
// 
// <NavigationMenuItem>
//   <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
//   <NavigationMenuContent>
//     <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//       {components.map((component) => (
//         <ListItem
//           key={component.title}
//           title={component.title}
//           href={component.href}
//         >
//           {component.description}
//         </ListItem>
//       ))}
//     </ul>
//   </NavigationMenuContent>
// </NavigationMenuItem>





// <div>
//   <ul className="grid  p-2 md:w-[400px]  lg:w-[250px] hover:cursor-pointer border-r">
//     <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
//       <div>
//         <a className="">Template gallery</a>
//         <p className="text-gray-400 text-sm font-light">
//           Setups to get you started
//         </p>
//       </div>
//     </div>
//
//     <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
//       <div>
//         <a>Customer Stories</a>
//         <p className="text-gray-400 text-sm font-light">
//           See how teams use bird
//         </p>
//       </div>
//     </div>
//
//     <div className="flex items-center gap-1 hover:bg-gray-400/10 p-1 rounded-sm">
//       <div>
//         <a>Connections</a>
//         <p className="text-gray-400 text-sm font-light">
//           Connect your tools to bird
//         </p>
//       </div>
//     </div>
//   </ul>
// </div>
