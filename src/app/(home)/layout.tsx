import {HomeLayout} from "@/modules/home/ui/layouts/home-layout"

interface LayoutPage {
    children: React.ReactNode
}

const Layout = ({children} : LayoutPage) => {
  return (
    <HomeLayout>
        <div>{children}</div>
    </HomeLayout>
  )
}

export default Layout