import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  SidebarGroup,
  SidebarGroupContent
} from "@/components/ui/sidebar";
import classNames from "classnames";
import { Search } from "lucide-react";
export function SearchForm({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SidebarGroup className="py-0 w-full p-0">
          <SidebarGroupContent className={classNames("relative w-full", props.className)}>
            <div className="hidden md:block w-full max-w-[400px]">
              <Button variant={'outline'} className="pl-8 bg-accent text-gray-500 hover:text-gray-800 w-full justify-start">Search the docs...</Button>
              <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
            </div>
            <div className="md:hidden">
              <Search className="cursor-pointer" />
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're
            done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

  )
}