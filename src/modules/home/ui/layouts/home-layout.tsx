import { SidebarProvider } from "@/components/ui/sidebar"
import { HomeNavbar } from "@/modules/home/ui/components/home-navbar"

interface HomeLayoutPage {
    children: React.ReactNode
}

export const HomeLayout = ({ children }: HomeLayoutPage) => {
    return (
        <SidebarProvider className=" ">
            <div className=" w-full ">
                <HomeNavbar />
                <div className="">
                    {children}
                </div>
            </div>
        </SidebarProvider>
    )
}

