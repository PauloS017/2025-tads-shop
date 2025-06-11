"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  Package,
  Tags,
  ListFilter,
  Scale,
  ShoppingCart,
  ClipboardList,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";

import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Cadastro",
      url: "#",
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "Produto",
          url: "/cadastro/produtos",
          icon: Package,
        },
        {
          title: "Marca",
          url: "/cadastro/marcas",
          icon: Tags,
        },
        {
          title: "Grupo",
          url: "/cadastro/grupos-produto",
          icon: ListFilter,
        },
        {
          title: "Unidade de Medida",
          url: "/cadastro/unidades-medida",
          icon: Scale,
        },
      ],
    },
    {
      title: "Movimentação",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Venda",
          url: "/movimentacao/venda",
          icon: ShoppingCart,
        },
        {
          title: "Pedido de Venda",
          url: "/movimentacao/pedido-venda",
          icon: ClipboardList,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            {/* <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton> */}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
