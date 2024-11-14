import { Search } from "lucide-react"
import { Label } from "@/components/ui/label"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar"
import { Button } from "../ui/button"
export function SearchForm({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          {/* <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="Search the docs..."
            className="pl-8 focus-visible:ring-0 focus:border-input cursor-pointer"
          /> */}
          <Button variant={'outline'} className="pl-8 bg-accent text-gray-500 hover:text-gray-800">Search the docs...</Button> 
          <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
        </SidebarGroupContent>
      </SidebarGroup>
  )
}