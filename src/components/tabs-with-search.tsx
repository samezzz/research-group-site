import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
  <div className="flex justify-between items-center mb-6">
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-[400px]">
      <TabsList>
        <TabsTrigger value="publications">Publications</TabsTrigger>
        <TabsTrigger value="presentations">Presentations</TabsTrigger>
      </TabsList>
    </Tabs>
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
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

