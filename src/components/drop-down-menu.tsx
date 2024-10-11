import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { VscTools } from "react-icons/vsc";
import { RiPresentationFill } from "react-icons/ri";
import { FiCheckCircle } from "react-icons/fi";
import { VscGraph } from "react-icons/vsc";
import { IoPeopleOutline } from "react-icons/io5";

interface DropDownMenuProps {
  onClose: () => void;
}

const DropdownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="w-screen h-screen bg-white dark:bg-[#1C1F20]  px-4 items-center justify-center absolute right-0 xl:hidden">
      <Accordion
        defaultValue="item-1"
        className="
            pl-2
            "
        type="single"
        collapsible
      >
        <AccordionItem className="mt-6 border-b" value="item-1">
          <AccordionTrigger className="">Projects</AccordionTrigger>
          <AccordionContent
            defaultValue="item-1"


            className="space-y-2">
            <Link
              href={"/ongoing-projects"}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <VscTools className="h-6 w-6 mr-4 text-orange-400" />
              </div>
              <div>Ongoing Projects</div>
            </Link>
            <Link
              href={"/completed-projects"}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <FiCheckCircle className="h-6 w-6 mr-4 text-green-400" />
              </div>

              <div>Completed Projects</div>
            </Link>
            <Link
              href={"/publications"}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <RiPresentationFill className="h-6 w-6 mr-4 text-indigo-400" />
              </div>

              <div>Publications and Presentations</div>
            </Link>
            <Link
              href={"/future-endeavours"}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <VscGraph className="h-6 w-6 mr-4 text-blue-400" />
              </div>

              <div>Future Endeavours</div>
            </Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className=" border-b" value="item-2">
          <AccordionTrigger>Students</AccordionTrigger>
          <AccordionContent className="space-y-2">
            <Link
              href={"/current-students"}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <IoPeopleOutline className="h-6 w-6 mr-4 text-orange-400" />
              </div>
              <div>Current Students</div>
            </Link>
            <Link
              href={"/past-students"}
              className="flex"
              onClick={handleLinkClick}
            >
              <div>
                <IoPeopleOutline className="h-6 w-6 mr-4 text-green-400" />
              </div>

              <div>Past Students</div>
            </Link>
          </AccordionContent>
        </AccordionItem>
        <Link
          href={"/collaborators"}
          className="
            flex
            flex-1
            items-center 
            justify-between
            border-b
            py-4
            "
        >
          Collaborators

        </Link>
      </Accordion>

      <div className="pt-12">
        <div className="  space-y-4 flex flex-col px-4">
          <Link href={"/contact"}>
            <Button
              className="
              w-full
              text-white
                        "
            >
              Reach out
            </Button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;

// <Link href={"/sign-in"}>
//   <Button
//     variant={"outline"}
//     className="w-full"
//
//   >
//     Log in
//   </Button>
// </Link>
//
//
//
//    <AccordionItem className=" border-b" value="item-3">
//      <AccordionTrigger>Resources</AccordionTrigger>
//      <AccordionContent className="space-y-2">
//        <Link
//          href={"/team-alignment"}
//          className="flex"
//          onClick={handleLinkClick}
//        >
//          <div>
//            <UserPlus className="h-6 w-6 mr-4 text-orange-400" />
//          </div>
//          <div>Team alignment</div>
//        </Link>
//        <Link
//          href={"/sales"}
//          className="flex"
//          onClick={handleLinkClick}
//        >
//          <div>
//            <DollarSign className="h-6 w-6 mr-4 text-green-400" />
//          </div>
//
//          <div>Sales</div>
//        </Link>
//        <Link
//          href={"/engineering"}
//          className="flex"
//          onClick={handleLinkClick}
//        >
//          <div>
//            <Code className="h-6 w-6 mr-4 text-indigo-400" />
//          </div>
//
//          <div>Engineering</div>
//        </Link>
//        <Link
//          href={"/design"}
//          className="flex"
//          onClick={handleLinkClick}
//        >
//          <div>
//            <PaintBucket className="h-6 w-6 mr-4 text-blue-400" />
//          </div>
//
//          <div>Design</div>
//        </Link>
//        <Link
//          href={"/marketing"}
//          className="flex "
//          onClick={handleLinkClick}
//        >
//          <div>
//            <BarChart className="h-6 w-6 mr-4 text-rose-400" />
//          </div>
//
//          <div>Marketing</div>
//        </Link>
//        <Link
//          href={"/product-management"}
//          className="flex"
//          onClick={handleLinkClick}
//        >
//          <div>
//            <Settings className="h-6 w-6 mr-4 text-grey-400" />
//          </div>
//
//          <div>Product Management</div>
//        </Link>
//        <Link
//          href={"/support"}
//          className="flex "
//          onClick={handleLinkClick}
//        >
//          <div>
//            <Headphones className="h-6 w-6 mr-4 text-amber-400" />
//          </div>
//
//          <div>Support</div>
//        </Link>
//      </AccordionContent>
//    </AccordionItem>
//
//    <AccordionItem className=" border-b" value="item-4">
//      <AccordionTrigger>Company</AccordionTrigger>
//      <AccordionContent className="space-y-2">
//        <Link
//          href={"/team-alignment"}
//          className="flex"
//          onClick={handleLinkClick}
//        >
//          <div>
//            <UserPlus className="h-6 w-6 mr-4 text-orange-400" />
//          </div>
//          <div>Team alignment</div>
//        </Link>
//        <Link
//          href={"/sales"}
//          className="flex"
//          onClick={handleLinkClick}
//        >
//          <div>
//            <DollarSign className="h-6 w-6 mr-4 text-green-400" />
//          </div>
//
//          <div>Sales</div>
//        </Link>
//        <Link
//          href={"/engineering"}
//          className="flex"
//          onClick={handleLinkClick}
//        >
//          <div>
//            <Code className="h-6 w-6 mr-4 text-indigo-400" />
//          </div>
//
//          <div>Engineering</div>
//        </Link>
//        <Link
//          href={"/design"}
//          className="flex"
//          onClick={handleLinkClick}
//        >
//          <div>
//            <PaintBucket className="h-6 w-6 mr-4 text-blue-400" />
//          </div>
//
//          <div>Design</div>
//        </Link>
//        <Link
//          href={"/marketing"}
//          className="flex "
//          onClick={handleLinkClick}
//        >
//          <div>
//            <BarChart className="h-6 w-6 mr-4 text-rose-400" />
//          </div>
//
//          <div>Marketing</div>
//        </Link>
//        <Link
//          href={"/product-management"}
//          className="flex"
//          onClick={handleLinkClick}
//        >
//          <div>
//            <Settings className="h-6 w-6 mr-4 text-grey-400" />
//          </div>
//
//          <div>Product Management</div>
//        </Link>
//        <Link
//          href={"/support"}
//          className="flex "
//          onClick={handleLinkClick}
//        >
//          <div>
//            <Headphones className="h-6 w-6 mr-4 text-amber-400" />
//          </div>
//
//          <div>Support</div>
//        </Link>
//      </AccordionContent>
//    </AccordionItem>
//
//    <Link
//      href={"/pricing"}
//      className="
//        flex
//        flex-1
//        items-center
//        justify-between
//
//
//        py-4
//
//        border-b
//        "
//    >
//      Pricing
//
//    </Link>
//
