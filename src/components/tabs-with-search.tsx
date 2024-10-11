import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

interface TabsWithSearchProps {
  activeTab: string
  onTabChange: (tab: string) => void
  searchTerm: string
  onSearchTermChange: (term: string) => void
}

const TabsWithSearch: React.FC<TabsWithSearchProps> = ({
  activeTab,
  onTabChange,
  searchTerm,
  onSearchTermChange,
}) => (
  <div className="mb-6 flex items-center justify-between">
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-[400px]">
      <TabsList>
        <TabsTrigger value="publications">Publications</TabsTrigger>
        <TabsTrigger value="presentations">Presentations</TabsTrigger>
      </TabsList>
    </Tabs>
    <div className="relative">
      <Search className="absolute left-2 top-2.5 size-4 text-muted-foreground" />
      <Input
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
        className="pl-8"
      />
    </div>
  </div>
)

export default TabsWithSearch

